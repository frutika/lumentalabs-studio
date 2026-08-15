import Link from 'next/link';
import PaketPicker from '../PaketPicker';
import { site } from '../../../site.config';
import { localePath } from '../../../content';

const services = [
  {
    title: 'Generiranje objava za društvene mreže',
    body: 'Facebook, Instagram i Google Business — objave koje zvuče kao da ih je pisala sama firma.',
  },
  {
    title: 'Vizuali i kratki video sadržaj',
    body: 'AI vizuali i kratki Reels/TikTok formati, prilagođeni brendu.',
  },
  {
    title: 'Mini SEO audit',
    body: 'Automatski PDF s ključnim problemima i preporukama.',
  },
  {
    title: 'Kampanje i promotivni tekstovi',
    body: 'Akcije, sezonske ponude i prodajni copy — bez generičkih fraza.',
  },
  {
    title: 'Upravljanje objavama (opcionalno)',
    body: 'Ako klijent želi, vodimo komunikaciju 30 dana.',
  },
];

const pillars = [
  ['Izravno', 'Bez posrednika i bez čekanja.'],
  ['Konkretno', 'Jasan dogovor i definirana isporuka.'],
  ['Mjerljivo', 'Klijent dobiva sadržaj koji može odmah objaviti.'],
];

export default function AIContentBooster({ lang }) {
  const p = (path) => localePath(lang, path);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Usluga</p>
          <h1 className="page-title">AI Content Booster</h1>
          <p className="lede">
            AI sadržaj za lokalne firme — generiran, uređen i spreman za objavu.
            Lokalni biznisi trebaju vidljivost, ali nemaju vremena za marketing.
            Mi generiramo sve što im treba — jasno, jednostavno, bez šuma.
          </p>
          <Link className="btn no-offset" href={p('/contact')}>Kontakt</Link>
        </div>
      </header>

      <section>
        <div className="wrap">
          <h2>Što radimo</h2>
          <p className="section-lede">
            Pet stvari, napravljenih kako treba, od istog tima koji ostaje uz vas i kad ustreba promjena.
          </p>
          <div className="grid">
            {services.map((s, i) => (
              <article className="card" key={s.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Paketi</h2>
          <p className="section-lede">
            Jasna cijena, jasna isporuka. Odaberite razinu koja odgovara trenutnoj fazi biznisa.
          </p>
          <PaketPicker />
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Kako radi</h2>
          <p className="section-lede">
            Nema praznih prezentacija. Najkraći put između onoga što vam treba i onoga što stvarno radi.
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

      <section>
        <div className="wrap">
          <h2>Recite nam što bi trebalo postojati.</h2>
          <p className="section-lede">Jasan dogovor, konkretna isporuka, mjerljiv rezultat.</p>
          <Link className="btn" href={p('/contact')}>Kontakt</Link>
          <Link className="btn ghost" href={`mailto:${site.email}`}>{site.email}</Link>
        </div>
      </section>
    </>
  );
}
