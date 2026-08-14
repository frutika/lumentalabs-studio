'use client';

import { usePathname } from 'next/navigation';
import { LOCALES, DEFAULT_LOCALE, localePath, getDict } from '../../content';

/** Strips any locale prefix so the switcher can offer the same page elsewhere. */
function bare(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && LOCALES.includes(parts[0]) && parts[0] !== DEFAULT_LOCALE) parts.shift();
  return '/' + parts.join('/');
}

export default function LangSwitch({ lang }) {
  const path = bare(usePathname() || '/');
  const d = getDict(lang);

  return (
    // Was a <span aria-label>. aria-label on a generic element is ignored by
    // most screen readers, so the group had no name at all.
    <nav className="langs" aria-label={d.a11y.langNav}>
      {LOCALES.map((l) => {
        const dict = getDict(l);
        const current = l === lang;
        return (
          // Plain anchors on purpose: switching language crosses between root
          // layouts, and a client-side transition would keep the old <html lang>.
          <a
            key={l}
            className={`lang${current ? ' on' : ''}`}
            href={localePath(l, path)}
            hrefLang={dict.htmlLang}
            lang={dict.htmlLang}
            // "page" is the specific token; bare "true" only says "something
            // here is current" without saying what.
            aria-current={current ? 'page' : undefined}
          >
            <abbr title={dict.label}>{l.toUpperCase()}</abbr>
          </a>
        );
      })}
    </nav>
  );
}
