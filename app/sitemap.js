import { site } from '../site.config';
import {
  LOCALES,
  DEFAULT_LOCALE,
  urlFor,
  worksFor,
  allPosts,
  serviceDetailsFor,
  serviceDetailPaths,
  localesFor,
} from '../content';

// Marketing pages exist in every language.
const TRANSLATED = ['/', '/services', '/services/video', '/work', '/contact'];

// Pages published in one language only, listed once and without alternates.
// Driven by localesFor rather than a hardcoded language, because the Booster is
// Croatian and the legal pages are English — a list that assumed English left
// the Booster out of the sitemap entirely, which is how the one page on the
// site that quotes a price stayed unindexed.
const SINGLE_LOCALE = [
  { path: '/ai-content-booster', priority: 0.8 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/cookies', priority: 0.3 },
  { path: '/cookies/manage', priority: 0.3 },
];

export default function sitemap() {
  const now = new Date();
  const paths = [...TRANSLATED, ...worksFor(DEFAULT_LOCALE).map((w) => `/work/${w.slug}`)];

  const translated = paths.flatMap((path) =>
    LOCALES.map((lang) => ({
      // urlFor, not string concatenation: the root would otherwise be listed as
      // ".../" while rel=canonical says "..." with no slash, and a sitemap that
      // disagrees with the canonical is a sitemap arguing with itself.
      url: urlFor(lang, path),
      lastModified: now,
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
      lastModified: now,
      changeFrequency: 'yearly',
      priority,
    }))
  );

  // The service pages carry a different slug in each language, so they cannot
  // ride the loop above — that one assumes one path under three prefixes.
  const services = serviceDetailsFor(DEFAULT_LOCALE).flatMap((service) => {
    const paths = serviceDetailPaths(service.slug);
    const languages = {
      ...Object.fromEntries(Object.entries(paths).map(([l, path]) => [l, urlFor(l, path)])),
      'x-default': urlFor(DEFAULT_LOCALE, paths[DEFAULT_LOCALE]),
    };
    return Object.entries(paths).map(([lang, path]) => ({
      url: urlFor(lang, path),
      lastModified: now,
      changeFrequency: 'yearly',
      // Above the other inner pages: these are the pages meant to be entered
      // from search, not passed through on the way somewhere else.
      priority: 0.8,
      alternates: { languages },
    }));
  });

  const posts = allPosts();
  const blog = [
    {
      url: `${site.url}/blog`,
      lastModified: posts[0] ? new Date(posts[0].date) : now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ];

  return [...translated, ...services, ...single, ...blog];
}
