import Link from 'next/link';
import { getDict, localePath, worksFor } from '../../../content';

export default function WorkPage({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{d.workPage.eyebrow}</p>
          <h1 className="page-title">{d.workPage.h1}</h1>
          <p className="lede">{d.workPage.lede}</p>
        </div>
      </header>

      <section>
        <div className="wrap">
          {/* h2, not h3: on this page the cards sit directly under the h1, with
              no section heading between them. h3 skipped a level. On the home
              page the same cards are h3 because a real h2 introduces them. */}
          <div className="grid">
            {worksFor(lang).map((w) => (
              <Link className="card linked" key={w.slug} href={p(`/work/${w.slug}`)}>
                <span className="num">{w.kind}</span>
                <h2 className="card-title">{w.name}</h2>
                <p>{w.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
