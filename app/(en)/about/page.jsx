import AboutPage from '../../components/pages/AboutPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = metaFor(DEFAULT_LOCALE, '/about', d.pageMeta.about);

export default function Page() {
  return <AboutPage lang={DEFAULT_LOCALE} />;
}
