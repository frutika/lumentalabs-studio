import Link from 'next/link';
import { services } from '../../site.config';

export const metadata = {
  title: 'Services',
  description:
    'Web platforms and applications, AI tools and integrations, content automation for e-commerce, and architecture, design and maintenance.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1 className="page-title">Four things, done properly.</h1>
          <p className="lede">
            Not a menu of everything. The work we do often enough to be genuinely good at it.
          </p>
        </div>
      </header>

      {services.map((s) => (
        <section id={s.slug} key={s.slug}>
          <div className="wrap detail">
            <div className="detail-side">
              <span className="num">{s.num}</span>
              <h2>{s.title}</h2>
            </div>
            <div className="detail-body">
              {s.body.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
              {s.page ? (
                <p>
                  <Link href={s.page}>How this works in detail →</Link>
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="wrap">
          <h2>Which of these do you need?</h2>
          <p className="section-lede">
            If you are not sure, describe the problem instead of the solution. We will tell you
            honestly whether we are the right people for it.
          </p>
          <Link className="btn" href="/contact">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
