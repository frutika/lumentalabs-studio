import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '../../site.config';

// The social card for the service and case-study pages, drawn by next/og
// (Satori). Literal hex values from the design tokens in globals.css, because
// Satori cannot read CSS custom properties; every element is display:flex,
// because Satori requires it of anything with more than one child.

export const OG_SIZE = { width: 1200, height: 630 };

const C = {
  bg: '#0C0B0A',
  surface: '#141311',
  line: '#2A2723',
  text: '#F3F0E8',
  muted: '#A8A398',
  faint: '#8C877C',
  accent: '#F0A35E',
};

// Long ledes would run off the card; cut at a word boundary instead.
function clip(text = '', max) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(' ', max))}…`;
}

/**
 * A case study's screenshot as a data URI, or null. Satori cannot fetch a
 * relative URL at build time and cannot decode WebP, hence the -og.jpg twin
 * read straight off disk.
 */
export async function loadShot(shot) {
  if (!shot) return null;
  const buf = await readFile(join(process.cwd(), 'public', 'media', 'work', `${shot}-og.jpg`));
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

// Geist, the site's own face. next/og's built-in fallback has no bold weight
// and spaces words unevenly; Satori reads TTF but not the WOFF2 the site uses.
const fontFile = (name) => readFile(join(process.cwd(), 'app', 'fonts', 'og', name));

/** The `fonts` option for any ImageResponse on the site; use fontFamily 'Geist'. */
export async function ogFonts() {
  const [regular, semibold] = await Promise.all([fontFile('Geist-Regular.ttf'), fontFile('Geist-SemiBold.ttf')]);
  return [
    { name: 'Geist', data: regular, weight: 400, style: 'normal' },
    { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
  ];
}

export async function ogCard({ eyebrow, title, text, image }) {
  const wide = !image;
  const fonts = await ogFonts();

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: C.bg, fontFamily: 'Geist' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: wide ? 1200 : 640,
            padding: '60px 0 56px 64px',
            paddingRight: wide ? 64 : 40,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', width: 12, height: 12, borderRadius: 6, background: C.accent }} />
            <span style={{ display: 'flex', color: C.muted, fontSize: 22, letterSpacing: 1 }}>
              {`${site.name} — ${eyebrow}`}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 36,
              fontSize: wide ? 64 : 52,
              fontWeight: 600,
              color: C.text,
              lineHeight: 1.08,
              letterSpacing: -1.6,
            }}
          >
            {clip(title, wide ? 70 : 60)}
          </div>
          <div style={{ display: 'flex', marginTop: 26, fontSize: 26, color: C.muted, lineHeight: 1.4 }}>
            {clip(text, wide ? 170 : 120)}
          </div>
          <div style={{ display: 'flex', flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 40, height: 3, background: C.accent }} />
            <span style={{ display: 'flex', color: C.faint, fontSize: 20, letterSpacing: 1 }}>lumentalabs.studio</span>
          </div>
        </div>

        {image ? (
          // The screenshot bleeds off the right and bottom edges, so it reads
          // as a glimpse of the product rather than a framed thumbnail.
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              left: 620,
              top: 121,
              width: 760,
              height: 540,
              borderRadius: 16,
              border: `1px solid ${C.line}`,
              background: C.surface,
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 34, paddingLeft: 16, borderBottom: `1px solid ${C.line}` }}>
              <div style={{ display: 'flex', width: 9, height: 9, borderRadius: 5, background: C.line }} />
              <div style={{ display: 'flex', width: 9, height: 9, borderRadius: 5, background: C.line }} />
              <div style={{ display: 'flex', width: 9, height: 9, borderRadius: 5, background: C.line }} />
            </div>
            <img src={image} width={760} height={475} />
          </div>
        ) : null}
      </div>
    ),
    {
      ...OG_SIZE,
      fonts,
    }
  );
}
