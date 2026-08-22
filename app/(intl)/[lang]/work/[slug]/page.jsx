import { notFound } from 'next/navigation';
import WorkDetail from '../../../../components/pages/WorkDetail';
import { metaFor, workFor, worksFor, LOCALES, DEFAULT_LOCALE } from '../../../../../content';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).flatMap((lang) =>
    worksFor(lang).map((w) => ({ lang, slug: w.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const item = workFor(lang, slug);
  if (!item) return {};
  return metaFor(lang, `/work/${slug}`, { title: item.title || item.name, description: item.short });
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  if (!workFor(lang, slug)) notFound();
  return <WorkDetail lang={lang} slug={slug} />;
}
