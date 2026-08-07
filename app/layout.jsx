import './globals.css';
import { site } from '../site.config';

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — web platforms, AI tools, automation`,
  description:
    'A digital studio building web platforms, AI tools and automations. Products that launch, get used, and grow — without unnecessary complication.',
  openGraph: {
    title: `${site.name} — web platforms, AI tools, automation`,
    description: 'Products that launch, get used, and grow — without unnecessary complication.',
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
      <body>{children}</body>
    </html>
  );
}
