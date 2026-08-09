import EmailAddress from '../EmailAddress';
import { site } from '../../../site.config';
import { getDict } from '../../../content';

export default function ContactPage({ lang }) {
  const d = getDict(lang);
  const c = d.contactPage;

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="page-title">{c.h1}</h1>
          <p className="lede">{c.lede}</p>
          {/* No form and no third-party script - nothing to leak, nothing to break. */}
          <EmailAddress
            email={site.email}
            openLabel={c.openMail}
            copyLabel={c.copy}
            copiedLabel={c.copied}
          />
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>{c.expectH2}</h2>
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

      <section>
        <div className="wrap">
          <h2>{c.helpH2}</h2>
          <ul className="ticks wide">
            {c.help.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
