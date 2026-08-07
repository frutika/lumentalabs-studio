import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work } from '../../../site.config';

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return {};
  return { title: item.name, description: item.short };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) notFound();

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href="/work">Work</Link> · {item.kind}
          </p>
          <h1 className="page-title">{item.name}</h1>
          <p className="lede">{item.short}</p>
          {item.href ? (
            <a className="btn ghost no-offset" href={item.href} target="_blank" rel="noopener noreferrer">
              Visit {item.name} ↗
            </a>
          ) : null}
        </div>
      </header>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>The problem</h2></div>
          <div className="detail-body"><p>{item.problem}</p></div>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>What we built</h2></div>
          <div className="detail-body">
            <ul className="ticks">
              {item.built.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>Why it matters to you</h2></div>
          <div className="detail-body"><p>{item.lesson}</p></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Want something like this?</h2>
          <p className="section-lede">Describe the problem and we will tell you what it takes.</p>
          <Link className="btn" href="/contact">Get in touch</Link>
          <Link className="btn ghost" href="/work">All work</Link>
        </div>
      </section>
    </>
  );
}
