import Link from 'next/link';
import LangSwitch from './LangSwitch';
import Image from 'next/image';
import { site } from '../../site.config';
import { getDict, localePath } from '../../content';

export default function Nav({ lang }) {
  const d = getDict(lang);
  const p = (to) => localePath(lang, to);

  return (
    // Two navigation landmarks share this header (main + language), so both
    // carry a label; an unlabelled pair is indistinguishable in a landmark list.
    <nav className="nav" aria-label={d.a11y.mainNav}>
      <div className="wrap nav-inner">
        <Link className="brand" href={p('/')}>
          <Image className="brand-mark" src="/media/logo-mark.svg" alt="" width={28} height={28} priority unoptimized />
          {site.name}
        </Link>
        <div className="nav-links">
          <Link className="link" href={p('/services')}>{d.nav.services}</Link>
          <Link className="link" href={p('/work')}>{d.nav.work}</Link>
          {/* A section of the home page, reachable from every page. */}
          <Link className="link" href={`${p('/')}#how`}>{d.home.howH2}</Link>
          {/* Same gate as before — no `nav.blog` key in a dictionary means no
              link in that language (German has no posts). */}
          {d.nav.blog ? <Link className="link" href={p('/blog')}>{d.nav.blog}</Link> : null}
          {/* The optional chain is the gate: no vodici block in a dictionary
              means no link in that language. */}
          {d.vodici?.href ? (
            <Link className="link" href={p(d.vodici.href)}>{d.nav.vodici}</Link>
          ) : null}
        </div>
        <div className="nav-actions">
          <LangSwitch lang={lang} />
          {/* Replaces the old "Contact" text link: same destination, now the
              one call to action in the header. */}
          <Link className="btn-light" href={p('/contact')}>{d.home.ctaPrimary}</Link>
        </div>
      </div>
    </nav>
  );
}
