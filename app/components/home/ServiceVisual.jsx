/**
 * The small illustrative interface under each service card. Purely visual
 * companions to the card text; the strings that are readable come from the
 * dictionary, the decorative bars are hidden from assistive tech.
 */

const Tick = () => (
  <svg className="tick" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 6.3 L5 8.6 L9.5 3.6" />
  </svg>
);

// Waveform heights (percent) and which bars are "spoken" in the accent.
const WAVE = [30, 60, 85, 50, 95, 40, 70, 25, 55, 80, 45, 65, 35, 75];
const WAVE_ON = new Set([2, 3, 4]);
// Language codes are identifiers, the same in every language.
const VIDEO_LANGS = ['EN', 'HR', 'DE', 'NL'];
const CONTENT_LANGS = 'EN HR DE';
const UPTIME_DAYS = 20;

export default function ServiceVisual({ slug, ui }) {
  switch (slug) {
    case 'platforms': {
      const t = ui.deploy;
      return (
        <div className="mini pad">
          <div className="mini-head"><span>{t.head}</span><span>{t.env}</span></div>
          <ul>
            {t.steps.map((s) => <li key={s}><Tick />{s}</li>)}
            <li className="ready"><span className="status-dot" aria-hidden="true" />{t.ready}</li>
          </ul>
        </div>
      );
    }
    case 'ai': {
      const t = ui.generator;
      return (
        <div className="mini pad">
          <div className="chips">
            <span className="chip hi">{t.product}</span>
            <span className="chip">{t.tone}</span>
            <span className="chip">{t.lang}</span>
          </div>
          <p className="gen-out">{t.output}<span className="caret" aria-hidden="true" /></p>
        </div>
      );
    }
    case 'ecommerce': {
      const t = ui.content;
      return (
        <dl className="mini mini-table">
          {t.rows.map((row, i) => (
            <div key={row}>
              <dt>{row}</dt>
              {i < t.rows.length - 1 ? <dd>{CONTENT_LANGS}</dd> : <dd className="wait">{t.queued}</dd>}
            </div>
          ))}
        </dl>
      );
    }
    case 'video':
      return (
        <div className="mini pad-s">
          <div className="wave" aria-hidden="true">
            {WAVE.map((h, i) => <span key={i} className={WAVE_ON.has(i) ? 'on' : undefined} style={{ height: `${h}%` }} />)}
          </div>
          <div className="langs-mini">
            {VIDEO_LANGS.map((l, i) => <span key={l} className={i === 0 ? 'on' : undefined}>{l}</span>)}
          </div>
        </div>
      );
    case 'architecture': {
      const t = ui.monitor;
      return (
        <div className="mini pad-s">
          <div className="uptime-head"><span>{t.label}</span><span className="ok"><span className="status-dot" aria-hidden="true" />{t.status}</span></div>
          <div className="uptime" aria-hidden="true">
            {Array.from({ length: UPTIME_DAYS }, (_, i) => <span key={i} className={i >= UPTIME_DAYS - 2 ? 'now' : undefined} />)}
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}
