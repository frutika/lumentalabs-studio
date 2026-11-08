import { site, legal } from '../site.config';
import { getDict, urlFor, servicesFor, worksFor, postsFor } from './index';
import { servicePath } from '../lib/llms';

const ORG_ID = `${site.url}/#organization`;

export function organizationSchema(lang) {
  const d = getDict(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: site.url,
    legalName: legal.entity,
    email: site.email,
    ...(site.telephone ? { telephone: site.telephone } : {}),
    address: { '@type': 'PostalAddress', ...legal.postal },
    taxID: legal.oib,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: site.email,
      url: urlFor(lang, '/contact'),
      ...(site.telephone ? { telephone: site.telephone } : {}),
      availableLanguage: ['en', 'hr', 'de'],
    },
    description: d.meta.siteDescription,
    logo: `${site.url}/media/logo.png`,
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

/** The home page itself: what it is and what it belongs to. */
export function homePageSchema(lang) {
  const d = getDict(lang);
  const url = urlFor(lang, '/');
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: d.pageMeta.home.title,
    description: d.pageMeta.home.description,
    inLanguage: d.htmlLang,
    isPartOf: { '@id': `${url}#website` },
    about: { '@id': ORG_ID },
  };
}

const itemList = (name, items) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
});

/**
 * The lists the home page prints, in the same order and from the same content.
 * Prices stay on the service pages, where the bands they come from are printed.
 */
export function homeServicesSchema(lang) {
  const d = getDict(lang);
  return itemList(
    d.home.whatH2,
    servicesFor(lang).map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.short,
      url: urlFor(lang, servicePath(lang, s.slug)),
      provider: { '@id': ORG_ID },
    }))
  );
}

/** CreativeWork rather than SoftwareApplication: one of these is a blog. */
export function homeWorkSchema(lang) {
  return itemList(
    getDict(lang).nav.work,
    worksFor(lang).map((w) => ({
      '@type': 'CreativeWork',
      name: w.name,
      description: w.short,
      url: urlFor(lang, `/work/${w.slug}`),
      creator: { '@id': ORG_ID },
    }))
  );
}

/** Only the posts the page lists, so null in a language whose home lists none. */
export function homePostsSchema(lang) {
  const d = getDict(lang);
  if (!d.home.blogH2) return null;
  const posts = postsFor(lang).slice(0, 3);
  if (!posts.length) return null;
  return itemList(
    d.home.blogH2,
    posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: urlFor(lang, `/blog/${post.slug}`),
      author: { '@id': ORG_ID },
    }))
  );
}

export function aboutPageSchema(lang) {
  const d = getDict(lang);
  const url = urlFor(lang, '/about');
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: d.pageMeta.about.title,
    description: d.pageMeta.about.description,
    inLanguage: d.htmlLang,
    about: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'Person',
      name: site.founder,
      image: `${site.url}/media/denis.jpg`,
      worksFor: { '@id': ORG_ID },
      sameAs: [site.social.linkedin],
    },
  };
}

export function articleSchema(lang, post, path) {
  const url = urlFor(lang, path);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: getDict(lang).htmlLang,
    url,
    mainEntityOfPage: url,
    // No `image`. This used to claim `${url}/opengraph-image`, which 404s on
    // every post: the opengraph-image.jsx file convention builds the card at a
    // hashed path (.../opengraph-image-g58prh), and that hash is not knowable
    // from here. The real per-post card is on the page as og:image either way,
    // and a missing recommended field beats a broken URL in structured data.
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/**
 * One service page. Still no areaServed and no aggregateRating: those are the
 * fields that get invented, and an invented one is worse than a missing one.
 * The price is the exception — it is a real figure, and it comes from the same
 * bands the page prints.
 */
export function serviceSchema(lang, detail, path) {
  const url = urlFor(lang, path);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: detail.h1,
    description: detail.description,
    url,
    inLanguage: getDict(lang).htmlLang,
    provider: { '@id': ORG_ID },
  };

  // Only now that real figures exist. A price range is the one field here that
  // is worth stating in machine-readable form, and it is taken from the same
  // bands the page prints — never a separate number that can drift from them.
  const { min, max, unit } = detail.pricing || {};
  if (min) {
    schema.offers = {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        minPrice: min,
        ...(max ? { maxPrice: max } : {}),
        // Monthly retainers are not one-off project prices and should not be
        // read as though they were.
        ...(unit ? { unitCode: unit } : {}),
        valueAddedTaxIncluded: false,
      },
    };
  }

  return schema;
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

/**
 * One guide. Article rather than HowTo: Google retired HowTo rich results for
 * ordinary sites, and an Article that is honest about author and publisher is
 * worth more than a HowTo block nothing renders.
 */
export function guideSchema(lang, guide, path) {
  const url = urlFor(lang, path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: guide.h1,
    description: guide.description,
    url,
    mainEntityOfPage: url,
    inLanguage: getDict(lang).htmlLang,
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
