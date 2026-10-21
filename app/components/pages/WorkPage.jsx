import Link from 'next/link';
import ClosingCta from '../ClosingCta';
import TileArt from '../home/TileArt';
import { PageTitle } from '../text';
import { getDict, localePath, worksFor } from '../../../content';

export default function WorkPage({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{d.workPage.eyebrow}</p>
          <PageTitle text={d.workPage.h1} />
          <p className="lede">{d.workPage.lede}</p>
        </div>
      </header>

      <section>
        <div className="wrap">
          {/* h2, not h3: on this page the tiles sit directly under the h1, with
              no section heading between them. On the home page the same tiles
              carry their name as text because a real h2 introduces them. */}
          <div className="gallery">
            {worksFor(lang).map((w) => (
              <Link className="tile" key={w.slug} href={p(`/work/${w.slug}`)}>
                <div className="tile-art" aria-hidden="true"><TileArt slug={w.slug} sample={d.home.tileSample} /></div>
                <div className="tile-body">
                  <div className="tile-meta">
                    <h2 className="tile-name">{w.name}</h2>
                    <span className={`status${w.href ? '' : ' internal'}`}>{w.kind}</span>
                  </div>
                  <p>{w.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={d.home.finalH2} lede={d.home.finalLede}>
        <Link className="btn" href={p('/contact')}>{d.home.finalCta} <span aria-hidden="true">→</span></Link>
      </ClosingCta>
    </>
  );
}
