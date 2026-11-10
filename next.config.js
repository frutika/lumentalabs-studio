// True when the client prefers Markdown: it names text/markdown, and not after
// text/html. Browsers never send it, so ordinary visits cannot match. Next wraps
// the value in ^...$ itself.
const WANTS_MARKDOWN = { type: 'header', key: 'accept', value: '(?:(?!text/html).)*text/markdown.*' };

// Each home page advertises the summary for agents, its own Markdown version
// and the discovery manifest.
const homeLink = (markdownPath) =>
  `</llms.txt>; rel="describedby"; type="text/plain", <${markdownPath}>; rel="alternate"; type="text/markdown", </.well-known/ard.json>; rel="ard"; type="application/json"`;

/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,

  experimental: {
    // Each language group owns its own <html>, so Next has no single root
    // layout to render a 404 into and falls back to its unstyled built-in page
    // ("404: This page could not be found.", no lang attribute, no landmarks,
    // no branding). app/global-not-found.jsx supplies the document that is
    // missing, and in 16.3 that file is still gated behind this flag.
    // Scope is the 404 render path only.
    globalNotFound: true,
  },


  // The site answers on both www and the apex. Without this the same pages exist
  // under two hostnames, which splits search signals and makes the sitemap
  // (apex-only) disagree with what is actually reachable.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lumentalabs.studio' }],
        destination: 'https://lumentalabs.studio/:path*',
        permanent: true,
      },
      {
        // The AI Content Booster was a service the studio performed by hand,
        // and Lumenta AI already does the same job as software the client runs
        // themselves. The URL was never indexed, but it was shared, so it
        // lands on the case study rather than on a 404 — on this domain, with
        // the context, instead of dropping someone straight onto lumenta.shop.
        source: '/hr/ai-content-booster',
        destination: '/hr/work/lumenta-ai',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    // beforeFiles, or the prerendered HTML answers first. Everything that is not
    // a page is left out, so it keeps answering as itself.
    return {
      beforeFiles: [
        { source: '/', has: [WANTS_MARKDOWN], destination: '/markdown' },
        {
          source: '/:path((?!_next/|api/|media/|markdown|mcp|llms\\.txt|robots\\.txt|sitemap\\.xml|\\.well-known/).+)',
          has: [WANTS_MARKDOWN],
          destination: '/markdown/:path',
        },
      ],
    };
  },

  async headers() {
    return [
      { source: '/', headers: [{ key: 'Link', value: homeLink('/markdown') }] },
      { source: '/hr', headers: [{ key: 'Link', value: homeLink('/markdown/hr') }] },
      { source: '/de', headers: [{ key: 'Link', value: homeLink('/markdown/de') }] },
      {
        // Next marks prerendered pages s-maxage=31536000 because it assumes the
        // CDN is purged on every deploy. Hostinger's is not, so a deploy could
        // sit invisible behind a year-old cached copy. Short shared-cache life
        // with background revalidation keeps pages fast and still current.
        // Except for the agent-facing routes, which set their own.
        source: '/((?!_next/static|media/|markdown|mcp|\\.well-known/).*)',
        missing: [WANTS_MARKDOWN],
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        // Build output is content-hashed, so it can be cached hard and forever.
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Poster and hero loop change rarely, but not never.
        source: '/media/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' }],
      },
    ];
  },
};
