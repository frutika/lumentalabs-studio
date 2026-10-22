import { ogCard, OG_SIZE } from '../../../components/OgCard';
import { getDict, serviceDetailFor, serviceDetailsFor, DEFAULT_LOCALE } from '../../../../content';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Lumenta Labs service';

export function generateStaticParams() {
  return serviceDetailsFor(DEFAULT_LOCALE).map((s) => ({ slug: s.path }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const item = serviceDetailFor(DEFAULT_LOCALE, slug);
  return ogCard({
    eyebrow: getDict(DEFAULT_LOCALE).servicesPage.eyebrow,
    title: item.h1,
    text: item.lede,
  });
}
