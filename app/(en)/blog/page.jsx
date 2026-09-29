import BlogPage from '../../components/pages/BlogPage';
import { metaFor, getDict, DEFAULT_LOCALE } from '../../../content';

const d = getDict(DEFAULT_LOCALE);

// metaFor rather than enOnlyMeta: the Croatian index at /hr/blog is the same
// page in another language, and an hreflang pair only counts if both sides
// declare it. The posts themselves stay single-language — see localesFor.
export const metadata = metaFor(DEFAULT_LOCALE, '/blog', {
  title: d.blogPage.eyebrow,
  description: d.blogPage.lede,
});

export default function Page() {
  return <BlogPage lang={DEFAULT_LOCALE} />;
}
