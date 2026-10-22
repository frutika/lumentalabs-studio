import { ogCard, OG_SIZE } from '../../../../components/OgCard';
import { getDict, LOCALES, DEFAULT_LOCALE } from '../../../../../content';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Lumenta Labs video localisation';

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export default async function Image({ params }) {
  const { lang } = await params;
  const d = getDict(lang);
  return ogCard({
    eyebrow: d.servicesPage.eyebrow,
    title: d.services.find((s) => s.slug === 'video').title,
    text: d.pageMeta.video.description,
  });
}
