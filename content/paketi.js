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
    billing: 'once',
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
    billing: 'once',
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
    // Monthly, because what it adds over Pro is time-bound: thirty days of
    // managing posts, and support. The other two are a delivery and then we
    // are done.
    billing: 'monthly',
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

/**
 * How each package is charged. Stated in one place because it has to appear in
 * four: the cards, the picker's note, the form's confirmation line and the
 * subject of the notification e-mail — where "149€" and "149€ / mj" are very
 * different pieces of information.
 */
export const BILLING = {
  once: { suffix: '', label: 'jednokratno' },
  monthly: { suffix: ' / mj', label: 'mjesečno' },
};

/**
 * Prices are numbers so they can be compared and validated; this is the label.
 * Takes the package rather than the number so the billing period travels with
 * it and cannot be dropped by a caller.
 */
export const formatPrice = (pkg) => `${pkg.price}€${BILLING[pkg.billing]?.suffix || ''}`;

/** The one place the billing model is explained to a visitor. */
export const BILLING_NOTE =
  'Basic i Pro se plaćaju jednokratno — isporuka je dogovorena i tu smo stali. ' +
  'Premium se naplaćuje mjesečno, jer uključuje 30 dana upravljanja objavama i podršku. ' +
  'Sve cijene su bez PDV-a.';
