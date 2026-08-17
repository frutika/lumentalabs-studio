import Link from 'next/link';
import JsonLd from '../JsonLd';
import BlogCover from '../BlogCover';
import { getDict, DEFAULT_LOCALE, allPosts } from '../../../content';
import { breadcrumbSchema } from '../../../content/schema';

export default function BlogPage() {
  const d = getDict(DEFAULT_LOCALE);
  const posts = allPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema(DEFAULT_LOCALE, [{ name: d.blogPage.eyebrow, path: '/blog' }])} />

      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{d.blogPage.eyebrow}</p>
          <h1 className="page-title">{d.blogPage.h1}</h1>
          <p className="lede">{d.blogPage.lede}</p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="grid">
            {posts.map((post) => (
              <Link className="card linked cover-card" key={post.slug} href={`/blog/${post.slug}`}>
                <BlogCover variant={post.cover} title={post.title} className="card-cover" />
                <div className="card-body">
                  <span className="num">{formatDate(post.date)}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
