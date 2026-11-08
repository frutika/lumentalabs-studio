import TurndownService from 'turndown';
import { site } from '../site.config';
import sitemap from '../app/sitemap';

/**
 * Markdown versions of the site's pages, made by converting the page itself.
 *
 * Writing them from content/ instead would mean a second renderer per template
 * and nothing for the legal pages, which live in JSX. Converting the published
 * HTML means an agent can never be told something a visitor is not.
 */

// Overridable so a local build can read itself instead of production.
const origin = () => process.env.MARKDOWN_ORIGIN || site.url;

const TTL_MS = 5 * 60 * 1000;
const FETCH_TIMEOUT_MS = 10 * 1000;

// Only ever holds sitemap paths, so its size has a ceiling and no request can
// grow it or point the fetch below anywhere of its own choosing.
const cache = new Map();

const pathOf = (url) => new URL(url).pathname;

/** Every page on offer, from the sitemap so a new page needs no edit here. */
export const markdownPaths = () => sitemap().map((entry) => pathOf(entry.url));

function converter() {
  const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });

  // Decoration and controls: nothing an agent can read or press.
  td.remove(['script', 'style', 'noscript', 'template', 'svg', 'picture', 'video', 'iframe', 'form', 'button']);
  // A rule, not remove(): built-in rules outrank remove(), and one exists for img.
  td.addRule('image', { filter: 'img', replacement: () => '' });
  td.remove((node) => node.getAttribute?.('aria-hidden') === 'true');

  // Cards wrap whole blocks in one link. Left alone, that is a link whose text
  // spans several lines, and relative hrefs mean nothing once out of the page.
  td.addRule('link', {
    filter: (node) => node.nodeName === 'A' && node.getAttribute('href'),
    replacement: (content, node) => {
      const text = content.replace(/\s+/g, ' ').trim();
      if (!text) return '';
      return `[${text}](${new URL(node.getAttribute('href'), site.url).href})`;
    },
  });

  return td;
}

const decode = (s = '') =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const firstMatch = (html, re) => decode(re.exec(html)?.[1]);

function toMarkdown(html, path) {
  const main = /<main\b[^>]*>([\s\S]*)<\/main>/.exec(html)?.[1];
  if (!main) throw new Error(`no <main> in ${path}`);

  const title = firstMatch(html, /<title[^>]*>([^<]*)<\/title>/);
  const description = firstMatch(html, /<meta name="description" content="([^"]*)"/);
  const language = firstMatch(html, /<html[^>]*\blang="([^"]*)"/);
  const url = new URL(path, site.url).href.replace(/\/$/, '');

  // Neighbouring inline elements read as one word once the styling that
  // separated them is gone: "12" + "products" would become "12products".
  const spaced = main
    .replace(/<\/(span|a)>\s*<(span|a)\b/g, '</$1> <$2')
    .replace(/<\/span>(?=[\p{L}\p{N}])/gu, '</span> ');
  const body = converter().turndown(spaced);

  // JSON strings are valid YAML, and survive a colon or quote in a title.
  const front = Object.entries({ title, description, language, url })
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n');

  return `---\n${front}\n---\n\n${body.replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

/** The page as Markdown, or null if there is no such page. Throws if it cannot be read. */
export async function pageMarkdown(path) {
  if (!markdownPaths().includes(path)) return null;

  const hit = cache.get(path);
  if (hit && hit.expires > Date.now()) return hit.markdown;

  // Accept: text/html is what stops this rewriting back to the Markdown route.
  const res = await fetch(`${origin()}${path}`, {
    headers: { Accept: 'text/html', 'User-Agent': 'LumentaLabs-Markdown/1.0' },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`${path} answered ${res.status}`);

  const markdown = toMarkdown(await res.text(), path);
  cache.set(path, { markdown, expires: Date.now() + TTL_MS });
  return markdown;
}
