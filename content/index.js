import en from './en';
import hr from './hr';
import de from './de';
import { site } from '../site.config';
import blogPosts from './blog';
import { VODICI, vodicBySlug } from './vodici';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'hr', 'de'];

const dicts = { en, hr, de };

export const getDict = (lang) => dicts[lang] || en;
export const isLocale = (lang) => LOCALES.includes(lang);

/**
 * Not every page exists in every language. The legal pages are English-only, so
 * both the hreflang cluster and the language switcher have to narrow to what
 * actually got built — otherwise they advertise URLs that 404, and x-default
 * points at a page that isn't there.
 *
 * Keyed by the unprefixed path, which is what both callers already work with.
 */
const ROUTE_LOCALES = {
  '/vodici': ['hr'],
  '/privacy': ['en'],
  '/terms': ['en'],
  '/cookies': ['en'],
  '/cookies/manage': ['en'],
};

/**
 * Languages a given page is actually published in. Defaults to all of them.
 *
 * The blog is answered from the posts themselves rather than listed here, so a
 * new post needs no edit in this file. The two levels answer differently on
 * purpose:
 *
 * - An index lists whatever exists in its own language, so /blog and /hr/blog
 *   really are the same page in two languages and pair up as alternates.
 * - A post does not. Each one is written for one audience and published only in
 *   that language, so it declares its own language and nothing else — claiming
 *   an alternate that is a different article, not a translation, is the one
 *   thing hreflang must never say.
 */
export const localesFor = (path = '/') => {
  if (path === '/blog') return blogLocales();
  if (path.startsWith('/blog/')) {
    const post = postFor(path.slice('/blog/'.length));
    return [post?.lang || DEFAULT_LOCALE];
  }
  // The guides are Croatian, matched by prefix so a new one needs no edit here.
  if (path.startsWith('/vodici/')) return ['hr'];
  return ROUTE_LOCALES[path] || LOCALES;
};

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
 * Every post, newest first, regardless of language. For the sitemap, which
 * lists each post once at the URL its own language puts it at.
 */
export function allPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * The posts published in one language, newest first. A post declares its own
 * `lang` and appears in that index only: the English write-ups are postmortems
 * for a developer audience, the Croatian ones are about how the studio sells,
 * and mixing them would give both readers a list half of which is not for them.
 */
export function postsFor(lang) {
  return allPosts().filter((post) => (post.lang || DEFAULT_LOCALE) === lang);
}

/** Languages with at least one post, in LOCALES order so x-default is stable. */
export function blogLocales() {
  return LOCALES.filter((l) => postsFor(l).length);
}

export function postFor(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

/** The language a post is published in — its own, or English if it says none. */
export const postLang = (post) => post?.lang || DEFAULT_LOCALE;

/** The work case study a post references, if any — for the "see also" link. */
export function relatedWorkFor(lang, post) {
  return post.relatedWork ? workFor(lang, post.relatedWork) : null;
}

/**
 * The film for one language, or null. Deliberately no fallback: a page that
 * cannot offer the reel in its own language shows no reel section at all.
 */
export function reelFor(lang) {
  const r = site.reels?.[lang];
  return r?.id ? r : null;
}

/**
 * The guides. Croatian only, so there is no per-language variant to resolve —
 * unlike the services, whose slug differs per language.
 */
export function vodiciFor() {
  return VODICI;
}

export function vodicFor(slug) {
  return vodicBySlug(slug);
}

export function servicesFor(lang) {
  return getDict(lang).services.map((s, i) => ({ ...s, num: String(i + 1).padStart(2, '0') }));
}

/**
 * The service detail pages. `gets` and `notFor` are merged in from the
 * problem-framed copy where it exists (hr, de) rather than duplicated into
 * serviceDetails — two copies of the same sentence is two places to forget.
 * English has no `problems` block, so those entries carry the lists directly.
 */
export function serviceDetailsFor(lang) {
  const d = getDict(lang);
  const problems = d.servicesPage?.problems || [];
  const t = d.serviceDetailPage;
  return (d.serviceDetails || []).map((detail) => {
    const problem = problems.find((p) => p.slug === detail.slug) || {};
    const faq = [...(detail.faq || [])];

    // "Koliko košta X?" is the question the market actually types, and the
    // answer has to carry the figure — a FAQ that says "depends on scope" is
    // what every competitor already has. Generated from the bands rather than
    // written twice, so the page and the answer can never disagree. Only the
    // price and the band name go in: the body and examples belong on the page,
    // where there is room for them, and would make this answer unreadable.
    if (detail.pricing?.bands?.length && detail.pricing.q) {
      faq.push({
        q: detail.pricing.q,
        a: `${detail.pricing.bands
          .map((b) => `${b.price} — ${b.name.charAt(0).toLowerCase()}${b.name.slice(1)}`)
          .join('; ')}. ${t.vatNote}`,
      });
    }

    return {
      ...detail,
      faq,
      gets: detail.gets || problem.gets || [],
      notFor: detail.notFor || problem.notFor || '',
    };
  });
}

/** Looks a page up by the slug that appears in the URL, in that language. */
export function serviceDetailFor(lang, path) {
  return serviceDetailsFor(lang).find((s) => s.path === path);
}

/** Looks the same service up by its language-independent key. */
export function serviceDetailByKey(lang, slug) {
  return serviceDetailsFor(lang).find((s) => s.slug === slug);
}

/**
 * Unprefixed path to one service page in one language. The slug is localised —
 * a Croatian buyer searches "izrada web aplikacija", not "web-application-
 * development" — so the same page has a different URL per language and every
 * caller has to go through here rather than concatenating a shared slug.
 */
export function serviceDetailPath(lang, slug) {
  const item = serviceDetailByKey(lang, slug);
  return item ? `/services/${item.path}` : null;
}

/** { locale: path } for one service, for the hreflang cluster and sitemap. */
export function serviceDetailPaths(slug) {
  return Object.fromEntries(
    LOCALES.map((l) => [l, serviceDetailPath(l, slug)]).filter(([, path]) => path)
  );
}

/**
 * The same page in another language. Paths are identical across languages
 * everywhere except the service pages, so this is where that exception lives:
 * without it the language switcher would offer a Croatian slug under /de and
 * link straight into a 404.
 */
export function translatePath(fromLang, toLang, path) {
  const match = /^\/services\/(.+)$/.exec(path);
  if (match) {
    const item = serviceDetailFor(fromLang, match[1]);
    if (item) return serviceDetailPath(toLang, item.slug) || path;
  }
  return path;
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
export function metaFor(lang, path, { title, description, ogType = 'website', paths } = {}) {
  const d = getDict(lang);
  const url = urlFor(lang, path);

  // `paths` is for pages whose slug is localised (the service pages): the
  // cluster then spans three different URLs rather than one path under three
  // prefixes. Everything else still goes through localesFor.
  const published = paths ? LOCALES.filter((l) => paths[l]) : localesFor(path);
  const pathIn = (l) => (paths ? paths[l] : path);

  const languages = Object.fromEntries(
    published.map((l) => [dicts[l].htmlLang, urlFor(l, pathIn(l))])
  );
  // Tells search engines which version to show when no language matches. On a
  // page that skips English there is no English URL to point at, so it falls
  // back to the one language that does exist.
  const fallback = published.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : published[0];
  languages['x-default'] = urlFor(fallback, pathIn(fallback));

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
export function enOnlyMeta(path, title, description, { ogType = 'article' } = {}) {
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
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${site.name}`,
      description,
      images: ['/media/hero.jpg'],
    },
  };
}
