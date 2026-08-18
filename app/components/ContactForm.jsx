'use client';

import { useEffect, useState } from 'react';
import { site } from '../../site.config';
import { getDict } from '../../content';
import { paketById, formatPrice } from '../../content/paketi';

/** mailto: bodies over roughly 1800 characters get truncated or dropped by some
    clients, so the fallback link stays well under that. */
const MAILTO_BODY_LIMIT = 1500;

/**
 * The package arrives as ?paket= from the Booster page. It is read after mount
 * rather than with useSearchParams, which would force a Suspense boundary and
 * leave the form out of the prerendered HTML entirely - the heading would ship
 * with nothing under it until the JS landed.
 *
 * The cost is that the "selected package" line appears on hydration rather than
 * in the static markup. The form itself is always there.
 */
export default function ContactForm({ lang }) {
  const d = getDict(lang);
  const f = d.contactPage.form;

  const [paket, setPaket] = useState(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('paket');
    // An unknown ?paket= value is ignored rather than shown back to the visitor.
    setPaket(paketById(id) ?? null);
  }, []);

  const [state, setState] = useState('idle'); // idle | sending | ok | failed
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function mailtoHref() {
    const subject = paket ? `${f.subject} — ${paket.name} (${formatPrice(paket.price)})` : f.subject;
    const body = [
      name && `${f.name}: ${name}`,
      email && `${f.email}: ${email}`,
      paket && `${f.selected}: ${paket.name} — ${formatPrice(paket.price)}`,
      message && `\n${message}`,
    ]
      .filter(Boolean)
      .join('\n')
      .slice(0, MAILTO_BODY_LIMIT);

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function submit(e) {
    e.preventDefault();
    setState('sending');
    setError('');

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale: lang }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        // The route answers with a code; anything unrecognised (a proxy error
        // page, an old deploy) falls back to the generic sentence.
        throw new Error(f.errors[payload?.error] || f.failed);
      }

      setState('ok');
    } catch (err) {
      setState('failed');
      setError(err.message || f.failed);
    }
  }

  if (state === 'ok') {
    return (
      <div className="card form-done" role="status">
        <strong>{f.okTitle}</strong>
        <p>{f.okBody}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <input type="hidden" name="paket" value={paket ? paket.id : ''} />

      {paket && (
        <p className="form-selected">
          {f.selected}: <strong>{paket.name}</strong> — {formatPrice(paket.price)}
        </p>
      )}

      {/* Honeypot. Off-screen rather than display:none, which some bots skip. */}
      <div className="sr" aria-hidden="true">
        <label htmlFor="website">{f.honeypot}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="ime">{f.name}</label>
        <input
          id="ime"
          name="ime"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="email">{f.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="poruka">{f.message}</label>
        <span className="field-hint" id="poruka-hint">{f.messageHint}</span>
        <textarea
          id="poruka"
          name="poruka"
          rows={5}
          maxLength={4000}
          aria-describedby="poruka-hint"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {state === 'failed' && (
        <p className="notice" role="alert">
          <strong>{error}</strong>
          <a href={mailtoHref()}>{f.mailFallback}</a>
        </p>
      )}

      <button className="btn" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? f.sending : f.submit}
      </button>

      <p className="form-alt">
        <a href={mailtoHref()}>{f.mailPrefill}</a>
      </p>
    </form>
  );
}
