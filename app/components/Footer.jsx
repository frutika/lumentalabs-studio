import Link from 'next/link';
import { site } from '../../site.config';
import { getDict, localePath } from '../../content';

export default function Footer({ lang }) {
  const d = getDict(lang);
  const p = (to) => localePath(lang, to);

  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="foot-links">
          <Link href={p('/services')}>{d.nav.services}</Link>
          <Link href={p('/work')}>{d.nav.work}</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
      {/* The legal pages are English-only for now, so they are always linked at
          the root rather than under a language prefix that does not exist. */}
      <div className="wrap foot-legal">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/cookies">Cookies</a>
        <a href="/cookies/manage">Manage cookies</a>
      </div>
    </footer>
  );
}
