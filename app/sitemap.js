import { contentUpdated } from '../site.config';
import {
  LOCALES,
  DEFAULT_LOCALE,
  urlFor,
  worksFor,
  allPosts,
  postsFor,
  postLang,
  serviceDetailsFor,
  serviceDetailPaths,
  localesFor,
  vodiciFor,
} from '../content';

// Marketing pages exist in every language.
const TRANSLATED = ['/', '/services', '/services/video', '/work', '/contact'];

// Pages published in one language only, listed once and without alternates.
// Driven by localesFor rather than a hardcoded language: the legal pages are
// English today, but a list that assumes English silently drops anything
// published in one of the other two.
const SINGLE_LOCALE = [
  // The guides are the one Croatian-only branch that is meant to be entered
  // from search, so they sit with the service pages rather than with the legal
  // ones. Detail pages are added from the content below.
  { path: '/vodici', priority: 0.7 },
  ...vodiciFor().map((g) => ({ path: `/vodici/${g.slug}`, priority: 0.8 })),

  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/cookies', priority: 0.3 },
  { path: '/cookies/manage', priority: 0.3 },
];

/**
 * lastmod for one entry, or nothing at all.
 *
 * Spreading the result means an unlisted page ships with no <lastmod> rather
 * than with the time of the build. That is the whole point: a date we cannot
 * vouch for is worse than no date, because Google stops trusting the ones we
 * can.
 */
const lastmod = (key) => (contentUpdated[key] ? { lastModified: contentUpdated[key] } : {});

export default function sitemap() {
  const paths = [...TRANSLATED, ...worksFor(DEFAULT_LOCALE).map((w) => `/work/${w.slug}`)];

  const translated = paths.flatMap((path) =>
    LOCALES.map((lang) => ({
      // urlFor, not string concatenation: the root would otherwise be listed as
      // ".../" while rel=canonical says "..." with no slash, and a sitemap that
      // disagrees with the canonical is a sitemap arguing with itself.
      url: urlFor(lang, path),
      ...lastmod(path),
      changeFrequency: path === '/' ? 'monthly' : 'yearly',
      priority: path === '/' ? 1 : 0.7,
      // Telling search engines about every language version of this page is what
      // stops them treating the translations as thin duplicates.
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, urlFor(l, path)])),
          // Same x-default the pages themselves declare. Without it here the
          // sitemap and the <head> describe two different hreflang clusters.
          'x-default': urlFor(DEFAULT_LOCALE, path),
        },
      },
    }))
  );

  const single = SINGLE_LOCALE.flatMap(({ path, priority }) =>
    localesFor(path).map((lang) => ({
      url: urlFor(lang, path),
      ...lastmod(path),
      changeFrequency: 'yearly',
      priority,
    }))
  );

  // The service pages carry a different slug in each language, so they cannot
  // ride the loop above — that one assumes one path under three prefixes. The
  // date is keyed by the service, not the slug, for the same reason.
  const services = serviceDetailsFor(DEFAULT_LOCALE).flatMap((service) => {
    const paths = serviceDetailPaths(service.slug);
    const languages = {
      ...Object.fromEntries(Object.entries(paths).map(([l, path]) => [l, urlFor(l, path)])),
      'x-default': urlFor(DEFAULT_LOCALE, paths[DEFAULT_LOCALE]),
    };
    return Object.entries(paths).map(([lang, path]) => ({
      url: urlFor(lang, path),
      ...lastmod(service.slug),
      changeFrequency: 'yearly',
      // Above the other inner pages: these are the pages meant to be entered
      // from search, not passed through on the way somewhere else.
      priority: 0.8,
      alternates: { languages },
    }));
  });

  // The blog was already honest: a post's date is a real publication date, and
  // an index takes its own newest post's — not the site's, which would date the
  // Croatian index off an English post it does not list.
  //
  // One index per language, paired as alternates; the posts stand alone, each
  // at the URL its own language puts it at. Both facts come from localesFor, so
  // the sitemap and the pages cannot drift apart.
  const blogIndexes = localesFor('/blog');
  const indexLanguages = {
    ...Object.fromEntries(blogIndexes.map((l) => [l, urlFor(l, '/blog')])),
    'x-default': urlFor(
      blogIndexes.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : blogIndexes[0],
      '/blog'
    ),
  };

  const blog = [
    ...blogIndexes.map((lang) => {
      const newest = postsFor(lang)[0];
      return {
        url: urlFor(lang, '/blog'),
        ...(newest ? { lastModified: newest.date } : {}),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: { languages: indexLanguages },
      };
    }),
    ...allPosts().map((post) => ({
      url: urlFor(postLang(post), `/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ];

  return [...translated, ...services, ...single, ...blog];
}
