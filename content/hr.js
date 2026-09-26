const hr = {
  code: 'hr',
  label: 'Hrvatski',
  htmlLang: 'hr',

  nav: {
    services: 'Usluge',
    work: 'Radovi',
    vodici: 'Vodiči',
    contact: 'Kontakt',
  },

  meta: {
    siteDescription:
      'Digitalni studio koji gradi web platforme, AI alate i automatizacije. Proizvodi koji se pokrenu, koriste i rastu — bez nepotrebne komplikacije.',
    siteTitle: 'Lumenta Labs — Web platforme, AI alati, automatizacija.',
    ogLocale: 'hr_HR',
  },

  /**
   * Title and description per page. Before this every page but the blog posts
   * inherited meta.siteDescription, so /usluge, /radovi, /kontakt and the video
   * page all showed the same sentence in Google — one description for five
   * different pages tells a searcher nothing about which one to open.
   */
  pageMeta: {
    home: {
      // The title template only reaches child segments, so the home page has
      // to carry the brand itself or it ships a title with no company in it.
      title: 'Digitalni studio za web, AI i automatizaciju — Lumenta Labs',
      description:
        'Gradimo web platforme, AI alate i automatizacije koje rade u produkciji. Dvanaest vlastitih proizvoda, isti tim od podatkovnog modela do nadzora.',
    },
    services: {
      title: 'Usluge razvoja i AI automatizacije',
      description:
        'Pet problema koje rješavamo: web platforme, AI automatizacija procesa, opisi proizvoda za webshop, video lokalizacija i održavanje s nadzorom.',
    },
    work: {
      title: 'Proizvodi koje smo izgradili',
      description:
        'Pet proizvoda koje smo izgradili, pustili u rad i još održavamo — Bezmaske, Lumenta AI, The Dog Habit, UnmaskedWords i DocuFlow AI. Svi su živi.',
    },
    contact: {
      title: 'Kontakt',
      description:
        'Opišite problem, ne rješenje. Javljamo se u roku od 24 sata, formom ili e-mailom. Ako nismo pravi ljudi za to, reći ćemo vam odmah.',
    },
    video: {
      description:
        'Iz jedne produkcije radimo naraciju, sinkronizaciju, miks i titlove za svako tržište na kojem prodajete. Gotov master po jeziku, slika netaknuta.',
    },
  },

  a11y: {
    skip: 'Prijeđi na glavni sadržaj',
    langNav: 'Jezik',
    mainNav: 'Glavna navigacija',
    footerNav: 'Podnožje',
    legalNav: 'Pravno',
    heroVideoPause: 'Zaustavi pozadinski video',
    heroVideoPlay: 'Pokreni pozadinski video',
    newTab: 'otvara se u novoj kartici',
    breadcrumb: 'Navigacijski trag',
  },

  notFound: {
    title: 'Stranica nije pronađena',
    eyebrow: '404',
    h1: 'Te stranice ovdje nema.',
    lede: 'Poveznica je možda stara ili se u adresu potkrala pogreška. Sve što na ovoj stranici postoji udaljeno je jedan klik.',
    home: 'Idi na naslovnicu',
    work: 'Pogledaj što smo izgradili',
  },

  home: {
    eyebrow: 'Digitalni studio',
    h1: 'Web platforme, AI alati, automatizacija.',
    lede: 'Proizvodi koji se pokrenu, koriste i rastu — bez nepotrebne komplikacije.',
    ctaPrimary: 'Pokreni projekt',
    ctaSecondary: 'Pogledaj što smo izgradili',

    wallH2: 'Svaka tvrtka prije ili kasnije udari u isti zid.',
    wallP:
      'Ideja je jasna, plan je spreman — ali između toga i platforme, AI alata ili automatizacije koja stvarno radi u produkciji, većina projekata stane. Najčešće nam se jave e-trgovine i tvrtke kojima treba proizvod veći od onoga što interni tim stigne izgraditi i održavati. Zbog tog jaza i postojimo.',

    whatH2: 'Što radimo',
    whatLede:
      'Pet stvari koje rješavaju konkretan poslovni problem — sporu platformu, ručni posao koji guta vrijeme tima, ili katalog koji je prerastao sadržaj koji ga prati — odrađenih kako treba, od istog tima koji će biti tu i kad ih zatreba mijenjati.',

    quote: ['AI nije naslov. ', 'AI je infrastruktura', ' — ugrađena u sustave koje već koristite, s poslom koji se može izmjeriti.'],
    quoteNote: 'U praksi: proces koji radi svaki dan, a ne demo koji radi jednom.',

    proofH2: 'Ovo ne preporučujemo. Na ovome radimo.',
    proofLede:
      'Sve što nudimo klijentima prvo smo izgradili i dokazali na vlastitim projektima — ista arhitektura, isti procesi, isti standardi. Sve je živo i možete ih otvoriti odmah.',

    howH2: 'Kako radimo',
    howLede:
      'Bez praznih prezentacija. Najkraći put između onoga što vam treba i nečega što radi u produkciji.',

    reelH2: 'Studio u tri minute',
    reelLede: 'Kratak uvod u to kako gradimo.',
    reelPlay: 'Pokreni video',
    reelNote: 'Ništa se s YouTubea ne učitava dok ne pritisnete play',

    finalH2: 'Recite nam što bi trebalo postojati.',
    finalLede: 'Jasan dogovor, konkretna isporuka, mjerljiv rezultat.',
    finalCta: 'Javite nam se',

    about: {
      h2: 'Tko ovo radi',
      paragraphs: [
        'Iza Lumenta Labsa stojim ja, Denis. Dvanaest godina gradim digitalne proizvode, zadnjih šest specijalizirano za AI i automatizaciju.',
        'Razgovarate izravno sa mnom. Isti čovjek koji vam piše ponudu piše i kod, i diže ga u produkciju — nema account managera koji prenosi poruke, nema podizvođača u trećoj zemlji.',
        'Dvanaest vlastitih proizvoda drži se u produkciji: Lumenta AI, The Dog Habit, UnmaskedWords, BezMaske i ostali. Sve što nudim klijentima prvo je prošlo kroz njih. Ne prodajem ništa što nisam sam držao u zraku.',
      ],
      cta: 'Pogledajte što smo izgradili →',
      stats: [
        ['12+', 'godina u digitalnom razvoju'],
        ['6', 'godina u AI-u i automatizaciji'],
        ['12', 'vlastitih proizvoda u produkciji'],
      ],
      photoAlt: 'Denis Šehić',
    },
  },

  /**
   * The guides live on their own domain; the site points at them, never copies
   * them. Empty the href and both this section and the nav link disappear.
   */
  vodici: {
    eyebrow: 'Besplatno',
    h2: 'Tri vodiča o automatizaciji, napisana da ih primijenite sami.',
    lede:
      'Ono što inače postavljamo klijentima, razloženo korak po korak: opisi proizvoda, objave na mrežama i korisnička podrška. Bez pretplate i bez prodajnog razgovora.',
    items: [
      'Opisi proizvoda koji se generiraju sami, u tonu vaše trgovine',
      'Jedan sadržaj, objavljen na svakoj mreži u obliku koji ta mreža traži',
      'Podrška koja odgovara iz vaše baze znanja, umjesto da izmišlja',
    ],
    cta: 'Pogledajte vodiče',
    note: 'PDF-ovi su besplatni i dostupni odmah. Ako vam se ne isplati raditi to sami, znate gdje smo.',
    // Now an internal path: the guides are pages here. The PDF form stays on
    // the subdomain and is offered from each guide, so the mailing list keeps
    // growing without the content staying invisible.
    href: '/vodici',
    pdfHref: 'https://vodici.lumentalabs.studio',
  },

  vodiciPage: {
    eyebrow: 'Besplatno',
    h1: 'Tri vodiča o automatizaciji, napisana da ih primijenite sami',
    lede:
      'Ono što inače postavljamo klijentima, razloženo korak po korak. Cijeli sadržaj je ovdje, besplatno i bez upisivanja e-maila — PDF je samo pakirana verzija istoga.',
    read: 'Otvori vodič',
    closingH2: 'Ne isplati vam se raditi to sami?',
    closingLede: 'Iste ovakve automatizacije postavljamo po mjeri. Opišite što vam treba.',
    closingCta: 'Javite nam se',
  },

  vodicPage: {
    eyebrow: 'Vodič',
    allGuides: 'Svi vodiči',
    contents: 'Sadržaj',
    factsH2: 'Ukratko',
    pdfH2: 'Želite ovo kao PDF?',
    pdfText:
      'Sva tri vodiča šaljemo na e-mail, u obliku za ispis i dijeljenje. Isti sadržaj koji je ovdje — samo pakiran.',
    pdfCta: 'Pošaljite mi PDF-ove',
    relatedH2: 'Radije da to odradimo mi?',
    relatedCta: 'Pogledajte uslugu',
  },

  servicesPage: {
    eyebrow: 'Usluge',
    h1: 'Pet problema koje rješavamo',
    lede: 'Ako se prepoznate u nekom od njih, javite se. Ako ne, recite nam svoj — možda ga rješavamo, a nismo ga tako nazvali.',
    deeper: 'Kako to izgleda u detalje →',
    gets: 'Što dobivate',
    notFor: 'Kad ovo nije za vas:',
    closingH2: 'Što od ovoga vam treba?',
    closingLede:
      'Ako niste sigurni, opišite problem umjesto rješenja. Iskreno ćemo vam reći jesmo li mi pravi ljudi za to.',
    closingCta: 'Javite nam se',

    problems: [
      {
        slug: 'platforms',
        title: 'Trebate platformu koja neće trebati prepravku za godinu dana',
        paragraphs: [
          'Većina projekata ne propadne na lansiranju, nego šest mjeseci poslije — kad treba dodati jezik, tržište ili tip proizvoda, a temelj to ne podnosi.',
          'Preuzimamo cijeli put: podatkovni model, sučelje, deploy, nadzor. Vi dobivate sustav koji radi, ne prototip koji netko treba dovršiti.',
        ],
        gets: [
          'Platformu koja podnosi rast bez ponovnog pisanja',
          'Jednu odgovornu stranu za sve — od baze do domene',
          'Predaju s dokumentacijom, tako da niste zaključani uz nas',
        ],
        notFor: 'ako trebate prezentacijsku stranicu od pet podstranica, jeftinije ćete proći s gotovim rješenjem. Reći ćemo vam to odmah.',
      },
      {
        slug: 'ai',
        title: 'Vaš tim gubi sate na posao koji stroj može odraditi',
        paragraphs: [
          'Netko svaki tjedan prepisuje podatke iz jednog sustava u drugi. Netko ručno slaže izvještaj koji izgleda isto svaki mjesec. To nije problem ljudi, nego procesa.',
          'Krećemo od konkretnog zadatka i mjerimo koliko sati oslobađa. AI ulazi tamo gdje se isplati, a ne tamo gdje dobro zvuči.',
        ],
        gets: [
          'Proces koji radi bez da ga netko gura svaki dan',
          'Mjerljivu uštedu sati, dogovorenu prije nego što počnemo',
          'Alat koji tim koristi unutar postojećeg sučelja, bez novog programa za učiti',
        ],
        notFor: 'ako se proces mijenja svaki mjesec, prvo ga treba posložiti. Automatizacija kaosa daje brži kaos.',
      },
      {
        slug: 'ecommerce',
        title: 'Tisuće artikala bez opisa — ili s opisima dobavljača',
        paragraphs: [
          'Katalog raste brže nego što ga netko stigne opisati. Opisi prepisani od dobavljača Google tretira kao duplikat, a strojni prijevod se vidi na prvu.',
          'Postavljamo proces koji piše opise kroz cijeli katalog, u vašem tonu i s vašim nazivljem, na jeziku tržišta na kojem doista prodajete — ne naknadno preveden.',
        ],
        gets: [
          'Cijeli katalog pokriven u tjednima, ne mjesecima',
          'Tekst koji zvuči kao jedan brend, a ne kao tisuću nasumičnih AI odlomaka',
          'Kontrolu prije objave — ništa ne ide van bez vašeg odobrenja',
        ],
        notFor: 'ako imate stotinjak artikala i copywritera koji ih stigne obraditi, ovo vam ne treba.',
      },
      {
        slug: 'video',
        title: 'Jedan video, pet tržišta',
        paragraphs: [
          'Snimanje po tržištu je najskuplji način da se dobije ista poruka na pet jezika.',
          'Iz jedne produkcije radimo naraciju, sinkronizaciju, miks i titlove za svaku jezičnu verziju.',
        ],
        gets: [
          'Sve jezične verzije iz jednog snimanja',
          'Titlove i naraciju usklađene s tekstom na stranici',
          'Materijal spreman za objavu, ne sirovi eksport',
        ],
        notFor: 'ako vam treba jedan video na jednom jeziku, lokalna produkcija bit će brža.',
      },
      {
        slug: 'architecture',
        title: 'Nemate koga zvati kad nešto padne',
        paragraphs: [
          'Kad su dizajn, kod i hosting kod tri različite strane, kvar postane rasprava o tome tko je kriv.',
          'Arhitektura, sučelje i pogon ostaju kod jednog tima. Backupi, nadogradnje i nadzor su uključeni, ne dodatna stavka na računu.',
        ],
        gets: [
          'Jedan kontakt za sve, s dogovorenim vremenom odziva',
          'Backupe i nadzor koji rade i kad nitko ne gleda',
          'Nadogradnje prije nego što postanu problem',
        ],
        notFor: 'ako imate vlastiti tehnički tim, radimo samo dio koji vam nedostaje — recite koji.',
      },
    ],
  },

  /**
   * One page per service, because /usluge as a single page gives Google nothing
   * to rank: a visitor searching "izrada web aplikacija" needs a URL, a title
   * and an H1 that say those words. `path` is the localised slug — it differs
   * per language on purpose, and content/index.js maps between them so the
   * language switcher and hreflang still line up.
   *
   * `video` deliberately has no entry: /services/video already exists and is a
   * fuller page than anything generated here would be. Two pages competing for
   * the same query is the problem, not the fix.
   */
  serviceDetails: [
    {
      slug: 'platforms',
      path: 'izrada-web-aplikacija',
      title: 'Izrada web aplikacija po mjeri',
      description:
        'Izrada web aplikacija i platformi po mjeri — podatkovni model, sučelje, deploy i nadzor kod jednog tima. Radi u produkciji, ne samo na demou.',
      h1: 'Izrada web aplikacija po mjeri',
      lede:
        'Platforme koje podnose rast bez prepravke za godinu dana. Cijeli put od podatkovnog modela do nadzora u produkciji, kod jednog tima.',
      intro: [
        'Većina projekata ne propadne na lansiranju, nego šest mjeseci poslije — kad treba dodati jezik, tržište ili tip proizvoda, a temelj to ne podnosi. Prepravka tada košta više nego što je koštala prva verzija.',
        'Izrada web aplikacije kod nas znači cijeli put: podatkovni model, sučelje, deploy, nadzor. Vi dobivate sustav koji radi, ne prototip koji netko treba dovršiti.',
        'Isti pristup drži dvanaest naših vlastitih proizvoda u produkciji. Ne nudimo arhitekturu koju nismo sami održavali.',
      ],
      pricing: {
        q: 'Koliko košta izrada web aplikacije?',
        bands: [
          {
            price: '6.000 – 12.000 €',
            name: 'Alat za jedan tim',
            body: 'Aplikacija koju koristi jedan tim unutar firme. Ima prijavu, ali nema složene uloge ni korisnike izvan firme. Jedna namjena, odrađena do kraja.',
            examples: [
              'Evidencija radnih naloga koju terenski tim popunjava s mobitela',
              'Program za ponude koji zamjenjuje Excel s deset kartica',
              'Pregled koji spaja podatke iz dva sustava na jedan ekran',
            ],
            boundary: 'Čim zatrebaju uloge i ovlasti ili pristup ljudima izvan firme, riječ je o sljedećem pojasu.',
          },
          {
            price: '12.000 – 28.000 €',
            name: 'Platforma s vanjskim korisnicima',
            body: 'Sustav kojim se koriste i ljudi izvan vaše firme — klijenti, partneri, dobavljači. Uloge i ovlasti, i razmjena podataka s tuđim sustavima.',
            examples: [
              'Portal na kojem klijenti prate status svojih naloga',
              'Sustav rezervacija s naplatom i potvrdama',
              'Aplikacija koja podatke vuče iz vašeg ERP-a i vraća ih natrag',
            ],
            boundary: 'Ovdje je najviše naših projekata.',
          },
          {
            price: 'od 28.000 €',
            name: 'Sustav na kojem firma radi',
            body: 'Kad aplikacija nije pomoćni alat, nego mjesto na kojem se posao odvija. Više tipova korisnika, promjene u stvarnom vremenu, integracije s više sustava.',
            examples: [
              'Platforma s hijerarhijom pristupa i tisućama korisnika',
              'Usklađivanje zaliha između više lokacija u stvarnom vremenu',
              'Sustav koji spaja ERP, CRM i naplatu u jedan tok',
            ],
            boundary: 'Ovakav projekt uvijek počinje razgovorom o opsegu, ne cijenom.',
          },
        ],
        min: 6000,
      },
      faq: [
        {
          q: 'Što sve ulazi u izradu web aplikacije?',
          a: 'Podatkovni model, aplikacija, deploy i nadzor. Jedna odgovorna strana za sve — od baze do domene — i predaja s dokumentacijom, tako da niste zaključani uz nas.',
        },
        {
          q: 'Radite li i prezentacijske web stranice?',
          a: 'Ako trebate stranicu od pet podstranica, jeftinije ćete proći s gotovim rješenjem i reći ćemo vam to odmah. Ovo je za sustave koji rastu.',
        },
        {
          q: 'Što ako već imamo aplikaciju koja ne valja?',
          a: 'Opišite što s njom ne valja. Preuzimanje postojećeg sustava radimo, ali prvo pogledamo isplati li se popravljati ili pisati ispočetka.',
        },
      ],
    },
    {
      slug: 'ai',
      path: 'ai-automatizacija-poslovanja',
      title: 'AI automatizacija poslovnih procesa',
      description:
        'AI automatizacija ručnih procesa u sustavima koje tim već koristi. Krećemo od konkretnog zadatka i mjerimo koliko sati oslobađa.',
      h1: 'AI automatizacija poslovnih procesa',
      lede:
        'Ručni posao koji se ponavlja svaki tjedan preuzima proces. AI ulazi tamo gdje se isplati, a ne tamo gdje dobro zvuči.',
      intro: [
        'Netko svaki tjedan prepisuje podatke iz jednog sustava u drugi. Netko ručno slaže izvještaj koji izgleda isto svaki mjesec. To nije problem ljudi, nego procesa.',
        'Krećemo od konkretnog zadatka i mjerimo koliko sati oslobađa. Automatizacija koja ne može pokazati uštedu nije automatizacija, nego trošak s boljim imenom.',
        'Alat ulazi u sučelje koje tim već otvara svako jutro. Nema novog programa za učiti.',
      ],
      pricing: {
        q: 'Koliko košta AI automatizacija procesa?',
        bands: [
          {
            price: '3.500 – 8.000 €',
            name: 'Jedan proces',
            body: 'Jedan zadatak koji se ponavlja svaki tjedan, automatiziran od početka do kraja i izmjeren prije i poslije.',
            examples: [
              'Prepisivanje podataka iz jednog sustava u drugi',
              'Mjesečni izvještaj koji netko slaže ručno',
              'Razvrstavanje upita iz inboxa i priprema odgovora',
            ],
            boundary: 'Ako niste sigurni koji zadatak prvi, to je razgovor od pola sata i besplatan je.',
          },
          {
            price: '8.000 – 20.000 €',
            name: 'Više procesa u vašem sustavu',
            body: 'Nekoliko povezanih zadataka, ugrađenih u sučelje koje tim već otvara svako jutro. Nema novog programa za učiti.',
            examples: [
              'Obrada dokumenata od zaprimanja do odobrenja',
              'Dopunjavanje CRM-a iz e-maila i poziva, bez ručnog unosa',
              'Priprema ponuda iz podataka koje već imate u sustavu',
            ],
            boundary: '',
          },
          {
            price: 'od 20.000 €',
            name: 'Vlastiti alat',
            body: 'Kad gotovo rješenje ne postoji ili ne radi kako vama treba, pa se gradi vaš — i ostaje vaš.',
            examples: [
              'Interni asistent nad vašom bazom znanja i dokumentima',
              'Alat koji tim koristi svaki dan i koji nitko drugi nema',
            ],
            boundary: '',
          },
        ],
        min: 3500,
      },
      faq: [
        {
          q: 'Kako znamo da se automatizacija isplati?',
          a: 'Uštedu sati dogovorimo prije nego što počnemo. Ako zadatak ne oslobađa mjerljivo vrijeme, reći ćemo vam da ga ne automatizirate.',
        },
        {
          q: 'Mora li tim učiti novi alat?',
          a: 'Ne. Proces ulazi unutar postojećeg sučelja koje već koriste.',
        },
        {
          q: 'Kad automatizacija nije dobra ideja?',
          a: 'Ako se proces mijenja svaki mjesec, prvo ga treba posložiti. Automatizacija kaosa daje brži kaos.',
        },
      ],
    },
    {
      slug: 'ecommerce',
      path: 'ai-opisi-proizvoda-za-webshop',
      title: 'AI opisi proizvoda za webshop',
      description:
        'Generiranje opisa proizvoda kroz cijeli katalog, u vašem tonu i na jeziku tržišta na kojem prodajete. Kontrola prije objave, bez duplikata dobavljača.',
      h1: 'AI opisi proizvoda za cijeli katalog',
      lede:
        'Tisuće artikala bez opisa — ili s opisima prepisanim od dobavljača, koje Google tretira kao duplikat. Postavljamo proces koji ih piše kroz cijeli katalog.',
      intro: [
        'Katalog raste brže nego što ga netko stigne opisati. Opisi prepisani od dobavljača Google tretira kao duplikat, a strojni prijevod se vidi na prvu — i jedno i drugo košta vas pozicije u pretrazi.',
        'Postavljamo proces koji piše opise kroz cijeli katalog, u vašem tonu i s vašim nazivljem, na jeziku tržišta na kojem doista prodajete — ne naknadno preveden.',
        'Ništa ne ide van bez vašeg odobrenja. Kontrola prije objave dio je procesa, ne dodatak.',
      ],
      // Three sections the page was missing, aimed at the query rather than at
      // the brand: what this costs against the way the market prices the same
      // work, what duplicate supplier copy actually does, and why a translated
      // description is not the same as one written for that market. All three
      // belong here rather than in a blog post that would compete with this
      // page for the one query it targets.
      sections: [
        {
          h2: 'Po komadu ili po katalogu',
          paragraphs: [
            'Objavljene hrvatske cijene za pisanje opisa kreću se od 5 do 25 € po opisu, ovisno o duljini i razini SEO obrade. To je logika po komadu: katalog od tisuću artikala je između 5.000 i 25.000 €, a od tri tisuće između 15.000 i 75.000 €.',
            'Mi ne naplaćujemo po komadu, nego po katalogu. Razlog je jednostavan: posao je u postavljanju procesa — tona, nazivlja, pravila i kontrole. Kad to stoji, tisuću artikala i deset tisuća artikala nisu deset puta različit posao.',
          ],
          table: {
            head: ['Artikala', 'Po tržišnoj cijeni (5 – 25 € / opis)', 'Kod nas'],
            rows: [
              ['500', '2.500 – 12.500 €', '1.500 – 4.000 €'],
              ['1.000', '5.000 – 25.000 €', '1.500 – 4.000 €'],
              ['5.000', '25.000 – 125.000 €', '4.000 – 12.000 €'],
            ],
          },
          note: 'Iznad pet tisuća artikala ili više od dva tržišta radimo procjenu po opsegu. Za razmjer: kroz vlastiti proizvod Lumenta AI prošlo je 12.000 opisa u devet dana — nije klijentski projekt, nego mjera da vaš katalog gotovo sigurno nije prevelik za ovo.',
        },
        {
          h2: 'Što opisi dobavljača stvarno rade',
          paragraphs: [
            'Uvriježeno je da Google kažnjava duplicirani sadržaj. Ne kažnjava, i to stoji u njihovoj vlastitoj dokumentaciji: „it\u2019s not something that will cause a manual action”. Ono što Google radi je gore od kazne jer je tiho — za isti sadržaj odabere jednu verziju koju će pokazati, a ostale ne pokazuje. Nema poruke, nema upozorenja u Search Consoleu; samo vas nema.',
            'Za vas to znači da na svojoj vlastitoj stranici proizvoda ne nastupate s ničim svojim. Jedino po čemu se možete razlikovati je cijena, a to je natjecanje koje dobiva onaj s najdubljim džepom.',
            'Vlastiti opis to mijenja iz temelja: stranica dobiva tekst koji nijedna druga trgovina nema, i počinje rangirati za način na koji vaši kupci pitaju, a ne onako kako je dobavljač napisao katalog.',
          ],
          // Sourced, because this section contradicts what most Croatian pages
          // on the subject say. A claim that goes against the consensus has to
          // stand on a document, not on us.
          sources: [
            { text: 'Google Search Central — SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
            { text: 'Google Search Central — kanonski URL-ovi', href: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls' },
          ],
        },
        {
          h2: 'Napisano na jeziku tržišta, ne prevedeno',
          paragraphs: [
            'Prijevod prenosi rečenicu, ali ne prenosi upit. Njemački kupac ne traži prijevod hrvatske fraze — traži ono što Nijemci doista upisuju, a to je često druga riječ, drugi red veličine pretraga i drugi kupovni motiv.',
            'Zato opise pišemo na jeziku tržišta, s nazivljem i pretragama tog tržišta, a ne tako da hrvatski tekst provučemo kroz prevoditelj. Isti artikl može imati različit naglasak u Hrvatskoj i u Njemačkoj, jer se različito i kupuje.',
            'Praktična posljedica: dvije jezične verzije nisu dvostruki posao, ali nisu ni jedan posao s prijevodom na kraju. Cijena za više tržišta to odražava.',
          ],
        },
      ],
      pricing: {
        q: 'Koliko košta generiranje opisa proizvoda?',
        bands: [
          {
            price: '1.500 – 4.000 €',
            name: 'Do tisuću artikala, jedan jezik',
            body: 'Postavljamo proces na vaš ton i vaše nazivlje, pa prođemo katalog. Vi pregledavate i odobravate prije objave.',
            examples: [
              'Katalog bez opisa, ili s opisima prepisanim od dobavljača',
              'Nova grupa artikala koju treba opisati u istom tonu kao postojeće',
            ],
            boundary: 'Ako imate stotinjak artikala i copywritera koji ih stigne obraditi, ovo vam ne treba.',
            // Qualifying someone out is only half the job; this says where to
            // go instead. Lumenta AI is our own tool and does the same thing
            // self-serve, without us in the loop.
            selfServe: {
              text: 'Manji katalog i želite to sami? Lumenta AI je naš alat koji piše opise — samoposluga, bez nas u procesu.',
              cta: 'Otvori Lumenta AI',
              href: 'https://lumenta.shop',
            },
          },
          {
            price: '4.000 – 12.000 €',
            name: 'Cijeli katalog, više jezika',
            body: 'Isti proces kroz cijeli katalog i na svakom tržištu na kojem prodajete — pisano na tom jeziku, ne prevedeno naknadno.',
            examples: [
              'Tisuće artikala na dva ili više tržišta',
              'Kategorije i tekstovi kampanja uz same opise',
            ],
            boundary: '',
          },
        ],
        min: 1500,
        max: 12000,
      },
      faq: [
        {
          q: 'Koliko dugo traje obrada cijelog kataloga?',
          a: 'Katalog se pokriva u tjednima umjesto mjesecima. Točan raspon ovisi o broju artikala i broju jezika — recite oboje i dat ćemo procjenu.',
        },
        {
          q: 'Hoće li opisi zvučati kao generički AI tekst?',
          a: 'Proces se postavlja na vaš ton i vaše nazivlje, pa katalog zvuči kao jedan brend, a ne kao tisuću nasumičnih odlomaka.',
        },
        {
          q: 'Imamo stotinjak artikala — treba li nam ovo?',
          a: 'Ako imate copywritera koji ih stigne obraditi, ne treba. Ovo rješava problem razmjera.',
        },
      ],
    },
    {
      slug: 'architecture',
      path: 'odrzavanje-i-hosting-web-aplikacija',
      title: 'Održavanje i hosting web aplikacija',
      description:
        'Arhitektura, sučelje i pogon kod jednog tima. Backupi, nadzor i nadogradnje su uključeni, s dogovorenim vremenom odziva kad nešto padne.',
      h1: 'Održavanje i hosting web aplikacija',
      lede:
        'Kad su dizajn, kod i hosting kod tri različite strane, kvar postane rasprava o tome tko je kriv. Ovdje je jedan kontakt za sve.',
      intro: [
        'Kad su dizajn, kod i hosting kod tri različite strane, kvar postane rasprava o tome tko je kriv. Vi u međuvremenu ne radite.',
        'Arhitektura, sučelje i pogon ostaju kod jednog tima. Backupi, nadogradnje i nadzor su uključeni, ne dodatna stavka na računu.',
        'Isti nadzor i iste noćne backupe vrtimo na vlastitim proizvodima. Ono što nudimo vama već drži naše u zraku.',
      ],
      pricing: {
        q: 'Koliko košta održavanje aplikacije mjesečno?',
        bands: [
          {
            price: '350 – 900 € / mj',
            name: 'Jedna aplikacija',
            body: 'Nadzor koji radi i kad nitko ne gleda, noćni backupi s provjerom ispravnosti, nadogradnje prije nego što postanu problem, i jedan kontakt kad nešto stane.',
            examples: [
              'Aplikacija koju smo gradili mi',
              'Postojeći sustav koji preuzimamo nakon pregleda',
            ],
            boundary: 'Ovo nije održavanje web stranice. Ako trebate ažuriranje pluginova na WordPressu, jeftinije ćete proći drugdje.',
          },
          {
            price: '900 – 2.500 € / mj',
            name: 'Više sustava',
            body: 'Nekoliko aplikacija ili okruženja pod istim nadzorom, s dogovorenim vremenom odziva i planom što se radi kad nešto padne.',
            examples: [
              'Produkcija i testno okruženje uz nekoliko servisa',
              'Više aplikacija koje dijele bazu ili prijavu',
            ],
            boundary: 'Ako imate vlastiti tehnički tim, radimo samo dio koji vam nedostaje.',
          },
        ],
        min: 350,
        max: 2500,
        unit: 'MON',
      },
      faq: [
        {
          q: 'Što je uključeno u održavanje?',
          a: 'Backupi i nadzor koji rade i kad nitko ne gleda, nadogradnje prije nego što postanu problem, i jedan kontakt s dogovorenim vremenom odziva.',
        },
        {
          q: 'Imamo vlastiti tehnički tim — možete li pokriti samo dio?',
          a: 'Možemo. Radimo dio koji vam nedostaje — recite koji.',
        },
        {
          q: 'Preuzimate li aplikaciju koju nije radio vaš tim?',
          a: 'Preuzimamo, nakon pregleda postojećeg sustava. Ako je stanje takvo da održavanje nema smisla bez zahvata, reći ćemo vam to prije nego što se dogovorimo.',
        },
      ],
    },
  ],

  serviceDetailPage: {
    eyebrow: 'Usluga',
    pricingH2: 'Okvirna cijena',
    // Stated once, here, rather than per service. While the obrt is outside the
    // VAT system the invoice says so anyway; writing it from the start means
    // entering the system later is not read as a 25% price rise.
    vatNote: 'Sve cijene su bez PDV-a. Konačna ponuda ovisi o opsegu — raspon je tu da odmah znate jesmo li u istom redu veličine.',
    priceQ: 'Koliko košta?',
    getsH2: 'Što dobivate',
    notForH2: 'Kad ovo nije za vas',
    faqH2: 'Česta pitanja',
    sourcesLabel: 'Izvor',
    closingH2: 'Zvuči kao vaš problem?',
    closingLede: 'Opišite ga običnim riječima. Ako nismo pravi ljudi za to, reći ćemo vam — taj odgovor je besplatan.',
    closingCta: 'Javite nam se',
    allServices: 'Sve usluge',
    otherH2: 'Ostale usluge',
  },

  workPage: {
    eyebrow: 'Radovi',
    h1: 'Radimo na onome što prodajemo.',
    lede:
      'Nisu ovo logotipi klijenata na zidu. Ovo je pet proizvoda koje smo izgradili, pustili u rad i još ih održavamo — i svaki je živ upravo sada. Otvorite ih i prosudite sami.',
    problem: 'Problem',
    built: 'Što smo izgradili',
    result: 'Rezultat',
    lesson: 'Zašto je to vama važno',
    visit: 'Otvori',
    closingH2: 'Treba vam nešto slično?',
    closingLede: 'Opišite problem i reći ćemo vam što je potrebno.',
    closingCta: 'Javite nam se',
    allWork: 'Svi radovi',
  },

  contactPage: {
    eyebrow: 'Kontakt',
    h1: 'Recite nam što bi trebalo postojati.',
    lede:
      'Opišite problem, ne rješenje. Ako nismo pravi ljudi za to, reći ćemo vam — taj odgovor je besplatan i objema stranama štedi mjesec dana.',
    openMail: 'Otvori u mail programu',
    copy: 'Kopiraj adresu',
    copied: 'Kopirano',
    expectH2: 'Što možete očekivati',
    helpH2: 'Što nam pomaže da brzo odgovorimo',
    help: [
      'Što bi ta stvar trebala raditi, običnim riječima',
      'Postoji li već nešto i što s time ne valja',
      'Otprilike kada mora biti živo i što se događa ako ne bude',
      'Okvir budžeta — i grub raspon uštedi puno nagađanja',
    ],
    form: {
      h2: 'Pošaljite upit',
      name: 'Ime i prezime',
      email: 'E-mail',
      message: 'Opišite problem',
      messageHint: 'Običnim riječima. Ako već nešto postoji, napišite što s time ne valja.',
      submit: 'Pošalji upit',
      sending: 'Šaljem…',
      okTitle: 'Primljeno.',
      okBody: 'Javljamo se u roku od 24 sata.',
      failed: 'Slanje nije uspjelo.',
      // Keyed by the code the route returns, so the visitor reads the reason in
      // the language of the page they are on.
      errors: {
        rate_limited: 'Prebrzo. Pričekajte pola minute pa pokušajte ponovno.',
        invalid_name: 'Unesite ime.',
        invalid_email: 'Unesite ispravnu e-mail adresu.',
        message_too_long: 'Poruka je predugačka.',
        not_configured: 'Forma trenutno ne radi na našoj strani.',
        save_failed: 'Spremanje nije uspjelo.',
      },
      mailFallback: 'Pošaljite iz svog mail programa',
      mailPrefill: 'Radije iz svog mail programa? Otvori s ispunjenim podacima',
      honeypot: 'Ne popunjavati',
      subject: 'Upit preko web stranice',
    },
  },

  videoPage: {
    eyebrow: 'Usluge',
    pricingH2: 'Okvirna cijena',
    // Priced by language, because that is how the work actually costs: the
    // first pass carries the script, the voice and the mix, and every further
    // language after it is close to free. One band covering "up to three
    // languages" charged the same for one as for three.
    pricing: [
      {
        price: '450 – 900 €',
        name: 'Jedan film, jedan jezik',
        body: 'Scenarij, glas, miks ispod zvuka koji snimka već nosi, i titlovi u formatu koji odredište prihvaća. Vaša se slika ne kodira ponovno.',
      },
      {
        price: '+150 – 300 €',
        name: 'Svaki dodatni jezik',
        body: 'Isti film na još jednom tržištu. Prvi prolaz nosi scenarij i miks, pa svaki jezik nakon njega košta znatno manje.',
      },
      {
        price: 'od 1.800 €',
        name: 'Više filmova',
        body: 'Serija snimaka ili cijeli katalog materijala, po opsegu.',
      },
    ],
    vatNote: 'Sve cijene su bez PDV-a. Cijena ovisi o duljini snimke; dodatni jezici naplaćuju se po komadu.',
    h1: 'Jedan film. Svako tržište na kojem prodajete.',
    lede:
      'Ponovno snimanje za svaki jezik način je na koji umiru budžeti za video. Mi narriramo ono što već imate i iz jednog prolaza radimo verziju za svako tržište.',
    cta: 'Razgovarajmo o filmu',

    gapH2: 'Dio koji nitko ne rješava',
    gapP: [
      'Većina snimaka nije nijema. Ima glazbu, voditelja ili intervju — a upravo se tu automatski alati za naraciju raspadaju. Pretpostavljaju prazan zvuk i govore preko onoga tko već govori.',
      'Mi prepoznajemo gdje snimka već nosi glas i naraciju smještamo oko njega. Preko vašeg voditelja nitko ne govori. Glazba ne guši rečenicu. To nije postavka koje se netko sjetio uključiti, nego mjerenje iz samog zvuka.',
    ],

    howH2: 'Kako teče',
    howLede: 'Četiri koraka, a rezultat vidite nakon svakog, ne tek na kraju.',
    steps: [
      ['Scenarij', 'Pišemo naraciju za snimke koje već imate, glasom kojim vaš brend doista govori. Duljinu računamo unatrag iz trajanja, pa se nigdje ne žuri i nigdje ne ostaje bez slike.'],
      ['Glas', 'Neuralni glasovi na više od sto jezičnih i regionalnih varijanti, uz kontrolu tempa, visine i izvedbe. Kandidate slušate na vlastitoj snimci prije nego se išta finalizira.'],
      ['Miks', 'Postojeća podloga se ne baca. Spušta se ispod glasa za izmjerenu vrijednost i vraća u pauzama, pa film zadrži energiju umjesto da postane prezentacija s glasom preko nje.'],
      ['Isporuka', 'Gotov master po jeziku i datoteka s titlovima nazvana onako kako svaka platforma traži. Vaša slika se ne kodira ponovno, osim ako tražite natpise upisane u sliku.'],
    ],

    quote: ['Film na našoj naslovnici nastao je upravo tako — ', 'scenarij, glas, miks i titlovi', ', alatima koje smo sami izgradili jer ništa gotovo nije radilo kako treba.'],

    capsH2: 'Titlovi nisu naknadna misao',
    capsP: [
      'Većina ljudi vaš video prvi put vidi bez zvuka. Bez titlova naracija koju ste platili za njih jednostavno ne postoji.',
      'Svaka isporuka uključuje titlove po jeziku, nazvane onako kako odredište traži — Facebook odbija upload ako je naziv datoteke pogrešan, a to je vrsta detalja koja kampanji tiho pojede doseg.',
    ],

    getH2: 'Što dobivate',
    get: [
      'Gotov master po jeziku, slika netaknuta',
      'Titlove po jeziku, u formatu koji svaka platforma prihvaća',
      'Scenarij naracije, pa su riječi vaše i možete ih ponovno koristiti',
      'Timecodeove, pa kasnija izmjena ne znači počinjanje ispočetka',
    ],

    closingH2: 'Imate snimke koje bi mogle raditi više?',
    closingLede:
      'Pošaljite nam što imate i koja su tržišta važna. Reći ćemo vam što bi bilo potrebno — a ako se ne isplati, reći ćemo i to.',
  },

  services: [
    {
      slug: 'platforms',
      title: 'Web platforme i aplikacije',
      short: 'Od ideje do produkcije — objavljeno, nadzirano i spremno za stvarne korisnike prvog dana.',
      body: [
        'Većina projekata ne propadne na ideji. Propadnu na dionici između dizajna koji izgleda dobro i sustava koji preživi prvih sto korisnika.',
        'Gradimo cijeli put: model podataka, aplikaciju, objavu, nadzor. Ne prototip koji dobro izgleda na prezentaciji, a onda se sruši pod stvarnim katalogom.',
        'Dobivate proizvod koji radi, repozitorij u kojem živi i objavu koju možete pratiti — a ne dokument o primopredaji koji sve to opisuje.',
      ],
    },
    {
      slug: 'ai',
      title: 'AI alati i integracije',
      short: 'Generiranje sadržaja i automatizacija procesa, ugrađeni u sustave koje već koristite.',
      body: [
        'AI je koristan tek kad ima konkretan posao i mjerljiv rezultat. Krećemo od posla, ne od modela.',
        'Generiranje sadržaja koje drži vaš ton na svakoj stranici. Automatizacija koja uklanja ponavljajući posao koji nitko ne bi trebao raditi ručno.',
        'Ulazi u alate koje vaš tim ionako otvara svako jutro. Nitko ne mora učiti novo sučelje da bi imao koristi.',
      ],
    },
    {
      slug: 'ecommerce',
      title: 'Automatizacija sadržaja za e-trgovinu',
      short: 'Opisi, kategorije i kampanje u opsegu koji stvarni katalog zahtijeva.',
      body: [
        'Trgovina s četiri tisuće artikala ne može se pisati ručno, a trgovina koju napiše generički model čita se kao i svaka druga.',
        'Gradimo procese koji generiraju u opsegu cijelog kataloga, a ostaju unutar vašeg tona, vaše terminologije i jezika na kojem vaši kupci doista kupuju.',
        'Nama to nije teorija. To je proizvod koji sami vrtimo.',
      ],
    },
    {
      slug: 'video',
      title: 'Naracija i lokalizacija videa',
      short: 'Jedan film, izgovoren i titlovan za svako tržište na kojem prodajete.',
      body: [
        'Snimke su skupi dio, a većina tvrtki već nešto ima — film o proizvodu, obilazak, reel koji je netko montirao lani. Ono što nemaju je taj film koji govori svakom tržištu na kojem prodaju.',
        'Pišemo naraciju, snimamo je glasom, miksamo je s onim zvukom koji snimka već nosi i isporučujemo titlove u formatu koji svaka platforma stvarno prihvaća.',
        'Isti scenarij postaje onoliko jezičnih verzija koliko trebate, iz jednog produkcijskog prolaza umjesto jednog snimanja po tržištu.',
      ],
    },
    {
      slug: 'architecture',
      title: 'Arhitektura, dizajn i održavanje',
      short: 'Jedan tim drži cijeli sustav od početka do kraja — i nakon lansiranja.',
      body: [
        'Većina onoga što u projektu pođe po zlu pođe po zlu na primopredaji: između dizajnera i programera, ili između agencije i onoga kome je tiho proslijedila posao.',
        'Arhitekturu, sučelje i pogon držimo u istom timu, pa nema šava kroz koji stvari propadaju.',
        'To uključuje i neatraktivan dio — sigurnosne kopije, nadogradnje, nadzor i to da smo dostupni kad nešto pukne.',
      ],
    },
  ],

  work: [
    {
      slug: 'bezmaske',
      kind: 'Živa platforma',
      short: 'Platforma za recenzije poslodavaca u Hrvatskoj i regiji — i lekcija o tome kako modernu web aplikaciju natjerati da se pojavi na Googleu.',
      problem:
        'Platforma za recenzije živi ili umire na tražilicama i na tome kako joj linkovi izgledaju kad ih netko podijeli. Oboje je upravo ono što moderne web aplikacije rade loše iz kutije: tražilice i društvene mreže vide praznu stranicu umjesto sadržaja.',
      built: [
        'Stranice se sada u Google pretrazi pojavljuju kao pravi sadržaj, ne kao prazna ljuska',
        'Kad netko podijeli link na Facebooku ili LinkedInu, prikaže se prava stranica sa slikom i naslovom — ne generička kartica cijelog sajta',
        'Nova recenzija se u Google indeksu pojavi sama, bez ručnog prijavljivanja svake stranice',
        'Baza se svaku noć sigurnosno kopira, provjerava i sprema izvan servera — pad servera ne znači i gubitak podataka',
      ],
      lesson:
        'Sajt s recenzijama zna napraviti puno timova. Napraviti onaj koji tražilice i društvene mreže tretiraju kao pravi sajt — bez pisanja ispočetka — dio je za koji treba iskustvo.',
    },
    {
      slug: 'lumenta-ai',
      kind: 'Živi proizvod',
      title: '12.000 opisa u devet dana — provjereni kapacitet sustava',
      short: 'AI copywriting za e-trgovinu — cijeli katalog u jednom brand tonu, na hrvatskom i njemačkom.',
      problem:
        'Katalog raste brže nego što ga itko stigne opisati. Opisi preuzeti od dobavljača Google tretira kao duplikat, a vanjski copywriter za tekst naplaćuje 3 do 15 eura po artiklu — na katalogu od 12.000 artikala to je trošak koji nijedna trgovina ne planira.',
      built: [
        'Sustav koji piše opis za svaki artikl u tonu brenda i s njegovim nazivljem, na jeziku tržišta, a ne naknadno preveden.',
        'Svaki tekst prolazi provjeru kvalitete prije objave, a trošak generiranja je ograničen po artiklu, pa se ne može oteti.',
      ],
      result: [
        'Kapacitet: 12.000 opisa u 9 dana — prosjek obrade 65 sekundi po tekstu',
        '0,02 € trošak generiranja po opisu, naspram 3–15 € po tekstu kod vanjskog copywritera',
        'Osam alata u produkciji, od opisa proizvoda do newslettera',
      ],
      lesson:
        'Kontrola troška, predmemorija i provjera kvalitete razrađene su ovdje, na vlastitom proizvodu. U vaš projekt ulaze gotove. Ne učimo na vašem katalogu.',
      closingH2: 'Imate sličan problem?',
      closingLede: 'Opišite ga i reći ćemo vam što je potrebno.',
    },
    {
      slug: 'the-dog-habit',
      kind: 'Živa publikacija',
      short: 'Publikacija koja se sama istražuje, piše i ilustrira — i po istom rasporedu objavljuje na vlastiti YouTube kanal.',
      problem:
        'Sadržajni sajtovi umiru od neredovitosti. Objavljivati tjedno ručno je posao; objavljivati tjedno godinu dana sasvim je drugi posao — a čim stanete, promet ode s vama.',
      built: [
        'Proces od kraja do kraja: istraživanje, pisanje, generiranje slika, objava',
        'Kratke video forme koje se generiraju i objavljuju na vlastiti YouTube kanal po rasporedu',
        'Radi bez nadzora — nitko ne otvara uređivač da bi to održao',
        'Svaki korak je provjerljiv, pa je slab rezultat sljediv, a ne misteriozan',
      ],
      lesson:
        'Ovo je dokaz da automatizacija sadržaja preživi dodir sa stvarnošću: stvarna publika, stvaran raspored, i to na blogu i video kanalu istovremeno.',
    },
    {
      slug: 'unmaskedwords',
      kind: 'Živa platforma',
      short: 'Anonimna platforma za ono što ljudi ne potpisuju svojim imenom.',
      problem:
        'Anonimnost je lako obećati, a teško doista isporučiti. Inženjerstvo je uglavnom u odluci što odbijate pohraniti.',
      built: [
        'Osmišljeno tako da nema puno toga što bi moglo procuriti',
        'Dijeli infrastrukturu s ostalim projektima, ali ne i njihove podatke',
        'Radi na istom serveru koji sami držimo i sami arhiviramo',
      ],
      lesson:
        'Naučilo nas je kako voditi više neovisnih proizvoda s jednog pomno održavanog servera — odluka koja klijentski budžet drži razumnim.',
    },
    {
      slug: 'docuflow-ai',
      kind: 'Živi proizvod',
      short:
        'AI obrada dokumenata za male tvrtke — fakture i računi se ekstrahiraju, provjeravaju i pretvaraju u akciju jednim odobrenjem.',
      problem:
        'Svaka faktura i račun koji stigne u malu tvrtku mala je obaveza: pročitati je, odlučiti što slijedi, pa ne zaboraviti to i napraviti. Pomnožite to sa sto dokumenata mjesečno i obaveza postane posao za sebe.',
      built: [
        'AI pipeline za ekstrakciju (Claude) koji fakture i račune pretvara u strukturirane, provjerljive podatke — dva stvarna tipa dokumenta, ne demo jednog',
        'Action Engine koji predlaže sljedeći korak — podsjetnik za plaćanje, knjigovodstveni zadatak — i šalje ga tek kad ga osoba odobri, uz pravi email iza svakog odobrenog podsjetnika',
        'Praćenje AI troška po pozivu i naplata prema potrošnji ugrađeni od prvog dana, pa proizvod zna svoju maržu prije nego je sazna prvi kupac',
        'Sigurnosni prolaz koji većina timova preskoči: audit svake funkcije u bazi koja se izvršava s povišenim ovlastima, zatvaranje dozvola za koje nitko nije pamtio da su otvorene',
      ],
      lesson:
        'AI poziv koji pročita dokument lakša je polovica. Povjerenje se zarađuje svime oko njega — korakom provjere koji se ne preskače, troškom koji se može objasniti, pristupom za koji se može dokazati da je zaključan.',
    },
  ],

  pillars: [
    ['Izravno', 'Bez posrednika i bez voditelja projekta koji vaša pitanja prenosi nekome trećem.'],
    ['Konkretno', 'Jasan dogovor i definirana isporuka, a ne prezentacija o njoj.'],
    ['Mjerljivo', 'Znate što se gradi, koliko košta i kada je gotovo.'],
  ],
};

export default hr;
