import Link from 'next/link';
import { site } from '../../../site.config';

export const metadata = {
  title: 'Narrated video and localisation',
  description:
    'We narrate, mix and caption video — and turn one film into every language you sell in, from a single production pass.',
  alternates: { canonical: '/services/video' },
};

const steps = [
  {
    num: '01',
    title: 'The script',
    body: 'We write narration for the footage you already have, in the voice your brand actually uses. Length is worked backwards from the runtime, so nothing is rushed and nothing runs out of picture.',
  },
  {
    num: '02',
    title: 'The voice',
    body: 'Neural voices across more than a hundred language and regional variants, with control over pace, pitch and delivery. You hear candidates on your own footage before anything is finalised.',
  },
  {
    num: '03',
    title: 'The mix',
    body: 'The existing soundtrack is not thrown away. It ducks under the voice by a measured amount and comes back up in the gaps, so the film keeps its energy instead of turning into a slideshow with a voice on top.',
  },
  {
    num: '04',
    title: 'The delivery',
    body: 'A finished master per language, plus a caption file named the way each platform requires. No re-encoding of your picture unless you ask for burned-in titles.',
  },
];

export default function VideoService() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href="/services">Services</Link> · 04
          </p>
          <h1 className="page-title">One film. Every market you sell in.</h1>
          <p className="lede">
            Shooting again for each language is how video budgets die. We narrate what you already
            have, and produce a version for every market from a single pass.
          </p>
          <Link className="btn no-offset" href="/contact">Talk to us about a film</Link>
        </div>
      </header>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>The part nobody solves</h2></div>
          <div className="detail-body">
            <p>
              Most footage is not silent. It has music, or a presenter, or an interview — and that is
              exactly where automated voiceover tools fall apart. They assume empty audio and talk
              straight over whoever is already speaking.
            </p>
            <p>
              We detect where the source already carries a voice and place the narration around it.
              Your presenter is never spoken over. The music never buries the line. That is not a
              setting somebody remembered to tick; it is measured from the audio itself.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>How it runs</h2>
          <p className="section-lede">
            Four stages, and you see output at each one rather than at the end.
          </p>
          <div className="grid">
            {steps.map((s) => (
              <article className="card" key={s.num}>
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="quote">
            The film on our homepage was made this way — <em>script, voice, mix and captions</em>,
            with tooling we built because nothing off the shelf did it properly.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>Captions are not an afterthought</h2></div>
          <div className="detail-body">
            <p>
              Most people meet your video with the sound off. Without captions the narration you paid
              for simply does not exist for them.
            </p>
            <p>
              Every delivery includes a caption file per language, named the way the destination
              requires — Facebook rejects the upload outright if the filename is wrong, which is the
              kind of detail that quietly costs a campaign its reach.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap detail">
          <div className="detail-side"><h2>What you get</h2></div>
          <div className="detail-body">
            <ul className="ticks">
              <li>A finished master per language, picture untouched</li>
              <li>A caption file per language, in the format each platform accepts</li>
              <li>The narration script, so you own the words and can reuse them</li>
              <li>Timecodes, so a later edit does not mean starting over</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Have footage that could be working harder?</h2>
          <p className="section-lede">
            Send us what you have and which markets matter. We will tell you what it would take —
            and if it is not worth doing, we will say that instead.
          </p>
          <Link className="btn" href="/contact">Get in touch</Link>
          <Link className="btn ghost" href={`mailto:${site.email}`}>{site.email}</Link>
        </div>
      </section>
    </>
  );
}
