import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { site } from '../site.config';

const description =
  'A digital studio building web platforms, AI tools and automations. Products that launch, get used, and grow — without unnecessary complication.';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description,
    url: site.url,
    siteName: site.name,
    images: ['/media/hero.jpg'],
    type: 'website',
  },
};

export const viewport = { themeColor: '#05080c' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
