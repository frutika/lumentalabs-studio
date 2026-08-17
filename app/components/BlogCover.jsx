// Per-post featured image, rendered as inline SVG rather than a stock photo —
// each one is a small diagram of the actual failure the post describes. See
// content/blog.js for the cover -> variant mapping. Zero image pipeline, zero
// extra requests, ships in the same static build as everything else here.

function Grid() {
  return (
    <g className="cv-grid">
      {[0, 60, 120, 180, 240, 300, 360, 420, 480].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="270" />
      ))}
      {[0, 45, 90, 135, 180, 225, 270].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} />
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, cls = 'stroke-a' }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} className={cls} markerEnd="url(#arrow)" />;
}

function NginxProxy() {
  return (
    <>
      <rect x="34" y="105" width="96" height="60" rx="8" className="stroke-m" />
      <text x="82" y="139" textAnchor="middle">backend</text>
      <rect x="192" y="90" width="96" height="90" rx="8" className="stroke-a" />
      <text x="240" y="130" textAnchor="middle" className="lbl-a">nginx</text>
      <path d="M214 150 h52 M214 160 h52" className="stroke-a" strokeDasharray="4 4" />
      <text x="240" y="150" textAnchor="middle" className="tiny">error_page</text>
      <rect x="350" y="105" width="96" height="60" rx="8" className="stroke-m" />
      <text x="398" y="139" textAnchor="middle">crawler</text>
      <Arrow x1="130" y1="135" x2="188" y2="135" />
      <Arrow x1="288" y1="135" x2="346" y2="135" cls="stroke-w" />
      <circle cx="318" cy="118" r="13" className="fill-w" />
      <text x="318" y="122" textAnchor="middle" className="badge">500</text>
    </>
  );
}

function ServiceWorker() {
  return (
    <>
      <rect x="120" y="55" width="240" height="160" rx="10" className="stroke-m" />
      <line x1="120" y1="85" x2="360" y2="85" className="stroke-m" />
      <circle cx="138" cy="70" r="4" className="fill-w" />
      <circle cx="154" cy="70" r="4" className="stroke-m" />
      <circle cx="170" cy="70" r="4" className="stroke-m" />
      <rect x="150" y="105" width="90" height="86" rx="4" className="stroke-a" />
      <line x1="164" y1="122" x2="226" y2="122" className="stroke-a" />
      <line x1="164" y1="138" x2="226" y2="138" className="stroke-a" />
      <line x1="164" y1="154" x2="200" y2="154" className="stroke-a" />
      <g transform="translate(290,148)">
        <circle r="30" className="stroke-w" strokeDasharray="6 5" />
        <path d="M0 -30 a30 30 0 0 1 21 9" className="stroke-w" markerEnd="url(#arrowW)" />
        <line x1="-10" y1="-10" x2="10" y2="10" className="stroke-w" />
        <line x1="10" y1="-10" x2="-10" y2="10" className="stroke-w" />
      </g>
      <text x="290" y="196" textAnchor="middle" className="tiny">stuck cache</text>
    </>
  );
}

function HookGate() {
  const lanes = [
    { y: 70, label: 'is_admin()', ok: true },
    { y: 135, label: 'wp_doing_cron()', ok: true },
    { y: 200, label: 'REST publish', ok: false },
  ];
  return (
    <>
      {lanes.map((l) => (
        <g key={l.label}>
          <text x="40" y={l.y - 12} className="tiny">{l.label}</text>
          <line x1="40" y1={l.y} x2="200" y2={l.y} className={l.ok ? 'stroke-a' : 'stroke-w'} />
          <rect x="200" y={l.y - 16} width="60" height="32" rx="6" className={l.ok ? 'stroke-a' : 'stroke-w'} strokeDasharray={l.ok ? undefined : '4 4'} />
          {l.ok ? (
            <path d={`M215 ${l.y} l8 8 l16 -16`} className="stroke-a" />
          ) : (
            <>
              <line x1="212" y1={l.y - 8} x2="248" y2={l.y + 8} className="stroke-w" />
              <line x1="248" y1={l.y - 8} x2="212" y2={l.y + 8} className="stroke-w" />
            </>
          )}
          <line x1="260" y1={l.y} x2="440" y2={l.y} className={l.ok ? 'stroke-a' : 'stroke-m'} strokeDasharray={l.ok ? undefined : '3 5'} />
        </g>
      ))}
    </>
  );
}

