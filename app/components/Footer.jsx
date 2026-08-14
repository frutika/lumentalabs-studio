import Link from 'next/link';
import { site } from '../../site.config';
import { getDict, localePath } from '../../content';

export default function Footer({ lang }) {
  const d = getDict(lang);
  const p = (to) => localePath(lang, to);

  return (
    <footer>
      <div className="wrap foot-inner">
        {/* A build-time year on a statically prerendered page freezes at the
            deploy date. suppressHydrationWarning lets the client correct it. */}
        <span suppressHydrationWarning>© {new Date().getFullYear()} {site.name}</span>
        <nav className="foot-links" aria-label={d.a11y.footerNav}>
          <Link href={p('/services')}>{d.nav.services}</Link>
          <Link href={p('/work')}>{d.nav.work}</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
      </div>
      {/* The legal pages are English-only for now, so they are always linked at
          the root rather than under a language prefix that does not exist. */}
      <nav className="wrap foot-legal" aria-label={d.a11y.legalNav}>
        <Link href="/privacy" hrefLang="en">Privacy</Link>
        <Link href="/terms" hrefLang="en">Terms</Link>
        <Link href="/cookies" hrefLang="en">Cookies</Link>
        <Link href="/cookies/manage" hrefLang="en">Manage cookies</Link>
      </nav>
    </footer>
  );
}
