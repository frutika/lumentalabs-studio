import Link from 'next/link';
import { getDict, localePath, servicesFor } from '../../../content';

export default function ServicesPage({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{d.servicesPage.eyebrow}</p>
          <h1 className="page-title">{d.servicesPage.h1}</h1>
          <p className="lede">{d.servicesPage.lede}</p>
        </div>
      </header>

      {servicesFor(lang).map((s) => (
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
