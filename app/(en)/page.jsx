import Home from '../components/pages/Home';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../content';

const m = getDict(DEFAULT_LOCALE).pageMeta.home;
export const metadata = metaFor(DEFAULT_LOCALE, '/', m);

export default function Page() {
  return <Home lang={DEFAULT_LOCALE} />;
}
