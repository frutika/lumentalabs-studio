import { ImageResponse } from 'next/og';
import OgDiagram from '../../../components/OgDiagram';
import { allPosts, postFor } from '../../../../content';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lumenta Labs blog post';

export function generateStaticParams() {
  return allPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = postFor(slug);
  const title = post?.title || 'Lumenta Labs';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#05080c',
          padding: '56px 64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', width: 12, height: 12, borderRadius: 6, background: '#37c6d0' }} />
          <span style={{ display: 'flex', color: '#8598ad', fontSize: 22, letterSpacing: 1 }}>
            Lumenta Labs — Blog
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 26,
            fontSize: 52,
            fontWeight: 700,
            color: '#dfe8f2',
            lineHeight: 1.16,
            letterSpacing: -1.2,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            marginTop: 34,
            borderRadius: 16,
            border: '1px solid #17222e',
            background: '#0b1117',
            overflow: 'hidden',
          }}
        >
          <OgDiagram variant={post?.cover} />
        </div>
      </div>
    ),
    { ...size }
  );
}
