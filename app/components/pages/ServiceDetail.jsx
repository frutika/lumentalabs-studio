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

      {/* Prose sections, between the pitch and the price. A service page that
          only asserts is a brochure; these are where the argument actually
          gets made, which is also what the query rewards. */}
      {item.sections?.map((section) => (
        <section key={section.h2}>
          <div className="wrap detail">
            <div className="detail-side"><h2>{section.h2}</h2></div>
            <div className="detail-body">
              {section.paragraphs.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}

              {section.table ? (
                <div className="table-wrap">
                  <table className="figures compare">
                    <thead>
                      <tr>
                        {section.table.head.map((h) => <th key={h} scope="col">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {/* First cell is the row's label, so it is a header
                              too — otherwise a screen reader reads three bare
                              numbers with nothing tying them together. */}
                          <th scope="row">{row[0]}</th>
                          {row.slice(1).map((cell) => <td key={cell}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.note ? <p className="not-for">{section.note}</p> : null}

              {/* Sources, where a section makes a claim a visitor may want to
                  check. Plain anchors: they leave the site. */}
              {section.sources?.length ? (
                <p className="sources">
                  {t.sourcesLabel}:{' '}
                  {section.sources.map((src, i) => (
                    <span key={src.href}>
                      {i > 0 ? ' · ' : ''}
                      <a href={src.href} target="_blank" rel="noopener noreferrer">
                        {src.text} <span aria-hidden="true">↗</span>
                        <span className="sr"> ({d.a11y.newTab})</span>
                      </a>
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {item.pricing?.bands?.length ? (
        <section id="cijena">
          <div className="wrap detail">
            <div className="detail-side"><h2>{t.pricingH2}</h2></div>
            <div className="detail-body">
              {/* A band used to be a price and three words, which said nothing
                  to someone who does not already know the vocabulary. Each one
                  now carries what it is, what it looks like, and where the line
                  to the next band runs — the explanation belongs here, on the
                  page that ranks for the query, not on a second page competing
                  with it. */}
              {item.pricing.bands.map((band) => (
                <div key={band.name} className="band">
                  <p className="detail-sub">
                    <strong>{band.price}</strong> — {band.name}
                  </p>
                  <p>{band.body}</p>
                  {band.examples?.length ? (
                    <ul className="ticks">
                      {band.examples.map((ex) => <li key={ex}>{ex}</li>)}
                    </ul>
                  ) : null}
                  {band.boundary ? <p className="not-for">{band.boundary}</p> : null}
                  {/* Where to go instead, on a band whose boundary turns
                      somebody away. A plain anchor: it leaves the site. */}
                  {band.selfServe ? (
                    <p className="self-serve">
                      {band.selfServe.text}{' '}
                      <a href={band.selfServe.href} target="_blank" rel="noopener noreferrer">
                        {band.selfServe.cta} <span aria-hidden="true">↗</span>
                        <span className="sr"> ({d.a11y.newTab})</span>
                      </a>
                    </p>
                  ) : null}
                </div>
              ))}
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
