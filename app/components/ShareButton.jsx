'use client';

import { useState } from 'react';

// navigator.share opens the OS share sheet where one exists (mobile browsers,
// most desktop ones now too). Where it does not, fall back to copying the
// URL — same "never depend on something the visitor might not have" approach
// as EmailAddress.jsx.
export default function ShareButton({ url, title, label, copiedLabel }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Cancelling the share sheet also rejects the promise — not an error.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // No Clipboard API and no share sheet — nothing left to fall back to.
    }
  }

  return (
    <button className="btn ghost no-offset share-btn" type="button" onClick={share}>
      <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
        <circle cx="15" cy="5" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="5" cy="10" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="15" cy="15" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="7.3" y1="8.7" x2="12.7" y2="6.3" stroke="currentColor" strokeWidth="1.6" />
        <line x1="7.3" y1="11.3" x2="12.7" y2="13.7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {copied ? copiedLabel : label}
    </button>
  );
}
