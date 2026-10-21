/**
 * The illustration at the top of each product tile: a small hint of what the
 * product does, drawn rather than screenshotted. Purely decorative - the tile
 * says the product's name and description in text below it.
 */

const WAVE = [20, 45, 80, 60, 95, 40, 70, 30, 55, 85, 45, 65];
const WAVE_ON = 5;

export default function TileArt({ slug, sample }) {
  switch (slug) {
    case 'bezmaske':
      return (
        <div className="art art-reviews">
          {[4, 3, 5].map((n, i) => (
            <div key={i} className={i === 1 ? 'review in' : 'review'}>
              <span className="avatar" /><span className="line" />
              <span className="stars">{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
            </div>
          ))}
        </div>
      );
    case 'lumenta-ai':
      return (
        <div className="art art-gen">
          <span className="art-cmd">generate → product_description</span>
          <p>{sample[0]}<mark>{sample[1]}</mark><span className="caret" /></p>
        </div>
      );
    case 'the-dog-habit':
      return (
        <div className="art art-video">
          <div className="screen"><span className="play-mini" /></div>
          <div className="timeline"><span className="on" /><span /><span /><span /></div>
        </div>
      );
    case 'unmaskedwords':
      return (
        <div className="art art-masked">
          <div><span style={{ width: 90 }} /><span style={{ width: 60 }} /><em>unsigned</em></div>
          <div><span style={{ width: 120 }} /><span style={{ width: 74 }} /><span style={{ width: 40 }} /></div>
          <div><span style={{ width: 56 }} /><span style={{ width: 140 }} /></div>
        </div>
      );
    case 'docuflow-ai':
      return (
        <div className="art art-docs">
          <span className="doc back" />
          <span className="doc front">
            <span className="bar ink" /><span className="bar" /><span className="bar" /><span className="bar short" />
            <span className="ok">✓</span>
          </span>
        </div>
      );
    case 'narrator':
      return (
        <div className="art art-voice">
          <div className="wave">
            {WAVE.map((h, i) => <span key={i} className={i < WAVE_ON ? 'on' : undefined} style={{ height: `${h}%` }} />)}
          </div>
          <span className="art-cmd">timing · music · subtitles · translation</span>
        </div>
      );
    default:
      return null;
  }
}
