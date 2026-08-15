const hr = {
  code: 'hr',
  label: 'Hrvatski',
  htmlLang: 'hr',

  nav: {
    services: 'Usluge',
    work: 'Radovi',
    vodici: 'Vodiči',
    aiBooster: 'AI Content Booster',
    contact: 'Kontakt',
  },

  meta: {
    siteDescription:
      'Digitalni studio koji gradi web platforme, AI alate i automatizacije. Proizvodi koji se pokrenu, koriste i rastu — bez nepotrebne komplikacije.',
    siteTitle: 'Lumenta Labs — Web platforme, AI alati, automatizacija.',
    ogLocale: 'hr_HR',
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
      'Ideja je jasna. Plan je spreman. Ali pretvoriti to u nešto stvarno — nešto što doista radi — mjesto je na kojem većina projekata stane. Zbog tog jaza i postojimo.',

    whatH2: 'Što radimo',
    whatLede:
      'Pet stvari, odrađenih kako treba, i to od istog tima koji će biti tu i kad ih zatreba mijenjati.',

    quote: ['AI nije naslov. ', 'AI je infrastruktura', ' — ugrađena u sustave koje već koristite, s poslom koji se može izmjeriti.'],

    proofH2: 'Ovo ne preporučujemo. Na ovome radimo.',
    proofLede:
      'Sve što nudimo klijentima prvo smo izgradili i dokazali na vlastitim projektima — ista arhitektura, isti procesi, isti standardi. Sva četiri su živa i možete ih otvoriti odmah.',

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
    href: 'https://vodici.lumentalabs.studio',
  },

  servicesPage: {
    eyebrow: 'Usluge',
    h1: 'Pet stvari, odrađenih kako treba.',
    lede: 'Nije popis svega. Ovo je posao koji radimo dovoljno često da u njemu budemo stvarno dobri.',
    deeper: 'Kako to izgleda u detalje →',
    closingH2: 'Što od ovoga vam treba?',
    closingLede:
      'Ako niste sigurni, opišite problem umjesto rješenja. Iskreno ćemo vam reći jesmo li mi pravi ljudi za to.',
    closingCta: 'Javite nam se',
  },

  workPage: {
    eyebrow: 'Radovi',
    h1: 'Radimo na onome što prodajemo.',
    lede:
      'Nisu ovo logotipi klijenata na zidu. Ovo su četiri proizvoda koja smo izgradili, pustili u rad i još ih održavamo — i svaki je živ upravo sada. Otvorite ih i prosudite sami.',
    problem: 'Problem',
    built: 'Što smo izgradili',
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
  },

  videoPage: {
    eyebrow: 'Usluge',
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
      title: 'Narirani video i lokalizacija',
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
      short: 'Platforma za recenzije poslodavaca u Hrvatskoj i regiji — i lekcija o tome kako klijentski renderiranu aplikaciju natjerati da rangira.',
      problem:
        'Platforma za recenzije živi ili umire na tražilicama i na tome kako joj linkovi izgledaju kad ih netko podijeli. Oboje je upravo ono u čemu je klijentski renderirana aplikacija najlošija: crawleri i društvene mreže dobiju praznu ljusku.',
      built: [
        'Prerender sloj ispred aplikacije, koji crawlerima poslužuje potpuno formiranu stranicu s ispravnim canonicalom po stranici',
        'Deduplikacija Open Graph podataka, pa se podijeljeni link prikaže kao ta stranica, a ne kao generička kartica sajta',
        'Automatsko generiranje sitemapa po rasporedu, kako se pojavljuje novi sadržaj',
        'Noćne sigurnosne kopije baze otporne na WAL, s provjerom integriteta i replikacijom izvan servera',
      ],
      lesson:
        'Sajt s recenzijama zna napraviti puno timova. Napraviti onaj koji tražilice i društvene mreže tretiraju kao pravi sajt — bez pisanja ispočetka — dio je za koji treba iskustvo.',
    },
    {
      slug: 'lumenta-ai',
      kind: 'Živi proizvod',
      short: 'AI copywriting za e-trgovinu — opisi proizvoda i kategorija u opsegu cijelog kataloga.',
      problem:
        'Web trgovinama trebaju tisuće opisa koji zvuče kao brend, a ne kao generički model, i to na jeziku koji većina alata loše barata.',
      built: [
        'Proces generiranja koji drži ton i terminologiju kroz cijeli katalog',
        'Tekst pisan za tržište na kojem trgovina doista prodaje, a ne naknadno preveden',
        'Isti sustav koji postavljamo klijentima: Next.js sprijeda, PocketBase iza',
      ],
      lesson:
        'Sve što smo ovdje naučili o generiranju u velikom opsegu — kontrolu troška, predmemoriju, provjeru kvalitete — donosimo u klijentski proces.',
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
  ],

  pillars: [
    ['Izravno', 'Bez posrednika i bez voditelja projekta koji vaša pitanja prenosi nekome trećem.'],
    ['Konkretno', 'Jasan dogovor i definirana isporuka, a ne prezentacija o njoj.'],
    ['Mjerljivo', 'Znate što se gradi, koliko košta i kada je gotovo.'],
  ],
};

export default hr;
