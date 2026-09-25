import { notFound } from 'next/navigation';
import ServiceDetail from '../../../../components/pages/ServiceDetail';
import {
  metaFor,
  serviceDetailFor,
  serviceDetailsFor,
  serviceDetailPaths,
  LOCALES,
  DEFAULT_LOCALE,
} from '../../../../../content';

// Each language emits its own slugs: /hr/services/izrada-web-aplikacija and
// /de/services/webanwendungen-entwicklung are the same page, and neither URL
// resolves under the other language.
export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).flatMap((lang) =>
    serviceDetailsFor(lang).map((s) => ({ lang, slug: s.path }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const item = serviceDetailFor(lang, slug);
  if (!item) return {};
  return metaFor(lang, `/services/${slug}`, {
    title: item.title,
    description: item.description,
    paths: serviceDetailPaths(item.slug),
  });
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  if (!serviceDetailFor(lang, slug)) notFound();
  return <ServiceDetail lang={lang} slug={slug} />;
}
