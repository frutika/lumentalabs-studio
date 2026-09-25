import VideoPage from '../../../components/pages/VideoPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = metaFor(DEFAULT_LOCALE, '/services/video', {
  title: d.services.find((s) => s.slug === 'video').title,
  description: d.pageMeta.video.description,
});

export default function Page() {
  return <VideoPage lang={DEFAULT_LOCALE} />;
}
