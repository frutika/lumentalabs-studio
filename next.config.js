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
};
