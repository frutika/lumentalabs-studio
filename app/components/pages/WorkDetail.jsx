import Link from 'next/link';
import JsonLd from '../JsonLd';
import { getDict, localePath, workFor } from '../../../content';
import { breadcrumbSchema } from '../../../content/schema';

export default function WorkDetail({ lang, slug }) {
  const d = getDict(lang);
  const item = workFor(lang, slug);
  const p = (path) => localePath(lang, path);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(lang, [
          { name: d.workPage.eyebrow, path: '/work' },
          { name: item.name, path: `/work/${slug}` },
        ])}
      />

      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href={p('/work')}>{d.workPage.eyebrow}</Link> · {item.kind}
          </p>
          <h1 className="page-title">{item.name}</h1>
          <p className="lede">{item.short}</p>
          {item.href ? (
            <a className="btn ghost no-offset" href={item.href} target="_blank" rel="noopener noreferrer">
              {d.workPage.visit} {item.name} <span aria-hidden="true">↗</span>
              <span className="sr"> ({d.a11y.newTab})</span>
            </a>
          ) : null}
        </div>
      </header>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{d.workPage.problem}</h2></div>
          <div className="detail-body"><p>{item.problem}</p></div>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{d.workPage.built}</h2></div>
          <div className="detail-body">
            <ul className="ticks">
              {item.built.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{d.workPage.lesson}</h2></div>
          <div className="detail-body"><p>{item.lesson}</p></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{d.workPage.closingH2}</h2>
          <p className="section-lede">{d.workPage.closingLede}</p>
          <Link className="btn" href={p('/contact')}>{d.workPage.closingCta}</Link>
          <Link className="btn ghost" href={p('/work')}>{d.workPage.allWork}</Link>
        </div>
      </section>
    </>
  );
}
