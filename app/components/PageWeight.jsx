'use client';

import { useEffect, useState } from 'react';

/**
 * "This page: 182 KB · loaded in 0.41 s", measured in the visitor's own
 * browser from the Navigation and Resource Timing APIs - so the line can never
 * claim more than this visit actually got.
 *
 * Bytes are the compressed size of the document and everything it loaded up
 * to the load event (encodedBodySize, which also counts files the browser had
 * cached). Renders nothing until there is a measurement, and nothing at all in
 * a browser without the APIs.
 */
export default function PageWeight({ template, locale }) {
  const [text, setText] = useState(null);

  useEffect(() => {
    const measure = () => {
      const nav = performance.getEntriesByType?.('navigation')?.[0];
      if (!nav || !nav.loadEventEnd) return;
      const resources = performance.getEntriesByType('resource')
        .filter((r) => r.startTime <= nav.loadEventEnd);
      const bytes = [nav, ...resources].reduce((sum, r) => sum + (r.encodedBodySize || r.transferSize || 0), 0);
      if (!bytes) return;
      const kb = Math.round(bytes / 1024).toLocaleString(locale);
      const s = (nav.loadEventEnd / 1000).toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      setText(template.replace('{kb}', kb).replace('{s}', s));
    };
    if (document.readyState === 'complete') {
      // loadEventEnd is only filled in once the load handlers have returned.
      const t = setTimeout(measure, 0);
      return () => clearTimeout(t);
    }
    const onLoad = () => setTimeout(measure, 0);
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, [template, locale]);

  return text ? <span className="page-weight">{text}</span> : null;
}
