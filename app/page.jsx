import { site } from '../site.config';

const services = [
  {
    num: '01',
    title: 'Web platforms and applications',
    body: 'From idea to production. Not a prototype that looks good in a demo — a working product, deployed, monitored, and ready for real users on day one.',
  },
  {
    num: '02',
    title: 'AI tools and integrations',
    body: 'Content generation that keeps your voice consistent across every page. Process automation that removes the repetitive work nobody should be doing by hand.',
  },
  {
    num: '03',
    title: 'Content automation for e-commerce',
    body: 'Product descriptions, category pages and campaigns, generated at the scale a real catalogue demands — in the language your customers actually buy in.',
  },
  {
    num: '04',
    title: 'Architecture, design and maintenance',
    body: 'One team owns the stack end to end. Nothing gets lost between a designer, a developer, and an agency that outsourced both.',
  },
];

const pillars = [
  ['Direct', 'No middlemen, no account managers relaying questions.'],
  ['Concrete', 'A clear agreement and a defined delivery, not a deck.'],
  ['Measurable', 'You know what is being built, what it costs, and when it ships.'],
];

export default function Page() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <span className="dot" aria-hidden="true" />
            {site.name}
          </a>
          <div>
            <a className="link" href="#services">What we do</a>
            <a className="link" href="#work">Our products</a>
            <a className="link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        {/* Muted, looping, decorative - the page must read fine if it never loads. */}
        <video autoPlay muted loop playsInline poster="/media/hero.jpg" aria-hidden="true">
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="wrap">
          <p className="eyebrow">Digital studio</p>
          <h1>Web platforms, AI tools, automation.</h1>
          <p className="lede">
            Products that launch, get used, and grow — without unnecessary complication.
          </p>
          <a className="btn" href="#contact">Start a project</a>
          <a className="btn ghost" href="#services">See what we do</a>
        </div>
      </header>

      <section id="problem">
        <div className="wrap">
          <h2>Every business eventually hits the same wall.</h2>
          <p className="section-lede">
            The idea is clear. The plan is ready. But turning it into something real — something that
            actually runs — is where most projects stall. That gap is the whole reason we exist.
          </p>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <h2>What we do</h2>
          <p className="section-lede">
            Four things, done properly, by the same team that will still be there when it needs
            changing.
          </p>
          <div className="grid">
            {services.map((s) => (
              <article className="card" key={s.num}>
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai">
        <div className="wrap">
          <p className="quote">
            Not AI as a headline. <em>AI as infrastructure</em> — built into the systems you already
            use, doing a specific job you can measure.
          </p>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <h2>We don&apos;t just recommend this. We run on it.</h2>
          <p className="section-lede">
            Everything we offer clients, we built and proved on our own projects first — the same
            architecture, the same pipelines, the same standards.
          </p>
          <div className="grid">
            {site.products.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.href ? <a href={p.href}>{p.name}</a> : p.name}</h3>
                <p>{p.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how">
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

      {site.reelUrl ? (
        <section id="reel">
          <div className="wrap">
            <h2>The studio, in three minutes</h2>
            <p className="section-lede">A short introduction to how we build.</p>
            <iframe
              className="reel"
              src={site.reelUrl}
              title={`${site.name} reel`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      <section id="contact">
        <div className="wrap">
          <h2>Tell us what should exist.</h2>
          <p className="section-lede">
            A clear agreement, a concrete delivery, a measurable result. Write to us and we will tell
            you honestly whether we are the right people for it.
          </p>
          <a className="btn" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </section>

      <footer>
        <div className="wrap foot-inner">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.domain}</span>
        </div>
      </footer>
    </>
  );
}
