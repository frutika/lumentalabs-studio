import { site, work, services } from '../site.config';

export default function sitemap() {
  const now = new Date();
  const routes = [
    '',
    '/services',
    ...services.filter((s) => s.page).map((s) => s.page),
    '/work',
    '/contact',
    ...work.map((w) => `/work/${w.slug}`),
    '/privacy',
    '/terms',
    '/cookies',
    '/cookies/manage',
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}
