import Home from '../../components/pages/Home';
import { metaFor, getDict, LOCALES, DEFAULT_LOCALE } from '../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return metaFor(lang, '/', getDict(lang).pageMeta.home);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <Home lang={lang} />;
}
