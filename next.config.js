/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,

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
    ];
  },

  async headers() {
    return [
      {
        // Next marks prerendered pages s-maxage=31536000 because it assumes the
        // CDN is purged on every deploy. Hostinger's is not, so a deploy could
        // sit invisible behind a year-old cached copy. Short shared-cache life
        // with background revalidation keeps pages fast and still current.
        source: '/((?!_next/static|media/).*)',
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
