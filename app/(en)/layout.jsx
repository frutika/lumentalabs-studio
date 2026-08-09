import '../globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../../site.config';
import { getDict, DEFAULT_LOCALE } from '../../content';

const d = getDict(DEFAULT_LOCALE);

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: d.meta.siteDescription,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: d.meta.siteDescription,
    url: site.url,
    siteName: site.name,
    images: ['/media/hero.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = { themeColor: '#05080c' };

export default function EnglishLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav lang={DEFAULT_LOCALE} />
        {children}
        <Footer lang={DEFAULT_LOCALE} />
      </body>
    </html>
  );
}
