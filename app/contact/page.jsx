import { site, pillars } from '../../site.config';
import EmailAddress from '../components/EmailAddress';

export const metadata = {
  title: 'Contact',
  description: 'A clear agreement, a concrete delivery, a measurable result. Tell us what should exist.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Tell us what should exist.</h1>
          <p className="lede">
            Describe the problem rather than the solution. If we are not the right people for it, we
            will say so — that answer is free and saves us both a month.
          </p>
          {/* No form and no third-party script - nothing to leak, nothing to break. */}
          <EmailAddress email={site.email} />
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>What to expect</h2>
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

      <section>
        <div className="wrap">
          <h2>What helps us answer quickly</h2>
          <ul className="ticks wide">
            <li>What the thing is meant to do, in plain words</li>
            <li>Whether something already exists, and what is wrong with it</li>
            <li>Roughly when it needs to be live, and what happens if it is not</li>
            <li>A budget range — even a rough one saves a lot of guessing</li>
          </ul>
        </div>
      </section>
    </>
  );
}
