import '../globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink';
import CookieBanner from '../components/CookieBanner';
import { site, analytics } from '../../site.config';
import { getDict, DEFAULT_LOCALE } from '../../content';

const d = getDict(DEFAULT_LOCALE);

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Pages that set no title of their own fall back to this. Before, the home
    // page shipped no <title> at all because metaFor sent title: undefined,
    // which counts as a value in Next's merge and overrode this default.
    default: d.meta.siteTitle,
    template: `%s — ${site.name}`,
  },
  description: d.meta.siteDescription,
  applicationName: site.name,
  openGraph: {
    title: d.meta.siteTitle,
    description: d.meta.siteDescription,
    url: site.url,
    siteName: site.name,
    images: ['/media/hero.jpg'],
    locale: d.meta.ogLocale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: d.meta.siteTitle,
    description: d.meta.siteDescription,
    images: ['/media/hero.jpg'],
  },
};

export const viewport = { themeColor: '#05080c' };

export default function EnglishLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkipLink lang={DEFAULT_LOCALE} />
        <Nav lang={DEFAULT_LOCALE} />
        {/* Every page needs one main landmark: it is what a skip link targets,
            what a screen reader jumps to, and what an agent reads as "the page"
            rather than "the chrome around it". */}
        <main id="main">{children}</main>
        <Footer lang={DEFAULT_LOCALE} />
        {analytics.enabled ? <CookieBanner providerName={analytics.provider?.name} /> : null}
      </body>
    </html>
  );
}
