import { ogCard, loadShot, OG_SIZE } from '../../../components/OgCard';
import { getDict, workFor, worksFor, DEFAULT_LOCALE } from '../../../../content';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Lumenta Labs case study';

export function generateStaticParams() {
  return worksFor(DEFAULT_LOCALE).map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const item = workFor(DEFAULT_LOCALE, slug);
  return ogCard({
    eyebrow: getDict(DEFAULT_LOCALE).workPage.eyebrow,
    title: item.title || item.name,
    text: item.short,
    image: await loadShot(item.shot),
  });
}
