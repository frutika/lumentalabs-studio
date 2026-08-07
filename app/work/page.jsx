import Link from 'next/link';
import { work } from '../../site.config';

export const metadata = {
  title: 'Work',
  description:
    'Bezmaske, Lumenta AI, The Dog Habit and UnmaskedWords — everything we offer clients, built and proved on our own projects first.',
  alternates: { canonical: '/work' },
};

export default function Work() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Work</p>
          <h1 className="page-title">We run on what we sell.</h1>
          <p className="lede">
            Not client logos on a wall. Four products we built, deployed and still maintain — and
            every one of them is live right now. Open them and judge for yourself.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
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
    </>
  );
}
