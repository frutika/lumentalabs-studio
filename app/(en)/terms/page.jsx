import Link from 'next/link';
import { site, legal } from '../../../site.config';
import { Field, PendingNotice } from '../../components/LegalIdentity';

export const metadata = {
  title: 'Terms',
  description: 'The terms under which this website is provided.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1 className="page-title">Terms</h1>
          <p className="lede">
            These terms cover this website. They do not cover work we do for clients — that is
            governed by whatever we sign with you.
          </p>
          <p className="stamp">Last updated {legal.updated}</p>
        </div>
      </header>

      <section>
        <div className="wrap prose">
          <PendingNotice />

          <h2>Who operates this site</h2>
          <p>
            {site.domain} is operated by <Field value={legal.entity} />,{' '}
            <Field value={legal.address} />, OIB <Field value={legal.oib} />. Contact:{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What this site is</h2>
          <p>
            It describes what we do and what we have built. Nothing here is a binding offer, a quote,
            or a promise of a particular result. A project exists when both sides have agreed it in
            writing — not when a page describes a service.
          </p>

          <h2>Accuracy and availability</h2>
          <p>
            We write these pages carefully, but we do not warrant that everything is complete,
            current or error-free, and we do not guarantee the site is always reachable. We may
            change, move or remove any part of it without notice.
          </p>

          <h2>Our content</h2>
          <p>
            The text, design, code and video on this site belong to us unless stated otherwise. You
            may read it, link to it, and quote it with attribution. You may not republish it as your
            own, or reuse it to present someone else&apos;s services.
          </p>
          <p>
            The names of our own products under <Link href="/work">Work</Link> — and any other names
            or marks mentioned — belong to their respective owners.
          </p>

          <h2>Links to other sites</h2>
          <p>
            We link to our own products and occasionally elsewhere. We do not control those sites and
            are not responsible for what they contain or how they handle your data.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent the law allows, we are not liable for loss arising from use of this website
            — including decisions taken on the basis of what it says. Nothing here limits liability
            that cannot lawfully be limited, such as for intent or gross negligence, or any
            mandatory consumer rights you have.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the law of {legal.jurisdiction}, and disputes fall to the
            courts with jurisdiction over our registered seat. If you are a consumer, this does not
            deprive you of the protection of mandatory rules in your country of residence.
          </p>

          <h2>Changes</h2>
          <p>
            We may revise these terms. The version published here, with the date above, is the one
            that applies.
          </p>

          <p className="see-also">
            See also: <Link href="/privacy">Privacy</Link> · <Link href="/cookies">Cookies</Link>
          </p>
        </div>
      </section>
    </>
  );
}
