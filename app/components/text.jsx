/**
 * Display headings set their last word in the italic accent. Split here rather
 * than stored as two keys, so the translations stay one sentence each.
 */
export function lastWordEm(text) {
  const i = text.trimEnd().lastIndexOf(' ');
  if (i < 0) return <em>{text}</em>;
  return <>{text.slice(0, i + 1)}<em>{text.slice(i + 1)}</em></>;
}

/**
 * The longest run of a heading the browser cannot break, in characters. A
 * hyphen is a break opportunity, so "KI-Prozessautomatisierung" counts as
 * "Prozessautomatisierung". The CSS uses it (as --fit) to cap the font size so
 * that word still fits the line: display headings never split a word.
 */
export function fitStyle(text) {
  const longest = Math.max(...text.split(/\s+|(?<=-)/).map((w) => w.length));
  return { '--fit': longest };
}

/**
 * An inner page's h1. Long titles (a guide's full name, a search query spelled
 * out) get the smaller display size, so they do not run to five lines.
 */
export function PageTitle({ text }) {
  const long = text.length > 40;
  return <h1 className={`page-title${long ? ' long' : ''}`} style={fitStyle(text)}>{lastWordEm(text)}</h1>;
}
