import BlogPage from '../../components/pages/BlogPage';
import { enOnlyMeta, getDict, DEFAULT_LOCALE } from '../../../content';

const d = getDict(DEFAULT_LOCALE);
export const metadata = enOnlyMeta('/blog', d.blogPage.eyebrow, d.blogPage.lede, { ogType: 'website' });

export default function Page() {
  return <BlogPage />;
}
