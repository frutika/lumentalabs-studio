import AboutPage from '../../../components/pages/AboutPage';
import { metaFor, getDict, LOCALES, DEFAULT_LOCALE } from '../../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return metaFor(lang, '/about', getDict(lang).pageMeta.about);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <AboutPage lang={lang} />;
}
