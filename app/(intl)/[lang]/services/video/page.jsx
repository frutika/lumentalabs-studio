import VideoPage from '../../../../components/pages/VideoPage';
import { metaFor, getDict, LOCALES, DEFAULT_LOCALE } from '../../../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const title = getDict(lang).services.find((s) => s.slug === 'video').title;
  return metaFor(lang, '/services/video', { title });
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <VideoPage lang={lang} />;
}
