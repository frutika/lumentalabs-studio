import EmailAddress from '../EmailAddress';
import ContactForm from '../ContactForm';
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
          {/* The form posts to our own route and our own database - no third-party
              script, no embed. Mail stays the first option for anyone who would
              rather write it themselves, and it is what the form falls back to
              when the request fails. */}
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
          <h2>{c.form.h2}</h2>
          <ContactForm lang={lang} />
        </div>
      </section>

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
