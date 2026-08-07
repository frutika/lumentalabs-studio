import Link from 'next/link';
import ReelEmbed from './components/ReelEmbed';
import { site, services, work, pillars } from '../site.config';

// Canonicals are set per page, never in the layout - a layout-level canonical
// would point every page at the homepage.
export const metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        {/* Muted, looping, decorative - the page must read fine if it never loads. */}
        <video autoPlay muted loop playsInline poster="/media/hero.jpg" aria-hidden="true">
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="wrap">
          <p className="eyebrow">Digital studio</p>
          <h1>{site.tagline}</h1>
          <p className="lede">
            Products that launch, get used, and grow — without unnecessary complication.
          </p>
          <Link className="btn" href="/contact">Start a project</Link>
          <Link className="btn ghost" href="/work">See what we have built</Link>
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>Every business eventually hits the same wall.</h2>
          <p className="section-lede">
            The idea is clear. The plan is ready. But turning it into something real — something that
            actually runs — is where most projects stall. That gap is the whole reason we exist.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>What we do</h2>
          <p className="section-lede">
            Four things, done properly, by the same team that will still be there when it needs
            changing.
          </p>
          <div className="grid">
            {services.map((s) => (
              <Link className="card linked" key={s.slug} href={`/services#${s.slug}`}>
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
            Not AI as a headline. <em>AI as infrastructure</em> — built into the systems you already
            use, doing a specific job you can measure.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>We don&apos;t just recommend this. We run on it.</h2>
          <p className="section-lede">
            Everything we offer clients, we built and proved on our own projects first — the same
            architecture, the same pipelines, the same standards. All four are live, and you can
            open any of them right now.
          </p>
          <div className="grid">
            {work.map((w) => (
              <Link className="card linked" key={w.slug} href={`/work/${w.slug}`}>
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
          <h2>How we work</h2>
          <p className="section-lede">
            No empty presentations. The shortest path between what you need and something running in
            production.
          </p>
          <div className="pillars">
            {pillars.map(([title, body]) => (
              <div className="pillar" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {site.reelId ? (
        <section id="reel">
          <div className="wrap">
            <h2>The studio, in three minutes</h2>
            <p className="section-lede">A short introduction to how we build.</p>
            <ReelEmbed id={site.reelId} title={site.reelTitle} poster="/media/reel-poster.jpg" />
          </div>
        </section>
      ) : null}

      <section>
        <div className="wrap">
          <h2>Tell us what should exist.</h2>
          <p className="section-lede">
            A clear agreement, a concrete delivery, a measurable result.
          </p>
          <Link className="btn" href="/contact">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
