import { lastWordEm, fitStyle } from './text';

/**
 * The closing band every page ends on: the same light and floor as the home
 * page's last section, a large heading and the page's own buttons.
 */
export default function ClosingCta({ title, lede, children }) {
  return (
    <section className="cta cta-inner">
      <div className="stage" aria-hidden="true">
        <span className="glow bottom" />
        <span className="floor" />
      </div>
      <div className="wrap">
        <h2 style={fitStyle(title)}>{lastWordEm(title)}</h2>
        {lede ? <p>{lede}</p> : null}
        <div className="btn-row">{children}</div>
      </div>
    </section>
  );
}
