// Same diagrams as BlogCover.jsx, redrawn for next/og's renderer (Satori):
// literal hex colors instead of CSS custom properties, no <defs>/<marker>/
// <foreignObject> since Satori's SVG support is a plain pass-through subset
// that doesn't include those.
//
// Two Satori quirks shape how this file is written:
// - <text> inside a raw <svg> throws ("please convert them to <path>"), so
//   labels are absolutely-positioned HTML nodes laid over the SVG instead,
//   placed by percentage so they track Satori's non-uniform viewBox stretch
//   (0 0 480 270 scaled independently on x and y to fill the box).
// - A custom component used as a JSX child of <svg> (e.g. `<Grid />`) is
//   silently skipped — nothing inside it renders, no error — regardless of
//   whether it returns a Fragment, an array, or a single <g>. Only literal
//   SVG tags survive as direct/mapped children of <svg>. So each variant's
//   shapes are a plain function returning an array of elements, called
//   directly as `{nginxProxyShapes()}`, never invoked as `<NginxProxy />`.

const C = {
  line: '#17222e',
  accent: '#37c6d0',
  warm: '#e2614c',
  muted: '#55697e',
  badgeText: '#04222a',
};

function grid() {
  const vx = [0, 60, 120, 180, 240, 300, 360, 420, 480];
  const hy = [0, 45, 90, 135, 180, 225, 270];
  return [
    ...vx.map((x) => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="270" stroke={C.line} strokeWidth="1" />),
    ...hy.map((y) => <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke={C.line} strokeWidth="1" />),
  ];
}

// x/y are in the 480x270 diagram coordinate space; anchor 'middle' centers
// the label on that point, 'start' left-aligns it (matching SVG text-anchor).
function Label({ x, y, anchor = 'middle', color = C.muted, size = 11, weight = 400, children }) {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: `${(x / 480) * 100}%`,
        top: `${(y / 270) * 100}%`,
        transform: anchor === 'middle' ? 'translate(-50%, -50%)' : 'translate(0, -50%)',
        whiteSpace: 'nowrap',
        fontSize: size,
        fontWeight: weight,
        color,
      }}
    >
      {children}
    </div>
  );
}

function nginxProxyShapes() {
  return [
    <rect key="be" x="34" y="105" width="96" height="60" rx="8" fill="none" stroke={C.muted} strokeWidth="2" />,
    <rect key="nx" x="192" y="90" width="96" height="90" rx="8" fill="none" stroke={C.accent} strokeWidth="2" />,
    <path key="dash" d="M214 150 h52 M214 160 h52" fill="none" stroke={C.accent} strokeWidth="2" strokeDasharray="4 4" />,
    <rect key="cr" x="350" y="105" width="96" height="60" rx="8" fill="none" stroke={C.muted} strokeWidth="2" />,
    <line key="l1" x1="130" y1="135" x2="188" y2="135" stroke={C.accent} strokeWidth="2" />,
    <line key="l2" x1="288" y1="135" x2="346" y2="135" stroke={C.warm} strokeWidth="2" />,
    <circle key="badge" cx="318" cy="118" r="13" fill={C.warm} />,
  ];
}
const nginxProxyLabels = () => [
  { x: 82, y: 139, children: 'backend' },
  { x: 240, y: 130, color: C.accent, children: 'nginx' },
  { x: 398, y: 139, children: 'crawler' },
  { x: 318, y: 122, color: C.badgeText, size: 10, weight: 700, children: '500' },
];

