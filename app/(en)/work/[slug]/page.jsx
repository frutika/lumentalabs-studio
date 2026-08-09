import { notFound } from 'next/navigation';
import WorkDetail from '../../../components/pages/WorkDetail';
import { metaFor, workFor, worksFor, DEFAULT_LOCALE } from '../../../../content';

export function generateStaticParams() {
  return worksFor(DEFAULT_LOCALE).map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = workFor(DEFAULT_LOCALE, slug);
  if (!item) return {};
  return metaFor(DEFAULT_LOCALE, `/work/${slug}`, { title: item.name, description: item.short });
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!workFor(DEFAULT_LOCALE, slug)) notFound();
  return <WorkDetail lang={DEFAULT_LOCALE} slug={slug} />;
}
