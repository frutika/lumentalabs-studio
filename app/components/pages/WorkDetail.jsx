import Link from 'next/link';
import JsonLd from '../JsonLd';
import ClosingCta from '../ClosingCta';
import TileArt from '../home/TileArt';
import { PageTitle } from '../text';
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

      <header className="page-head split">
        <div className="wrap">
          <div className="head-copy">
            <p className="eyebrow">
              <Link href={p('/work')}>{d.workPage.eyebrow}</Link> · {item.kind}
            </p>
            <PageTitle text={item.title || item.name} />
            <p className="lede">{item.short}</p>
            {item.href ? (
              <a className="btn ghost no-offset" href={item.href} target="_blank" rel="noopener noreferrer">
                {d.workPage.visit} {item.name} <span aria-hidden="true">↗</span>
                <span className="sr"> ({d.a11y.newTab})</span>
              </a>
            ) : null}
          </div>
          {/* The same drawing as the product's tile, larger: decorative. */}
          <div className="head-art" aria-hidden="true">
            <TileArt slug={slug} sample={d.home.tileSample} />
            <span className={`status${item.href ? '' : ' internal'}`}>{item.kind}</span>
          </div>
        </div>
      </header>

      {item.shot ? (
        <section>
          <div className="wrap">
            {/* The real product as it is live today, in a plain browser frame
                whose address bar names the domain the button above opens. */}
            <figure className="shot">
              <div className="shot-bar" aria-hidden="true">
                <span className="shot-dots"><i /><i /><i /></span>
                <span className="shot-url">{item.href.replace(/^https?:\/\//, '')}</span>
              </div>
              <img
                src={`/media/work/${item.shot}.webp`}
                alt={d.workPage.shotAlt.replace('{name}', item.name)}
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>
      ) : null}

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

      {item.result ? (
        <section>
          <div className="wrap detail">
            <div className="detail-side"><h2>{d.workPage.result}</h2></div>
            <div className="detail-body">
              <ul className="ticks">
                {item.result.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{d.workPage.lesson}</h2></div>
          <div className="detail-body"><p>{item.lesson}</p></div>
        </div>
      </section>

      <ClosingCta title={item.closingH2 || d.workPage.closingH2} lede={item.closingLede || d.workPage.closingLede}>
        <Link className="btn" href={p('/contact')}>{d.workPage.closingCta} <span aria-hidden="true">→</span></Link>
        {item.closingLink ? (
          <Link className="btn ghost" href={p(item.closingLink.path)}>{item.closingLink.label}</Link>
        ) : null}
        <Link className="btn ghost" href={p('/work')}>{d.workPage.allWork}</Link>
      </ClosingCta>
    </>
  );
}
