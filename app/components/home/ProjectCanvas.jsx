import Link from 'next/link';

// Where each product sits on the board, in percent of the board's box. The
// accent line marks the most recent addition.
const LAYOUT = {
  bezmaske: [14, 24],
  unmaskedwords: [14, 76],
  narrator: [50, 14],
  'lumenta-ai': [86, 24, 'hot'],
  'the-dog-habit': [86, 76],
  'docuflow-ai': [50, 86],
};

/**
 * Railway-style project board: the shared stack in the middle, every product
 * wired to it. Each node links to that product's case study, so the hero
 * keeps the internal links the old card grid used to provide.
 *
 * Fixed 1000px wide and scrolled sideways on narrow screens rather than
 * squashed - which is why the scroller is focusable and named: a keyboard user
 * has to be able to reach what is off to the right.
 */
export default function ProjectCanvas({ works, c, href }) {
  const live = works.filter((w) => w.href).length;
  const status = c.status.replace('{live}', live).replace('{internal}', works.length - live);
  const placed = works.filter((w) => LAYOUT[w.slug]);

  return (
    <div className="canvas">
      <div className="canvas-bar">
        <div className="crumbs">
          <b>{c.project}</b>
          <span aria-hidden="true">/</span>
          <span>{c.env}</span>
        </div>
        <div className="meta">
          <span><span className="status-dot" aria-hidden="true" />{status}</span>
          <span>{c.view}</span>
        </div>
      </div>
      <div className="canvas-scroll" role="region" aria-label={c.label} tabIndex={0}>
        <div className="canvas-board">
          <svg className="canvas-lines" aria-hidden="true">
            {placed.map((w) => {
              const [x, y, hot] = LAYOUT[w.slug];
              return <line key={w.slug} className={hot} x1="50%" y1="50%" x2={`${x}%`} y2={`${y}%`} />;
            })}
          </svg>

          <div className="node hub" style={{ left: '50%', top: '50%' }}>
            <span className="hub-title">
              <span className="hub-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l9 5-9 5-9-5 9-5z" />
                  <path d="M3 12l9 5 9-5" />
                  <path d="M3 17l9 5 9-5" />
                </svg>
              </span>
              {c.stackTitle}
            </span>
            <span className="hub-note">{c.stack}<br />{c.stackNote}</span>
          </div>

          {placed.map((w) => {
            const [x, y] = LAYOUT[w.slug];
            return (
              <Link key={w.slug} className="node" href={href(w.slug)} style={{ left: `${x}%`, top: `${y}%` }}>
                <span className="node-name">{w.name}</span>
                <span className="node-sub">{c.nodes[w.slug]}</span>
                <span className={`status${w.href ? '' : ' internal'}`}>{w.kind}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
