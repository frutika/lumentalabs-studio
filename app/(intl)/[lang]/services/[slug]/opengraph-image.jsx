import { ogCard, OG_SIZE } from '../../../../components/OgCard';
import { getDict, serviceDetailFor, serviceDetailsFor, LOCALES, DEFAULT_LOCALE } from '../../../../../content';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Lumenta Labs service';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).flatMap((lang) =>
    serviceDetailsFor(lang).map((s) => ({ lang, slug: s.path }))
  );
}

export default async function Image({ params }) {
  const { lang, slug } = await params;
  const item = serviceDetailFor(lang, slug);
  return ogCard({
    eyebrow: getDict(lang).servicesPage.eyebrow,
    title: item.h1,
    text: item.lede,
  });
}
