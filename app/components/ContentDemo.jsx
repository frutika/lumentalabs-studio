'use client';

import { useEffect, useState } from 'react';

// The e-commerce service's demo: pick a product and a language, see what
// Lumenta AI wrote for it. Every output is a real generation stored in
// content/demo.js, so the demo costs nothing per visit and cannot be abused;
// the "generating" beat is only there so a switch reads as a new result.
const LANGS = [
  ['english', 'EN'],
  ['croatian', 'HR'],
  ['german', 'DE'],
];
// Each page opens on its own language's output.
const PAGE_LANG = { en: 'english', hr: 'croatian', de: 'german' };

export default function ContentDemo({ lang, demo, t }) {
  const [productId, setProductId] = useState(demo.products[0].id);
  const [language, setLanguage] = useState(PAGE_LANG[lang] || 'english');
  const [busy, setBusy] = useState(false);

  const product = demo.products.find((p) => p.id === productId);
  const out = product.outputs[language];

  // Short enough not to annoy, long enough to register as a fresh result.
  useEffect(() => {
    if (!busy) return undefined;
    const id = setTimeout(() => setBusy(false), 700);
    return () => clearTimeout(id);
  }, [busy]);

  const pick = (setter) => (value) => {
    setter(value);
    setBusy(true);
  };

  return (
    <div className="demo">
      <div className="demo-in">
        <p className="demo-label">{t.input}</p>
        <div className="demo-chips" role="group" aria-label={t.product}>
          {demo.products.map((p) => (
            <button
              key={p.id}
              type="button"
              className="demo-chip"
              aria-pressed={p.id === productId}
              onClick={() => pick(setProductId)(p.id)}
            >
              {t.products[p.id]}
            </button>
          ))}
        </div>
        <dl className="demo-fields">
          <dt>{t.name}</dt><dd>{product.product_name}</dd>
          <dt>{t.category}</dt><dd>{product.product_category}</dd>
          <dt>{t.features}</dt><dd>{product.product_features}</dd>
          <dt>{t.tone}</dt><dd>{t.tones[product.tone]}</dd>
        </dl>
        <div className="demo-langs" role="group" aria-label={t.language}>
          {LANGS.map(([key, code]) => (
            <button
              key={key}
              type="button"
              className="demo-chip"
              aria-pressed={key === language}
              onClick={() => pick(setLanguage)(key)}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-out" aria-live="polite" aria-busy={busy}>
        <p className="demo-label">{t.output}</p>
        {busy ? (
          <div className="demo-busy" role="status">
            <span className="shimmer">{t.generating}</span>
          </div>
        ) : (
          <div className="demo-result" key={`${productId}-${language}`}>
            <h3>{out.product_title}</h3>
            <p>{out.short_description}</p>
            <ul className="ticks">
              {out.key_benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p className="demo-meta">
              <span>{t.meta}</span> {out.seo_meta_description}
            </p>
          </div>
        )}
        <p className="demo-note">{t.note.replace('{date}', demo.generated)}</p>
      </div>
    </div>
  );
}
