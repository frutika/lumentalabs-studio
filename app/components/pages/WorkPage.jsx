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
          <div className="grid">
            {worksFor(lang).map((w) => (
              <Link className="card linked" key={w.slug} href={p(`/work/${w.slug}`)}>
                <span className="num">{w.kind}</span>
                <h3>{w.name}</h3>
                <p>{w.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
