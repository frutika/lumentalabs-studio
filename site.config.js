// Everything that is yours to decide lives here, so the pages stay pure copy.
// Fill these in before going live - nothing here is guessed on your behalf.
export const site = {
  name: 'Lumenta Labs',
  domain: 'lumentalabs.studio',
  url: 'https://lumentalabs.studio',
  tagline: 'Web platforms, AI tools, automation.',

  // TODO: create this mailbox on the Business plan before publishing.
  // It is the only call to action on the site.
  email: 'hello@lumentalabs.studio',

  // TODO: paste the URL of the full narrated reel once it is hosted
  // (YouTube, Vimeo or Cloudflare R2). Until then the section stays hidden.
  reelUrl: '',
};

export const services = [
  {
    slug: 'platforms',
    num: '01',
    title: 'Web platforms and applications',
    short: 'From idea to production — deployed, monitored, and ready for real users on day one.',
    body: [
      'Most projects do not fail at the idea. They fail in the stretch between a design that looks right and a system that survives its first hundred users.',
      'We build the whole path: data model, application, deployment, monitoring. Not a prototype that demos well and then collapses under a real catalogue.',
      'You get a running product, the repository it lives in, and a deployment you can watch — not a handover document describing one.',
    ],
  },
  {
    slug: 'ai',
    num: '02',
    title: 'AI tools and integrations',
    short: 'Content generation and process automation, built into the systems you already use.',
    body: [
      'AI is only useful when it has a specific job and a measurable result. We start from the job, not from the model.',
      'Content generation that holds your voice across every page. Process automation that removes the repetitive work nobody should be doing by hand.',
      'It goes into the tools your team already opens every morning. Nobody has to learn a new interface to get the benefit.',
    ],
  },
  {
    slug: 'ecommerce',
    num: '03',
    title: 'Content automation for e-commerce',
    short: 'Descriptions, category pages and campaigns at the scale a real catalogue demands.',
    body: [
      'A shop with four thousand products cannot be written by hand, and a shop written by a generic model reads like every other shop.',
      'We build pipelines that generate at catalogue scale while staying inside your brand voice, your terminology, and the language your customers actually buy in.',
      'This is not theory for us. It is the product we run.',
    ],
  },
  {
    slug: 'architecture',
    num: '04',
    title: 'Architecture, design and maintenance',
    short: 'One team owns the stack end to end — including after launch.',
    body: [
      'Most of what goes wrong in a project goes wrong at a handover: between a designer and a developer, or between an agency and whoever it quietly outsourced to.',
      'We keep architecture, interface and operations with the same team, so there is no seam for things to fall through.',
      'That includes the unglamorous part — backups, updates, monitoring, and being reachable when something breaks.',
    ],
  },
];

export const work = [
  {
    slug: 'bezmaske',
    name: 'Bezmaske',
    kind: 'Live platform',
    short: 'A company review platform for Croatia and the region — and a lesson in making a client-rendered app rank.',
    href: 'https://bezmaske.com',
    problem:
      'A review platform lives or dies on search and on how its links look when someone shares them. Both are exactly what a client-rendered single-page app is worst at: crawlers and social scrapers get an empty shell.',
    built: [
      'Prerender layer in front of the SPA, serving crawlers a fully formed page with a correct per-page canonical',
      'Open Graph deduplication, so a shared link renders as the page itself rather than a generic site card',
      'Automated sitemap generation on a schedule as new content appears',
      'Nightly WAL-safe database backups with integrity checks, replicated off-site',
    ],
    lesson:
      'Plenty of teams can build a review site. Making one that search engines and social platforms treat as a real site — without rewriting it — is the part that takes experience.',
  },
  {
    slug: 'lumenta-ai',
    name: 'Lumenta AI',
    kind: 'Product',
    short: 'AI copywriting for e-commerce — product descriptions and category pages at catalogue scale.',
    // TODO: add the public URL once you want it linked.
    href: '',
    problem:
      'Online shops need thousands of descriptions that sound like the brand rather than like a generic model, in a language most tools handle badly.',
    built: [
      'Generation pipeline that holds brand voice and terminology across an entire catalogue',
      'Output written for the market the shop actually sells into, not translated after the fact',
      'Same stack we deploy for clients: Next.js front end with PocketBase behind it',
    ],
    lesson:
      'Everything we learned here about running generation at scale — cost control, caching, quality checks — is what we bring to a client pipeline.',
  },
  {
    slug: 'the-dog-habit',
    name: 'The Dog Habit',
    kind: 'Product',
    short: 'A publication that researches, writes and illustrates itself on a schedule.',
    href: '',
    problem:
      'Content sites die from inconsistency. Publishing weekly by hand is a job; publishing weekly for two years is a different job entirely.',
    built: [
      'End-to-end pipeline: research, drafting, image generation, publishing',
      'Runs on a schedule without anyone opening an editor',
      'Every stage is inspectable, so a bad output is traceable rather than mysterious',
    ],
    lesson:
      'Proof that content automation can run unattended for months. Most agencies have never had to make one survive that long.',
  },
  {
    slug: 'unmaskedwords',
    name: 'UnmaskedWords',
    kind: 'Product',
    short: 'An anonymous platform for the things people do not sign their name to.',
    href: '',
    problem:
      'Anonymity is easy to offer and hard to actually deliver. The engineering is mostly in deciding what you refuse to store.',
    built: [
      'Designed so there is little to leak in the first place',
      'Shares infrastructure with our other projects without sharing their data',
      'Runs on the same server we operate and back up ourselves',
    ],
    lesson:
      'Taught us how to run several independent products off one carefully managed server — the kind of decision that keeps a client budget sane.',
  },
];

export const pillars = [
  ['Direct', 'No middlemen, no account managers relaying your questions to someone else.'],
  ['Concrete', 'A clear agreement and a defined delivery, not a presentation about one.'],
  ['Measurable', 'You know what is being built, what it costs, and when it ships.'],
];
