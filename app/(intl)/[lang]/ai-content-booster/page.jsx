import { notFound } from 'next/navigation';
import AIContentBooster from '../../../components/pages/AIContentBooster';
import { metaFor } from '../../../../content';

// Croatian-only offer, so this route exists in no other language.
export function generateStaticParams() {
  return [{ lang: 'hr' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang !== 'hr') return {};
  return metaFor(lang, '/ai-content-booster', {
    title: 'AI Content Booster',
    description: 'AI sadržaj za lokalne firme — generiran, uređen i spreman za objavu.',
  });
}

export default async function Page({ params }) {
  const { lang } = await params;
  if (lang !== 'hr') notFound();
  return <AIContentBooster lang={lang} />;
}
