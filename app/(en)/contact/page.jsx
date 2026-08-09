import ContactPage from '../../components/pages/ContactPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = metaFor(DEFAULT_LOCALE, '/contact', { title: d.contactPage.eyebrow });

export default function Page() {
  return <ContactPage lang={DEFAULT_LOCALE} />;
}
