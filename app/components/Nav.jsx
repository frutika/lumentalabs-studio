import Link from 'next/link';
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
          <span className="dot" aria-hidden="true" />
          {site.name}
        </Link>
        <div className="nav-links">
          <Link className="link" href={p('/services')}>{d.nav.services}</Link>
          <Link className="link" href={p('/work')}>{d.nav.work}</Link>
          {/* Different domain, so a plain anchor. The optional chain is the gate:
              no vodici block in a dictionary means no link in that language. */}
          {d.vodici?.href ? (
            <a className="link" href={d.vodici.href} rel="noopener">{d.nav.vodici}</a>
          ) : null}
          <Link className="link" href={p('/contact')}>{d.nav.contact}</Link>
          <LangSwitch lang={lang} />
        </div>
      </div>
    </nav>
  );
}
