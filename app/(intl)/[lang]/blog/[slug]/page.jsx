import { notFound } from 'next/navigation';
import BlogPost from '../../../../components/pages/BlogPost';
import { metaFor, allPosts, postFor, postLang, DEFAULT_LOCALE } from '../../../../../content';

// A post is built under exactly one prefix: its own language's. Asking for a
// Croatian post under /de, or an English one under /hr, is a 404 rather than a
// duplicate of the same article at a second URL.
export function generateStaticParams() {
  return allPosts()
    .filter((post) => postLang(post) !== DEFAULT_LOCALE)
    .map((post) => ({ lang: postLang(post), slug: post.slug }));
}

function postIn(lang, slug) {
  const post = postFor(slug);
  return post && postLang(post) === lang && lang !== DEFAULT_LOCALE ? post : null;
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = postIn(lang, slug);
  if (!post) return {};
  const meta = metaFor(lang, `/blog/${slug}`, {
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
  const { lang, slug } = await params;
  if (!postIn(lang, slug)) notFound();
  return <BlogPost lang={lang} slug={slug} />;
}
