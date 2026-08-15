/**
 * The Booster packages, in one place. The landing page renders them as cards
 * and the picker renders the same three as radio options — two lists that drift
 * apart are how a price ends up wrong on one page and right on the other.
 *
 * Croatian-only, like the offer itself, so these strings live here rather than
 * in the per-language dictionaries.
 */
export const PAKETI = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49,
    items: [
      '30 FB/IG objava',
      '10 Google Business objava',
      '5 promotivnih tekstova',
      'Mini SEO audit (PDF)',
      '1 vizualni template',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 99,
    featured: true,
    items: [
      'Sve iz Basic',
      '10 AI vizuala',
      '3 kratka video formata',
      'Google Business optimizacija',
      'Konkurentska analiza',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 149,
    items: [
      'Sve iz Pro',
      '30 dana upravljanja objavama',
      '1 kampanja',
      '1 landing stranica',
      '24/7 podrška',
    ],
  },
];

export const PAKET_IDS = PAKETI.map((p) => p.id);

export const paketById = (id) => PAKETI.find((p) => p.id === id);

/** Prices are numbers so they can be compared and validated; this is the label. */
export const formatPrice = (price) => `${price}€`;
