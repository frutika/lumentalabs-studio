import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '../JsonLd';
import { PageTitle } from '../text';
import { site, legal } from '../../../site.config';
import { getDict, localePath } from '../../../content';
import { aboutPageSchema, breadcrumbSchema } from '../../../content/schema';

export default function AboutPage({ lang }) {
  const d = getDict(lang);
  const a = d.aboutPage;
  // Croatian and German already carry this text on their home pages. English
  // does not show the section there, so it keeps its own copy here.
  const story = a.story || d.home.about;

  return (
    <>
      <JsonLd data={aboutPageSchema(lang)} />
      <JsonLd data={breadcrumbSchema(lang, [{ name: a.eyebrow, path: '/about' }])} />
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{a.eyebrow}</p>
          <PageTitle text={a.h1} />
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="about-layout">
            <div className="about-media">
              <div className="about-photo">
                <Image src="/media/denis.jpg" alt={story.photoAlt} fill sizes="(max-width: 760px) 60vw, 280px" />
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
              <h2>{story.h2}</h2>
              {story.paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? 'section-lede' : undefined}>{para}</p>
              ))}
              <Link className="btn ghost no-offset" href={localePath(lang, '/work')}>{story.cta}</Link>
            </div>
          </div>
          <div className="stats">
            {story.stats.map(([num, label]) => (
              <div className="stat" key={label}>
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>{a.legalH2}</h2>
          <ul className="ticks wide">
            <li>{legal.entity}</li>
            <li>{a.labels.address}: {legal.address}</li>
            <li>{a.labels.oib}: {legal.oib}</li>
            <li>{a.labels.mbo}: {legal.mbo}</li>
            <li>{a.labels.email}: <a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.telephone ? <li>{a.labels.phone}: <a href={`tel:${site.telephone}`}>{site.telephone}</a></li> : null}
          </ul>
        </div>
      </section>
    </>
  );
}
