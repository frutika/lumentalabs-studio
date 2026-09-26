const en = {
  code: 'en',
  label: 'English',
  htmlLang: 'en',

  nav: { services: 'Services', work: 'Work', blog: 'Blog', contact: 'Contact' },

  meta: {
    siteDescription:
      'A digital studio building web platforms, AI tools and automations. Products that launch, get used, and grow — without unnecessary complication.',
    siteTitle: 'Lumenta Labs — Web platforms, AI tools, automation.',
    ogLocale: 'en_US',
  },

  /**
   * Title and description per page. See the note in hr.js — every page but the
   * blog posts used to inherit meta.siteDescription.
   */
  pageMeta: {
    home: {
      // See the note in hr.js — the template does not reach this segment.
      title: 'A digital studio for web, AI and automation — Lumenta Labs',
      description:
        'We build web platforms, AI tools and automations that hold up in production. Twelve of our own products, one team from data model to monitoring.',
    },
    services: {
      title: 'Development and AI automation services',
      description:
        'Five problems we solve: web platforms, AI process automation, product descriptions at catalogue scale, video localisation, and hosting with monitoring.',
    },
    work: {
      title: 'Products we have built',
      description:
        'Five products we built, shipped and still maintain — Bezmaske, Lumenta AI, The Dog Habit, UnmaskedWords and DocuFlow AI. Every one of them is live.',
    },
    contact: {
      title: 'Contact',
      description:
        'Describe the problem, not the solution. We answer within 24 hours, by form or email. If we are not the right people for it, we will say so straight away.',
    },
    video: {
      description:
        'One production pass becomes narration, voicing, mix and captions for every market you sell in. A finished master per language, your picture untouched.',
    },
  },

  a11y: {
    skip: 'Skip to main content',
    langNav: 'Language',
    mainNav: 'Main',
    footerNav: 'Footer',
    legalNav: 'Legal',
    heroVideoPause: 'Pause the background video',
    heroVideoPlay: 'Play the background video',
    newTab: 'opens in a new tab',
    breadcrumb: 'Breadcrumb',
  },

  notFound: {
    title: 'Page not found',
    eyebrow: '404',
    h1: 'That page is not here.',
    lede: 'The link may be old, or the address may have a typo in it. Everything the site does have is one click away.',
    home: 'Go to the home page',
    work: 'See what we have built',
  },

  home: {
    eyebrow: 'Digital studio',
    h1: 'Web platforms, AI tools, automation.',
    lede: 'Products that launch, get used, and grow — without unnecessary complication.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See what we have built',

    wallH2: 'Every business eventually hits the same wall.',
    wallP:
      'The idea is clear. The plan is ready. But turning it into something real — something that actually runs — is where most projects stall. That gap is the whole reason we exist.',

    whatH2: 'What we do',
    whatLede:
      'Five things, done properly, by the same team that will still be there when it needs changing.',

    quote: ['Not AI as a headline. ', 'AI as infrastructure', ' — built into the systems you already use, doing a specific job you can measure.'],

    proofH2: 'We don’t just recommend this. We run on it.',
    proofLede:
      'Everything we offer clients, we built and proved on our own projects first — the same architecture, the same pipelines, the same standards. All of them are live, and you can open any of them right now.',

    howH2: 'How we work',
    howLede:
      'No empty presentations. The shortest path between what you need and something running in production.',

    blogH2: 'From the write-ups',
    blogLede: 'Specific bugs and fixes from the products above, not generic advice.',
    blogCta: 'Read the blog',

    reelH2: 'The studio, in three minutes',
    reelLede: 'A short introduction to how we build.',
    reelPlay: 'Play the reel',
    reelNote: 'Nothing loads from YouTube until you press play',

    finalH2: 'Tell us what should exist.',
    finalLede: 'A clear agreement, a concrete delivery, a measurable result.',
    finalCta: 'Get in touch',
  },

  servicesPage: {
    eyebrow: 'Services',
    h1: 'Five things, done properly.',
    lede: 'Not a menu of everything. The work we do often enough to be genuinely good at it.',
    deeper: 'How this works in detail →',
    closingH2: 'Which of these do you need?',
    closingLede:
      'If you are not sure, describe the problem instead of the solution. We will tell you honestly whether we are the right people for it.',
    closingCta: 'Get in touch',
  },

  /**
   * One page per service. See the note in hr.js — same structure, same reason,
   * and `path` is the English slug in the same shared cluster. No `video`
   * entry: /services/video already covers it properly.
   */
  serviceDetails: [
    {
      slug: 'platforms',
      path: 'web-application-development',
      title: 'Custom web application development',
      description:
        'Custom web platforms built end to end — data model, interface, deployment and monitoring from one team. Built to survive production, not just a demo.',
      h1: 'Custom web application development',
      lede:
        'Platforms that take growth without a rewrite. The whole path from data model to production monitoring, owned by one team.',
      intro: [
        'Most projects do not fail at launch. They fail six months later, when a language, a market or a new product type has to go in and the foundation will not take it. The rebuild then costs more than the first version did.',
        'We build the whole path: data model, application, deployment, monitoring. You get a running system, not a prototype somebody still has to finish.',
        'The same approach keeps twelve of our own products in production. We do not sell an architecture we have not maintained ourselves.',
      ],
      gets: [
        'A platform that takes growth without a rewrite',
        'One party responsible for all of it — from database to domain',
        'A handover with documentation, so you are not locked to us',
      ],
      notFor: 'if you need a five-page brochure site, an off-the-shelf tool will cost you less. We will say so straight away.',
      pricing: {
        q: 'How much does a custom web application cost?',
        bands: [
          {
            price: '€6,000 – €12,000',
            name: 'A tool for one team',
            body: 'An application one team inside the company uses. It has a login, but no complex roles and no users from outside. One job, done properly.',
            examples: [
              'A job-sheet log the field team fills in from a phone',
              'A quoting tool that replaces a spreadsheet with ten tabs',
              'A view that joins data from two systems onto one screen',
            ],
            boundary: 'The moment roles and permissions or outside access are needed, it is the next band.',
          },
          {
            price: '€12,000 – €28,000',
            name: 'A platform with outside users',
            body: 'A system used by people outside your company too — clients, partners, suppliers. Roles and permissions, and data moving to and from other systems.',
            examples: [
              'A portal where clients follow the status of their orders',
              'A booking system with payment and confirmations',
              'An application that pulls from your ERP and writes back to it',
            ],
            boundary: 'This is where most of our projects sit.',
          },
          {
            price: 'from €28,000',
            name: 'The system the company runs on',
            body: 'When the application is not a helper but the place the work happens. Several kinds of user, changes in real time, integrations with more than one system.',
            examples: [
              'A platform with an access hierarchy and thousands of users',
              'Stock reconciled across several locations in real time',
              'A system joining ERP, CRM and billing into one flow',
            ],
            boundary: 'A project like this starts with a conversation about scope, not with a price.',
          },
        ],
        min: 6000,
      },
      faq: [
        {
          q: 'What does building a web application include?',
          a: 'Data model, application, deployment and monitoring. One party responsible for all of it — from database to domain — and a handover with documentation, so you are not locked to us.',
        },
        {
          q: 'Do you build brochure sites?',
          a: 'If you need five pages, an off-the-shelf tool will cost you less and we will say so straight away. This is for systems that have to grow.',
        },
        {
          q: 'What if we already have an application that does not work?',
          a: 'Describe what is wrong with it. We do take over existing systems, but first we look at whether repairing or rewriting is the better deal.',
        },
      ],
    },
    {
      slug: 'ai',
      path: 'ai-process-automation',
      title: 'AI process automation for business',
      description:
        'Automating the repetitive work inside the systems your team already uses. We start from a specific task and measure the hours it frees.',
      h1: 'AI process automation for business',
      lede:
        'Repetitive weekly work becomes a process. AI goes where it pays off, not where it sounds good.',
      intro: [
        'Somebody retypes data from one system into another every week. Somebody assembles a report that looks the same every month. That is not a people problem, it is a process problem.',
        'We start from a specific task and measure the hours it frees. Automation that cannot show a saving is not automation, it is a cost with a better name.',
        'The tool goes into the interface the team already opens every morning. Nothing new to learn.',
      ],
      gets: [
        'A process that runs without somebody pushing it every day',
        'A measurable saving in hours, agreed before we start',
        'A tool the team uses inside their existing interface, with nothing new to learn',
      ],
      notFor: 'if the process changes every month, fix the process first. Automating chaos gives you faster chaos.',
      pricing: {
        q: 'How much does AI process automation cost?',
        bands: [
          {
            price: '€3,500 – €8,000',
            name: 'One process',
            body: 'One task that repeats every week, automated end to end and measured before and after.',
            examples: [
              'Retyping data from one system into another',
              'A monthly report somebody assembles by hand',
              'Sorting inbox enquiries and drafting the replies',
            ],
            boundary: 'If you are not sure which task to start with, that is a half-hour conversation and it is free.',
          },
          {
            price: '€8,000 – €20,000',
            name: 'Several processes in your system',
            body: 'A handful of connected tasks, built into the interface the team already opens every morning. Nothing new to learn.',
            examples: [
              'Document handling from arrival through approval',
              'A CRM kept current from email and calls, with no manual entry',
              'Quotes prepared from data already in your system',
            ],
            boundary: '',
          },
          {
            price: 'from €20,000',
            name: 'A tool of your own',
            body: 'When nothing off the shelf exists, or none of it works the way you need, so yours gets built — and stays yours.',
            examples: [
              'An internal assistant over your own knowledge base and documents',
              'A tool the team uses daily that nobody else has',
            ],
            boundary: '',
          },
        ],
        min: 3500,
      },
      faq: [
        {
          q: 'How do we know the automation pays off?',
          a: 'The hours saved are agreed before we start. If a task does not free measurable time, we will tell you not to automate it.',
        },
        {
          q: 'Does the team have to learn a new tool?',
          a: 'No. The process runs inside the interface they already use.',
        },
        {
          q: 'When is automation a bad idea?',
          a: 'If the process changes every month, fix the process first. Automating chaos gives you faster chaos.',
        },
      ],
    },
    {
      slug: 'ecommerce',
      path: 'ecommerce-content-automation',
      title: 'AI product descriptions for e-commerce',
      description:
        'Product descriptions generated across a whole catalogue, in your voice and in the language of the market you sell in. Approval before anything publishes.',
      h1: 'AI product descriptions at catalogue scale',
      lede:
        'Thousands of items with no descriptions — or with the supplier’s, which Google reads as duplicates. We set up the process that writes them across the catalogue.',
      intro: [
        'A catalogue grows faster than anyone can describe it. Descriptions copied from a supplier get treated as duplicate content, and machine translation shows on the first line. Both cost you positions.',
        'We set up a process that writes descriptions across the whole catalogue, in your voice and your terminology, in the language of the market you actually sell in — not translated afterwards.',
        'Nothing publishes without your approval. Review is part of the process, not an add-on.',
      ],
      gets: [
        'A whole catalogue covered in weeks, not months',
        'Copy that reads as one brand rather than a thousand unrelated AI paragraphs',
        'Review before publishing — nothing goes out without your approval',
      ],
      notFor: 'if you have a hundred items and a copywriter who can keep up, you do not need this.',
      // See the note in hr.js — the same three sections, aimed at the query.
      sections: [
        {
          h2: 'Per item or per catalogue',
          paragraphs: [
            'Published Croatian rates for writing product descriptions run from €5 to €25 per description, depending on length and how much SEO work goes in. That is per-item logic: a thousand-item catalogue lands between €5,000 and €25,000, and a three-thousand-item one between €15,000 and €75,000.',
            'We do not charge per item, we charge per catalogue. The work is in setting the process up — voice, terminology, rules and review. Once that stands, a thousand items and ten thousand items are not ten times the job.',
          ],
          table: {
            head: ['Items', 'At market rate (€5 – €25 / description)', 'With us'],
            rows: [
              ['500', '€2,500 – €12,500', '€1,500 – €4,000'],
              ['1,000', '€5,000 – €25,000', '€1,500 – €4,000'],
              ['5,000', '€25,000 – €125,000', '€4,000 – €12,000'],
            ],
          },
          note: 'Above five thousand items, or more than two markets, we scope it. For scale: 12,000 descriptions went through our own product Lumenta AI in nine days — not a client project, but a measure that your catalogue is almost certainly not too big for this.',
        },
        {
          h2: 'What supplier descriptions actually do',
          paragraphs: [
            'The received wisdom is that Google penalises duplicate content. It does not. What it does is worse than a penalty because it is silent: when twenty shops carry the same description from the same supplier, Google picks one and filters the rest out of results. No message, no warning in Search Console — you are simply not there.',
            'What that means for you is that on your own product page you turn up with nothing of your own. The only thing left to compete on is price, and that is a contest won by whoever has the deepest pockets.',
            'Your own copy changes that at the root: the page carries text no other shop has, and starts ranking for the way your customers ask rather than the way a supplier wrote a catalogue.',
          ],
        },
        {
          h2: 'Written in the market’s language, not translated',
          paragraphs: [
            'A translation carries the sentence but not the query. A German buyer is not searching for a translation of a Croatian phrase — they search for what Germans actually type, which is often a different word, a different search volume and a different buying motive.',
            'So we write in the language of the market, with that market’s terminology and its searches, rather than pushing Croatian text through a translator. The same item can carry a different emphasis in Croatia and in Germany, because it is bought differently.',
            'The practical consequence: two language versions are not double the work, but they are not one job with a translation bolted on at the end either. The price for several markets reflects that.',
          ],
        },
      ],
      pricing: {
        q: 'How much do generated product descriptions cost?',
        bands: [
          {
            price: '€1,500 – €4,000',
            name: 'Up to a thousand items, one language',
            body: 'We set the process up on your voice and your terminology, then run the catalogue. You review and approve before anything publishes.',
            examples: [
              'A catalogue with no descriptions, or with the supplier’s',
              'A new product group that has to read like the existing ones',
            ],
            boundary: 'If you have a hundred items and a copywriter who can keep up, you do not need this.',
            // See the note in hr.js — where to go instead, not just a no.
            selfServe: {
              text: 'Smaller catalogue and happy to run it yourself? Lumenta AI is our own tool for writing descriptions — self-serve, with us out of the loop.',
              cta: 'Open Lumenta AI',
              href: 'https://lumenta.shop',
            },
          },
          {
            price: '€4,000 – €12,000',
            name: 'Whole catalogue, several languages',
            body: 'The same process across the whole catalogue and every market you sell in — written in that language, not translated afterwards.',
            examples: [
              'Thousands of items across two or more markets',
              'Category and campaign copy alongside the descriptions',
            ],
            boundary: '',
          },
        ],
        min: 1500,
        max: 12000,
      },
      faq: [
        {
          q: 'How long does a full catalogue take?',
          a: 'Catalogues get covered in weeks rather than months. The exact range depends on item count and how many languages — tell us both and we will estimate.',
        },
        {
          q: 'Will the descriptions read like generic AI text?',
          a: 'The process is set up on your voice and your terminology, so the catalogue reads as one brand rather than a thousand unrelated paragraphs.',
        },
        {
          q: 'We have about a hundred items — do we need this?',
          a: 'If you have a copywriter who can keep up, no. This solves a problem of scale.',
        },
      ],
    },
    {
      slug: 'architecture',
      path: 'managed-hosting-and-maintenance',
      title: 'Managed hosting and maintenance',
      description:
        'Architecture, interface and operations kept with one team. Backups, monitoring and updates included, with an agreed response time when something breaks.',
      h1: 'Managed hosting and maintenance',
      lede:
        'When design, code and hosting sit with three different parties, a fault turns into an argument about whose fault it is. Here there is one contact.',
      intro: [
        'When design, code and hosting sit with three different parties, a fault turns into an argument about whose fault it is. Meanwhile you are not working.',
        'Architecture, interface and operations stay with the same team. Backups, updates and monitoring are included, not a separate line on the invoice.',
        'We run the same monitoring and the same nightly backups on our own products. What we offer you already keeps ours up.',
      ],
      gets: [
        'One contact for everything, with an agreed response time',
        'Backups and monitoring that run when nobody is watching',
        'Updates before they turn into problems',
      ],
      notFor: 'if you have your own technical team, we take only the part you are missing — tell us which.',
      pricing: {
        q: 'How much does monthly maintenance cost?',
        bands: [
          {
            price: '€350 – €900 / mo',
            name: 'One application',
            body: 'Monitoring that runs when nobody is watching, nightly backups with integrity checks, updates before they turn into problems, and one contact when something stops.',
            examples: [
              'An application we built',
              'An existing system we take over after a review',
            ],
            boundary: 'This is not website maintenance. If you need WordPress plugins kept up to date, you will pay less elsewhere.',
          },
          {
            price: '€900 – €2,500 / mo',
            name: 'Several systems',
            body: 'A few applications or environments under the same watch, with an agreed response time and a plan for what happens when something falls over.',
            examples: [
              'Production and staging across several services',
              'Several applications sharing a database or a login',
            ],
            boundary: 'If you have your own technical team, we take only the part you are missing.',
          },
        ],
        min: 350,
        max: 2500,
        unit: 'MON',
      },
      faq: [
        {
          q: 'What does maintenance include?',
          a: 'Backups and monitoring that run when nobody is watching, updates before they become problems, and one contact with an agreed response time.',
        },
        {
          q: 'We have our own technical team — can you cover part of it?',
          a: 'Yes. We take the part you are missing — tell us which.',
        },
        {
          q: 'Will you take over an application your team did not build?',
          a: 'We will, after reviewing the existing system. If the state of it means maintenance makes no sense without work first, we will say so before we agree anything.',
        },
      ],
    },
  ],

  serviceDetailPage: {
    eyebrow: 'Service',
    pricingH2: 'What it costs',
    vatNote: 'All prices exclude VAT. The final quote depends on scope — the range is here so you know straight away whether we are in the same order of magnitude.',
    priceQ: 'What does it cost?',
    getsH2: 'What you get',
    notForH2: 'When this is not for you',
    faqH2: 'Common questions',
    closingH2: 'Sound like your problem?',
    closingLede: 'Describe it in plain words. If we are not the right people for it, we will tell you — that answer is free.',
    closingCta: 'Get in touch',
    allServices: 'All services',
    otherH2: 'Other services',
  },

  workPage: {
    eyebrow: 'Work',
    h1: 'We run on what we sell.',
    lede:
      'Not client logos on a wall. Five products we built, deployed and still maintain — and every one of them is live right now. Open them and judge for yourself.',
    problem: 'The problem',
    built: 'What we built',
    lesson: 'Why it matters to you',
    visit: 'Visit',
    closingH2: 'Want something like this?',
    closingLede: 'Describe the problem and we will tell you what it takes.',
    closingCta: 'Get in touch',
    allWork: 'All work',
  },

  blogPage: {
    eyebrow: 'Blog',
    h1: 'What we learned building the things above.',
    lede:
      'Specific bugs, specific fixes, from the products we run ourselves — not generic advice rewritten to sound like a case study.',
    readMore: 'Read the write-up',
    backToAll: 'All posts',
    relatedH2: 'This came out of building',
    relatedCta: 'Read the case study',
    closingH2: 'Have something like this to fix?',
    closingLede: 'Describe the problem and we will tell you what it takes.',
    closingCta: 'Get in touch',
    share: 'Share this post',
    shareCopied: 'Link copied',
  },

  contactPage: {
    eyebrow: 'Contact',
    h1: 'Tell us what should exist.',
    lede:
      'Describe the problem rather than the solution. If we are not the right people for it, we will say so — that answer is free and saves us both a month.',
    openMail: 'Open in mail app',
    copy: 'Copy address',
    copied: 'Copied',
    expectH2: 'What to expect',
    helpH2: 'What helps us answer quickly',
    help: [
      'What the thing is meant to do, in plain words',
      'Whether something already exists, and what is wrong with it',
      'Roughly when it needs to be live, and what happens if it is not',
      'A budget range — even a rough one saves a lot of guessing',
    ],
    form: {
      h2: 'Send an enquiry',
      name: 'Name',
      email: 'Email',
      message: 'What should the thing do?',
      messageHint: 'In plain words. If something already exists, say what is wrong with it.',
      submit: 'Send enquiry',
      sending: 'Sending…',
      okTitle: 'Received.',
      okBody: 'We reply within 24 hours.',
      failed: 'Sending failed.',
      // Keyed by the code the route returns, so the visitor reads the reason in
      // the language of the page they are on.
      errors: {
        rate_limited: 'Too quick. Wait half a minute and try again.',
        invalid_name: 'Please enter your name.',
        invalid_email: 'Please enter a valid email address.',
        message_too_long: 'The message is too long.',
        not_configured: 'The form is not working on our side right now.',
        save_failed: 'Saving failed.',
      },
      mailFallback: 'Send from your mail client',
      mailPrefill: 'Rather use your own mail client? Open with the details filled in',
      honeypot: 'Do not fill in',
      subject: 'Enquiry from the website',
    },
  },

  videoPage: {
    eyebrow: 'Services',
    pricingH2: 'What it costs',
    // See the note in hr.js — priced by language rather than by bundle.
    pricing: [
      {
        price: '€450 – €900',
        name: 'One film, one language',
        body: 'Script, voice, a mix under whatever audio the footage already carries, and captions in the format the destination accepts. Your picture is not re-encoded.',
      },
      {
        price: '+€150 – €300',
        name: 'Each additional language',
        body: 'The same film in one more market. The first pass carries the script and the mix, so every language after it costs considerably less.',
      },
      {
        price: 'from €1,800',
        name: 'Several films',
        body: 'A series of pieces or a whole library of footage, scoped.',
      },
    ],
    vatNote: 'All prices exclude VAT. The quote depends on runtime; additional languages are charged per language.',
    h1: 'One film. Every market you sell in.',
    lede:
      'Shooting again for each language is how video budgets die. We narrate what you already have, and produce a version for every market from a single pass.',
    cta: 'Talk to us about a film',

    gapH2: 'The part nobody solves',
    gapP: [
      'Most footage is not silent. It has music, or a presenter, or an interview — and that is exactly where automated voiceover tools fall apart. They assume empty audio and talk straight over whoever is already speaking.',
      'We detect where the source already carries a voice and place the narration around it. Your presenter is never spoken over. The music never buries the line. That is not a setting somebody remembered to tick; it is measured from the audio itself.',
    ],

    howH2: 'How it runs',
    howLede: 'Four stages, and you see output at each one rather than at the end.',
    steps: [
      ['The script', 'We write narration for the footage you already have, in the voice your brand actually uses. Length is worked backwards from the runtime, so nothing is rushed and nothing runs out of picture.'],
      ['The voice', 'Neural voices across more than a hundred language and regional variants, with control over pace, pitch and delivery. You hear candidates on your own footage before anything is finalised.'],
      ['The mix', 'The existing soundtrack is not thrown away. It ducks under the voice by a measured amount and comes back up in the gaps, so the film keeps its energy instead of turning into a slideshow with a voice on top.'],
      ['The delivery', 'A finished master per language, plus a caption file named the way each platform requires. No re-encoding of your picture unless you ask for burned-in titles.'],
    ],

    quote: ['The film on our homepage was made this way — ', 'script, voice, mix and captions', ', with tooling we built because nothing off the shelf did it properly.'],

    capsH2: 'Captions are not an afterthought',
    capsP: [
      'Most people meet your video with the sound off. Without captions the narration you paid for simply does not exist for them.',
      'Every delivery includes a caption file per language, named the way the destination requires — Facebook rejects the upload outright if the filename is wrong, which is the kind of detail that quietly costs a campaign its reach.',
    ],

    getH2: 'What you get',
    get: [
      'A finished master per language, picture untouched',
      'A caption file per language, in the format each platform accepts',
      'The narration script, so you own the words and can reuse them',
      'Timecodes, so a later edit does not mean starting over',
    ],

    closingH2: 'Have footage that could be working harder?',
    closingLede:
      'Send us what you have and which markets matter. We will tell you what it would take — and if it is not worth doing, we will say that instead.',
  },

  services: [
    {
      slug: 'platforms',
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
      title: 'Content automation for e-commerce',
      short: 'Descriptions, category pages and campaigns at the scale a real catalogue demands.',
      body: [
        'A shop with four thousand products cannot be written by hand, and a shop written by a generic model reads like every other shop.',
        'We build pipelines that generate at catalogue scale while staying inside your brand voice, your terminology, and the language your customers actually buy in.',
        'This is not theory for us. It is the product we run.',
      ],
    },
    {
      slug: 'video',
      title: 'Narrated video and localisation',
      short: 'One film, voiced and captioned in every market you sell in.',
      body: [
        'Footage is the expensive part, and most companies already have some — a product film, a walkthrough, a reel someone cut last year. What they do not have is that film speaking to each market they sell in.',
        'We write the narration, voice it, mix it against whatever audio the footage already carries, and deliver captions in the format each platform actually accepts.',
        'The same script becomes as many language versions as you need, from one production pass rather than one shoot per market.',
      ],
    },
    {
      slug: 'architecture',
      title: 'Architecture, design and maintenance',
      short: 'One team owns the stack end to end — including after launch.',
      body: [
        'Most of what goes wrong in a project goes wrong at a handover: between a designer and a developer, or between an agency and whoever it quietly outsourced to.',
        'We keep architecture, interface and operations with the same team, so there is no seam for things to fall through.',
        'That includes the unglamorous part — backups, updates, monitoring, and being reachable when something breaks.',
      ],
    },
  ],

  work: [
    {
      slug: 'bezmaske',
      kind: 'Live platform',
      short: 'A company review platform for Croatia and the region — and a lesson in making a client-rendered app rank.',
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
      kind: 'Live product',
      short: 'AI copywriting for e-commerce — product descriptions and category pages at catalogue scale.',
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
      kind: 'Live publication',
      short: 'A publication that researches, writes and illustrates itself — and publishes to a YouTube channel on the same schedule.',
      problem:
        'Content sites die from inconsistency. Publishing weekly by hand is a job; publishing weekly for a year is a different job entirely — and the moment you stop, the traffic goes with it.',
      built: [
        'End-to-end pipeline: research, drafting, image generation, publishing',
        'Short-form video generated and posted to its own YouTube channel on a schedule',
        'Runs unattended — nobody opens an editor to keep it going',
        'Every stage is inspectable, so a weak output is traceable rather than mysterious',
      ],
      lesson:
        'This is the proof that content automation survives contact with reality: a real audience, on a real schedule, across a blog and a video channel at once.',
    },
    {
      slug: 'unmaskedwords',
      kind: 'Live platform',
      short: 'An anonymous platform for the things people do not sign their name to.',
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
    {
      slug: 'docuflow-ai',
      kind: 'Live product',
      short:
        'AI document processing for small businesses — invoices and receipts extracted, reviewed, and turned into an action with one approval.',
      problem:
        'Every invoice and receipt that lands in a small business is a small chore: read it, decide what happens next, then remember to actually do it. Multiply that by a hundred documents a month and the chore becomes the job.',
      built: [
        'AI extraction pipeline (Claude) that turns invoices and receipts into structured, reviewable data — two real document types, not a demo of one',
        'An action engine that suggests the next step — a payment reminder, an accounting task — and only sends it once a person approves it, with a real email behind every approved reminder',
        'Per-call AI cost tracking and usage-based billing built in from day one, so the product knows its own margins before its first customer does',
        'A security pass most teams skip entirely: an audit of every database function that runs with elevated privileges, closing grants nobody remembered were open',
      ],
      lesson:
        'The AI call that reads a document is the easy half. The part that earns trust is everything around it — the review step nothing skips, the cost you can account for, the access you can prove is locked down.',
    },
  ],

  pillars: [
    ['Direct', 'No middlemen, no account managers relaying your questions to someone else.'],
    ['Concrete', 'A clear agreement and a defined delivery, not a presentation about one.'],
    ['Measurable', 'You know what is being built, what it costs, and when it ships.'],
  ],
};

export default en;
