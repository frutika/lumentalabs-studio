import Link from 'next/link';
import JsonLd from '../JsonLd';
import BlogCover from '../BlogCover';
import ShareButton from '../ShareButton';
import { getDict, DEFAULT_LOCALE, postFor, relatedWorkFor, urlFor } from '../../../content';
import { articleSchema, breadcrumbSchema } from '../../../content/schema';

export default function BlogPost({ slug }) {
  const d = getDict(DEFAULT_LOCALE);
  const post = postFor(slug);
  const related = relatedWorkFor(DEFAULT_LOCALE, post);
  const path = `/blog/${slug}`;
  const url = urlFor(DEFAULT_LOCALE, path);

  return (
    <>
      <JsonLd data={articleSchema(post, path)} />
      <JsonLd
        data={breadcrumbSchema(DEFAULT_LOCALE, [
          { name: d.blogPage.eyebrow, path: '/blog' },
          { name: post.title, path },
        ])}
      />

      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href="/blog">{d.blogPage.eyebrow}</Link>
          </p>
          <h1 className="page-title">{post.title}</h1>
          <p className="lede">{post.description}</p>
          <div className="post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="post-tags">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </span>
            <ShareButton url={url} title={post.title} label={d.blogPage.share} copiedLabel={d.blogPage.shareCopied} />
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <BlogCover variant={post.cover} title={post.title} className="post-cover" />
          <div className="prose">
            {post.body.map((block, i) => <Block key={i} block={block} />)}
          </div>

          {related ? (
            <p className="see-also">
              {d.blogPage.relatedH2}{' '}
              <Link href={`/work/${related.slug}`}>{related.name}</Link> —{' '}
              <Link href={`/work/${related.slug}`}>{d.blogPage.relatedCta} ↗</Link>
            </p>
          ) : null}
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{d.blogPage.closingH2}</h2>
          <p className="section-lede">{d.blogPage.closingLede}</p>
          <Link className="btn" href="/contact">{d.blogPage.closingCta}</Link>
          <Link className="btn ghost" href="/blog">{d.blogPage.backToAll}</Link>
        </div>
      </section>
    </>
  );
}

function Block({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.p) return <p>{block.p}</p>;
  if (block.quote) return <blockquote><p>{block.quote}</p></blockquote>;
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
  if (block.code) {
    return (
      <pre>
        <code className={`lang-${block.code}`}>{block.text}</code>
      </pre>
    );
  }
  return null;
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
