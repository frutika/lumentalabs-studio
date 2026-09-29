import { notFound } from 'next/navigation';
import BlogPost from '../../../components/pages/BlogPost';
import { metaFor, postsFor, postFor, DEFAULT_LOCALE } from '../../../../content';

// English posts only. A Croatian post is not published at /blog/<slug> at all —
// it lives under its own prefix, built by the route in (intl).
export function generateStaticParams() {
  return postsFor(DEFAULT_LOCALE).map((post) => ({ slug: post.slug }));
}

const isEnglish = (slug) => postsFor(DEFAULT_LOCALE).some((post) => post.slug === slug);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = isEnglish(slug) ? postFor(slug) : null;
  if (!post) return {};
  const meta = metaFor(DEFAULT_LOCALE, `/blog/${slug}`, {
    title: post.title,
    description: post.description,
    ogType: 'article',
  });
  // Let the opengraph-image.jsx file convention in this route supply the
  // per-post image — an explicit `images` array here would override it.
  delete meta.openGraph.images;
  delete meta.twitter.images;
  return meta;
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!isEnglish(slug)) notFound();
  return <BlogPost lang={DEFAULT_LOCALE} slug={slug} />;
}
