import { site } from '../../site.config';

// A route rather than app/robots.js: Next's robots metadata has no field for
// Content-Signal and drops anything it does not know.
//
// search and ai-input are yes because being found and quoted is what the site
// is for; ai-train is no because the writing is ours. A preference, not an
// access control: the Allow below still admits everyone.
export const dynamic = 'force-static';

export function GET() {
  const body = `User-Agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
