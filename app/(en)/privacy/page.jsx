import Link from 'next/link';
import { site, legal } from '../../../site.config';
import { Field, PendingNotice } from '../../components/LegalIdentity';
import { enOnlyMeta } from '../../../content';

export const metadata = enOnlyMeta(
  '/privacy',
  'Privacy',
  'What this site collects, what it does not, and what rights you have.'
);

export default function Privacy() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1 className="page-title">Privacy</h1>
          <p className="lede">
            This site sets no cookies, runs no analytics, and loads nothing from third parties. What
            little is processed is described below in full.
          </p>
          <p className="stamp">Last updated {legal.updated}</p>
        </div>
      </header>

      <section>
        <div className="wrap prose">
          <PendingNotice />

          <h2>Who is responsible</h2>
          <p>
            <Field value={legal.entity} />, <Field value={legal.address} />, OIB{' '}
            <Field value={legal.oib} />, is the controller of any personal data described here. You
            can reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What this site does not do</h2>
          <p>
            There is no analytics, no advertising, no tracking pixels, no embedded fonts from other
            domains, no social widgets, and no cookies. Every file the page loads comes from{' '}
            {site.domain} itself. There is also no contact form — the only way to write to us is
            email, which you control.
          </p>

          <h2>The one exception: the video</h2>
          <p>
            The homepage offers a introductory film hosted on YouTube. We deliberately do not embed
            it the usual way, because a normal embed contacts Google the moment the page opens. What
            you see before clicking is a still image served from {site.domain}, and nothing else.
          </p>
          <p>
            Only when you press play does the player load, and it loads from
            youtube-nocookie.com, YouTube&apos;s privacy-enhanced mode. From that point YouTube
            receives your IP address and may store data on your device under{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s privacy policy
            </a>
            , which we do not control. If you never press play, none of that happens.
          </p>

          <h2>What is unavoidably processed</h2>
          <p>
            Like every website, this one is served by a web server that keeps access logs. Those logs
            typically contain your IP address, the time of the request, the page requested, and your
            browser&apos;s user agent string. We do not use them to build a profile of you; they exist
            so the site can be operated, debugged and defended against abuse.
          </p>
          <p>
            The legal basis is our legitimate interest in keeping the site running and secure
            (Article 6(1)(f) GDPR). The logs are held by our hosting provider and retained for the
            period that provider applies to server logs.
          </p>

          <h2>If you email us</h2>
          <p>
            When you write to us, we receive your address, your message, and whatever you choose to
            put in it. We use it to answer you and, if it leads to work together, to carry out that
            work. The basis is your request and the steps taken before any contract (Article 6(1)(b)
            GDPR), or our legitimate interest in replying to enquiries.
          </p>
          <p>
            We keep correspondence for as long as it is relevant to an ongoing or possible
            engagement, and delete it when it no longer is.
          </p>

          <h2>Who else is involved</h2>
          <p>
            Our hosting and email provider processes the data above on our behalf, as a processor,
            under a contract that limits what they may do with it. We do not sell or share personal
            data with anyone else, and we do not transfer it outside the European Economic Area on
            purpose.
          </p>

          <h2>Links to our other projects</h2>
          <p>
            Pages under <Link href="/work">Work</Link> link to separate sites we operate. Those sites
            have their own privacy notices and their own processing — this one does not cover them.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to your data, its correction or erasure, restriction of
            processing, or portability, and you may object to processing based on legitimate
            interest. Write to <a href={`mailto:${site.email}`}>{site.email}</a> and we will answer
            within the statutory deadline.
          </p>
          <p>
            If you believe we have handled your data badly, you may complain to the Croatian Personal
            Data Protection Agency (AZOP) or to the supervisory authority where you live.
          </p>

          <h2>Changes</h2>
          <p>
            If this notice changes, the date at the top changes with it. There is no mailing list to
            notify, because we do not keep one.
          </p>

          <p className="see-also">
            See also: <Link href="/cookies">Cookies</Link> · <Link href="/terms">Terms</Link>
          </p>
        </div>
      </section>
    </>
  );
}
