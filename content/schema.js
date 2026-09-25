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
    image: `${url}/opengraph-image`,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/**
 * One service page. Deliberately no areaServed, priceRange or aggregateRating:
 * those are the fields that get invented, and an invented one is worse than a
 * missing one.
 */
export function serviceSchema(lang, detail, path) {
  const url = urlFor(lang, path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: detail.h1,
    description: detail.description,
    url,
    inLanguage: getDict(lang).htmlLang,
    provider: { '@id': ORG_ID },
  };
}

/**
 * The questions as they appear on the page. Google stopped showing FAQ rich
 * results for ordinary commercial sites, so this is not here for a SERP widget
 * — it is here so the answers are machine-readable for everything that is not
 * a blue link. The questions must exist on the page too, or the markup lies.
 */
export function faqSchema(lang, path, faq) {
  const url = urlFor(lang, path);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: getDict(lang).htmlLang,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
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
