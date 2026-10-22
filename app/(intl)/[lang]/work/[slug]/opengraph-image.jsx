import { ogCard, loadShot, OG_SIZE } from '../../../../components/OgCard';
import { getDict, workFor, worksFor, LOCALES, DEFAULT_LOCALE } from '../../../../../content';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Lumenta Labs case study';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).flatMap((lang) =>
    worksFor(lang).map((w) => ({ lang, slug: w.slug }))
  );
}

export default async function Image({ params }) {
  const { lang, slug } = await params;
  const item = workFor(lang, slug);
  return ogCard({
    eyebrow: getDict(lang).workPage.eyebrow,
    title: item.title || item.name,
    text: item.short,
    image: await loadShot(item.shot),
  });
}
