import Link from 'next/link';
import ClosingCta from '../ClosingCta';
import ServiceVisual from '../home/ServiceVisual';
import { PageTitle } from '../text';
import { getDict, localePath, servicesFor, serviceDetailPath } from '../../../content';

export default function ServicesPage({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);
  // The problem-framed rewrite exists in hr/de only for now; en falls back to
  // the older service-list copy rather than 404ing on a missing key.
  const problems = d.servicesPage.problems;
  const items = problems
    ? problems.map((item, i) => ({ ...item, num: String(i + 1).padStart(2, '0'), body: item.paragraphs }))
    : servicesFor(lang);

  // Video has its own page already; the rest got one in this change. Either
  // way the section links to it — a section with no outbound link is a section
  // search engines can only read as part of this page, never rank on its own.
  const deeperHref = (slug) =>
    slug === 'video' ? '/services/video' : serviceDetailPath(lang, slug);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{d.servicesPage.eyebrow}</p>
          <PageTitle text={d.servicesPage.h1} />
          <p className="lede">{d.servicesPage.lede}</p>
          {/* An index of the page, Linear-style: five jumps, one per section. */}
          <nav className="jump" aria-label={d.servicesPage.eyebrow}>
            {items.map((item) => (
              <a key={item.slug} href={`#${item.slug}`}>
                <span className="jump-num">{item.num}</span>{item.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {items.map((item) => (
        <section id={item.slug} key={item.slug} className="svc-detail">
          <div className="wrap svc-detail-grid">
            <div className="svc-detail-side">
              <span className="svc-detail-num" aria-hidden="true">{item.num}</span>
              <h2>{item.title}</h2>
              <ServiceVisual slug={item.slug} ui={d.home.serviceUi} />
              {deeperHref(item.slug) ? (
                <Link className="btn ghost no-offset" href={p(deeperHref(item.slug))}>
                  {d.servicesPage.deeper}
                </Link>
              ) : null}
            </div>
            <div className="detail-body">
              {item.body.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
              {item.gets ? (
                <>
                  <p className="detail-sub">{d.servicesPage.gets}</p>
                  <ul className="ticks">
                    {item.gets.map((g) => <li key={g}>{g}</li>)}
                  </ul>
                </>
              ) : null}
              {item.notFor ? (
                <p className="not-for"><strong>{d.servicesPage.notFor}</strong> {item.notFor}</p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <ClosingCta title={d.servicesPage.closingH2} lede={d.servicesPage.closingLede}>
        <Link className="btn" href={p('/contact')}>{d.servicesPage.closingCta} <span aria-hidden="true">→</span></Link>
      </ClosingCta>
    </>
  );
}
