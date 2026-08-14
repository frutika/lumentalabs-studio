import '../../globals.css';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SkipLink from '../../components/SkipLink';
import { site } from '../../../site.config';
import { getDict, isLocale, LOCALES, DEFAULT_LOCALE } from '../../../content';

// English is served from the (en) group at the root, so only the other
// languages get a prefix here.
export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const d = getDict(lang);
  const url = `${site.url}/${lang}`;

  return {
    metadataBase: new URL(site.url),
    // Localised: a Croatian page falling back to the English tagline in the
    // browser tab is the same bug as an English voice-over on a Croatian reel.
    title: { default: d.meta.siteTitle, template: `%s — ${site.name}` },
    description: d.meta.siteDescription,
    applicationName: site.name,
    openGraph: {
      title: d.meta.siteTitle,
      description: d.meta.siteDescription,
      url,
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
}

export const viewport = { themeColor: '#05080c' };

export default async function IntlLayout({ children, params }) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === DEFAULT_LOCALE) notFound();

  return (
    <html lang={getDict(lang).htmlLang}>
      <body>
        <SkipLink lang={lang} />
        <Nav lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
