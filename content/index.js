import en from './en';
import hr from './hr';
import de from './de';
import { site } from '../site.config';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'hr', 'de'];

const dicts = { en, hr, de };

export const getDict = (lang) => dicts[lang] || en;
export const isLocale = (lang) => LOCALES.includes(lang);

/**
 * Not every page exists in every language. The legal pages are English-only and
 * the booster is a Croatian-only offer, so both the hreflang cluster and the
 * language switcher have to narrow to what actually got built — otherwise they
 * advertise URLs that 404, and x-default points at a page that isn't there.
 *
 * Keyed by the unprefixed path, which is what both callers already work with.
 */
const ROUTE_LOCALES = {
  '/ai-content-booster': ['hr'],
  '/privacy': ['en'],
  '/terms': ['en'],
  '/cookies': ['en'],
  '/cookies/manage': ['en'],
};

/** Languages a given page is actually published in. Defaults to all of them. */
export const localesFor = (path = '/') => ROUTE_LOCALES[path] || LOCALES;

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

/**
 * The film for one language, or null. Deliberately no fallback: a page that
 * cannot offer the reel in its own language shows no reel section at all.
 */
export function reelFor(lang) {
  const r = site.reels?.[lang];
  return r?.id ? r : null;
}

export function servicesFor(lang) {
  return getDict(lang).services.map((s, i) => ({ ...s, num: String(i + 1).padStart(2, '0') }));
}

/** The full <title> for a page that does not set one of its own. */
export const siteTitleFor = (lang) => getDict(lang).meta.siteTitle;

/**
 * Absolute URL for a path in one language. The root is returned without a
 * trailing slash so structured data and rel=canonical name the same string;
 * two spellings of the home page is exactly the kind of thing that gets read
 * as two pages.
 */
export const urlFor = (lang, path = '/') => {
  const p = localePath(lang, path);
  return p === '/' ? site.url : `${site.url}${p}`;
};

/**
 * Metadata for one page in one language, including the full hreflang set and a
 * social card that matches the page rather than the site root.
 */
export function metaFor(lang, path, { title, description, ogType = 'website' } = {}) {
  const d = getDict(lang);
  const url = urlFor(lang, path);

  const published = localesFor(path);

  const languages = Object.fromEntries(
    published.map((l) => [dicts[l].htmlLang, urlFor(l, path)])
  );
  // Tells search engines which version to show when no language matches. On a
  // page that skips English there is no English URL to point at, so it falls
  // back to the one language that does exist.
  const fallback = published.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : published[0];
  languages['x-default'] = urlFor(fallback, path);

  const desc = description || d.meta.siteDescription;

  const meta = {
    description: desc,
    alternates: { canonical: url, languages },
    openGraph: {
      // The layout applies "%s — Lumenta Labs" to the tab title; Open Graph has
      // no template, so the finished string is built here. Otherwise every page
      // shares the home page's card, which is what used to happen.
      title: title ? `${title} — ${site.name}` : d.meta.siteTitle,
      description: desc,
      url,
      siteName: site.name,
      images: ['/media/hero.jpg'],
      locale: d.meta.ogLocale,
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} — ${site.name}` : d.meta.siteTitle,
      description: desc,
      images: ['/media/hero.jpg'],
    },
  };

  // Only set `title` when there is one. Next treats an explicitly present
  // `title: undefined` as a value and it wipes out the layout's title.default —
  // which is exactly how the three home pages ended up with no <title> at all.
  if (title) meta.title = title;

  return meta;
}

/**
 * The legal pages exist in English only, so they get no hreflang cluster — but
 * they still need their own social card. Without this they inherited the
 * layout's, which pointed every one of them at the home page.
 */
export function enOnlyMeta(path, title, description) {
  const d = getDict(DEFAULT_LOCALE);
  const url = urlFor(DEFAULT_LOCALE, path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      images: ['/media/hero.jpg'],
      locale: d.meta.ogLocale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${site.name}`,
      description,
      images: ['/media/hero.jpg'],
    },
  };
}
