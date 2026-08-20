'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Same key CookiePreferences reads and writes, so a choice made here and a
// choice made on /cookies/manage are the same choice, not two.
const KEY = 'll-consent';

/**
 * Only rendered by the layouts when analytics.enabled is true, so it stays
 * completely absent while the site has nothing to ask consent for — see
 * /cookies "Why there is no consent banner".
 */
export default function CookieBanner({ providerName }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(KEY) === null);
    } catch {
      // Storage blocked: nowhere to record a choice, so don't ask for one.
    }
  }, []);

  function choose(allowAnalytics) {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ analytics: allowAnalytics, at: new Date().toISOString() })
      );
    } catch {
      /* storage blocked - the choice simply does not persist */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <div className="wrap cookie-banner-inner">
        <p>
          We&apos;d like to use {providerName || 'an analytics tool'} to count visits. It only runs
          if you allow it — declining changes nothing else about the site.{' '}
          <Link href="/cookies" hrefLang="en">Read more</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="btn ghost no-offset" onClick={() => choose(false)}>
            Decline
          </button>
          <button type="button" className="btn" onClick={() => choose(true)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
