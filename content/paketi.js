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
    // Monthly, because what it adds over Pro is time-bound: managing the posts,
    // and support. The other two are a delivery and then we are done.
    billing: 'monthly',
    price: 149,
    // Split, because "sve iz Pro" renewed every month was not the same promise
    // in every line. A SEO audit has nobody left to inform by month two and a
    // Google Business profile is optimised once; a landing page every month at
    // this price contradicts the studio's own floor of 6.000 € for web work.
    // Those live in setup, delivered in the first month and not repeated.
    setup: [
      'Mini SEO audit (PDF)',
      'Google Business optimizacija',
      'Konkurentska analiza',
      '1 vizualni template',
    ],
    items: [
      '30 FB/IG objava',
      '10 Google Business objava',
      '5 promotivnih tekstova',
      '10 AI vizuala',
      '3 kratka video formata',
      'Upravljanje objavama',
      '1 kampanja',
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
  'Premium se naplaćuje mjesečno: paket se obnavlja svaki mjesec i otkazujete ga kad želite, ' +
  'do kraja tekućeg mjeseca. Postavljanje se radi u prvom mjesecu i ne ponavlja se. ' +
  'Sve cijene su bez PDV-a.';

/** Heading for the once-only part of a monthly package. */
export const SETUP_LABEL = 'Postavljanje, u prvom mjesecu';
/** Heading for what actually recurs. */
export const RECURRING_LABEL = 'Svaki mjesec';
