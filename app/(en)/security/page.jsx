import DocPage from '../../components/pages/DocPage';
import { metaFor, DEFAULT_LOCALE } from '../../../content';
import { security, SECURITY_UPDATED } from '../../../content/legal';

const doc = security[DEFAULT_LOCALE];
export const metadata = metaFor(DEFAULT_LOCALE, '/security', doc.meta);

export default function Page() {
  return <DocPage lang={DEFAULT_LOCALE} path="/security" doc={doc} updated={SECURITY_UPDATED} />;
}
