import { site } from '../site.config';
import { getDict, urlFor } from './index';

const ORG_ID = `${site.url}/#organization`;

export function organizationSchema(lang) {
  const d = getDict(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: site.url,
    email: site.email,
    description: d.meta.siteDescription,
    logo: `${site.url}/icon.svg`,
    image: `${site.url}/media/hero.jpg`,
    // Only properties we actually operate. No invented profiles.
    sameAs: [site.reelChannel, ...site.work.map((w) => w.href)].filter(Boolean),
  };
}

export function websiteSchema(lang) {
  const d = getDict(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${urlFor(lang, '/')}#website`,
    url: urlFor(lang, '/'),
    name: site.name,
    description: d.meta.siteDescription,
    inLanguage: d.htmlLang,
    publisher: { '@id': ORG_ID },
  };
}

export function articleSchema(post, path) {
  const url = urlFor('en', path);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en',
    url,
    mainEntityOfPage: url,
    image: `${site.url}/media/hero.jpg`,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** items: [{ name, path }] — the trail, excluding the site root. */
export function breadcrumbSchema(lang, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: site.name, path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: urlFor(lang, item.path),
    })),
  };
}
