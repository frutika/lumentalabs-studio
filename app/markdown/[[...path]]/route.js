import { pageMarkdown } from '../../../lib/markdown';
import { site } from '../../../site.config';

// next.config.js rewrites any page here when the request prefers text/markdown.
// Reachable directly too, which is what the Link header points at, hence noindex
// and the canonical: the HTML page stays the one that ranks.
export const dynamic = 'force-dynamic';

const markdown = (body, status, extra = {}) =>
  new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      'X-Robots-Tag': 'noindex',
      // private: the HTML and this share a URL, and a shared cache that ignored
      // Vary could otherwise hand Markdown to a browser.
      'Cache-Control': 'private, max-age=300',
      ...extra,
    },
  });

export async function GET(_req, { params }) {
  const { path = [] } = await params;
  const pagePath = `/${path.join('/')}`;

  try {
    const body = await pageMarkdown(pagePath);
    if (body === null) return markdown('# Not found\n\nThere is no such page. See /llms.txt for the list.\n', 404);
    const canonical = pagePath === '/' ? site.url : `${site.url}${pagePath}`;
    return markdown(body, 200, { Link: `<${canonical}>; rel="canonical"` });
  } catch (err) {
    console.error('[markdown]', pagePath, err);
    return markdown('# Temporarily unavailable\n\nThe page could not be converted. Try again shortly.\n', 503, {
      'Retry-After': '60',
      'Cache-Control': 'no-store',
    });
  }
}
