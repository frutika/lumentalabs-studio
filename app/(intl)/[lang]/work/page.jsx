import WorkPage from '../../../components/pages/WorkPage';
import { metaFor, getDict, LOCALES, DEFAULT_LOCALE } from '../../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return metaFor(lang, '/work', { title: getDict(lang).workPage.eyebrow });
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <WorkPage lang={lang} />;
}
