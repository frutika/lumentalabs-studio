import { Fragment } from 'react';
import Link from 'next/link';
import JsonLd from '../JsonLd';
import { PageTitle } from '../text';
import { site, legal } from '../../../site.config';
import { breadcrumbSchema } from '../../../content/schema';

/**
 * A page of plain statements: headings, paragraphs, lists and small tables,
 * read from content/legal.js. Used by the security page and by the translated
 * privacy notice, which say things a reader will hold us to — so the layout is
 * the legal pages' own, with nothing decorative between the reader and the text.
 */

const TOKENS = {
  entity: legal.entity,
  address: legal.address,
  oib: legal.oib,
  domain: site.domain,
  founder: site.founder,
};

// [text](href) links and the {email} token; everything else is plain text.
const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\{email\}/g;

function Rich({ text }) {
  const filled = text.replace(/\{(\w+)\}/g, (whole, key) => TOKENS[key] ?? whole);
  const out = [];
  let last = 0;
  for (const m of filled.matchAll(INLINE)) {
    if (m.index > last) out.push(filled.slice(last, m.index));
    if (m[0] === '{email}') {
      out.push(<a key={m.index} href={`mailto:${site.email}`}>{site.email}</a>);
    } else if (m[2].startsWith('/')) {
      out.push(<Link key={m.index} href={m[2]}>{m[1]}</Link>);
    } else {
      out.push(<a key={m.index} href={m[2]} target="_blank" rel="noopener noreferrer">{m[1]}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < filled.length) out.push(filled.slice(last));
  return out;
}

const Paragraphs = ({ items = [] }) => items.map((text, i) => <p key={i}><Rich text={text} /></p>);

export default function DocPage({ lang, path, doc, updated }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, [{ name: doc.meta.title, path }])} />
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{doc.eyebrow}</p>
          <PageTitle text={doc.h1} />
          <p className="lede">{doc.lede}</p>
          <p className="stamp">{doc.updatedLabel} {updated}</p>
        </div>
      </header>

      <section>
        <div className="wrap prose">
          {doc.sections.map((s) => (
            <Fragment key={s.h2}>
              <h2 id={s.id}>{s.h2}</h2>
              <Paragraphs items={s.paragraphs} />
              {s.list ? (
                <ul>
                  {s.list.map((item, i) => <li key={i}><Rich text={item} /></li>)}
                </ul>
              ) : null}
              {s.table ? (
                <div className="table-wrap">
                  <table className="figures">
                    <thead>
                      <tr>{s.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map(([first, ...rest]) => (
                        <tr key={first}>
                          <th scope="row">{first}</th>
                          {rest.map((cell, i) => <td key={i}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              <Paragraphs items={s.after} />
            </Fragment>
          ))}

          <p className="see-also">
            {doc.seeAlso.map(([label, href], i) => (
              <span key={href}>
                {i ? ' · ' : null}
                <Link href={href}>{label}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
