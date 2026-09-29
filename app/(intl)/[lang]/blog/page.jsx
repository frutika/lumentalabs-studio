import { notFound } from 'next/navigation';
import BlogPage from '../../../components/pages/BlogPage';
import { metaFor, getDict, blogLocales, DEFAULT_LOCALE } from '../../../../content';

// Only the prefixed languages that actually have posts. English is served from
// the (en) group at the root, so it is not built here.
const PREFIXED = blogLocales().filter((l) => l !== DEFAULT_LOCALE);

export function generateStaticParams() {
  return PREFIXED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!PREFIXED.includes(lang)) return {};
  const d = getDict(lang);
  const m = d.pageMeta?.blog || {};
  return metaFor(lang, '/blog', {
    title: m.title || d.blogPage.eyebrow,
    description: m.description || d.blogPage.lede,
  });
}

export default async function Page({ params }) {
  const { lang } = await params;
  if (!PREFIXED.includes(lang)) notFound();
  return <BlogPage lang={lang} />;
}
