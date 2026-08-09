import { site } from '../site.config';
import { LOCALES, DEFAULT_LOCALE, localePath, worksFor } from '../content';

// Marketing pages exist in every language; the legal pages are English-only for
// now and are listed once, without alternates.
const TRANSLATED = ['/', '/services', '/services/video', '/work', '/contact'];
const ENGLISH_ONLY = ['/privacy', '/terms', '/cookies', '/cookies/manage'];

export default function sitemap() {
  const now = new Date();
  const paths = [...TRANSLATED, ...worksFor(DEFAULT_LOCALE).map((w) => `/work/${w.slug}`)];

  const translated = paths.flatMap((path) =>
    LOCALES.map((lang) => ({
      url: `${site.url}${localePath(lang, path)}`,
      lastModified: now,
      changeFrequency: path === '/' ? 'monthly' : 'yearly',
      priority: path === '/' ? 1 : 0.7,
      // Telling search engines about every language version of this page is what
      // stops them treating the translations as thin duplicates.
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${site.url}${localePath(l, path)}`])
        ),
      },
    }))
  );

  const english = ENGLISH_ONLY.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [...translated, ...english];
}