function Pipeline() {
  const nodes = [
    { x: 70, label: 'research' },
    { x: 190, label: 'write' },
    { x: 310, label: 'image' },
    { x: 410, label: 'publish' },
  ];
  return (
    <>
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x} cy="135" r="30" className={i === 3 ? 'stroke-a' : 'stroke-m'} />
          <text x={n.x} y="185" textAnchor="middle" className="tiny">{n.label}</text>
          {i === 0 && <circle cx={n.x} cy="135" r="6" className="fill-a" />}
          {i === 1 && (
            <>
              <line x1={n.x - 12} y1="128" x2={n.x + 12} y2="128" className="stroke-a" />
              <line x1={n.x - 12} y1="138" x2={n.x + 12} y2="138" className="stroke-a" />
              <line x1={n.x - 12} y1="148" x2={n.x + 4} y2="148" className="stroke-a" />
            </>
          )}
          {i === 2 && (
            <>
              <rect x={n.x - 14} y="122" width="28" height="20" rx="3" className="stroke-a" />
              <circle cx={n.x} cy="132" r="4" className="stroke-a" />
            </>
          )}
          {i === 3 && (
            <path d={`M${n.x} 150 v-24 M${n.x - 8} 134 l8 -8 l8 8`} className="stroke-a" />
          )}
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <Arrow key={i} x1={nodes[i].x + 30} y1="135" x2={nodes[i + 1].x - 30} y2="135" />
      ))}
    </>
  );
}

function Silos() {
  const boxes = [90, 240, 390];
  return (
    <>
      {boxes.map((x, i) => (
        <g key={x}>
          <rect x={x - 55} y="45" width="110" height="80" rx="6" className={i === 1 ? 'stroke-a' : 'stroke-m'} />
          <line x1={x - 55} y1="70" x2={x + 55} y2="70" className={i === 1 ? 'stroke-a' : 'stroke-m'} />
          <text x={x} y="62" textAnchor="middle" className="tiny">product {i + 1}</text>
          <line x1={x} y1="125" x2={x} y2="195" className="stroke-m" strokeDasharray="3 5" />
        </g>
      ))}
      <path d="M110 210 h260 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-260 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 z" className="stroke-a" />
      <text x="240" y="230" textAnchor="middle" className="lbl-a">one PocketBase</text>
      <line x1="200" y1="195" x2="200" y2="253" className="stroke-w" strokeDasharray="2 4" />
      <line x1="280" y1="195" x2="280" y2="253" className="stroke-w" strokeDasharray="2 4" />
    </>
  );
}

function SeoScan() {
  return (
    <>
      <rect x="60" y="55" width="230" height="160" rx="8" className="stroke-m" />
      {[0, 1, 2, 3].map((i) => {
        const y = 90 + i * 32;
        const ok = i !== 2;
        return (
          <g key={i}>
            {ok ? (
              <path d={`M84 ${y} l7 8 l14 -16`} className="stroke-a" />
            ) : (
              <>
                <line x1="82" y1={y - 6} x2="98" y2={y + 6} className="stroke-w" />
                <line x1="98" y1={y - 6} x2="82" y2={y + 6} className="stroke-w" />
              </>
            )}
            <line x1="116" y1={y} x2="260" y2={y} className={ok ? 'stroke-m' : 'stroke-w'} />
          </g>
        );
      })}
      <g transform="translate(340,150)">
        <circle r="42" className="stroke-a" fill="none" strokeDasharray="5 4" />
        <circle r="26" className="stroke-a" />
        <line x1="18" y1="18" x2="46" y2="46" className="stroke-a" strokeWidth="4" />
        <circle r="5" className="fill-a" />
      </g>
    </>
  );
}

const VARIANTS = {
  'nginx-proxy': NginxProxy,
  'service-worker': ServiceWorker,
  'hook-gate': HookGate,
  'pipeline': Pipeline,
  'silos': Silos,
  'seo-scan': SeoScan,
};

export default function BlogCover({ variant, title, className = '' }) {
  const Diagram = VARIANTS[variant];
  return (
    <svg
      className={`cover-svg ${className}`}
      viewBox="0 0 480 270"
      role="img"
      aria-label={title ? `Diagram illustrating: ${title}` : 'Post illustration'}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-a" />
        </marker>
        <marker id="arrowW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-w" />
        </marker>
      </defs>
      <rect width="480" height="270" className="fill-panel" />
      <Grid />
      {Diagram ? <Diagram /> : null}
    </svg>
  );
}
