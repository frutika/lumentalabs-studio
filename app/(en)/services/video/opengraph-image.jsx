import { ogCard, OG_SIZE } from '../../../components/OgCard';
import { getDict, DEFAULT_LOCALE } from '../../../../content';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Lumenta Labs video localisation';

export default function Image() {
  const d = getDict(DEFAULT_LOCALE);
  return ogCard({
    eyebrow: d.servicesPage.eyebrow,
    title: d.services.find((s) => s.slug === 'video').title,
    text: d.pageMeta.video.description,
  });
}
