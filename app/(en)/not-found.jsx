import NotFoundPage from '../components/pages/NotFoundPage';
import { getDict, DEFAULT_LOCALE } from '../../content';

// Covers both notFound() inside this group and any URL that matches no route at
// all. Replaces Next's built-in fallback, whose entire <title> was
// "404: This page could not be found." with no layout and no branding.
// A 404 must not be indexed, and must not claim a canonical of its own.
export const metadata = {
  title: getDict(DEFAULT_LOCALE).notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage lang={DEFAULT_LOCALE} />;
}
