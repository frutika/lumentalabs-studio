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

const fail = (error, status) => Response.json({ error }, { status });

export async function POST(request) {
  const now = Date.now();
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

  if (rateLimited(ip, now)) {
    return fail('Previše pokušaja. Pričekajte pola minute.', 429);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return fail('Neispravan zahtjev.', 400);
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

  if (ime.length < 2 || ime.length > 120) return fail('Unesite ime.', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return fail('Unesite ispravnu e-mail adresu.', 400);
  }
  if (poruka.length > 4000) return fail('Poruka je predugačka.', 400);

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error('[contact] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing');
    return fail(`Spremanje nije uspjelo. Pišite nam izravno.`, 500);
  }

  const res = await fetch(`${url}/rest/v1/${TABLE}`, {
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

  if (!res.ok) {
    console.error('[contact] insert failed', res.status, await res.text().catch(() => ''));
    return fail('Spremanje nije uspjelo. Pišite nam izravno.', 500);
  }

  lastSeen.set(ip, now);

  // The enquiry is already stored, so a failed notification must not fail the
  // request — it would tell the visitor to send again for no reason.
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
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
    } catch (err) {
      console.error('[contact] notification not sent', err);
    }
  }

  return Response.json({ ok: true });
}
