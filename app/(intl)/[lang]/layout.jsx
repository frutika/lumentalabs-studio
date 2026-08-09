import '../../globals.css';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
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
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
    description: d.meta.siteDescription,
    openGraph: {
      title: `${site.name} — ${site.tagline}`,
      description: d.meta.siteDescription,
      url: `${site.url}/${lang}`,
      siteName: site.name,
      images: ['/media/hero.jpg'],
      locale: lang === 'hr' ? 'hr_HR' : 'de_DE',
      type: 'website',
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
        <Nav lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
