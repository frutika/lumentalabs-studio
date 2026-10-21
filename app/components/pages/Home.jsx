import Link from 'next/link';
import Image from 'next/image';
import ReelEmbed from '../ReelEmbed';
import JsonLd from '../JsonLd';
import ProjectCanvas from '../home/ProjectCanvas';
import ServiceVisual from '../home/ServiceVisual';
import { getDict, localePath, servicesFor, worksFor, reelFor, postsFor } from '../../../content';
import { organizationSchema, websiteSchema } from '../../../content/schema';
import { site } from '../../../site.config';

/**
 * Display headings set their last word in italic accent. Split here rather
 * than stored as two keys, so the translations stay one sentence each.
 */
function lastWordEm(text) {
  const i = text.trimEnd().lastIndexOf(' ');
  if (i < 0) return <em>{text}</em>;
  return <>{text.slice(0, i + 1)}<em>{text.slice(i + 1)}</em></>;
}

/** "We don't just recommend this. We run on it." → second sentence dimmed. */
function secondSentenceDim(text) {
  const i = text.indexOf('. ');
  if (i < 0) return text;
  return <>{text.slice(0, i + 2)}<span className="dim">{text.slice(i + 2)}</span></>;
}

const Arrow = () => <span aria-hidden="true">→</span>;

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5" />
  </svg>
);

// Each product's name, set the way the product sets it. Names are brand facts
// from site.config; only the typography lives here.
function Wordmark({ slug, name }) {
  switch (slug) {
    case 'lumenta-ai': return <span className="wm-bold">Lumenta<em>AI</em></span>;
    case 'the-dog-habit': return <span className="wm-serif it">{name}</span>;
    case 'unmaskedwords': return <span className="wm-mono">unmasked_words</span>;
    case 'docuflow-ai': return <span className="wm-bold light">DocuFlow<em>AI</em></span>;
    default: return <span className="wm-serif">{name}</span>;
  }
}

