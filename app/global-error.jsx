'use client';

import './globals.css';

/**
 * Replaces Next's built-in error screen, which ships an <html> with no lang
 * attribute and content outside any landmark — two accessibility failures that
 * only appear on the worst day the site has.
 */
export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body>
        <main id="main">
          <header className="page-head">
            <div className="wrap">
              <p className="eyebrow">Error</p>
              <h1 className="page-title">Something broke on our side.</h1>
              <p className="lede">
                Not your doing. Try again — and if it keeps happening, tell us at{' '}
                <a href="mailto:hello@lumentalabs.studio">hello@lumentalabs.studio</a> and we will
                go and look.
              </p>
              <button className="btn no-offset" type="button" onClick={() => reset()}>
                Try again
              </button>
              <a className="btn ghost" href="/">Go to the home page</a>
            </div>
          </header>
        </main>
      </body>
    </html>
  );
}
