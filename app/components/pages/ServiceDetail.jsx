import Link from 'next/link';
import JsonLd from '../JsonLd';
import {
  getDict,
  localePath,
  serviceDetailFor,
  serviceDetailsFor,
  serviceDetailPath,
} from '../../../content';
import { serviceSchema, faqSchema, breadcrumbSchema } from '../../../content/schema';

export default function ServiceDetail({ lang, slug }) {
  const d = getDict(lang);
  const t = d.serviceDetailPage;
  const item = serviceDetailFor(lang, slug);
  const p = (path) => localePath(lang, path);
  const path = `/services/${item.path}`;

  // The other services, so a page that turns out to be the wrong one still
  // leads somewhere rather than back to the browser's back button.
  const others = serviceDetailsFor(lang).filter((s) => s.slug !== item.slug);

  return (
    <>
      <JsonLd data={serviceSchema(lang, item, path)} />
      <JsonLd data={breadcrumbSchema(lang, [
        { name: d.servicesPage.eyebrow, path: '/services' },
        { name: item.h1, path },
      ])} />
      {item.faq?.length ? <JsonLd data={faqSchema(lang, path, item.faq)} /> : null}

      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href={p('/services')}>{d.servicesPage.eyebrow}</Link> · {t.eyebrow}
          </p>
          {/* The H1 is the query, spelled the way somebody types it. Everything
              else on the page can be brand voice; this line cannot. */}
          <h1 className="page-title">{item.h1}</h1>
          <p className="lede">{item.lede}</p>
          <Link className="btn" href={p('/contact')}>{t.closingCta}</Link>
        </div>
      </header>

      <section>
        <div className="wrap detail">
          <div className="detail-body">
            {item.intro.map((para) => (
              <p key={para.slice(0, 30)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {item.gets?.length ? (
        <section>
          <div className="wrap detail">
            <div className="detail-side"><h2>{t.getsH2}</h2></div>
            <div className="detail-body">
              <ul className="ticks">
                {item.gets.map((g) => <li key={g}>{g}</li>)}
              </ul>
              {item.notFor ? (
                <p className="not-for">
                  <strong>{t.notForH2}:</strong> {item.notFor}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {item.pricing?.bands?.length ? (
        <section id="cijena">
          <div className="wrap detail">
            <div className="detail-side"><h2>{t.pricingH2}</h2></div>
            <div className="detail-body">
              {/* The number is the point of this section, so it is text on the
                  page rather than something a visitor has to ask for. */}
              <ul className="ticks">
                {item.pricing.bands.map(([label, value]) => (
                  <li key={label}><strong>{value}</strong> — {label}</li>
                ))}
              </ul>
              <p className="not-for">{t.vatNote}</p>
            </div>
          </div>
        </section>
      ) : null}

      {item.faq?.length ? (
        <section>
          <div className="wrap detail">
            <div className="detail-side"><h2>{t.faqH2}</h2></div>
            <div className="detail-body">
              {item.faq.map((q) => (
                <div key={q.q}>
                  <p className="detail-sub">{q.q}</p>
                  <p>{q.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <div className="wrap">
          <h2>{t.closingH2}</h2>
          <p className="section-lede">{t.closingLede}</p>
          <Link className="btn" href={p('/contact')}>{t.closingCta}</Link>
        </div>
      </section>

      {others.length ? (
        <section>
          <div className="wrap">
            <h2>{t.otherH2}</h2>
            <ul className="ticks">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={p(serviceDetailPath(lang, s.slug))}>{s.h1}</Link>
                </li>
              ))}
            </ul>
            <p><Link href={p('/services')}>{t.allServices}</Link></p>
          </div>
        </section>
      ) : null}
    </>
  );
}
