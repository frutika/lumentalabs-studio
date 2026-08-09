import Home from '../components/pages/Home';
import { metaFor, DEFAULT_LOCALE } from '../../content';

export const metadata = metaFor(DEFAULT_LOCALE, '/');

export default function Page() {
  return <Home lang={DEFAULT_LOCALE} />;
}
