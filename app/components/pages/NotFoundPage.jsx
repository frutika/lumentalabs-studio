import Link from 'next/link';
import { PageTitle } from '../text';
import { getDict, localePath } from '../../../content';

/**
 * A 404 that keeps the site's own shell. Next's built-in one ships no layout,
 * no navigation and the bare title "404: This page could not be found." — so a
 * crawler or an audit that happens to land on a dead URL sees a page with none
 * of this site's structure on it.
 */
export default function NotFoundPage({ lang }) {
  const d = getDict(lang);
  const p = (to) => localePath(lang, to);

  return (
    <header className="page-head">
      <div className="wrap">
        <p className="eyebrow">{d.notFound.eyebrow}</p>
        <PageTitle text={d.notFound.h1} />
        <p className="lede">{d.notFound.lede}</p>
        <div className="btn-row">
          <Link className="btn" href={p('/')}>{d.notFound.home}</Link>
          <Link className="btn ghost" href={p('/work')}>{d.notFound.work}</Link>
        </div>
      </div>
    </header>
  );
}
