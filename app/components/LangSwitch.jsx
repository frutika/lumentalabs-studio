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

  return (
    <span className="langs" aria-label="Language">
      {LOCALES.map((l) => (
        // Plain anchors on purpose: switching language crosses between root
        // layouts, and a client-side transition would keep the old <html lang>.
        <a
          key={l}
          className={`lang${l === lang ? ' on' : ''}`}
          href={localePath(l, path)}
          hrefLang={getDict(l).htmlLang}
          aria-current={l === lang ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </span>
  );
}