export default function Home({ lang }) {
  const d = getDict(lang);
  const h = d.home;
  const p = (path) => localePath(lang, path);
  const services = servicesFor(lang);
  const works = worksFor(lang);
  const reel = reelFor(lang);
  // Same gate as everything else that does not exist in every language: no
  // `home.blogH2` key in a dictionary means no section renders. The posts are
  // this language's own — a home page linking three articles the reader cannot
  // read is worse than no section at all.
  const latestPosts = h.blogH2 ? postsFor(lang).slice(0, 3) : [];
  const serviceHref = (s) => (s.slug === 'video' ? p('/services/video') : `${p('/services')}#${s.slug}`);
  const v = d.vodici;

  const serviceCard = (s) => (
    <article className="svc" key={s.slug}>
      <div>
        <span className="num">{s.num}</span>
        <h3><Link href={serviceHref(s)}>{s.title}</Link></h3>
        <p>{s.short}</p>
      </div>
      <ServiceVisual slug={s.slug} ui={h.serviceUi} />
    </article>
  );

  return (
    <div className="home">
      <JsonLd data={organizationSchema(lang)} />
      <JsonLd data={websiteSchema(lang)} />
      <div className="glow top" aria-hidden="true" />

      <header className="hero" id="top">
        <div className="wrap">
          <Link className="announce" href={p('/work/docuflow-ai')}>
            <span className="announce-tag">{h.announce.tag}</span>
            {h.announce.text}
            <Arrow />
          </Link>
          <h1>{lastWordEm(h.h1)}</h1>
          <p className="lede">{h.lede}</p>
          <div className="btn-row">
            <Link className="btn" href={p('/contact')}>{h.ctaPrimary} <Arrow /></Link>
            <Link className="btn ghost" href={p('/work')}>{h.ctaSecondary}</Link>
          </div>
          <ProjectCanvas works={works} c={h.canvas} href={(slug) => p(`/work/${slug}`)} />
        </div>
      </header>

      <section className="h-sec ruled">
        <div className="wrap gap">
          <p className="label">{h.wallLabel}</p>
          <div>
            <h2>{h.wallH2}</h2>
            <p>{h.wallP}</p>
          </div>
        </div>
      </section>

      <section className="h-sec" id="services" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="h-head">
            <h2>{h.whatH2}</h2>
            <p>{h.whatLede}</p>
          </div>
          <div className="svc-row">{services.slice(0, 2).map(serviceCard)}</div>
          <div className="svc-row three">{services.slice(2).map(serviceCard)}</div>
        </div>
      </section>

      <section className="ivory">
        <div className="wrap">
          <p className="label">{h.quoteLabel}</p>
          <p className="ivory-quote">{h.quote[0]}<em>{h.quote[1]}</em>{h.quote[2]}</p>
          {h.quoteNote ? <p className="ivory-note">{h.quoteNote}</p> : null}
        </div>
      </section>

      <section className="h-sec" id="work">
        <div className="wrap">
          <div className="h-head">
            <h2>{secondSentenceDim(h.proofH2)}</h2>
            <p>{h.proofLede}</p>
          </div>
          <div className="gallery">
            {works.map((w) => {
              const external = Boolean(w.href);
              const body = (
                <>
                  {/* The wordmark is styling (e.g. "unmasked_words"); the plain name is
                      what a screen reader gets. */}
                  <div className="tile-art" aria-hidden="true"><Wordmark slug={w.slug} name={w.name} /></div>
                  <span className="sr">{w.name}{external ? ` (${d.a11y.newTab})` : ''}</span>
                  <div className="tile-body">
                    <div className="tile-meta">
                      <span className={`status${external ? '' : ' internal'}`}>{w.kind}</span>
                      {external ? <ExternalIcon /> : <Arrow />}
                    </div>
                    <p>{w.short}</p>
                  </div>
                </>
              );
              // Live products open the product itself; the internal tool has
              // nothing public, so it opens its case study instead.
              return external ? (
                <a key={w.slug} className="tile" href={w.href} target="_blank" rel="noopener noreferrer">
                  {body}
                </a>
              ) : (
                <Link key={w.slug} className="tile" href={p(`/work/${w.slug}`)}>
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {h.about ? (
        <section className="h-sec ruled">
          <div className="wrap">
            <div className="about-layout">
              <div className="about-media">
                <div className="about-photo">
                  <Image
                    src="/media/denis.jpg"
                    alt={h.about.photoAlt}
                    fill
                    sizes="(max-width: 760px) 60vw, 280px"
                  />
                </div>
                <div className="about-social">
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn<span className="sr"> ({d.a11y.newTab})</span>
                  </a>
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                    GitHub<span className="sr"> ({d.a11y.newTab})</span>
                  </a>
                </div>
              </div>
              <div className="about-text">
                <h2>{h.about.h2}</h2>
                {h.about.paragraphs.map((para, i) => (
                  <p key={i} className={i === 0 ? 'section-lede' : undefined}>{para}</p>
                ))}
                <Link className="btn ghost no-offset" href={p('/work')}>{h.about.cta}</Link>
              </div>
            </div>
            <div className="stats">
              {h.about.stats.map(([num, label]) => (
                <div className="stat" key={label}>
                  <span className="stat-num">{num}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="h-sec ruled" id="how">
        <div className="wrap how">
          <div className="how-copy">
            <h2>{h.howH2}</h2>
            <p>{h.howLede}</p>
            <ol className="steps">
              {d.pillars.map(([title, body], i) => (
                <li key={title}>
                  <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><span>{body}</span></div>
                </li>
              ))}
            </ol>
          </div>
          <Board b={h.board} />
        </div>
      </section>

      {reel ? (
        <section className="h-sec" id="reel" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <ReelEmbed
              id={reel.id}
              title={reel.title}
              poster="/media/reel-poster.jpg"
              heading={h.reelH2}
              meta={h.reelMeta}
              playLabel={h.reelPlay}
              note={h.reelNote}
            />
          </div>
        </section>
      ) : null}

      {latestPosts.length ? (
        <section className="h-sec ruled" id="blog">
          <div className="wrap">
            <div className="h-head">
              <div>
                <h2>{h.blogH2}</h2>
                <p style={{ marginTop: 12 }}>{h.blogLede}</p>
              </div>
              <Link className="more-link" href={p('/blog')}>{h.blogCta} <Arrow /></Link>
            </div>
            <ul className="posts">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={p(`/blog/${post.slug}`)}>
                    <span className="post-tag">{post.tags[0]}</span>
                    <span className="post-text">
                      <span className="post-title">{post.title}</span>
                      <span className="post-excerpt">{post.excerpt}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* The guides, where the dictionary has them (Croatian only). */}
      {v?.href ? (
        <section className="h-sec ruled guides">
          <div className="wrap">
            <p className="eyebrow">{v.eyebrow}</p>
            <h2>{v.h2}</h2>
            <p className="section-lede">{v.lede}</p>
            <ul className="ticks wide">
              {v.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link className="btn" href={p(v.href)}>{v.cta}</Link>
            <p className="stamp">{v.note}</p>
          </div>
        </section>
      ) : null}

      <section className="cta" id="contact">
        <div className="glow bottom" aria-hidden="true" />
        <div className="wrap">
          <h2>{lastWordEm(h.finalH2)}</h2>
          <p>{h.finalLede}</p>
          <div className="btn-row">
            <Link className="btn" href={p('/contact')}>{h.finalCta} <Arrow /></Link>
            <a className="btn mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const StatusIcon = ({ done, pct }) =>
  done ? (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="var(--internal)" />
      <path d="M4 7.2 L6.2 9.2 L10 5" fill="none" stroke="var(--surface)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="6" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      {/* Pie slice for the share done, drawn clockwise from 12 o'clock. */}
      <path d={pie(pct)} fill="var(--accent)" />
    </svg>
  );

function pie(pct) {
  const a = (Math.min(pct, 99.9) / 100) * 2 * Math.PI;
  const x = (7 + 6 * Math.sin(a)).toFixed(2);
  const y = (7 - 6 * Math.cos(a)).toFixed(2);
  return `M7 7 L7 1 A6 6 0 ${pct > 50 ? 1 : 0} 1 ${x} ${y} Z`;
}

/** Linear-style task list. Illustrative; the tasks live in the dictionary. */
function Board({ b }) {
  const groups = [
    [b.inProgress, b.tasks.filter((t) => !t.done)],
    [b.done, b.tasks.filter((t) => t.done)],
  ];
  return (
    <div className="board">
      <div className="board-bar">
        <strong>{b.title} <span>· {b.sub}</span></strong>
        <span className="mono">{b.note}</span>
      </div>
      <div className="board-scroll">
        <div className="board-list">
          {groups.map(([label, tasks]) => (
            <div key={label}>
              <h3 className="board-group">{label}</h3>
              <ul>
                {tasks.map((t) => (
                  <li key={t.id} className={`task${t.done ? ' done' : ''}`}>
                    <span className="task-id">{t.id}</span>
                    <StatusIcon done={t.done} pct={t.pct} />
                    <span className="task-title">{t.title}</span>
                    <span className="task-tag">{t.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
