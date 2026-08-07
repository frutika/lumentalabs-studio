import Link from 'next/link';
import CookiePreferences from '../../components/CookiePreferences';
import { legal, analytics } from '../../../site.config';

export const metadata = {
  title: 'Manage cookies',
  description: 'See exactly what this site has stored on your device, and change it.',
  alternates: { canonical: '/cookies/manage' },
};

export default function ManageCookies() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">
            <Link href="/cookies">Cookies</Link> · Manage
          </p>
          <h1 className="page-title">Manage cookies</h1>
          <p className="lede">
            {analytics.enabled
              ? 'Choose what may be measured. Your choice is stored on your device and nowhere else.'
              : 'There is nothing to switch off yet — but you should not have to take our word for it. The panel below reads your browser and shows what it actually finds.'}
          </p>
          <p className="stamp">Last updated {legal.updated}</p>
        </div>
      </header>

      <section>
        <div className="wrap prose">
          <CookiePreferences
            analyticsEnabled={analytics.enabled}
            providerName={analytics.provider?.name ?? null}
          />

          <h2>Why this page is so short</h2>
          <p>
            Most consent panels list dozens of vendors because the site sold access to your
            attention. We did not, so there is nothing to enumerate. If that changes, every entry
            will appear here with its purpose and lifetime, switched off by default.
          </p>

          <p className="see-also">
            <Link href="/cookies">Cookie notice</Link> · <Link href="/privacy">Privacy</Link> ·{' '}
            <Link href="/terms">Terms</Link>
          </p>
        </div>
      </section>
    </>
  );
}
