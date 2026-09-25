import { notFound } from 'next/navigation';
import ServiceDetail from '../../../components/pages/ServiceDetail';
import {
  metaFor,
  serviceDetailFor,
  serviceDetailsFor,
  serviceDetailPaths,
  DEFAULT_LOCALE,
} from '../../../../content';

// /services/video is a static route and stays one: it is a fuller page than
// anything generated here, and two of our own pages competing for the same
// query is the problem this change exists to fix. serviceDetails has no video
// entry, so nothing here collides with it.
export function generateStaticParams() {
  return serviceDetailsFor(DEFAULT_LOCALE).map((s) => ({ slug: s.path }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = serviceDetailFor(DEFAULT_LOCALE, slug);
  if (!item) return {};
  return metaFor(DEFAULT_LOCALE, `/services/${slug}`, {
    title: item.title,
    description: item.description,
    paths: serviceDetailPaths(item.slug),
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!serviceDetailFor(DEFAULT_LOCALE, slug)) notFound();
  return <ServiceDetail lang={DEFAULT_LOCALE} slug={slug} />;
}
