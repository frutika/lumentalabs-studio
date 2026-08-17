// Blog posts. English only for now — technical, first-party case studies read
// by an English-speaking audience; see ROUTE_LOCALES in index.js. Same
// content-as-data pattern as work[] and services[]: one place to edit, no CMS,
// no extra dependency, and it ships in the same static build.
//
// body[] is a small block language rendered generically by BlogPost.jsx:
//   { p: '...' }              paragraph
//   { h2: '...' }             section heading
//   { ul: ['...', '...'] }    bullet list
//   { code: 'lang', text }    code block
//   { quote: '...' }          pull quote / lesson line
//
// cover is a variant key rendered by BlogCover.jsx — a small inline SVG
// diagram of the post's actual failure, not a stock photo. Same reasoning as
// the rest of this file: no CMS, no image pipeline, ships in the static build.

const posts = [
  {
    slug: 'nginx-500-invisible-errors',
    cover: 'nginx-proxy',
    title: 'The Nginx Setting That Was Hiding Our Own 500 Errors',
    description:
      'proxy_intercept_errors defaults to off. Without it, a crash in the app behind Nginx reaches the visitor untouched — including the crawler deciding whether to index the page.',
    date: '2026-08-18',
    tags: ['Nginx', 'SEO', 'Case study'],
    relatedWork: 'bezmaske',
    excerpt:
      'A fallback we had already built never ran, because Nginx only intercepts the error codes it generates itself — not the ones a healthy-looking backend sends on its own.',
    body: [
      {
        p: 'Bezmaske renders pages twice: once for people, once for crawlers, through a small Puppeteer service that sits behind Nginx. We had already built a fallback for when that service is unreachable — Nginx catches the failure and serves a plain, unrendered page instead of an error. It worked. We tested it. And it was still not enough.',
      },
      {
        p: 'A routine audit of the server logs turned up a handful of real HTTP 500 responses served straight to crawlers, weeks apart, on a page that was supposed to have a safety net. The fallback existed. It just never ran.',
      },
      { h2: 'The failure mode our test missed' },
      {
        p: 'Our test scenario was the render service being down — connection refused, timeout. Nginx handles that correctly out of the box: a failed connection produces a 502 or 504 that it generated itself, and `error_page` catches those without any extra configuration.',
      },
      {
        p: 'What actually happened was different. The render service was up. It received the request, hit an internal error — the headless browser under memory pressure, in our case — and did the responsible thing: it caught the exception and replied with its own, deliberate `500`. That response is not a connection failure. It is a normal, well-formed HTTP response that happens to carry an error code, and Nginx treats it as exactly that: a normal response, to be relayed as-is.',
      },
      {
        code: 'nginx',
        text: `location / {
    proxy_pass http://127.0.0.1:3003;

    # Without this, Nginx only intercepts errors it generates itself
    # (502/504 on connection failure). A 500 the backend sends on
    # purpose sails straight through to the visitor.
    proxy_intercept_errors on;

    error_page 500 502 503 504 = @fallback;
}`,
      },
      {
        p: 'One line. It had been missing since the fallback was first written, because the difference between "Nginx generated this error" and "the app generated this error and Nginx is just carrying it" is not something you notice until you go looking for it specifically.',
      },
      { h2: 'Why this is worth writing down' },
      {
        p: 'A fallback that only covers connection failures looks complete in every test you are likely to run, because connection failures are the easy way to simulate an outage. A backend that fails gracefully — catches its own exception, replies with a clean error instead of hanging — is invisible to that kind of test. It is also the more common failure in production, because graceful degradation is what you build the rest of the system to do.',
      },
      {
        quote:
          'A fallback you have not tested against a graceful failure has not really been tested against failure — only against the app disappearing entirely.',
      },
    ],
  },

  {
    slug: 'service-worker-froze-our-prerender',
    cover: 'service-worker',
    title: 'A Service Worker Froze Our Prerender on Day One, Forever',
    description:
      'One long-lived headless browser, reused for every page. The first render installed a Service Worker, and every render after that — for weeks — quietly inherited it.',
    date: '2026-08-15',
    tags: ['Puppeteer', 'PWA', 'Case study'],
    relatedWork: 'bezmaske',
    excerpt:
      'Every deploy looked successful. Every crawler kept seeing whatever bundle happened to be live the first time the render service ever started.',
    body: [
      {
        p: 'The prerender service behind Bezmaske reuses one headless Chrome process across every request — starting a fresh browser per page would be far too slow on a shared server. That decision is correct. What we missed is what else survives between requests when you reuse the same browser: cookies, IndexedDB, and — because the site installs a Service Worker for offline support — a persistent cache the browser will consult before it asks the network anything.',
      },
      {
        p: 'The first page that service ever rendered installed that Service Worker. Every render after it, for any URL, ran inside the same browser profile — which meant the Service Worker was already active, already intercepting, already deciding to answer from its own cache instead of fetching the current build. We shipped fixes. The live site changed. The crawlers kept seeing the exact bundle that existed the moment the service first came online.',
      },
      { h2: 'Why nothing about the deploy looked wrong' },
      {
        p: 'The build succeeded. The deploy script copied the new files. A disk-level render cache we already maintained was invalidated correctly on every deploy. Every layer we normally check was green. The staleness lived one level further down, in browser state that our own tooling had no visibility into and no reason to suspect, because we had never needed to think about a Service Worker as something a server-side render step could inherit.',
      },
      {
        code: 'javascript',
        text: `// Before: every render shares one profile, and whatever the
// first render installed — cookies, cache, a Service Worker —
// is still active for every render that follows.
const page = await browser.newPage();

// After: a fresh, throwaway profile per render. Nothing carries
// over, which is exactly what a "give me the current page" call
// should guarantee.
const context = await browser.createIncognitoBrowserContext();
const page = await context.newPage();
// ...
await context.close();`,
      },
      { h2: 'What actually surfaced it' },
      {
        p: 'Not monitoring — a manual spot check during an unrelated fix, comparing what a crawler-flavoured request returned against what the live site actually served. The HTML referenced a JavaScript bundle that had not existed for days. Once we knew what to look for, confirming it took minutes: the same stale bundle came back for every page, in every request, until the process was restarted.',
      },
      {
        quote:
          'A render pipeline that reuses a browser for speed is also, without asking, reusing whatever that browser remembers — and a Service Worker exists specifically to remember on purpose.',
      },
      {
        p: 'The fix costs a small amount of overhead per render — an incognito context is not free — which is a trade we take gladly over a crawler seeing a version of the site that stopped being true days or weeks earlier.',
      },
    ],
  },

  {
    slug: 'wordpress-hook-that-only-fires-half-the-time',
    cover: 'hook-gate',
    title: 'The WordPress Hook That Only Fires Half the Time',
    description:
      'A plugin cache watcher instantiated only on is_admin() or wp_doing_cron(). Fine, until every post on the site started arriving over the REST API instead.',
    date: '2026-08-12',
    tags: ['WordPress', 'REST API', 'Case study'],
    relatedWork: 'the-dog-habit',
    excerpt:
      'The sitemap was two weeks stale. The plugin was not broken. It had simply never been told the site would publish itself.',
    body: [
      {
        p: 'The Dog Habit publishes automatically — a scheduled job researches a topic, writes the piece, generates an image, and posts it through the WordPress REST API. No editor ever opens wp-admin. That is the entire point of the pipeline. It is also exactly the assumption a popular SEO plugin did not expect anyone to break.',
      },
      {
        p: 'The plugin caches the generated sitemap XML to disk and rebuilds it when a post changes — sensible, standard behaviour. What we found, days after the automation had been running cleanly, was a sitemap frozen at roughly half the actual post count. New posts were live, correctly formatted, fully indexed on the site itself. They just never made it into the file search engines were told to trust.',
      },
      { h2: 'Reading the plugin instead of guessing' },
      {
        p: 'The cache-invalidation watcher — the class that listens for a new post and clears the stale sitemap — is only constructed under one condition, buried in the module\'s bootstrap:',
      },
      {
        code: 'php',
        text: `if ( is_admin() || wp_doing_cron() ) {
    new Cache_Watcher();
}`,
      },
      {
        p: 'Reasonable for how WordPress is normally used: a human publishing through wp-admin, or a scheduled WordPress-internal job. A request to the REST API is neither. It is not an admin screen, and it is not WordPress\'s own cron system — it is an ordinary HTTP request from an external script, indistinguishable to this check from a visitor loading the homepage. The watcher was simply never in the room.',
      },
      { h2: 'The fix, and why it was one hook, not a plugin change' },
      {
        p: 'Editing the plugin was the wrong move — an update would overwrite it silently. Instead, one small must-use plugin listens for the WordPress core hook that fires after any REST-created or REST-updated post, regardless of who is making the request, and calls the sitemap cache\'s own invalidation method directly:',
      },
      {
        code: 'php',
        text: `add_action( 'rest_after_insert_post', function ( $post ) {
    if ( class_exists( 'RankMath\\\\Sitemap\\\\Cache' ) ) {
        \\RankMath\\Sitemap\\Cache::invalidate_storage();
    }
} );`,
      },
      {
        p: 'Verified by firing the exact same core hook manually and watching the stale cache files disappear on the spot — then confirming the sitemap was current after the very next scheduled publish, with no further intervention.',
      },
      {
        quote:
          'A gate that reads "is a human doing this, or is WordPress doing this to itself" has a blind spot exactly the size of "an API doing this on a schedule" — which is precisely what an autonomous pipeline is.',
      },
    ],
  },

  {
    slug: 'building-a-blog-that-publishes-itself',
    cover: 'pipeline',
    title: 'Building a Blog That Publishes Itself',
    description:
      "The architecture behind The Dog Habit: a pipeline that researches, writes, illustrates and posts on a schedule, with nobody opening an editor to keep it going.",
    date: '2026-08-09',
    tags: ['AI', 'Automation', 'Case study'],
    relatedWork: 'the-dog-habit',
    excerpt:
      'Publishing weekly by hand is a task. Publishing weekly without anyone doing the publishing is a different system entirely — and most of the design work is in what happens when a step fails.',
    body: [
      {
        p: 'The Dog Habit is a real publication — training guides, behaviour explainers, gear roundups — that writes and illustrates itself on a fixed schedule and has done so without a missed day since it launched. Nobody drafts a post. Nobody picks an image. The only thing a person still does is decide, occasionally, what the site should cover next.',
      },
      { h2: 'Four stages, each one inspectable on its own' },
      {
        ul: [
          'Research and drafting — a topic queue feeds a generation step that produces a title, the article body, an excerpt and metadata as one structured result, not a wall of text to be parsed after the fact',
          'Imagery — a stock-photo search scoped to the topic, not a single generic query reused for every post; a launch bug that used one static query for anything untagged is its own lesson, and a separate post',
          'Publishing — posted through the CMS\'s own REST API with the real, final publish status, so what a visitor sees is exactly what the pipeline produced, not a draft waiting on a human step that was quietly dropped',
          'Distribution — the same finished post triggers a short-form video render and a queued social post, so one piece of source material becomes three, without three separate manual jobs',
        ],
      },
      { h2: 'The part that actually took the time' },
      {
        p: 'Generating a plausible blog post is the easy 80%. The other 20% — the part that makes it safe to run completely unattended — is deciding what happens when any one of those four stages fails partway through.',
      },
      {
        ul: [
          'A duplicate topic must exit cleanly without leaving a half-written post behind',
          'An image provider having a bad day must not block publishing — a fallback exists, and is logged loudly enough to be noticed and fixed',
          'A failed run must alert a person, not fail silently into a gap in the schedule that nobody notices until a week of posts is missing',
        ],
      },
      {
        quote:
          'The proof that content automation survives contact with reality is not the first successful post. It is the one where a step failed at 3 a.m. and the site published on schedule anyway.',
      },
      {
        p: 'None of this needs to be exotic. It needs every stage to fail loudly and specifically instead of quietly and generically — which is a design discipline, not a bigger model.',
      },
    ],
  },

  {
    slug: 'pocketbase-in-production',
    cover: 'silos',
    title: 'Running Three Products on One PocketBase, Without Them Sharing Data',
    description:
      'A single lightweight backend, three independent products, one operator. The engineering is mostly in deciding what stays isolated and what is safe to share.',
    date: '2026-08-06',
    tags: ['PocketBase', 'Architecture'],
    relatedWork: 'unmaskedwords',
    excerpt:
      'Running several products off one backend is a budget decision. Making sure a bug in one can never touch another is the engineering discipline that makes that decision safe.',
    body: [
      {
        p: 'Three of the products we run — a review platform, an anonymous posting site, and an AI tool — sit on the same server and, in one case, the same PocketBase instance. That is a deliberate cost decision: a client paying for one well-run server should not be paying for three lightly-used ones. It only holds up if a mistake in one product\'s data model can never leak into, or corrupt, another\'s.',
      },
      { h2: 'Where the boundary actually lives' },
      {
        p: 'Not at the database engine — SQLite does not care how many logical products share a file. The boundary is enforced at the collection layer: access rules per collection, and no collection that spans two products\' concerns. The anonymous platform\'s posts collection has no foreign key into the review platform\'s business records, because a foreign key is a promise that the two will always agree, and these two products have no business agreeing about anything.',
      },
      { h2: 'The rule that is easy to get backwards' },
      {
        p: "PocketBase's access rules read like the opposite of what most backends default to: an empty string means public, and `null` — no rule set — means deny everything. Assuming SQL-style defaults here fails closed in the annoying direction (nothing loads) rather than open (anyone can write), which is the safer way to be wrong, but it still costs debugging time if you have not internalised it.",
      },
      {
        code: 'text',
        text: `listRule:   ""    // public
listRule:   null  // deny — this is the default, not "no restriction"`,
      },
      { h2: 'Denormalised fields need an owner, not just a schema' },
      {
        p: "A rating aggregate on a business record looked, from the schema, like a solved problem — the field existed, the type was right. It had simply never been written to by anything, ever, because no code path updated it when a review was approved. The fix was a server-side hook on the reviews collection, firing on every create, update and delete path a review can take — including a direct edit through the admin UI, which a naive `on_create`-only hook would have missed entirely.",
      },
      {
        quote:
          'A field existing in the schema is not evidence that anything writes to it. That has to be checked separately, and it is worth checking early — before a dashboard has been quietly showing zero for months.',
      },
    ],
  },

  {
    slug: 'technical-seo-audit-checklist-js-sites',
    cover: 'seo-scan',
    title: 'A Technical SEO Checklist for Sites That Render in JavaScript',
    description:
      'The specific places a client-rendered app goes wrong for search engines and social scrapers — gathered from fixing them, not from a generic best-practices list.',
    date: '2026-08-18',
    tags: ['SEO', 'Checklist'],
    relatedWork: null,
    excerpt:
      "Most SEO checklists are written for sites that render on the server by default. This one is for the sites that do not — where the gap between what a person sees and what a crawler sees is the whole problem.",
    body: [
      {
        p: 'A server-rendered site mostly gets correctness for free. A client-rendered one has to earn every one of these — because the default state a crawler meets, before any JavaScript has run, is an empty page. This is the list we actually check, built from fixing each item after it went wrong first.',
      },
      { h2: 'Verify with the right identity, not your own browser' },
      {
        p: "A plain request to the site tells you almost nothing if crawlers and normal visitors are served differently — which, on a prerendered site, they are by design. Check with the actual crawler user agent, and check the ones people forget: Google's ad-quality crawler and Bing's are both real, both distinct from the main indexing bot, and neither contains the substring most bot-detection code is written to match.",
      },
      { h2: 'Confirm the sitemap describes reality, not the plan for it' },
      {
        ul: [
          "Every URL in the sitemap actually resolves — checked with a real request, not assumed from the route table",
          'The file is regenerated on a schedule, or on every publish — a sitemap that was correct on launch day and never touched again is a liability with a delay timer on it',
          'A generator that writes a sitemap should refuse to write anything if its own self-check fails, rather than overwrite a good file with a broken one',
        ],
      },
      { h2: 'Assume the fallback has not really been tested' },
      {
        p: 'Fallback logic almost always gets tested against the failure that is easiest to simulate — the backend being completely down. The failure that reaches production is usually the other kind: something responds, just not with what was expected. Test that path specifically, not just "unplug it and see".',
      },
      { h2: 'Distrust anything that looks cached' },
      {
        p: "If a fix does not appear to be live, check every caching layer between the origin and the browser individually — a CDN, a reverse proxy, a disk-level render cache, and, on a site with a Service Worker, the browser's own cache are four different systems that can each independently decide to serve something stale, and clearing one says nothing about the other three.",
      },
      { h2: 'Give every distinct piece of content its own identity' },
      {
        ul: [
          'A canonical tag that actually points at itself, not at the homepage by accident',
          'Open Graph tags built per page, not inherited wholesale from a static shell meant only for the loading state',
          'A noindex meta tag that means "not ready yet", never confused in code with "does not exist" — a thin page and a missing one need different HTTP behaviour',
        ],
      },
      {
        quote:
          "None of this is exotic. It is the list of specific ways a client-rendered site quietly disagrees with what search engines and social scrapers see — checked directly, once, rather than assumed correct because the site looks fine in a browser.",
      },
    ],
  },
];

export default posts;
