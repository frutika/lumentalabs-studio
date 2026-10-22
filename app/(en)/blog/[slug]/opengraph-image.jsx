import { ImageResponse } from 'next/og';
import { ogFonts } from '../../../components/OgCard';
import OgDiagram from '../../../components/OgDiagram';
import { postsFor, postFor, DEFAULT_LOCALE } from '../../../../content';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lumenta Labs blog post';

export function generateStaticParams() {
  return postsFor(DEFAULT_LOCALE).map((post) => ({ slug: post.slug }));
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
          background: '#0C0B0A',
          padding: '56px 64px',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', width: 12, height: 12, borderRadius: 6, background: '#F0A35E' }} />
          <span style={{ display: 'flex', color: '#A8A398', fontSize: 22, letterSpacing: 1 }}>
            Lumenta Labs — Blog
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 26,
            fontSize: 52,
            fontWeight: 600,
            color: '#F3F0E8',
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
            border: '1px solid #2A2723',
            background: '#141311',
            overflow: 'hidden',
          }}
        >
          <OgDiagram variant={post?.cover} />
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
