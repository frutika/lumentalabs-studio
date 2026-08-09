import en from './en';
import hr from './hr';
import de from './de';
import { site } from '../site.config';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'hr', 'de'];

const dicts = { en, hr, de };

export const getDict = (lang) => dicts[lang] || en;
export const isLocale = (lang) => LOCALES.includes(lang);

/** English lives at the root so the URLs Google already indexed stay valid. */
export function localePath(lang, path = '/') {
  const clean = path === '/' ? '' : path;
  return lang === DEFAULT_LOCALE ? clean || '/' : `/${lang}${clean}`;
}

/**
 * Product names and outbound links are brand facts, not copy - they live once
 * in site.config and get merged onto whichever language is being rendered.
 */
export function worksFor(lang) {
  const d = getDict(lang);
  return d.work.map((w) => {
    const base = site.work.find((x) => x.slug === w.slug) || {};
    return { ...w, name: base.name, href: base.href || '' };
  });
}

export function workFor(lang, slug) {
  return worksFor(lang).find((w) => w.slug === slug);
}

export function servicesFor(lang) {
  return getDict(lang).services.map((s, i) => ({ ...s, num: String(i + 1).padStart(2, '0') }));
}

/** Metadata for one page in one language, including the full hreflang set. */
export function metaFor(lang, path, { title, description } = {}) {
  const d = getDict(lang);

  const languages = Object.fromEntries(
    LOCALES.map((l) => [dicts[l].htmlLang, `${site.url}${localePath(l, path)}`])
  );
  // Tells search engines which version to show when no language matches.
  languages['x-default'] = `${site.url}${localePath(DEFAULT_LOCALE, path)}`;

  return {
    title,
    description: description || d.meta.siteDescription,
    alternates: { canonical: `${site.url}${localePath(lang, path)}`, languages },
  };
}
