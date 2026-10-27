import Link from 'next/link';
import Image from 'next/image';
import { site, legal } from '../../site.config';
import { getDict, localePath } from '../../content';
import PageWeight from './PageWeight';

export default function Footer({ lang }) {
  const d = getDict(lang);
  const f = d.footer;
  const p = (to) => localePath(lang, to);

  return (
    <footer>
      <div className="wrap foot-main">
        <div className="foot-brand">
          <Link className="brand" href={p('/')}>
            <Image className="brand-mark" src="/media/logo-mark.svg" alt="" width={24} height={24} unoptimized />
            {site.name}
          </Link>
          <p>{f.tagline}</p>
        </div>
        <nav className="foot-cols" aria-label={d.a11y.footerNav}>
          <div className="foot-col">
            <p className="label">{f.studio}</p>
            <Link href={p('/services')}>{d.nav.services}</Link>
            <Link href={p('/work')}>{d.nav.work}</Link>
            <Link href={`${p('/')}#how`}>{d.home.howH2}</Link>
          </div>
          <div className="foot-col">
            <p className="label">{f.resources}</p>
            {d.nav.blog ? <Link href={p('/blog')}>{d.nav.blog}</Link> : null}
            {/* The guides exist in Croatian only, so every language links the
                one Croatian page and says so. A plain anchor, like the language
                switcher: it can cross into another root layout, and a client
                transition would keep the old <html lang>. */}
            <a href={localePath('hr', '/vodici')} hrefLang="hr">{f.guides}</a>
          </div>
          <div className="foot-col">
            <p className="label">{f.contact}</p>
            <Link href={p('/contact')}>{d.nav.contact}</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </nav>
      </div>
      {/* The legal pages are English-only for now, so they are always linked at
          the root rather than under a language prefix that does not exist. */}
      <div className="wrap">
        <nav className="foot-legal" aria-label={d.a11y.legalNav}>
          {/* German visitors look for the word Impressum before they trust a
              site. The operator details it stands for already live in /terms. */}
          {lang === 'de' ? <Link href="/terms#operator" hrefLang="en">Impressum</Link> : null}
          <Link href="/privacy" hrefLang="en">Privacy</Link>
          <Link href="/terms" hrefLang="en">Terms</Link>
          <Link href="/cookies" hrefLang="en">Cookies</Link>
          <Link href="/cookies/manage" hrefLang="en">Manage cookies</Link>
        </nav>
        {/* Zakon o elektroničkoj trgovini: who runs the site, where, and the
            registry entry, readable from every page. */}
        <p className="foot-identity">
          {legal.entity}, {legal.address} · OIB {legal.oib} · MBO {legal.mbo}
        </p>
      </div>
      {/* The name, set large and fading into the page. Decorative: the brand
          link above already says it. */}
      <div className="wrap foot-giant" aria-hidden="true">{site.name.split(' ')[0]}</div>
      <div className="wrap foot-bar">
        {/* A build-time year on a statically prerendered page freezes at the
            deploy date. suppressHydrationWarning lets the client correct it. */}
        <span suppressHydrationWarning>© {new Date().getFullYear()} {site.name}</span>
        <span className="foot-meta">
          <PageWeight template={f.weight} locale={d.htmlLang} />
          <span className="foot-status"><span className="status-dot" aria-hidden="true" />{f.status}</span>
        </span>
      </div>
    </footer>
  );
}
