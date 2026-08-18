import { PAKET_IDS } from '../../../content/paketi';

export const runtime = 'nodejs';

/**
 * Supabase over plain fetch. The JS client would be a fourth dependency for one
 * INSERT, and this file is the only thing in the project that talks to a
 * database at all.
 */
const TABLE = 'contact_requests';

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

const hasConfig = () =>
  Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);

/**
 * Reports whether the route can reach its database, without revealing either
 * value. Deploys where the environment did not carry over are otherwise only
 * visible by submitting the form and reading the server log.
 */
export async function GET() {
  return Response.json({ ok: true, supabase: hasConfig() ? 'configured' : 'missing' });
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
  const paket = PAKET_IDS.includes(body.paket) ? body.paket : null;
  const locale = ['hr', 'en', 'de'].includes(body.locale) ? body.locale : 'en';

  if (ime.length < 2 || ime.length > 120) return fail('invalid_name', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return fail('invalid_email', 400);
  }
  if (poruka.length > 4000) return fail('message_too_long', 400);

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    const missing = [!url && 'SUPABASE_URL', !key && 'SUPABASE_SERVICE_ROLE_KEY']
      .filter(Boolean)
      .join(', ');
    console.error(
      `[contact] not configured: ${missing} missing from the environment. ` +
        'Set it on the host and restart the process — these are read at request time.'
    );
    return fail('not_configured', 503);
  }

  let res;
  try {
    res = await fetch(`${url}/rest/v1/${TABLE}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        // Without this PostgREST returns the inserted row; we do not need it back.
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        ime,
        email,
        poruka: poruka || null,
        paket,
        locale,
        user_agent: request.headers.get('user-agent')?.slice(0, 400) ?? null,
      }),
    });
  } catch (err) {
    // DNS, TLS, timeout — the request never reached PostgREST at all.
    console.error('[contact] unreachable: could not connect to Supabase.', err);
    return fail('save_failed', 502);
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error(`[contact] rejected: PostgREST answered ${res.status}. ${detail}`);
    return fail('save_failed', 502);
  }

  lastSeen.set(ip, now);

  // The enquiry is already stored, so a failed notification must not fail the
  // request — it would tell the visitor to send again for no reason.
  if (process.env.RESEND_API_KEY) {
    try {
      const notifyRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Lumenta Labs <web@lumentalabs.studio>',
          to: ['hello@lumentalabs.studio'],
          reply_to: email,
          subject: paket ? `Upit: ${paket} — ${ime}` : `Upit — ${ime}`,
          text: [`Ime: ${ime}`, `E-mail: ${email}`, `Paket: ${paket ?? '—'}`, `Jezik: ${locale}`, '', poruka || '(bez poruke)'].join('\n'),
        }),
      });
      if (!notifyRes.ok) {
        // Resend answers 2xx/4xx over plain HTTP, so a rejected key or an
        // unverified sending domain never throws — only a status check catches it.
        const detail = await notifyRes.text().catch(() => '');
        console.error(`[contact] notification rejected: Resend answered ${notifyRes.status}. ${detail}`);
      }
    } catch (err) {
      console.error('[contact] notification not sent', err);
    }
  }

  return Response.json({ ok: true });
}
