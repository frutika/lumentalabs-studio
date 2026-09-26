import Link from 'next/link';
import JsonLd from '../JsonLd';
import { getDict, localePath, vodiciFor } from '../../../content';
import { breadcrumbSchema } from '../../../content/schema';

export default function VodiciPage({ lang }) {
  const d = getDict(lang);
  const t = d.vodiciPage;
  const p = (path) => localePath(lang, path);
  const guides = vodiciFor();

  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, [{ name: d.nav.vodici, path: '/vodici' }])} />

      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="page-title">{t.h1}</h1>
          <p className="lede">{t.lede}</p>
          {t.note ? <p className="stamp">{t.note}</p> : null}
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="grid">
            {guides.map((g) => (
              <Link className="card linked" key={g.slug} href={p(`/vodici/${g.slug}`)}>
                <span className="num">{g.num}</span>
                <h3>{g.h1}</h3>
                <p>{g.lede}</p>
                {/* The facts double as a scent trail: somebody scanning wants to
                    know how long this will take before they commit to reading. */}
                <p className="stamp">
                  {g.facts.map(([, value]) => value).slice(0, 2).join(' · ')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{t.closingH2}</h2>
          <p className="section-lede">{t.closingLede}</p>
          <Link className="btn" href={p('/contact')}>{t.closingCta}</Link>
        </div>
      </section>
    </>
  );
}
