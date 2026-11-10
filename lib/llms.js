import { site, legal } from '../site.config';
import {
  getDict,
  urlFor,
  servicesFor,
  worksFor,
  postsFor,
  serviceDetailPath,
  vodiciFor,
} from '../content';

const EN = 'en';

const link = (title, url, note) => `- [${title}](${url})${note ? `: ${note}` : ''}`;
const oneLine = (s = '') => s.replace(/\s+/g, ' ').trim();

/** Where one service is described in full. Video has its own page and no detail entry. */
export function servicePath(lang, slug) {
  if (slug === 'video') return '/services/video';
  return serviceDetailPath(lang, slug) || '/services';
}

/** The llmstxt.org format: an H1, a blockquote summary, then sections of links. */
export function llmsTxt() {
  const d = getDict(EN);

  return `# ${site.name}

> ${oneLine(d.meta.siteDescription)}

Run by ${legal.entity}, ${legal.address}, Croatia. Contact: ${site.email}${site.telephone ? `, ${site.telephone}` : ''}.
The site is published in English (at the root), Croatian (/hr) and German (/de).

Any page below is also available as Markdown: request it with \`Accept: text/markdown\`, or prefix its path with /markdown. A read-only MCP server with the same pages is at ${site.url}/mcp.

## Key pages

${[
    link('About', urlFor(EN, '/about'), 'who runs the studio, and the business details'),
    link('Services', urlFor(EN, '/services'), 'the six services the studio offers, with prices'),
    link('Work', urlFor(EN, '/work'), 'products built and maintained'),
    link('Security and data', urlFor(EN, '/security'), 'where client data is stored, for how long, and who processes it'),
    link('Contact', urlFor(EN, '/contact'), 'contact form and email'),
  ].join('\n')}

## Services

${servicesFor(EN).flatMap((s) => [
    link(s.title, urlFor(EN, s.packages ? `/services#${s.slug}` : servicePath(EN, s.slug)), oneLine(s.short)),
    ...(s.packages || []).map((pkg) => `  ${link(pkg.name, urlFor(EN, servicePath(EN, pkg.slug)))}`),
  ]).join('\n')}

## Work

${worksFor(EN).map((w) => link(w.name, urlFor(EN, `/work/${w.slug}`), oneLine(w.short))).join('\n')}

## Blog

${postsFor(EN).map((p) => link(p.title, urlFor(EN, `/blog/${p.slug}`), oneLine(p.excerpt))).join('\n')}

## Croatian only

${[
    ...postsFor('hr').map((p) => link(p.title, urlFor('hr', `/blog/${p.slug}`), oneLine(p.excerpt))),
    ...vodiciFor().map((g) => link(g.h1, urlFor('hr', `/vodici/${g.slug}`), oneLine(g.description))),
  ].join('\n')}

## Optional

${[
    link('Privacy policy', urlFor(EN, '/privacy')),
    link('Terms', urlFor(EN, '/terms')),
    link('Cookies', urlFor(EN, '/cookies')),
    link('Sitemap', `${site.url}/sitemap.xml`),
  ].join('\n')}
`;
}
