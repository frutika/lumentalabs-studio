import { notFound } from 'next/navigation';
import BlogPost from '../../../components/pages/BlogPost';
import { enOnlyMeta, allPosts, postFor } from '../../../../content';

export function generateStaticParams() {
  return allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postFor(slug);
  if (!post) return {};
  return enOnlyMeta(`/blog/${slug}`, post.title, post.description);
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!postFor(slug)) notFound();
  return <BlogPost slug={slug} />;
}