function serviceWorkerShapes() {
  return [
    <rect key="frame" x="120" y="55" width="240" height="160" rx="10" fill="none" stroke={C.muted} strokeWidth="2" />,
    <line key="bar" x1="120" y1="85" x2="360" y2="85" stroke={C.muted} strokeWidth="2" />,
    <circle key="d1" cx="138" cy="70" r="4" fill={C.warm} />,
    <circle key="d2" cx="154" cy="70" r="4" fill="none" stroke={C.muted} strokeWidth="2" />,
    <circle key="d3" cx="170" cy="70" r="4" fill="none" stroke={C.muted} strokeWidth="2" />,
    <rect key="cache" x="150" y="105" width="90" height="86" rx="4" fill="none" stroke={C.accent} strokeWidth="2" />,
    <line key="c1" x1="164" y1="122" x2="226" y2="122" stroke={C.accent} strokeWidth="2" />,
    <line key="c2" x1="164" y1="138" x2="226" y2="138" stroke={C.accent} strokeWidth="2" />,
    <line key="c3" x1="164" y1="154" x2="200" y2="154" stroke={C.accent} strokeWidth="2" />,
    <circle key="stuck" cx="290" cy="148" r="30" fill="none" stroke={C.warm} strokeWidth="2" strokeDasharray="6 5" />,
    <line key="x1" x1="280" y1="138" x2="300" y2="158" stroke={C.warm} strokeWidth="2" />,
    <line key="x2" x1="300" y1="138" x2="280" y2="158" stroke={C.warm} strokeWidth="2" />,
  ];
}
const serviceWorkerLabels = () => [{ x: 290, y: 196, size: 10, children: 'stuck cache' }];

const HOOK_GATE_LANES = [
  { y: 70, label: 'is_admin()', ok: true },
  { y: 135, label: 'wp_doing_cron()', ok: true },
  { y: 200, label: 'REST publish', ok: false },
];
function hookGateShapes() {
  return HOOK_GATE_LANES.map((l) => (
    <g key={l.label}>
      <line x1="40" y1={l.y} x2="200" y2={l.y} stroke={l.ok ? C.accent : C.warm} strokeWidth="2" />
      <rect
        x="200" y={l.y - 16} width="60" height="32" rx="6" fill="none"
        stroke={l.ok ? C.accent : C.warm} strokeWidth="2"
        strokeDasharray={l.ok ? undefined : '4 4'}
      />
      {l.ok ? (
        <path d={`M215 ${l.y} l8 8 l16 -16`} fill="none" stroke={C.accent} strokeWidth="2" />
      ) : (
        <g>
          <line x1="212" y1={l.y - 8} x2="248" y2={l.y + 8} stroke={C.warm} strokeWidth="2" />
          <line x1="248" y1={l.y - 8} x2="212" y2={l.y + 8} stroke={C.warm} strokeWidth="2" />
        </g>
      )}
      <line
        x1="260" y1={l.y} x2="440" y2={l.y} stroke={l.ok ? C.accent : C.muted} strokeWidth="2"
        strokeDasharray={l.ok ? undefined : '3 5'}
      />
    </g>
  ));
}
const hookGateLabels = () =>
  HOOK_GATE_LANES.map((l) => ({ x: 40, y: l.y - 12, anchor: 'start', size: 10, children: l.label }));

const PIPELINE_NODES = [
  { x: 70, label: 'research' },
  { x: 190, label: 'write' },
  { x: 310, label: 'image' },
  { x: 410, label: 'publish' },
];
function pipelineShapes() {
  const nodes = PIPELINE_NODES.map((n, i) => (
    <g key={n.label}>
      <circle cx={n.x} cy="135" r="30" fill="none" stroke={i === 3 ? C.accent : C.muted} strokeWidth="2" />
      {i === 0 ? (
        <circle cx={n.x} cy="135" r="6" fill={C.accent} />
      ) : i === 1 ? (
        <g>
          <line x1={n.x - 12} y1="128" x2={n.x + 12} y2="128" stroke={C.accent} strokeWidth="2" />
          <line x1={n.x - 12} y1="138" x2={n.x + 12} y2="138" stroke={C.accent} strokeWidth="2" />
          <line x1={n.x - 12} y1="148" x2={n.x + 4} y2="148" stroke={C.accent} strokeWidth="2" />
        </g>
      ) : i === 2 ? (
        <g>
          <rect x={n.x - 14} y="122" width="28" height="20" rx="3" fill="none" stroke={C.accent} strokeWidth="2" />
          <circle cx={n.x} cy="132" r="4" fill="none" stroke={C.accent} strokeWidth="2" />
        </g>
      ) : (
        <path d={`M${n.x} 150 v-24 M${n.x - 8} 134 l8 -8 l8 8`} fill="none" stroke={C.accent} strokeWidth="2" />
      )}
    </g>
  ));
  const links = [0, 1, 2].map((i) => (
    <line
      key={`link${i}`} x1={PIPELINE_NODES[i].x + 30} y1="135" x2={PIPELINE_NODES[i + 1].x - 30} y2="135"
      stroke={C.accent} strokeWidth="2"
    />
  ));
  return [...nodes, ...links];
}
const pipelineLabels = () => PIPELINE_NODES.map((n) => ({ x: n.x, y: 185, size: 10, children: n.label }));

