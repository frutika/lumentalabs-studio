import { notFound } from 'next/navigation';
import VodicDetail from '../../../../components/pages/VodicDetail';
import { metaFor, vodicFor, vodiciFor } from '../../../../../content';

export function generateStaticParams() {
  return vodiciFor().map((g) => ({ lang: 'hr', slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const g = lang === 'hr' ? vodicFor(slug) : null;
  if (!g) return {};
  return metaFor(lang, `/vodici/${slug}`, {
    title: g.title,
    description: g.description,
    ogType: 'article',
  });
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  if (lang !== 'hr' || !vodicFor(slug)) notFound();
  return <VodicDetail lang={lang} slug={slug} />;
}
