import Link from 'next/link';
import JsonLd from '../JsonLd';
import BlogCover from '../BlogCover';
import { getDict, localePath, postsFor } from '../../../content';
import { breadcrumbSchema } from '../../../content/schema';

export default function BlogPage({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);
  // Only this language's posts: see postsFor in content/index.js.
  const posts = postsFor(lang);

  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, [{ name: d.blogPage.eyebrow, path: '/blog' }])} />

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
              <Link className="card linked cover-card" key={post.slug} href={p(`/blog/${post.slug}`)}>
                <div className="card-head">
                  <span className="num">{formatDate(post.date, d.htmlLang)}</span>
                  <h3>{post.title}</h3>
                </div>
                <BlogCover variant={post.cover} title={post.title} className="card-cover" />
                <p className="card-excerpt">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso, locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
