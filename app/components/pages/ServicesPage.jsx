import Link from 'next/link';
import { getDict, localePath, servicesFor } from '../../../content';

export default function ServicesPage({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);
  // The problem-framed rewrite exists in hr/de only for now; en falls back to
  // the older service-list copy rather than 404ing on a missing key.
  const problems = d.servicesPage.problems;

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{d.servicesPage.eyebrow}</p>
          <h1 className="page-title">{d.servicesPage.h1}</h1>
          <p className="lede">{d.servicesPage.lede}</p>
        </div>
      </header>

      {problems ? problems.map((item, i) => (
        <section id={item.slug} key={item.slug}>
          <div className="wrap detail">
            <div className="detail-side">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h2>{item.title}</h2>
            </div>
            <div className="detail-body">
              {item.paragraphs.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
              {item.slug === 'video' ? (
                <p>
                  <Link href={p('/services/video')}>{d.servicesPage.deeper}</Link>
                </p>
              ) : null}
              <p className="detail-sub">{d.servicesPage.gets}</p>
              <ul className="ticks">
                {item.gets.map((g) => <li key={g}>{g}</li>)}
              </ul>
              <p className="not-for"><strong>{d.servicesPage.notFor}</strong> {item.notFor}</p>
            </div>
          </div>
        </section>
      )) : servicesFor(lang).map((s) => (
        <section id={s.slug} key={s.slug}>
          <div className="wrap detail">
            <div className="detail-side">
              <span className="num">{s.num}</span>
              <h2>{s.title}</h2>
            </div>
            <div className="detail-body">
              {s.body.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
              {s.slug === 'video' ? (
                <p>
                  <Link href={p('/services/video')}>{d.servicesPage.deeper}</Link>
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="wrap">
          <h2>{d.servicesPage.closingH2}</h2>
          <p className="section-lede">{d.servicesPage.closingLede}</p>
          <Link className="btn" href={p('/contact')}>{d.servicesPage.closingCta}</Link>
        </div>
      </section>
    </>
  );
}
