import Link from 'next/link';
import { site } from '../../../site.config';
import { getDict, localePath } from '../../../content';

export default function VideoPage({ lang }) {
  const d = getDict(lang);
  const v = d.videoPage;
  const p = (path) => localePath(lang, path);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href={p('/services')}>{v.eyebrow}</Link> · 04
          </p>
          <h1 className="page-title">{v.h1}</h1>
          <p className="lede">{v.lede}</p>
          <Link className="btn no-offset" href={p('/contact')}>{v.cta}</Link>
        </div>
      </header>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{v.gapH2}</h2></div>
          <div className="detail-body">
            {v.gapP.map((para) => <p key={para.slice(0, 30)}>{para}</p>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{v.howH2}</h2>
          <p className="section-lede">{v.howLede}</p>
          <div className="grid">
            {v.steps.map(([title, body], i) => (
              <article className="card" key={title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="quote">
            {v.quote[0]}<em>{v.quote[1]}</em>{v.quote[2]}
          </p>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{v.capsH2}</h2></div>
          <div className="detail-body">
            {v.capsP.map((para) => <p key={para.slice(0, 30)}>{para}</p>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{v.getH2}</h2></div>
          <div className="detail-body">
            <ul className="ticks">
              {v.get.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{v.closingH2}</h2>
          <p className="section-lede">{v.closingLede}</p>
          <Link className="btn" href={p('/contact')}>{d.servicesPage.closingCta}</Link>
          <Link className="btn ghost" href={`mailto:${site.email}`}>{site.email}</Link>
        </div>
      </section>
    </>
  );
}
