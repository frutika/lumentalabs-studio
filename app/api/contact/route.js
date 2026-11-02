export const runtime = 'nodejs';

/**
 * An enquiry is delivered as one email through Resend, over plain fetch, to
 * hello@lumentalabs.studio. There is no database: the form used to write to a
 * Supabase Free project that kept getting paused for inactivity, and a paused
 * project would have made the form fail silently. The inbox is the record.
 */
const TO = 'hello@lumentalabs.studio';
const FROM = 'Lumenta Labs <web@lumentalabs.studio>';

/**
 * One submission per IP per interval. The site runs as a long-lived Node
 * process, so this Map survives between requests — on serverless it would not,
 * and this would need Redis.
 */
const lastSeen = new Map();
const INTERVAL_MS = 30_000;

function rateLimited(ip, now) {
  for (const [key, at] of lastSeen) {
    if (now - at > INTERVAL_MS * 10) lastSeen.delete(key);
  }
  const previous = lastSeen.get(ip);
  return previous !== undefined && now - previous < INTERVAL_MS;
}

/**
 * The response carries a stable code, not a sentence. The visitor reads the
 * form's own language and the log reads the cause — the first version returned
 * Croatian prose to German visitors and used one identical string for "the
 * server has no credentials" and "the database refused the row", which cost an
 * afternoon of guessing.
 */
const fail = (code, status) => Response.json({ error: code }, { status });

function cleanSource(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const out = {};
  for (const key of ['prva', 'prethodna', 'vanjski']) {
    if (typeof raw[key] === 'string' && raw[key].trim()) out[key] = raw[key].trim().slice(0, 300);
  }
  return Object.keys(out).length ? out : null;
}

const hasConfig = () => Boolean(process.env.RESEND_API_KEY);

/**
 * Reports whether the route can send, without revealing the key. Deploys where
 * the environment did not carry over are otherwise only visible by submitting
 * the form and reading the server log.
 */
export async function GET() {
  return Response.json({ ok: true, resend: hasConfig() ? 'configured' : 'missing' });
}

export async function POST(request) {
  const now = Date.now();
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

  if (rateLimited(ip, now)) return fail('rate_limited', 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return fail('bad_request', 400);
  }

  // Honeypot. A bot that fills the hidden field gets 200 so it learns nothing.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return Response.json({ ok: true });
  }

  const ime = String(body.ime ?? '').trim();
  const email = String(body.email ?? '').trim();
  const poruka = String(body.poruka ?? '').trim();
  const locale = ['hr', 'en', 'de'].includes(body.locale) ? body.locale : 'en';

  if (ime.length < 2 || ime.length > 120) return fail('invalid_name', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return fail('invalid_email', 400);
  }
  if (poruka.length > 4000) return fail('message_too_long', 400);

  // Where the visitor came from (see components/visitSourceStore.js). Optional
  // and never a reason to refuse an enquiry: anything malformed becomes null.
  const izvor = cleanSource(body.izvor);

  const key = process.env.RESEND_API_KEY;

  if (!key) {
    console.error(
      '[contact] not configured: RESEND_API_KEY missing from the environment. ' +
        'Set it on the host and restart the process.'
    );
    return fail('not_configured', 503);
  }

  const userAgent = request.headers.get('user-agent')?.slice(0, 400) ?? '—';

  let res;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Upit — ${ime}`,
        text: [
          `Ime: ${ime}`,
          `E-mail: ${email}`,
          `Jezik: ${locale}`,
          `Došao s: ${izvor?.vanjski || 'izravno / nepoznato'}`,
          `Prva stranica: ${izvor?.prva || '—'}`,
          `Prije kontakta: ${izvor?.prethodna || '—'}`,
          `Preglednik: ${userAgent}`,
          '',
          poruka || '(bez poruke)',
        ].join('\n'),
      }),
    });
  } catch (err) {
    // DNS, TLS, timeout — the request never reached Resend at all.
    console.error('[contact] unreachable: could not connect to Resend.', err);
    return fail('send_failed', 502);
  }

  if (!res.ok) {
    // Resend answers 4xx over plain HTTP for a rejected key or an unverified
    // sending domain, so only a status check catches it. With no database
    // behind it, the visitor must be told to try again or the enquiry is lost.
    const detail = await res.text().catch(() => '');
    console.error(`[contact] rejected: Resend answered ${res.status}. ${detail}`);
    return fail('send_failed', 502);
  }

  lastSeen.set(ip, now);
  return Response.json({ ok: true });
}
