// Facts about the business and the brand. All prose lives in content/<lang>.js
// so there is exactly one place to translate and one place to edit copy.
export const site = {
  name: 'Lumenta Labs',
  domain: 'lumentalabs.studio',
  url: 'https://lumentalabs.studio',
  tagline: 'Web platforms, AI tools, automation.',

  // TODO: create this mailbox on the Business plan before publishing.
  // It is the only call to action on the site.
  email: 'hello@lumentalabs.studio',

  // One entry per language. A page shows the film in ITS OWN language or none
  // at all - falling back to English is exactly the bug this replaced, where a
  // Croatian visitor got an English voice-over.
  reels: {
    en: {
      id: 'qsv-XoY7lOg',
      title: 'Web Apps to Production: How Lumenta Labs Builds Real-World Software Systems',
    },
    hr: { id: 'Tbr3YrGL2sc', title: 'Lumenta Labs HR: The Future of Work?' },
    de: { id: 'a9197g-xKvM', title: 'Digital Studio ohne KI? Vergiss es!' },
  },
  reelChannel: 'https://www.youtube.com/@lumentatools',

  // Product names and outbound links are the same in every language.
  work: [
    { slug: 'bezmaske', name: 'Bezmaske', href: 'https://bezmaske.com' },
    { slug: 'lumenta-ai', name: 'Lumenta AI', href: 'https://lumenta.shop' },
    { slug: 'the-dog-habit', name: 'The Dog Habit', href: 'https://thedoghabit.com' },
    { slug: 'unmaskedwords', name: 'UnmaskedWords', href: 'https://unmaskedwords.com' },
  ],
};

// True while a legal field is still a placeholder. Pages use it so raw "TODO"
// text can never reach a visitor, and so an unmistakable notice appears until
// the real details are filled in.
export const isPlaceholder = (v) => typeof v === 'string' && v.trimStart().startsWith('TODO');

// The legal pages are worthless without a real identifiable controller.
// These MUST be filled in before the policies mean anything - they are the one
// thing that cannot be inferred from the code.
export const legal = {
  // TODO: exact registered name, e.g. "Lumenta Labs j.d.o.o." or your obrt name.
  entity: 'TODO — registered business name',
  // TODO: registered address as it appears in the court/craft register.
  address: 'TODO — registered address',
  // TODO: OIB (Croatian personal identification number of the business).
  oib: 'TODO — OIB',
  jurisdiction: 'Croatia',
  updated: '2026-08-08',
};

// Flip `enabled` to true only when a measurement tool is actually installed.
// Every cookie page reads from here, so the wording can never drift from reality.
export const analytics = {
  enabled: false,
  provider: null,
};
