import Link from 'next/link';
import JsonLd from '../JsonLd';
import {
  getDict,
  localePath,
  vodicFor,
  serviceDetailPath,
  serviceDetailByKey,
} from '../../../content';
import { breadcrumbSchema, guideSchema } from '../../../content/schema';

/** One block inside a step. See content/vodici.js for the shapes. */
function Block({ block }) {
  if (block.type === 'p') return <p>{block.text}</p>;

  if (block.type === 'list') {
    return (
      <ul className="ticks">
        {block.items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="table-wrap">
        <table className="figures">
          <thead>
            <tr>{block.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]}>
                <th scope="row">{row[0]}</th>
                {row.slice(1).map((cell, i) => <td key={`${row[0]}-${i}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === 'callout') {
    return (
      <div className="callout">
        <strong>{block.title}</strong>
        <p>{block.text}</p>
      </div>
    );
  }

  // Commands and prompts are copied by hand into n8n, so they keep their line
  // breaks and get a monospace face — pre, not p with a class.
  if (block.type === 'code') return <pre className="code"><code>{block.text}</code></pre>;

  if (block.type === 'substeps') {
    return (
      <ol className="substeps">
        {block.items.map((i) => (
          <li key={i.h}>
            <strong>{i.h}</strong>
            <span>{i.text}</span>
          </li>
        ))}
      </ol>
    );
  }

  return null;
}

export default function VodicDetail({ lang, slug }) {
  const d = getDict(lang);
  const t = d.vodicPage;
  const g = vodicFor(slug);
  const p = (path) => localePath(lang, path);
  const related = g.related ? serviceDetailByKey(lang, g.related) : null;

  return (
    <>
      <JsonLd data={guideSchema(lang, g, `/vodici/${slug}`)} />
      <JsonLd
        data={breadcrumbSchema(lang, [
          { name: d.nav.vodici, path: '/vodici' },
          { name: g.h1, path: `/vodici/${slug}` },
        ])}
      />

      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href={p('/vodici')}>{d.nav.vodici}</Link> · {t.eyebrow} {g.num}
          </p>
          <h1 className="page-title">{g.h1}</h1>
          <p className="lede">{g.lede}</p>

          <dl className="facts">
            {g.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section>
        <div className="wrap detail">
          <div className="detail-body">
            {g.intro.map((para) => <p key={para.slice(0, 30)}>{para}</p>)}
            <div className="callout">
              <strong>{g.outcome.title}</strong>
              <p>{g.outcome.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* A table of contents, because these are long and people arrive from
          search looking for one step rather than the whole guide. */}
      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>{t.contents}</h2></div>
          <div className="detail-body">
            <ol className="toc">
              {g.steps.map((step) => (
                <li key={step.num}>
                  {/* Prefixed: an id starting with a digit is not a valid CSS
                      identifier, so querySelector('#01') throws even though the
                      browser's own fragment jump works. */}
                  <a href={`#korak-${step.num}`}>{step.h}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {g.steps.map((step) => (
        <section id={`korak-${step.num}`} key={step.num}>
          <div className="wrap detail">
            <div className="detail-side">
              <span className="num">{step.num}</span>
              <h2>{step.h}</h2>
            </div>
            <div className="detail-body">
              {step.blocks.map((block, i) => (
                <Block key={`${step.num}-${i}`} block={block} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {g.mistakes ? (
        <section>
          <div className="wrap detail">
            <div className="detail-side"><h2>{g.mistakes.h2}</h2></div>
            <div className="detail-body">
              <Block block={{ type: 'table', head: g.mistakes.head, rows: g.mistakes.rows }} />
            </div>
          </div>
        </section>
      ) : null}

      {/* The PDF form still lives on the subdomain. The content no longer
          depends on it, so this is an offer rather than a gate. */}
      {d.vodici?.pdfHref ? (
        <section>
          <div className="wrap">
            <h2>{t.pdfH2}</h2>
            <p className="section-lede">{t.pdfText}</p>
            <a className="btn ghost" href={d.vodici.pdfHref} rel="noopener">
              {t.pdfCta}
            </a>
          </div>
        </section>
      ) : null}

      {related ? (
        <section>
          <div className="wrap">
            <h2>{t.relatedH2}</h2>
            <p className="section-lede">{related.lede}</p>
            <Link className="btn" href={p(serviceDetailPath(lang, g.related))}>
              {t.relatedCta}
            </Link>
          </div>
        </section>
      ) : null}

      <section>
        <div className="wrap">
          <p><Link href={p('/vodici')}>{t.allGuides}</Link></p>
        </div>
      </section>
    </>
  );
}
