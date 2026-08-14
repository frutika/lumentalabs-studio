'use client';

import { useEffect, useState } from 'react';

const KEY = 'll-consent';

// Rather than assert that nothing is stored, this reads the browser and shows
// what it actually finds. If the claim on the cookies page ever stops being
// true, this panel says so instead of quietly lying.
function inspect() {
  const cookies = document.cookie ? document.cookie.split(';').map((c) => c.trim().split('=')[0]) : [];
  const local = Object.keys(localStorage);
  const session = Object.keys(sessionStorage);
  return { cookies, local, session };
}

export default function CookiePreferences({ analyticsEnabled, providerName }) {
  const [found, setFound] = useState(null);
  const [allowAnalytics, setAllowAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFound(inspect());
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setAllowAnalytics(JSON.parse(stored).analytics === true);
    } catch {
      /* corrupt or unavailable - treat as no consent */
    }
  }, []);

  function save(next) {
    setAllowAnalytics(next);
    try {
      // Written only when you actually choose something, so visitors who never
      // touch this page keep a completely empty browser.
      localStorage.setItem(KEY, JSON.stringify({ analytics: next, at: new Date().toISOString() }));
      setSaved(true);
      setTimeout(() => setSaved(false), 1800);
      setFound(inspect());
    } catch {
      /* storage blocked - the choice simply does not persist */
    }
  }

  function clearAll() {
    try {
      localStorage.removeItem(KEY);
      setAllowAnalytics(false);
      setFound(inspect());
    } catch {
      /* nothing to clear */
    }
  }

  const nothingStored =
    found && found.cookies.length === 0 && found.local.length === 0 && found.session.length === 0;

  return (
    <>
      <div className="pref">
        <div className="pref-row">
          <div>
            <strong>Strictly necessary</strong>
            <span>
              Needed for the site to work at all. Cannot be switched off — but on this site the
              category is currently empty.
            </span>
          </div>
          <span className="tag">Always on</span>
        </div>

        <div className="pref-row">
          <div>
            <strong>Analytics</strong>
            <span>
              {analyticsEnabled
                ? `Counts visits using ${providerName || 'our measurement tool'}. Off until you turn it on.`
                : 'Not in use. There is no measurement tool installed on this site.'}
            </span>
          </div>
          {analyticsEnabled ? (
            <button
              type="button"
              className={`toggle${allowAnalytics ? ' on' : ''}`}
              role="switch"
              aria-checked={allowAnalytics}
              onClick={() => save(!allowAnalytics)}
            >
              <span className="knob" aria-hidden="true" />
              <span className="sr">{allowAnalytics ? 'Turn analytics off' : 'Turn analytics on'}</span>
            </button>
          ) : (
            <span className="tag muted-tag">Not in use</span>
          )}
        </div>
      </div>

      {saved ? <p className="stamp">Preference saved.</p> : null}

      <div className="pref-check">
        <h2>What is on your device right now</h2>
        {found === null ? (
          <p className="muted-line">Checking…</p>
        ) : nothingStored ? (
          <p className="muted-line">
            Nothing. No cookies, no local storage, no session storage from {typeof window !== 'undefined' ? window.location.hostname : 'this site'}.
          </p>
        ) : (
          <ul className="ticks">
            {found.cookies.map((c) => <li key={`c-${c}`}>Cookie: {c}</li>)}
            {found.local.map((k) => <li key={`l-${k}`}>Local storage: {k}</li>)}
            {found.session.map((k) => <li key={`s-${k}`}>Session storage: {k}</li>)}
          </ul>
        )}
        {found && !nothingStored ? (
          <button type="button" className="btn ghost no-offset" onClick={clearAll}>
            Clear the preference this page stored
          </button>
        ) : null}
      </div>
    </>
  );
}
