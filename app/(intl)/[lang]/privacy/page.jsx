import { notFound } from 'next/navigation';
import DocPage from '../../../components/pages/DocPage';
import { legal } from '../../../../site.config';
import { metaFor, LOCALES, DEFAULT_LOCALE } from '../../../../content';
import { privacy } from '../../../../content/legal';

// The English original is app/(en)/privacy/page.jsx.
export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return privacy[lang] ? metaFor(lang, '/privacy', { ...privacy[lang].meta, ogType: 'article' }) : {};
}

export default async function Page({ params }) {
  const { lang } = await params;
  const doc = privacy[lang];
  if (!doc) notFound();
  return <DocPage lang={lang} path="/privacy" doc={doc} updated={legal.updated} />;
}
