import { notFound } from 'next/navigation';
import VodiciPage from '../../../components/pages/VodiciPage';
import { metaFor, getDict } from '../../../../content';

// Croatian-only, like the guides themselves.
export function generateStaticParams() {
  return [{ lang: 'hr' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang !== 'hr') return {};
  const t = getDict(lang).vodiciPage;
  return metaFor(lang, '/vodici', { title: t.h1, description: t.lede });
}

export default async function Page({ params }) {
  const { lang } = await params;
  if (lang !== 'hr') notFound();
  return <VodiciPage lang={lang} />;
}
