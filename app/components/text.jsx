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
 * An inner page's h1. Long titles (a guide's full name, a search query spelled
 * out) get the smaller display size, so they do not run to five lines.
 */
export function PageTitle({ text }) {
  const long = text.length > 40;
  return <h1 className={`page-title${long ? ' long' : ''}`}>{lastWordEm(text)}</h1>;
}
