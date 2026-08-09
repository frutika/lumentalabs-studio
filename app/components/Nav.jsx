import Link from 'next/link';
import LangSwitch from './LangSwitch';
import { site } from '../../site.config';
import { getDict, localePath } from '../../content';

export default function Nav({ lang }) {
  const d = getDict(lang);
  const p = (to) => localePath(lang, to);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href={p('/')}>
          <span className="dot" aria-hidden="true" />
          {site.name}
        </Link>
        <div className="nav-links">
          <Link className="link" href={p('/services')}>{d.nav.services}</Link>
          <Link className="link" href={p('/work')}>{d.nav.work}</Link>
          <Link className="link" href={p('/contact')}>{d.nav.contact}</Link>
          <LangSwitch lang={lang} />
        </div>
      </div>
    </nav>
  );
}
