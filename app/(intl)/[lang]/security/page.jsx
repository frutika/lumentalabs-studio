import { notFound } from 'next/navigation';
import DocPage from '../../../components/pages/DocPage';
import { metaFor, LOCALES, DEFAULT_LOCALE } from '../../../../content';
import { security, SECURITY_UPDATED } from '../../../../content/legal';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return security[lang] ? metaFor(lang, '/security', security[lang].meta) : {};
}

export default async function Page({ params }) {
  const { lang } = await params;
  const doc = security[lang];
  if (!doc) notFound();
  return <DocPage lang={lang} path="/security" doc={doc} updated={SECURITY_UPDATED} />;
}
