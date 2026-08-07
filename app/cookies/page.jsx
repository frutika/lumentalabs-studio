import Link from 'next/link';
import { site, legal, analytics } from '../../site.config';

export const metadata = {
  title: 'Cookies',
  description: 'This site sets no cookies. What that means, and what would change if it ever did.',
  alternates: { canonical: '/cookies' },
};

export default function Cookies() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1 className="page-title">Cookies</h1>
          <p className="lede">
            {analytics.enabled
              ? 'This site uses a limited set of cookies, listed in full below.'
              : 'This site sets no cookies at all. Not essential ones, not analytics, not anything.'}
          </p>
          <p className="stamp">Last updated {legal.updated}</p>
        </div>
      </header>

      <section>
        <div className="wrap prose">
          {analytics.enabled ? (
            <>
              <h2>What is in use</h2>
              <p>
                We use {analytics.provider?.name} to count visits.
                {analytics.provider?.cookieless
                  ? ' It is configured not to set cookies and not to identify individual visitors.'
                  : ' It sets its own cookies, which you can refuse without affecting the site.'}
              </p>
            </>
          ) : (
            <>
              <h2>The current state</h2>
              <p>
                There is nothing stored on your device by this site — no cookies, no local storage,
                no session storage. Every file the page loads comes from {site.domain} itself, so no
                third party gets the chance to set anything either.
              </p>
              <p>
                This is not a technicality we are relying on. There is no analytics tool, no
                advertising tag, no embedded video player, no external font, and no social button
                anywhere on the site. You can confirm it yourself: open your browser&apos;s developer
                tools, look at Application → Cookies, and you will find the list empty.
              </p>
            </>
          )}

          <h2>Why there is no consent banner</h2>
          <p>
            Consent is required before storing anything on your device that is not strictly necessary
            for the service you asked for. Since we store nothing at all, there is nothing to ask
            you about. A banner here would be decoration, and it would train you to click through
            banners that do matter elsewhere.
          </p>

          <h2>What is not a cookie</h2>
          <p>
            The web server keeps access logs, as every web server does. Those are recorded on our
            side rather than stored on your device, so they are not cookies — but they do involve
            your IP address, and they are described honestly in the{' '}
            <Link href="/privacy">privacy notice</Link>.
          </p>

          <h2>If this ever changes</h2>
          <p>
            If we add measurement later, we will prefer a tool that does not set cookies and does not
            identify individuals. If we ever add something that does, it will be listed on this page
            with its purpose and lifetime, and it will be off until you turn it on.
          </p>

          <p className="see-also">
            <Link href="/cookies/manage">Manage cookies</Link> ·{' '}
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
          </p>
        </div>
      </section>
    </>
  );
}
