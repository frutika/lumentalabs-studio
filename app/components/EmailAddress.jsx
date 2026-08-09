'use client';

import { useState } from 'react';

// mailto: only works if the visitor has a mail client wired up. Plenty do not,
// and for them a bare mailto link looks broken. So the address is also plain
// selectable text with a copy button that never depends on the operating system.
export default function EmailAddress({ email, openLabel, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API needs permission or a secure context; fall back to select.
      const r = document.createRange();
      r.selectNodeContents(document.getElementById('email-text'));
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="email-row">
      <a className="btn no-offset" href={`mailto:${email}`}>{openLabel}</a>
      <button className="btn ghost no-offset" type="button" onClick={copy}>
        {copied ? copiedLabel : copyLabel}
      </button>
      <span className="email-plain" id="email-text">{email}</span>
    </div>
  );
}
