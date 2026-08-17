import { site } from '../site.config';
import { LOCALES, DEFAULT_LOCALE, urlFor, worksFor, allPosts } from '../content';

// Marketing pages exist in every language; the legal pages are English-only for
// now and are listed once, without alternates.
const TRANSLATED = ['/', '/services', '/services/video', '/work', '/contact'];
const ENGLISH_ONLY = ['/privacy', '/terms', '/cookies', '/cookies/manage'];

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

  const english = ENGLISH_ONLY.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

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

  return [...translated, ...english, ...blog];
}
