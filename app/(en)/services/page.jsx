import ServicesPage from '../../components/pages/ServicesPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = metaFor(DEFAULT_LOCALE, '/services', { title: d.servicesPage.eyebrow });

export default function Page() {
  return <ServicesPage lang={DEFAULT_LOCALE} />;
}
