import ServicesPage from '../../../components/pages/ServicesPage';
import { metaFor, getDict, LOCALES, DEFAULT_LOCALE } from '../../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return metaFor(lang, '/services', getDict(lang).pageMeta.services);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <ServicesPage lang={lang} />;
}
