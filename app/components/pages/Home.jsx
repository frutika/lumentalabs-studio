import Link from 'next/link';
import ReelEmbed from '../ReelEmbed';
import VodiciCTA from '../VodiciCTA';
import { site } from '../../../site.config';
import { getDict, localePath, servicesFor, worksFor, reelFor } from '../../../content';

export default function Home({ lang }) {
  const d = getDict(lang);
  const p = (path) => localePath(lang, path);
  const services = servicesFor(lang);
  const works = worksFor(lang);
  const reel = reelFor(lang);

  return (
    <>
      <header className="hero" id="top">
        {/* Muted, looping, decorative - the page must read fine if it never loads. */}
        <video autoPlay muted loop playsInline poster="/media/hero.jpg" aria-hidden="true">
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="wrap">
          <p className="eyebrow">{d.home.eyebrow}</p>
          <h1>{d.home.h1}</h1>
          <p className="lede">{d.home.lede}</p>
          <Link className="btn" href={p('/contact')}>{d.home.ctaPrimary}</Link>
          <Link className="btn ghost" href={p('/work')}>{d.home.ctaSecondary}</Link>
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>{d.home.wallH2}</h2>
          <p className="section-lede">{d.home.wallP}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{d.home.whatH2}</h2>
          <p className="section-lede">{d.home.whatLede}</p>
          <div className="grid">
            {services.map((s) => (
              <Link
                className="card linked"
                key={s.slug}
                href={s.slug === 'video' ? p('/services/video') : `${p('/services')}#${s.slug}`}
              >
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="quote">
            {d.home.quote[0]}<em>{d.home.quote[1]}</em>{d.home.quote[2]}
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{d.home.proofH2}</h2>
          <p className="section-lede">{d.home.proofLede}</p>
          <div className="grid">
            {works.map((w) => (
              <Link className="card linked" key={w.slug} href={p(`/work/${w.slug}`)}>
                <span className="num">{w.kind}</span>
                <h3>{w.name}</h3>
                <p>{w.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{d.home.howH2}</h2>
          <p className="section-lede">{d.home.howLede}</p>
          <div className="pillars">
            {d.pillars.map(([title, body]) => (
              <div className="pillar" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {reel ? (
        <section id="reel">
          <div className="wrap">
            <h2>{d.home.reelH2}</h2>
            <p className="section-lede">{d.home.reelLede}</p>
            <ReelEmbed
              id={reel.id}
              title={reel.title}
              poster="/media/reel-poster.jpg"
              playLabel={d.home.reelPlay}
              note={d.home.reelNote}
            />
          </div>
        </section>
      ) : null}

      <VodiciCTA lang={lang} />

      <section>
        <div className="wrap">
          <h2>{d.home.finalH2}</h2>
          <p className="section-lede">{d.home.finalLede}</p>
          <Link className="btn" href={p('/contact')}>{d.home.finalCta}</Link>
        </div>
      </section>
    </>
  );
}
