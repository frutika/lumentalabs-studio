import ContactPage from '../../../components/pages/ContactPage';
import { metaFor, getDict, LOCALES, DEFAULT_LOCALE } from '../../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return metaFor(lang, '/contact', { title: getDict(lang).contactPage.eyebrow });
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <ContactPage lang={lang} />;
}