const SILO_BOXES = [90, 240, 390];
function silosShapes() {
  const boxes = SILO_BOXES.map((x, i) => (
    <g key={x}>
      <rect x={x - 55} y="45" width="110" height="80" rx="6" fill="none" stroke={i === 1 ? C.accent : C.muted} strokeWidth="2" />
      <line x1={x - 55} y1="70" x2={x + 55} y2="70" stroke={i === 1 ? C.accent : C.muted} strokeWidth="2" />
      <line x1={x} y1="125" x2={x} y2="195" stroke={C.muted} strokeWidth="2" strokeDasharray="3 5" />
    </g>
  ));
  return [
    ...boxes,
    <path
      key="bucket"
      d="M110 210 h260 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-260 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 z"
      fill="none" stroke={C.accent} strokeWidth="2"
    />,
    <line key="d1" x1="200" y1="195" x2="200" y2="253" stroke={C.warm} strokeWidth="2" strokeDasharray="2 4" />,
    <line key="d2" x1="280" y1="195" x2="280" y2="253" stroke={C.warm} strokeWidth="2" strokeDasharray="2 4" />,
  ];
}
const silosLabels = () => [
  ...SILO_BOXES.map((x, i) => ({ x, y: 62, size: 10, children: `product ${i + 1}` })),
  { x: 240, y: 230, color: C.accent, children: 'one PocketBase' },
];

function seoScanShapes() {
  const rows = [0, 1, 2, 3].map((i) => {
    const y = 90 + i * 32;
    const ok = i !== 2;
    return (
      <g key={i}>
        {ok ? (
          <path d={`M84 ${y} l7 8 l14 -16`} fill="none" stroke={C.accent} strokeWidth="2" />
        ) : (
          <g>
            <line x1="82" y1={y - 6} x2="98" y2={y + 6} stroke={C.warm} strokeWidth="2" />
            <line x1="98" y1={y - 6} x2="82" y2={y + 6} stroke={C.warm} strokeWidth="2" />
          </g>
        )}
        <line x1="116" y1={y} x2="260" y2={y} stroke={ok ? C.muted : C.warm} strokeWidth="2" />
      </g>
    );
  });
  return [
    <rect key="frame" x="60" y="55" width="230" height="160" rx="8" fill="none" stroke={C.muted} strokeWidth="2" />,
    ...rows,
    <circle key="ring1" cx="340" cy="150" r="42" fill="none" stroke={C.accent} strokeWidth="2" strokeDasharray="5 4" />,
    <circle key="ring2" cx="340" cy="150" r="26" fill="none" stroke={C.accent} strokeWidth="2" />,
    <line key="handle" x1="358" y1="168" x2="386" y2="196" stroke={C.accent} strokeWidth="4" />,
    <circle key="dot" cx="340" cy="150" r="5" fill={C.accent} />,
  ];
}

const VARIANTS = {
  'nginx-proxy': { shapes: nginxProxyShapes, labels: nginxProxyLabels },
  'service-worker': { shapes: serviceWorkerShapes, labels: serviceWorkerLabels },
  'hook-gate': { shapes: hookGateShapes, labels: hookGateLabels },
  'pipeline': { shapes: pipelineShapes, labels: pipelineLabels },
  'silos': { shapes: silosShapes, labels: silosLabels },
  'seo-scan': { shapes: seoScanShapes, labels: null },
};

export default function OgDiagram({ variant }) {
  const entry = VARIANTS[variant];
  const shapes = entry ? entry.shapes() : [];
  const labels = entry?.labels ? entry.labels() : [];
  return (
    <div style={{ display: 'flex', position: 'relative', width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox="0 0 480 270">
        {grid()}
        {shapes}
      </svg>
      {labels.map((l, i) => (
        <Label key={i} {...l} />
      ))}
    </div>
  );
}
