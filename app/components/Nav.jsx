import Link from 'next/link';
import Image from 'next/image';
import LangSwitch from './LangSwitch';
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
          {/* English-only, same gate pattern as the AI booster below — no
              `nav.blog` key in a dictionary means no link in that language. */}
          {d.nav.blog ? <Link className="link" href={p('/blog')}>{d.nav.blog}</Link> : null}
          {/* Now a page on this domain. The optional chain is still the gate:
              no vodici block in a dictionary means no link in that language. */}
          {d.vodici?.href ? (
            <Link className="link" href={p(d.vodici.href)}>{d.nav.vodici}</Link>
          ) : null}
          <Link className="link" href={p('/contact')}>{d.nav.contact}</Link>
          <LangSwitch lang={lang} />
        </div>
      </div>
    </nav>
  );
}
