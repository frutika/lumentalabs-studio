import NotFoundPage from '../../components/pages/NotFoundPage';
import { getDict, DEFAULT_LOCALE } from '../../../content';

// not-found.jsx receives no params, so it cannot know which language it is in.
// The surrounding layout still supplies the right <html lang> and chrome.
export const metadata = {
  title: getDict(DEFAULT_LOCALE).notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage lang={DEFAULT_LOCALE} />;
}
