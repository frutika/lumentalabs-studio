import './globals.css';
import Link from 'next/link';
import { site } from '../site.config';
import { getDict, DEFAULT_LOCALE } from '../content';

const d = getDict(DEFAULT_LOCALE);

/**
 * The document Next renders for a URL that matches no route group. Because each
 * language owns its own <html>, there is no root layout to fall back on, so
 * without this file every unknown address returned Next's built-in page: no
 * lang attribute, no landmark, no navigation, and the title
 * "404: This page could not be found."
 *
 * Requires experimental.globalNotFound in next.config.js on 16.3.
 */
export const metadata = {
  metadataBase: new URL(site.url),
  title: `${d.notFound.title} — ${site.name}`,
  robots: { index: false, follow: true },
};

export const viewport = { themeColor: '#05080c' };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main id="main">
          <header className="page-head">
            <div className="wrap">
              <p className="eyebrow">{d.notFound.eyebrow}</p>
              <h1 className="page-title">{d.notFound.h1}</h1>
              <p className="lede">{d.notFound.lede}</p>
              <Link className="btn no-offset" href="/">{d.notFound.home}</Link>
              <Link className="btn ghost" href="/work">{d.notFound.work}</Link>
            </div>
          </header>
        </main>
      </body>
    </html>
  );
}
