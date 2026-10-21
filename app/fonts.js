import localFont from 'next/font/local';

/**
 * Served from this domain, not from Google Fonts. The privacy page promises
 * "no embedded fonts from other domains", and next/font/google would also make
 * every Hostinger build depend on reaching Google. The files are OFL-licensed
 * (licences next to them); Instrument Serif is the full upstream TTF subset to
 * Latin + Latin Extended-A, so Croatian and German letters render in the serif
 * instead of dropping to the fallback mid-word.
 */
const serif = localFont({
  src: [
    { path: './fonts/InstrumentSerif-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/InstrumentSerif-Italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

const sans = localFont({
  src: './fonts/Geist-Variable.woff2',
  weight: '100 900',
  variable: '--font-sans',
  display: 'swap',
});

const mono = localFont({
  src: './fonts/GeistMono-Variable.woff2',
  weight: '100 900',
  variable: '--font-mono',
  display: 'swap',
  // Labels only, never above the fold's largest text — not worth a preload.
  preload: false,
});

/** Goes on every <html>: each language group owns its own root element. */
export const fontVars = `${serif.variable} ${sans.variable} ${mono.variable}`;
