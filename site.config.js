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
    hr: {
      id: 'Tbr3YrGL2sc',
      title: 'Lumenta Labs HR: „Digitalni studio bez umjetne inteligencije? Zaboravite!”',
    },
    de: { id: 'a9197g-xKvM', title: 'Digital Studio ohne KI? Vergiss es!' },
  },
  reelChannel: 'https://www.youtube.com/@lumentatools',

  social: {
    linkedin: 'https://www.linkedin.com/in/bezmaske/',
    github: 'https://github.com/frutika/lumentalabs-studio',
  },

  // Product names and outbound links are the same in every language.
  work: [
    { slug: 'bezmaske', name: 'Bezmaske', href: 'https://bezmaske.com' },
    { slug: 'lumenta-ai', name: 'Lumenta AI', href: 'https://lumenta.shop' },
    { slug: 'the-dog-habit', name: 'The Dog Habit', href: 'https://thedoghabit.com' },
    { slug: 'unmaskedwords', name: 'UnmaskedWords', href: 'https://unmaskedwords.com' },
    { slug: 'docuflow-ai', name: 'DocuFlow AI', href: 'https://app.lumentalabs.studio' },
  ],
};

/**
 * When each page's content last actually changed, as a date you edit by hand
 * when you change that page's copy.
 *
 * The sitemap used to send `new Date()` for every entry, which meant every
 * deploy told Google that all 53 pages had changed — including /privacy, which
 * nobody had touched in a month. Google's guidance is that it ignores lastmod
 * when a site's values turn out to be unreliable, so a sitemap that cries wolf
 * on every push ends up with no lastmod at all, including on the pages where it
 * would have been true.
 *
 * Keyed by the unprefixed path. A path that is not listed here gets NO lastmod
 * rather than today's date: omitting it is allowed and honest, inventing it is
 * neither. The blog is not listed because posts carry their own date.
 */
export const contentUpdated = {
  '/': '2026-09-26',
  '/services': '2026-09-26',
  '/services/video': '2026-09-26',
  '/work': '2026-09-26',
  '/contact': '2026-09-26',

  // The five service pages, by their language-independent key rather than by
  // slug — the slug differs per language and the date does not.
  platforms: '2026-09-26',
  ai: '2026-09-26',
  ecommerce: '2026-09-26',
  architecture: '2026-09-26',

  /**
   * The work case studies. Recovered from git history rather than remembered:
   * `git log -S"slug: '<slug>'"` over the content files gives the day each
   * entry last changed. Keyed by path, not by slug, because unlike the service
   * pages a case study's path is the same in every language.
   *
   * For the four originals that day is the commit that added the Croatian and
   * German versions, so the English text is two days older (7 August). Two days
   * carries no information on a page untouched for seven weeks, and one date per
   * case study beats three that disagree.
   */
  '/work/bezmaske': '2026-08-09',
  '/work/lumenta-ai': '2026-08-09',
  '/work/the-dog-habit': '2026-08-09',
  '/work/unmaskedwords': '2026-08-09',
  '/work/docuflow-ai': '2026-09-06',

  // The guides. Their content is a transcription of the PDFs, which carry
  // "Izdanje 2026"; the pages themselves went up on this date.
  '/vodici': '2026-09-26',
  '/vodici/automatizacija-opisa-proizvoda': '2026-09-26',
  '/vodici/automatizacija-objava-na-drustvenim-mrezama': '2026-09-26',
  '/vodici/ai-korisnicka-podrska-rag': '2026-09-26',

  // Legal copy tracks legal.updated below; kept in step by hand.
  '/privacy': '2026-08-20',
  '/terms': '2026-08-20',
  '/cookies': '2026-08-20',
  '/cookies/manage': '2026-08-20',
};

// True while a legal field is still a placeholder. Pages use it so raw "TODO"
// text can never reach a visitor, and so an unmistakable notice appears until
// the real details are filled in.
export const isPlaceholder = (v) => typeof v === 'string' && v.trimStart().startsWith('TODO');

// The legal pages are worthless without a real identifiable controller.
// These MUST be filled in before the policies mean anything - they are the one
// thing that cannot be inferred from the code.
export const legal = {
  entity: 'Denis Šehić',
  address: 'Bunarić V 6, 23234 Vir',
  oib: '02520053309',
  jurisdiction: 'Croatia',
  updated: '2026-08-20',
};

// Flip `enabled` to true only when a measurement tool is actually installed.
// Every cookie page reads from here, so the wording can never drift from reality.
export const analytics = {
  enabled: false,
  provider: null,
};
