import VideoPage from '../../../components/pages/VideoPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = metaFor(DEFAULT_LOCALE, '/services/video', {
  title: d.videoPage.title,
  description: d.pageMeta.video.description,
  fileImage: true,
});

export default function Page() {
  return <VideoPage lang={DEFAULT_LOCALE} />;
}
