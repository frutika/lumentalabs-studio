import WorkPage from '../../components/pages/WorkPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = metaFor(DEFAULT_LOCALE, '/work', d.pageMeta.work);

export default function Page() {
  return <WorkPage lang={DEFAULT_LOCALE} />;
}
