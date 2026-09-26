import Link from 'next/link';
import { getDict, localePath } from '../../content';

/**
 * Points at the guides, which now live on this domain. The section renders only
 * where the dictionary has a `vodici` block with an href - so it is absent on
 * /en and /de without a single language check.
 */
export default function VodiciCTA({ lang }) {
  const v = getDict(lang).vodici;

  if (!v?.href) return null;

  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">{v.eyebrow}</p>
        <h2>{v.h2}</h2>
        <p className="section-lede">{v.lede}</p>

        <ul className="ticks wide" style={{ marginBottom: '2.2rem' }}>
          {v.items.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <Link className="btn" href={localePath(lang, v.href)}>{v.cta}</Link>

        <p className="stamp" style={{ marginTop: '1.6rem' }}>{v.note}</p>
      </div>
    </section>
  );
}
