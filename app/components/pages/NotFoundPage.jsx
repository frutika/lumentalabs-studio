import Link from 'next/link';
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
        <h1 className="page-title">{d.notFound.h1}</h1>
        <p className="lede">{d.notFound.lede}</p>
        <Link className="btn no-offset" href={p('/')}>{d.notFound.home}</Link>
        <Link className="btn ghost" href={p('/work')}>{d.notFound.work}</Link>
      </div>
    </header>
  );
}
