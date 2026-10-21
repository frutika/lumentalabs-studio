import Link from 'next/link';
import JsonLd from '../JsonLd';
import ClosingCta from '../ClosingCta';
import { PageTitle } from '../text';
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
          <PageTitle text={t.h1} />
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

      <ClosingCta title={t.closingH2} lede={t.closingLede}>
        <Link className="btn" href={p('/contact')}>{t.closingCta} <span aria-hidden="true">→</span></Link>
      </ClosingCta>
    </>
  );
}
