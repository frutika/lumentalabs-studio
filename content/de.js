const de = {
  code: 'de',
  label: 'Deutsch',
  htmlLang: 'de',

  nav: { services: 'Leistungen', work: 'Projekte', contact: 'Kontakt' },

  meta: {
    siteDescription:
      'Ein Digitalstudio für Webplattformen, KI-Werkzeuge und Automatisierung. Produkte, die live gehen, genutzt werden und wachsen — ohne unnötige Komplexität.',
    siteTitle: 'Lumenta Labs — Webplattformen, KI-Werkzeuge, Automatisierung.',
    ogLocale: 'de_DE',
  },

  /**
   * Titel und Beschreibung pro Seite. Siehe die Notiz in hr.js — bisher erbte
   * jede Seite außer den Blogbeiträgen meta.siteDescription.
   */
  pageMeta: {
    about: {
      title: 'Über uns',
      description:
        'Ein digitales Studio unter der Leitung von Denis Šehić: zwölf Jahre digitale Produkte, die letzten sechs in KI und Automatisierung. Derselbe Mensch schreibt Angebot und Code.',
    },
    home: {
      // Siehe die Notiz in hr.js — das Template erreicht dieses Segment nicht.
      title: 'Digitalstudio für Web, KI und Automatisierung — Lumenta Labs',
      description:
        'Wir bauen Webplattformen, KI-Werkzeuge und Automatisierungen, die im Produktivbetrieb halten. Zwölf eigene Produkte, ein Team von Anfang bis Betrieb.',
    },
    services: {
      title: 'Entwicklung und KI-Automatisierung',
      description:
        'Sechs Probleme, die wir lösen: Websites, individuelle Anwendungen, Prozessautomatisierung, Systemintegration, KI-Lösungen und Wartung mit Monitoring.',
    },
    work: {
      title: 'Produkte, die wir gebaut haben',
      description:
        'Fünf Live-Produkte, die wir gebaut haben und betreuen — Bezmaske, Lumenta AI, The Dog Habit, UnmaskedWords und DocuFlow AI — dazu Narrator, unser Tool für mehrsprachige Video-Sprecherstimmen.',
    },
    contact: {
      title: 'Kontakt',
      description:
        'Beschreiben Sie das Problem, nicht die Lösung. Wir antworten innerhalb von 24 Stunden. Sind wir nicht die Richtigen, sagen wir es Ihnen sofort.',
    },
    video: {
      description:
        'Aus einem Produktionsdurchgang entstehen Sprecher, Mischung und Untertitel für jeden Markt. Ein fertiger Master pro Sprache, Ihr Bild bleibt unberührt.',
    },
  },

  aboutPage: {
    eyebrow: 'Über uns',
    h1: 'Wer hinter Lumenta Labs steht',
    legalH2: 'Angaben zum Unternehmen',
    labels: { address: 'Adresse', oib: 'Steuernummer (OIB)', mbo: 'Registernummer (MBO)', email: 'E-Mail', phone: 'Mobil' },
  },

  footer: {
    tagline: 'Ein Digitalstudio für Web, KI und Automatisierung.',
    studio: 'Studio',
    about: 'Über uns',
    resources: 'Ressourcen',
    contact: 'Kontakt',
    security: 'Sicherheit und Daten',
    privacy: 'Datenschutz',
    guides: 'Kostenlose Leitfäden (HR)',
    docuflowChannel: 'DocuFlow auf WhatsApp (HR)',
    status: 'Alle Systeme normal',
    weight: 'Diese Seite: {kb} KB · geladen in {s} s',
  },

  a11y: {
    skip: 'Zum Hauptinhalt springen',
    langNav: 'Sprache',
    mainNav: 'Hauptnavigation',
    footerNav: 'Fußzeile',
    legalNav: 'Rechtliches',
    newTab: 'wird in einem neuen Tab geöffnet',
    breadcrumb: 'Brotkrümelnavigation',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    eyebrow: '404',
    h1: 'Diese Seite gibt es hier nicht.',
    lede: 'Der Link ist womöglich veraltet, oder in der Adresse steckt ein Tippfehler. Alles, was es auf dieser Seite gibt, ist einen Klick entfernt.',
    home: 'Zur Startseite',
    work: 'Unsere Projekte ansehen',
  },

  home: {
    eyebrow: 'Digitalstudio',
    h1: 'Webplattformen, KI-Werkzeuge, Automatisierung.',
    lede: 'Produkte, die live gehen, genutzt werden und wachsen — ohne unnötige Komplexität.',
    ctaPrimary: 'Projekt starten',
    ctaSecondary: 'Unsere Projekte ansehen',

    wallH2: 'Jedes Unternehmen stößt irgendwann an dieselbe Wand.',
    wallP:
      'Die Idee steht. Der Plan liegt vor. Doch daraus etwas Echtes zu machen — etwas, das tatsächlich läuft — ist die Stelle, an der die meisten Projekte stehen bleiben. Genau wegen dieser Lücke gibt es uns.',

    whatH2: 'Was wir machen',
    whatLede:
      'Sechs Leistungen, von der Website bis zum System, auf dem Ihr Geschäft läuft. Automatisierung ist eine Aufgabe, die nach Regeln läuft, Integration sind zwei Systeme, die Daten austauschen, und KI kommt dort hinein, wo Text gelesen oder geschrieben werden muss.',

    quote: ['KI ist keine Überschrift. ', 'KI ist Infrastruktur', ' — eingebaut in die Systeme, die Sie ohnehin nutzen, mit einer Aufgabe, die sich messen lässt.'],
    quoteNote: 'In der Praxis: ein Prozess, der jeden Tag läuft — keine Demo, die einmal funktioniert.',

    proofH2: 'Wir empfehlen das nicht nur. Wir arbeiten damit.',
    proofLede:
      'Alles, was wir Kunden anbieten, haben wir zuerst in eigenen Projekten gebaut und bewiesen — dieselbe Architektur, dieselben Abläufe, dieselben Standards. Alle sind live, und Sie können jedes davon sofort öffnen.',

    howH2: 'Wie wir arbeiten',
    howLede:
      'Keine leeren Präsentationen. Der kürzeste Weg zwischen dem, was Sie brauchen, und etwas, das in Produktion läuft.',

    reelH2: 'Das Studio in drei Minuten',
    reelLede: 'Eine kurze Einführung, wie wir bauen.',
    reelPlay: 'Video abspielen',
    reelNote: 'Vor dem Klick wird nichts von YouTube geladen',

    finalH2: 'Sagen Sie uns, was es geben sollte.',
    finalLede: 'Eine klare Vereinbarung, eine konkrete Lieferung, ein messbares Ergebnis.',
    finalCta: 'Kontakt aufnehmen',
    // Redesign (2026-10). Alles darunter ist der Rahmen um den Text oben:
    // Ankündigung im Hero, Labels und die illustrativen Mini-Oberflächen.
    announce: { tag: 'NEU', text: 'DocuFlow AI ist live — Fiskalisierung 2.0, erledigt' },
    wallLabel: 'Die Lücke',
    quoteLabel: 'Praktische KI',

    canvas: {
      label: 'Unsere Produkte und ihr gemeinsamer Stack',
      project: 'lumenta-labs',
      env: 'production',
      status: '{live} live · {internal} intern',
      view: 'Architektur',
      stackTitle: 'Gemeinsamer Stack',
      stack: 'Next.js · PocketBase · n8n · KI-Pipelines',
      stackNote: 'dieselbe Architektur, dieselben Standards',
      nodes: {
        bezmaske: 'Arbeitgeberbewertungen · HR',
        unmaskedwords: 'anonyme Plattform',
        narrator: 'Stimme · Untertitel · i18n',
        'lumenta-ai': 'E-Commerce-Copywriting',
        'the-dog-habit': 'Selbstpublikation · YouTube',
        'docuflow-ai': 'E-Rechnungen · Fiskalisierung 2.0',
      },
    },

    serviceUi: {
      site: {
        rows: [
          ['Handy · Tablet · Desktop', '✓'],
          ['Google und KI-Suche', '✓'],
          ['Tracking-Cookies', '0'],
        ],
      },
      flow: {
        head: 'Prozess · Wochenreport',
        env: 'automatisch',
        steps: [
          'Daten aus drei Systemen geholt',
          'Report nach Vorlage erstellt',
          'Per E-Mail ans Team geschickt',
        ],
        ready: 'Fertig — ohne Handarbeit',
      },
      sync: {
        head: 'Shop ⇄ Buchhaltung',
        status: 'synchron',
        rows: ['Bestellungen', 'Lagerbestand', 'Rechnungen'],
      },
      deploy: {
        head: 'deploy · main',
        env: 'production',
        steps: ['Abhängigkeiten installieren', 'Build — Next.js', 'Routen für Crawler vorrendern'],
        ready: 'Bereit — lumentalabs.studio',
      },
      generator: {
        product: 'Leinendecke Aurora',
        tone: 'Ton: luxuriös',
        lang: 'Sprache: DE',
        output: 'Stonewashed-Leinen, das mit jeder Wäsche weicher wird — eine leise Schicht Wärme für lange Abende',
      },
      content: {
        rows: ['Produktseiten', 'Kategorieseiten', 'Kampagnen'],
        queued: 'in Warteschlange',
      },
      monitor: { label: 'Überwacht nach dem Launch', status: 'stabil' },
    },

    // ILLUSTRATION: Aufgaben und LUM-xx-Kennungen sind ein Beispiel für das
    // gemeinsame Board, kein echtes Projekt. Frei ersetzbar.
    board: {
      title: 'Ihr Projekt',
      sub: 'gemeinsames Board',
      note: 'für Sie jederzeit sichtbar',
      inProgress: 'In Arbeit',
      done: 'Erledigt',
      tasks: [
        { id: 'LUM-47', title: 'Weiterleitung www → Hauptdomain', tag: 'SEO', done: false, pct: 25 },
        { id: 'LUM-45', title: 'Anfrageformular → n8n-Webhook → E-Mail', tag: 'Automatisierung', done: false, pct: 75 },
        { id: 'LUM-41', title: 'SPF, DKIM und DMARC für die Absenderdomain', tag: 'E-Mail', done: true },
        { id: 'LUM-38', title: 'Automatisierungsserver auf eigene Subdomain', tag: 'Infra', done: true },
        { id: 'LUM-33', title: 'Landingpage für die kostenlosen Leitfäden', tag: 'Web', done: true },
      ],
    },

    reelMeta: 'Video · 3:40',

    // Redesign v2 (2026-10): Claim im Hero, Laufband, Stack-Abschnitt und
    // Agent-Lauf. ILLUSTRATION: Beträge und Lieferant im Agent-Lauf sind
    // Beispieldaten, und das Panel sagt es.
    h1Big: ['Software, die ', 'von selbst läuft.'],
    marquee: ['Webplattformen', 'KI-Agenten', 'Dokumenten-KI', 'Inhalte im Katalogmaßstab', 'Video-Lokalisierung', 'Prozessautomatisierung', 'Architektur & Wartung'],
    stack: {
      label: 'Beweis statt Pitch',
      h2: ['Ein Stack.', 'Unsere eigenen Produkte', ' laufen darauf.'],
      lede: 'Alles, was wir Kunden anbieten, haben wir zuerst an eigenen Projekten gebaut und erprobt — dieselbe Architektur, dieselben Pipelines, dieselben Standards.',
    },
    agent: {
      label: 'Beispiel: Ein KI-Agent macht aus einer eingehenden E-Rechnung einen Handlungsvorschlag',
      project: 'docuflow-ai',
      view: 'Agent-Lauf',
      example: 'Beispieldaten',
      running: 'läuft',
      context: 'Fiskalisierung 2.0',
      inputLabel: 'Eingang',
      agentLabel: 'Agent',
      outputLabel: 'Vorgeschlagene Aktion',
      file: 'e-rechnung.pdf',
      steps: [
        ['E-Rechnung aus dem Posteingang erhalten', '0,3 s'],
        ['PDF gelesen — 2 Seiten', '1,9 s'],
        ['Lieferant, OIB, Positionen und MwSt. extrahiert', '1,2 s'],
        ['Summen und Duplikate geprüft', '0,4 s'],
      ],
      current: 'Schlägt eine Aktion vor…',
      liveTag: 'live',
      next: 'Wartet auf eine Freigabe',
      action: {
        title: 'Als Ausgabe buchen',
        fields: [['Lieferant', 'Primjer d.o.o.'], ['Betrag', '1.240,00 €'], ['MwSt.', '25 %'], ['Kategorie', 'Büroausstattung']],
        approve: 'Freigeben',
        review: 'Prüfen',
      },
      note: 'Ein Klick vom Dokument zur gebuchten Ausgabe. Der Agent liest, die Entscheidung bleibt beim Menschen.',
    },
    tileSample: ['Ein langsames Ritual im Glas. ', 'Achtzehn Stunden kalt gezogen'],
    proof: {
      label: 'Gemessen, nicht behauptet',
      source: 'Quelle',
      items: [
        { value: '12.000', text: 'Produktbeschreibungen in neun Tagen, durch Lumenta AI', slug: 'lumenta-ai' },
        { value: '0', text: 'KI-Aufrufe für eine eingehende E-Rechnung in DocuFlow', slug: 'docuflow-ai' },
        { value: '5 Tage', text: 'von der Idee bis Narrator, unserem Tool für mehrsprachige Vertonung', slug: 'narrator' },
        { value: '100+', text: 'Sprachen, die Narrator vertonen kann, ohne neues Tool pro Sprache', slug: 'narrator' },
      ],
    },

    about: {
      h2: 'Wer das macht',
      paragraphs: [
        'Hinter Lumenta Labs stehe ich, Denis Šehić. Seit zwölf Jahren baue ich digitale Produkte, die letzten sechs davon spezialisiert auf KI und Automatisierung.',
        'Sie sprechen direkt mit mir. Derselbe Mensch, der Ihr Angebot schreibt, schreibt auch den Code und bringt ihn in Produktion. Kein Account Manager dazwischen, keine Subunternehmer im Ausland.',
        'In Produktion halte ich zwölf eigene Produkte. Acht davon bilden die Plattform Lumenta AI, die übrigen stehen für sich, etwa DocuFlow, The Dog Habit, UnmaskedWords und BezMaske. Alles, was ich Kunden anbiete, ist zuerst durch sie hindurchgegangen. Ich verkaufe nichts, was ich nicht selbst am Laufen gehalten habe.',
      ],
      cta: 'Sehen Sie, was wir gebaut haben →',
      stats: [
        ['12+', 'Jahre digitale Entwicklung'],
        ['6', 'Jahre KI und Automatisierung'],
        ['12', 'eigene Produkte in Produktion'],
      ],
      photoAlt: 'Denis Šehić',
    },
  },

  servicesPage: {
    eyebrow: 'Leistungen',
    h1: 'Sechs Probleme, die wir lösen',
    lede: 'Wenn Sie sich in einem davon wiedererkennen, melden Sie sich. Wenn nicht, nennen Sie uns Ihres — vielleicht lösen wir es, nur unter anderem Namen.',
    deeper: 'Wie das im Detail läuft →',
    gets: 'Was Sie bekommen',
    notFor: 'Nicht für Sie, wenn:',
    closingH2: 'Was davon brauchen Sie?',
    closingLede:
      'Wenn Sie unsicher sind, beschreiben Sie das Problem statt der Lösung. Wir sagen Ihnen ehrlich, ob wir die Richtigen dafür sind.',
    closingCta: 'Kontakt aufnehmen',

    problems: [
      {
        slug: 'websites',
        title: 'Die Website ist da, aber sie bringt keine Anfragen',
        paragraphs: [
          'Langsam, auf derselben Vorlage wie die Konkurrenz, mit einem Formular, das niemand ausfüllt. Der Kunde ist weg, bevor er gelesen hat, was Sie tun.',
          'Wir bauen Websites und Shops, die sofort laden, auf jedem Bildschirm und in den Sprachen Ihrer Kunden funktionieren und technisch für Google und KI-Suche vorbereitet sind. Ohne Cookies und Tracking, die Sie nicht brauchen.',
        ],
        gets: [
          'Eine Website, die sofort lädt — auch auf dem Handy',
          'Technische Vorbereitung für Google und KI-Suche',
          'Eine klare Liste, was im Preis enthalten ist und was nicht',
        ],
        notFor: 'Sie die Website morgen und zum niedrigsten möglichen Preis brauchen — dann ist ein Baukasten wie Wix oder Squarespace schneller und günstiger.',
      },
      {
        slug: 'platforms',
        title: 'Sie brauchen eine Plattform, die in einem Jahr keinen Umbau braucht',
        paragraphs: [
          'Die meisten Projekte scheitern nicht am Launch, sondern ein halbes Jahr später — wenn eine Sprache, ein Markt oder ein neuer Produkttyp dazukommt und das Fundament das nicht trägt.',
          'Wir übernehmen den ganzen Weg: Datenmodell, Oberfläche, Deployment, Monitoring. Sie bekommen ein System, das läuft — keinen Prototyp, den noch jemand fertigstellen muss.',
        ],
        gets: [
          'Eine Plattform, die Wachstum trägt, ohne neu geschrieben zu werden',
          'Eine verantwortliche Seite für alles — von der Datenbank bis zur Domain',
          'Eine Übergabe mit Dokumentation, damit Sie nicht an uns gebunden sind',
        ],
        notFor: 'Sie eine Präsentationswebsite oder einen Onlineshop brauchen — eine individuelle Anwendung wäre dafür zu teuer; dafür gibt es unsere Website-Erstellung.',
      },
      {
        slug: 'ai',
        title: 'Ihr Team verliert Stunden an Arbeit, die eine Maschine erledigen kann',
        paragraphs: [
          'Jede Woche überträgt jemand Daten von einem System ins andere. Jeden Monat baut jemand denselben Report von Hand. Das ist kein Problem der Menschen, sondern des Prozesses.',
          'Wir starten bei einer konkreten Aufgabe und messen, wie viele Stunden sie freimacht. KI kommt dort zum Einsatz, wo sie sich rechnet — nicht dort, wo sie gut klingt.',
        ],
        gets: [
          'Einen Prozess, der läuft, ohne dass ihn täglich jemand anschiebt',
          'Eine messbare Zeitersparnis, vereinbart bevor wir anfangen',
          'Ein Werkzeug, das Ihr Team in der gewohnten Oberfläche nutzt — kein neues Programm zum Lernen',
        ],
        notFor: 'sich der Prozess monatlich ändert — dann muss er zuerst stehen. Automatisiertes Chaos ist schnelleres Chaos.',
      },
      {
        slug: 'integrations',
        title: 'Sie tippen dieselben Daten in drei Systeme',
        paragraphs: [
          'Eine Bestellung kommt im Shop an, jemand überträgt sie in die Buchhaltung und passt danach den Lagerbestand von Hand an. Jedes abgetippte Feld ist eine Fehlerquelle und eine Stunde, die niemand sieht.',
          'Wir verbinden die Systeme, die Sie schon nutzen, sodass Daten einmal eingegeben werden und die anderen sie selbst übernehmen — in eine Richtung oder in beide.',
        ],
        gets: [
          'Daten, die einmal eingegeben werden, nicht dreimal',
          'Ein Protokoll jedes Austauschs, damit klar ist, wo etwas hängen blieb',
          'Eine Warnung, wenn eine Verbindung stillsteht — bevor Ihre Kunden es merken',
        ],
        notFor: 'ein fertiges Plug-in die beiden Systeme bereits verbindet — dann nutzen Sie das. Wir sagen Ihnen, ob es eines gibt.',
      },
      {
        slug: 'ai-solutions',
        title: 'Arbeit, die Lesen und Schreiben verlangt — in einem Umfang, den niemand schafft',
        paragraphs: [
          'Tausende Artikel ohne Beschreibung, ein Video, das nur eine Sprache spricht, PDFs, die jemand von Hand abtippt. Das sind die Aufgaben, bei denen KI wirklich Zeit spart, weil die Arbeit aus Text und Sprache besteht.',
          'Jede dieser Lösungen läuft zuerst auf unseren eigenen Produkten: Lumenta AI schreibt Beschreibungen, Narrator vertont Videos, DocuFlow liest Rechnungen. Die Freigabe vor der Veröffentlichung bleibt immer bei Ihnen.',
        ],
        gets: [
          'Produktbeschreibungen für den ganzen Katalog, in Ihrem Ton und in der Sprache des Marktes',
          'Videos mit Sprecherstimme und Untertiteln für jeden Markt, aus einer Aufnahme',
          'Kontrolle vor der Veröffentlichung — nichts geht ohne Ihre Freigabe raus',
        ],
        notFor: 'KI keine messbare Zeit und kein Geld spart — dann sagen wir Ihnen, dass Sie sie nicht einführen sollen.',
      },
      {
        slug: 'architecture',
        title: 'Sie haben niemanden, den Sie anrufen können, wenn etwas ausfällt',
        paragraphs: [
          'Wenn Design, Code und Hosting bei drei Parteien liegen, wird jeder Ausfall zur Schuldfrage.',
          'Architektur, Oberfläche und Betrieb bleiben bei einem Team. Backups, Updates und Monitoring sind enthalten — kein Posten extra.',
        ],
        gets: [
          'Einen Ansprechpartner für alles, mit vereinbarter Reaktionszeit',
          'Backups und Monitoring, die auch laufen, wenn niemand hinschaut',
          'Updates, bevor sie zum Problem werden',
        ],
        notFor: 'Sie ein eigenes technisches Team haben — dann übernehmen wir nur den fehlenden Teil.',
      },
    ],
  },

  /**
   * Eine Seite pro Leistung. Siehe die Notiz in hr.js — gleiche Struktur,
   * gleicher Grund. Kein `video`-Eintrag: /services/video deckt das bereits ab.
   */
  serviceDetails: [
    {
      slug: 'websites',
      path: 'webseiten-erstellung',
      title: 'Website- und Onlineshop-Erstellung',
      description: 'Websites und Onlineshops, die sofort laden, mehrsprachig sind und für Google und KI-Suche bereitstehen. Klare Preise und eine schriftliche Liste, was enthalten ist.',
      h1: 'Website- und Onlineshop-Erstellung',
      lede: 'Websites, die Anfragen bringen, statt nur da zu sein. Schnell auf jedem Bildschirm, in den Sprachen Ihrer Kunden und bereit für Suchmaschinen und KI-Assistenten.',
      intro: [
        'Eine Website, die langsam lädt und aussieht wie alle anderen, verliert den Besucher, bevor er liest, was Sie tun. Das meiste davon ist technisch, und das meiste lässt sich beheben.',
        'Wir gestalten für Ihre Marke statt nach Vorlage und bauen so, dass die Website schnell ist, auf dem Handy lesbar und für Google vorbereitet. Ebenso für KI-Assistenten wie ChatGPT und Claude, die Fragen immer öfter selbst beantworten, statt auf ein Suchergebnis zu verweisen.',
        'Diese Website ist genauso gebaut: keine Tracking-Cookies, drei Sprachen und eine Textfassung jeder Seite für KI-Werkzeuge.',
      ],
      gets: [
        'Design passend zu Ihrem Erscheinungsbild, keine fertige Vorlage',
        'Darstellung für Handy, Tablet und Desktop',
        'Technische SEO und Vorbereitung für KI-Suche (llms.txt und eine Markdown-Fassung jeder Seite)',
        'Einbau Ihrer Texte, Bilder und eines Kontaktformulars',
        'Analyse ohne Cookies — oder Google Analytics und Search Console, wenn Sie das möchten',
        'DSGVO-konforme Datenschutzerklärung und Cookie-Hinweis',
      ],
      sections: [
        {
          h2: 'Was nicht enthalten ist',
          paragraphs: [
            'Damit nichts auf der Rechnung überrascht: Das wird separat bezahlt oder von Ihnen geliefert.',
          ],
          list: [
            'Domain und Hosting — etwa 30 – 150 € pro Jahr, je nach Anbieter',
            'Texterstellung (Copywriting)',
            'Professionelle Fotografie',
            'Monatliche Wartung — siehe technische Wartung und Support',
          ],
        },
      ],
      pricing: {
        q: 'Was kostet eine Website?',
        bands: [
          {
            price: 'ab 900 €',
            name: 'Landingpage',
            body: 'Eine Seite mit einem Ziel: ein Produkt, eine Leistung oder eine Kampagne vorstellen und aus dem Besuch eine Anfrage machen.',
            examples: [
              'Ein neues Unternehmen oder eine neue Leistung, die einen ernsthaften ersten Eindruck braucht',
              'Eine Kampagne oder ein Produkt mit eigener Adresse',
              'Restaurant, Ferienwohnung oder lokaler Dienstleister',
            ],
            boundary: 'Sobald mehr Seiten oder Sprachen nötig sind, ist es die nächste Stufe.',
          },
          {
            price: '1.800 – 4.000 €',
            name: 'Unternehmenswebsite (5 – 10 Seiten)',
            body: 'Eine Firmenwebsite, die Anfragen bringen soll: Leistungen, Referenzen, Blog und Kontakt, bei Bedarf mehrsprachig.',
            examples: [
              'Ein kleines oder mittleres Unternehmen, dessen Website nichts bringt',
              'Ein Dienstleister, der eine Seite pro Leistung braucht',
              'Eine Website in zwei oder drei Sprachen für Auslandsmärkte',
            ],
            boundary: '',
          },
          {
            price: 'ab 3.500 €',
            name: 'Onlineshop',
            body: 'Ein Shop mit Kartenzahlung, Versand und einem Katalog, den Sie selbst pflegen.',
            examples: [
              'Verkauf von Produkten mit Kartenzahlung',
              'Katalog mit Varianten, Lagerbestand und Versandoptionen',
              'Ein Shop mit Beschreibungen für den ganzen Katalog (mit dem Beschreibungspaket)',
            ],
            boundary: 'Wenn der Shop Daten mit Buchhaltung oder Lager austauschen soll, ist das Systemintegration und wird separat angeboten.',
          },
        ],
        min: 900,
      },
      faq: [
        {
          q: 'Was, wenn ich schon eine Website habe?',
          a: 'Wir sehen uns an, was daran funktioniert und was nicht. Manchmal reicht es, Geschwindigkeit und Texte zu verbessern, manchmal ist ein Neuanfang günstiger. Wir sagen Ihnen, was davon.',
        },
        {
          q: 'Was heißt Vorbereitung für KI-Suche?',
          a: 'ChatGPT, Claude und Perplexity beantworten Fragen immer öfter anstelle von Google. Die Website gibt ihnen eine Zusammenfassung (llms.txt) und eine saubere Textfassung jeder Seite, damit sie Sie korrekt zitieren können. Diese Website macht es genauso.',
        },
        {
          q: 'Ist Hosting enthalten?',
          a: 'Nein. Domain und Hosting werden separat bezahlt, etwa 30 – 150 € pro Jahr. Wir helfen Ihnen, sie auszuwählen und einzurichten.',
        },
      ],
    },
    {
      slug: 'platforms',
      path: 'webanwendungen-entwicklung',
      title: 'Webanwendungen nach Maß entwickeln',
      description:
        'Entwicklung von Webanwendungen und Plattformen nach Maß — Datenmodell, Oberfläche, Deployment und Monitoring aus einer Hand. Gebaut für den Produktivbetrieb.',
      h1: 'Webanwendungen nach Maß entwickeln',
      lede:
        'Plattformen, die Wachstum ohne Umbau tragen. Der ganze Weg vom Datenmodell bis zum Monitoring, bei einem Team.',
      intro: [
        'Die meisten Projekte scheitern nicht am Launch, sondern ein halbes Jahr später — wenn eine Sprache, ein Markt oder ein neuer Produkttyp dazukommt und das Fundament das nicht trägt. Der Umbau kostet dann mehr als die erste Version.',
        'Wir übernehmen den ganzen Weg: Datenmodell, Oberfläche, Deployment, Monitoring. Sie bekommen ein System, das läuft — keinen Prototyp, den noch jemand fertigstellen muss.',
        'Derselbe Ansatz hält zwölf eigene Produkte im Produktivbetrieb. Wir verkaufen keine Architektur, die wir nicht selbst betrieben haben.',
      ],
      pricing: {
        q: 'Was kostet eine individuelle Webanwendung?',
        bands: [
          {
            price: '6.000 – 12.000 €',
            name: 'Ein Werkzeug für ein Team',
            body: 'Eine Anwendung, die ein Team im Haus nutzt. Mit Login, aber ohne komplexe Rollen und ohne Nutzer von außen. Eine Aufgabe, richtig gelöst.',
            examples: [
              'Auftragserfassung, die das Außenteam per Handy ausfüllt',
              'Ein Angebotsrechner, der die Tabelle mit zehn Blättern ersetzt',
              'Eine Ansicht, die Daten aus zwei Systemen auf einem Bildschirm zusammenführt',
            ],
            boundary: 'Sobald Rollen und Rechte oder Zugang für Externe dazukommen, ist es die nächste Stufe.',
          },
          {
            price: '12.000 – 28.000 €',
            name: 'Plattform mit externen Nutzern',
            body: 'Ein System, das auch Menschen außerhalb Ihres Hauses nutzen — Kunden, Partner, Lieferanten. Rollen und Rechte, und Datenaustausch mit fremden Systemen.',
            examples: [
              'Ein Portal, in dem Kunden den Status ihrer Aufträge verfolgen',
              'Ein Buchungssystem mit Zahlung und Bestätigungen',
              'Eine Anwendung, die Daten aus Ihrem ERP zieht und zurückschreibt',
            ],
            boundary: 'Hier liegen die meisten unserer Projekte.',
          },
          {
            price: 'ab 28.000 €',
            name: 'Das System, auf dem die Firma läuft',
            body: 'Wenn die Anwendung kein Hilfsmittel ist, sondern der Ort, an dem die Arbeit passiert. Mehrere Nutzertypen, Änderungen in Echtzeit, Integrationen mit mehreren Systemen.',
            examples: [
              'Eine Plattform mit Zugriffshierarchie und tausenden Nutzern',
              'Bestandsabgleich über mehrere Standorte in Echtzeit',
              'Ein System, das ERP, CRM und Abrechnung zu einem Ablauf verbindet',
            ],
            boundary: 'So ein Projekt beginnt mit einem Gespräch über den Umfang, nicht mit einem Preis.',
          },
        ],
        min: 6000,
      },
      faq: [
        {
          q: 'Was gehört zur Entwicklung einer Webanwendung?',
          a: 'Datenmodell, Anwendung, Deployment und Monitoring. Ein Ansprechpartner für alles — von der Datenbank bis zur Domain — und eine Übergabe mit Dokumentation.',
        },
        {
          q: 'Bauen Sie auch einfache Webseiten?',
          a: 'Ja, als eigene Leistung mit eigenen Preisen — siehe Website-Erstellung. Eine individuelle Anwendung ist für Systeme, die mehr als eine Website brauchen.',
        },
        {
          q: 'Was, wenn wir schon eine Anwendung haben, die nicht funktioniert?',
          a: 'Beschreiben Sie, was daran nicht stimmt. Wir übernehmen bestehende Systeme, prüfen aber zuerst, ob Reparatur oder Neubau die bessere Rechnung ist.',
        },
      ],
    },
    {
      slug: 'ai',
      path: 'ki-prozessautomatisierung',
      title: 'KI-Prozessautomatisierung für Unternehmen',
      description:
        'Wiederkehrende Handarbeit automatisiert — in den Systemen, die Ihr Team ohnehin nutzt. Wir starten bei einer konkreten Aufgabe und messen die gesparten Stunden.',
      h1: 'KI-Prozessautomatisierung für Unternehmen',
      lede:
        'Aus wiederkehrender Handarbeit wird ein Prozess. KI kommt dorthin, wo sie sich rechnet — nicht dorthin, wo sie gut klingt.',
      intro: [
        'Jemand überträgt jede Woche Daten von einem System ins andere. Jemand baut jeden Monat denselben Bericht von Hand. Das ist kein Personalproblem, sondern ein Prozessproblem.',
        'Wir starten bei einer konkreten Aufgabe und messen, wie viele Stunden sie freisetzt. Automatisierung, die keine Ersparnis zeigen kann, ist keine Automatisierung, sondern ein Kostenposten mit besserem Namen.',
        'Das Werkzeug läuft in der Oberfläche, die das Team jeden Morgen ohnehin öffnet. Nichts Neues zu lernen.',
      ],
      pricing: {
        q: 'Was kostet KI-Prozessautomatisierung?',
        bands: [
          {
            price: '3.500 – 8.000 €',
            name: 'Ein Prozess',
            body: 'Eine Aufgabe, die sich jede Woche wiederholt — durchgehend automatisiert und vorher wie nachher gemessen.',
            examples: [
              'Daten von einem System in ein anderes übertragen',
              'Ein Monatsbericht, den jemand von Hand zusammenstellt',
              'Anfragen im Postfach sortieren und Antworten vorbereiten',
            ],
            boundary: 'Wenn unklar ist, welche Aufgabe zuerst: das ist ein halbstündiges Gespräch und kostenlos.',
          },
          {
            price: '8.000 – 20.000 €',
            name: 'Mehrere Prozesse in Ihrem System',
            body: 'Einige zusammenhängende Aufgaben, eingebaut in die Oberfläche, die das Team ohnehin jeden Morgen öffnet. Nichts Neues zu lernen.',
            examples: [
              'Dokumente vom Eingang bis zur Freigabe',
              'Ein CRM, das sich aus E-Mails und Anrufen selbst füllt',
              'Angebote aus Daten, die Sie schon im System haben',
            ],
            boundary: '',
          },
          {
            price: 'ab 20.000 €',
            name: 'Ein eigenes Werkzeug',
            body: 'Wenn es nichts von der Stange gibt oder nichts so funktioniert, wie Sie es brauchen — dann wird Ihres gebaut und bleibt Ihres.',
            examples: [
              'Ein interner Assistent über Ihrer Wissensbasis und Ihren Dokumenten',
              'Ein Werkzeug, das das Team täglich nutzt und das kein anderer hat',
            ],
            boundary: '',
          },
        ],
        min: 3500,
      },
      faq: [
        {
          q: 'Woran erkennen wir, dass sich die Automatisierung rechnet?',
          a: 'Die eingesparten Stunden werden vereinbart, bevor wir anfangen. Setzt eine Aufgabe keine messbare Zeit frei, raten wir davon ab.',
        },
        {
          q: 'Muss das Team ein neues Werkzeug lernen?',
          a: 'Nein. Der Prozess läuft in der bestehenden Oberfläche.',
        },
        {
          q: 'Wann ist Automatisierung keine gute Idee?',
          a: 'Wenn sich der Prozess jeden Monat ändert, gehört zuerst der Prozess sortiert. Automatisiertes Chaos ist schnelleres Chaos.',
        },
      ],
    },
    {
      slug: 'integrations',
      path: 'systemintegration',
      title: 'Integration von Geschäftssystemen',
      description: 'Shop, Buchhaltung, CRM und Lager verbinden, sodass Daten einmal eingegeben werden und jedes andere System sie selbst übernimmt.',
      h1: 'Integration von Geschäftssystemen',
      lede: 'Shop, Buchhaltung, CRM und Lager, die Daten selbst austauschen. Sie geben sie einmal ein.',
      intro: [
        'Eine Bestellung kommt im Shop an, jemand überträgt sie in die Buchhaltung und passt danach den Lagerbestand von Hand an. Jedes abgetippte Feld ist eine Fehlerquelle und eine Stunde, die nirgends auftaucht.',
        'Wir verbinden die Systeme, die Sie schon nutzen, sodass Daten einmal eingegeben werden und die anderen sie übernehmen — in eine Richtung oder in beide, mit einem Protokoll jedes Austauschs, damit klar ist, wo etwas hängen blieb.',
        'Auf unserem eigenen Produkt machen wir das jeden Tag: DocuFlow AI empfängt E-Rechnungen automatisch über einen zertifizierten Vermittler, als strukturierte Daten, ohne dass jemand etwas abtippt.',
      ],
      pricing: {
        q: 'Was kostet eine Systemintegration?',
        bands: [
          {
            price: 'ab 1.500 €',
            name: 'Eine Verbindung',
            body: 'Zwei Systeme, die eine Art von Daten austauschen, über eine fertige API auf beiden Seiten.',
            examples: [
              'Bestellungen aus dem Shop an den Versanddienstleister',
              'Neue Kunden aus dem Shop ins CRM oder in den Newsletter',
              'Zahlungsbestätigungen zurück in die Bestellung',
            ],
            boundary: 'Wenn ein fertiges Plug-in das schon kann, sagen wir Ihnen, dass Sie das nutzen sollen.',
          },
          {
            price: '3.500 – 8.000 €',
            name: 'Synchronisation mit ERP oder Buchhaltung',
            body: 'Preise, Lagerbestände, Bestellungen und Rechnungen, die in beide Richtungen abgeglichen werden, mit Regeln für alles, was nicht zusammenpasst.',
            examples: [
              'Lagerbestand und Preise aus dem ERP in den Shop',
              'Bestellungen und Rechnungen aus dem Shop in die Buchhaltung',
              'Eingehende E-Rechnungen vom Vermittler in Ihr System',
            ],
            boundary: '',
          },
          {
            price: 'ab 8.000 €',
            name: 'Mehrere Systeme',
            body: 'Ein Datenfluss durch mehrere Systeme, mit Monitoring und einem Protokoll jedes Austauschs.',
            examples: [
              'Shop, ERP und Abrechnung in einem Fluss',
              'Mehrere Verkaufskanäle mit gemeinsamem Lagerbestand',
            ],
            boundary: 'Ein solches Projekt beginnt mit einer Prüfung Ihrer Systeme, nicht mit einem Preis.',
          },
        ],
        min: 1500,
      },
      faq: [
        {
          q: 'Was, wenn eines der Systeme keine API hat?',
          a: 'Dann suchen wir einen anderen Weg — Dateiexport und -import, E-Mail oder einen Vermittler. Gibt es keinen verlässlichen Weg, sagen wir es Ihnen vor dem Angebot.',
        },
        {
          q: 'Was passiert, wenn jemand seine API ändert?',
          a: 'Dann bleibt die Integration stehen oder macht Fehler. Deshalb empfehlen wir Wartung dazu: Das Monitoring bemerkt den Ausfall, und wir beheben ihn, bevor Ihre Kunden es merken.',
        },
        {
          q: 'Was ist der Unterschied zwischen Integration und Automatisierung?',
          a: 'Integration verbindet zwei Systeme, damit sie Daten austauschen. Automatisierung übernimmt eine ganze Aufgabe, die jemand von Hand erledigt — oft samt Integration, aber auch mit Regeln, Entscheidungen und Benachrichtigungen.',
        },
      ],
    },
    {
      slug: 'ecommerce',
      path: 'produktbeschreibungen-automatisieren',
      title: 'KI-Produktbeschreibungen für den Onlineshop',
      description:
        'Produktbeschreibungen erstellen lassen, für den ganzen Katalog: KI-Artikelbeschreibungen in Ihrem Ton und in der Sprache Ihres Marktes, mit Freigabe vor jeder Veröffentlichung.',
      h1: 'KI-Produktbeschreibungen für den ganzen Katalog',
      lede:
        'Tausende Artikel ohne Beschreibung — oder mit der des Lieferanten, die Google als Duplikat liest. Statt Produkttexte einzeln schreiben zu lassen, richten wir den Prozess ein, der sie schreibt.',
      intro: [
        'Der Katalog wächst schneller, als jemand ihn beschreiben kann. Vom Lieferanten übernommene Texte gelten als Duplicate Content, und maschinelle Übersetzung sieht man in der ersten Zeile. Beides kostet Positionen.',
        'Wir richten einen Prozess ein, der Beschreibungen über den gesamten Katalog schreibt — in Ihrem Ton, mit Ihrer Terminologie, in der Sprache des Marktes, in dem Sie tatsächlich verkaufen.',
        'Nichts geht ohne Ihre Freigabe raus. Die Kontrolle ist Teil des Prozesses, kein Zusatz.',
      ],
      // Siehe die Notiz in hr.js — dieselben drei Abschnitte.
      sections: [
        {
          // German buyers compare against German text marketplaces, not the
          // Croatian rates the hr page cites, so this section prices against
          // Textbroker and content.de, per word, with the source linked.
          h2: 'Zum Preis eines Textbörsen-Texts, mit einem Prozess dahinter',
          paragraphs: [
            'Wer Produktbeschreibungen erstellen lässt, landet meist bei einer Textbörse wie Textbroker oder content.de. Abgerechnet wird pro Wort, je nach Qualitätsstufe etwa 1,3 bis 7 Cent. Eine Beschreibung mit 150 Wörtern kostet dort rund 2 bis 10,50 € — ohne Titel und Meta-Beschreibung, und bei einem ganzen Katalog geschrieben von so vielen Autoren, wie der Auftrag gerade findet.',
            'Bei uns zahlen Sie einmal die Einrichtung (690 €, inklusive 20 Probetexten, die Sie freigeben, bevor es weitergeht) und danach pro Beschreibung: 2,50 € bis zur fünfhundertsten, 1,50 € bis zur zweitausendsten, 1 € darüber. Darin stecken Beschreibung, Titel und Meta-Beschreibung, in einem Ton über den ganzen Katalog.',
          ],
          table: {
            head: ['Artikel', 'Textbörse (1,3 – 7 ct / Wort, 150 Wörter)', 'Bei uns'],
            rows: [
              ['500', '975 – 5.250 €', '1.940 €'],
              ['1.000', '1.950 – 10.500 €', '2.690 €'],
              ['5.000', '9.750 – 52.500 €', '7.190 €'],
            ],
          },
          sources: [
            { text: 'Gründerküche — Texte von Textbörsen, Content-Maklern und Text-Brokern', href: 'https://www.gruenderkueche.de/fachartikel/texte-vom-profi-so-kauft-ihr-texte-eure-website-von-textkauf-portalen-content-maklern-und-text-brokern/' },
          ],
          note: 'Unsere Preise inklusive Einrichtung. Textbörsen-Preise nach öffentlich zugänglichen Angaben, ohne Titel und Meta-Beschreibung; die aktuellen Tarife legen die Plattformen im Kundenkonto fest. Jede weitere Sprache: Einrichtung 345 €, Beschreibungen zu denselben Preisen. Zur Größenordnung: 12.000 Beschreibungen liefen in neun Tagen durch unser eigenes Produkt Lumenta AI — kein Kundenprojekt, sondern ein Maß dafür, dass Ihr Katalog dafür kaum zu groß ist.',
        },
        {
          h2: 'Was Lieferantentexte wirklich anrichten',
          paragraphs: [
            'Es gilt als ausgemacht, dass Google doppelte Inhalte bestraft. Tut es nicht, und das steht in Googles eigener Dokumentation: \u201eit\u2019s not something that will cause a manual action\u201c. Was Google tut, ist schlimmer als eine Strafe, weil es leise passiert — für denselben Inhalt wählt es eine Version zum Anzeigen und zeigt die anderen nicht. Keine Meldung, keine Warnung in der Search Console; Sie sind einfach nicht da.',
            'Für Sie heißt das: auf Ihrer eigenen Produktseite treten Sie mit nichts Eigenem an. Bleibt nur der Preis als Unterscheidung, und diesen Wettbewerb gewinnt, wer die tiefsten Taschen hat.',
            'Eigene Texte ändern das von Grund auf: die Seite trägt Text, den kein anderer Shop hat, und rankt für die Art, wie Ihre Kunden fragen — nicht für die, in der ein Lieferant seinen Katalog geschrieben hat.',
          ],
          // Siehe die Notiz in hr.js — mit Quelle, weil es dem Konsens
          // widerspricht.
          sources: [
            { text: 'Google Search Central — SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
            { text: 'Google Search Central — kanonische URLs', href: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls' },
          ],
        },
        {
          h2: 'In der Sprache des Marktes geschrieben, nicht übersetzt',
          paragraphs: [
            'Eine Übersetzung trägt den Satz, aber nicht die Suchanfrage. Ein deutscher Käufer sucht nicht nach der Übersetzung einer kroatischen Formulierung, sondern nach dem, was Deutsche tatsächlich eingeben — oft ein anderes Wort, ein anderes Suchvolumen und ein anderes Kaufmotiv.',
            'Deshalb schreiben wir in der Sprache des Marktes, mit dessen Terminologie und dessen Suchanfragen, statt kroatischen Text durch einen Übersetzer zu schieben. Derselbe Artikel kann in Kroatien und in Deutschland anders betont sein, weil er anders gekauft wird.',
            'Die praktische Folge: zwei Sprachversionen sind nicht die doppelte Arbeit, aber auch nicht ein Auftrag mit angehängter Übersetzung. Deshalb rechnen wir jede Sprache als eigene Beschreibungen ab, zu denselben Preisen.',
          ],
        },
      ],
      pricing: {
        q: 'Was kosten generierte Produktbeschreibungen?',
        bands: [
          {
            price: '690 €',
            name: 'Einrichtung des Prozesses',
            body: 'Wir stellen den Prozess auf Ihren Ton und Ihre Terminologie ein und schreiben 20 Probetexte zu Ihren eigenen Artikeln. Erst wenn Sie diese freigeben, gehen wir den Rest des Katalogs durch. Jede Beschreibung kommt mit Titel und Meta-Beschreibung, der Katalog mit einer Korrekturrunde und einer Tabelle für den Import in Ihren Shop. Jede weitere Sprache: 345 €.',
            examples: [
              'Ein Katalog ohne Beschreibungen oder mit denen des Lieferanten',
              'Eine neue Artikelgruppe, die wie die bestehenden klingen muss',
            ],
            boundary: 'Bei hundert Artikeln und einer Textkraft, die mitkommt, brauchen Sie das nicht.',
            // Siehe die Notiz in hr.js — wohin stattdessen, nicht nur ein Nein.
            selfServe: {
              text: 'Kleinerer Katalog und Sie möchten es selbst machen? Lumenta AI ist unser eigenes Werkzeug für Produkttexte — Selbstbedienung, ohne uns im Ablauf.',
              cta: 'Lumenta AI öffnen',
              href: 'https://lumenta.shop',
            },
          },
          {
            price: '2,50 € / Beschreibung',
            name: 'Bis zur 500. Beschreibung',
            body: 'Ein Katalog mit 500 Artikeln insgesamt, Einrichtung inklusive: 1.940 €.',
            examples: [
              'Ein mittelgroßer Katalog, der eigene Texte braucht',
              'Eine neue Saison oder eine neue Kategorie',
            ],
            boundary: '',
          },
          {
            price: '1,50 € / Beschreibung',
            name: 'Beschreibung 501 bis 2.000',
            body: 'Steht der Prozess, kostet jede weitere Beschreibung weniger. 1.000 Artikel insgesamt: 2.690 €; 2.000 Artikel: 4.190 €.',
            examples: [
              'Ein großer Katalog über mehrere Kategorien',
              'Derselbe Katalog in zwei Märkten',
            ],
            boundary: '',
          },
          {
            price: '1 € / Beschreibung',
            name: 'Jede Beschreibung ab der 2.001.',
            body: 'Für große Kataloge und mehrere Märkte. 5.000 Artikel insgesamt: 7.190 €. Jede Sprache schreiben wir in der Sprache des Marktes, statt nachträglich zu übersetzen.',
            examples: [
              'Tausende Artikel',
              'Derselbe Katalog in mehreren Märkten',
            ],
            boundary: '',
          },
        ],
        // Graduated, like a tax bracket, after a flat setup fee: the setup band
        // pays for the work that takes as long for a hundred items as for five
        // thousand (voice, terminology, rules, 20 trial descriptions), then each
        // description at the rate of its bracket. min is the setup fee, which is
        // also the smallest possible order; there is no max, the price is per item.
        min: 690,
      },
      faq: [
        {
          q: 'Wie lange dauert ein kompletter Katalog?',
          a: 'Kataloge werden in Wochen abgedeckt, nicht in Monaten. Der genaue Rahmen hängt von Artikelzahl und Sprachen ab — nennen Sie beides und wir schätzen.',
        },
        {
          q: 'Warum nicht einfach eine Textbörse?',
          a: 'Für einzelne Texte ist eine Textbörse oft die günstigere Wahl. Bei einem ganzen Katalog schreiben dort Dutzende Autoren, jeder in seinem Ton, und Titel und Meta-Beschreibungen sind eigene Aufträge. Bei uns wird der Ton einmal eingerichtet und gilt für jeden Artikel — ab etwa tausend Artikeln liegen wir damit am unteren Ende der Textbörsen-Preise.',
        },
        {
          q: 'Klingen die Texte wie generische KI?',
          a: 'Nicht, wenn der Prozess stimmt: Jede KI-Artikelbeschreibung entsteht nach Ihrem Ton und Ihrer Terminologie und wird vor der Veröffentlichung geprüft, damit der Katalog wie eine Marke klingt.',
        },
        {
          q: 'Wir haben rund hundert Artikel — brauchen wir das?',
          a: 'Wenn eine Textkraft hinterherkommt, nicht. Das hier löst ein Mengenproblem.',
        },
      ],
    },
    {
      slug: 'architecture',
      path: 'hosting-und-wartung',
      title: 'Hosting und Wartung von Webanwendungen',
      description:
        'Architektur, Oberfläche und Betrieb bei einem Team. Backups, Monitoring und Updates inklusive, mit vereinbarter Reaktionszeit, wenn etwas ausfällt.',
      h1: 'Hosting und Wartung von Webanwendungen',
      lede:
        'Liegen Design, Code und Hosting bei drei Parteien, wird aus einem Ausfall eine Schuldfrage. Hier gibt es einen Ansprechpartner.',
      intro: [
        'Liegen Design, Code und Hosting bei drei verschiedenen Parteien, wird aus einem Ausfall eine Diskussion darüber, wer schuld ist. Sie arbeiten währenddessen nicht.',
        'Architektur, Oberfläche und Betrieb bleiben bei einem Team. Backups, Updates und Monitoring sind enthalten, kein separater Posten auf der Rechnung.',
        'Dasselbe Monitoring und dieselben nächtlichen Backups laufen auf unseren eigenen Produkten.',
      ],
      pricing: {
        q: 'Was kostet die monatliche Wartung?',
        bands: [
          {
            price: '350 – 900 € / Mon.',
            name: 'Eine Anwendung',
            body: 'Monitoring, das auch läuft, wenn niemand hinsieht, nächtliche Backups mit Integritätsprüfung, Updates bevor sie zum Problem werden, und ein Ansprechpartner, wenn etwas stehen bleibt.',
            examples: [
              'Eine von uns gebaute Anwendung',
              'Ein bestehendes System, das wir nach einer Sichtung übernehmen',
            ],
            boundary: 'Das ist keine Website-Wartung. Für WordPress-Plugin-Updates zahlen Sie anderswo weniger.',
          },
          {
            price: '900 – 2.500 € / Mon.',
            name: 'Mehrere Systeme',
            body: 'Mehrere Anwendungen oder Umgebungen unter derselben Aufsicht, mit vereinbarter Reaktionszeit und einem Plan für den Ausfall.',
            examples: [
              'Produktion und Staging über mehrere Dienste',
              'Mehrere Anwendungen, die Datenbank oder Login teilen',
            ],
            boundary: 'Wenn Sie ein eigenes technisches Team haben, übernehmen wir nur den fehlenden Teil.',
          },
        ],
        min: 350,
        max: 2500,
        unit: 'MON',
      },
      faq: [
        {
          q: 'Was ist in der Wartung enthalten?',
          a: 'Backups und Monitoring, die auch laufen, wenn niemand hinsieht, Updates bevor sie zum Problem werden, und ein Ansprechpartner mit vereinbarter Reaktionszeit.',
        },
        {
          q: 'Wir haben ein eigenes technisches Team — geht auch ein Teil?',
          a: 'Ja. Wir übernehmen den fehlenden Teil — sagen Sie uns welchen.',
        },
        {
          q: 'Übernehmen Sie auch fremd gebaute Anwendungen?',
          a: 'Ja, nach einer Sichtung des bestehenden Systems. Wenn Wartung ohne vorherige Arbeit keinen Sinn ergibt, sagen wir das vorher.',
        },
      ],
    },
  ],

  serviceDetailPage: {
    eyebrow: 'Leistung',
    pricingH2: 'Was es kostet',
    vatNote: 'Alle Preise verstehen sich zzgl. MwSt.; derzeit sind wir nicht mehrwertsteuerpflichtig, daher weist die Rechnung keine MwSt. aus. Das endgültige Angebot hängt vom Umfang ab — die Spanne sagt Ihnen sofort, ob wir in derselben Größenordnung liegen.',
    priceQ: 'Was kostet das?',
    getsH2: 'Was Sie bekommen',
    notForH2: 'Wann das nichts für Sie ist',
    faqH2: 'Häufige Fragen',
    sourcesLabel: 'Quelle',
    closingH2: 'Klingt nach Ihrem Problem?',
    closingLede: 'Beschreiben Sie es in einfachen Worten. Sind wir nicht die Richtigen dafür, sagen wir es Ihnen — diese Antwort ist kostenlos.',
    closingCta: 'Schreiben Sie uns',
    allServices: 'Alle Leistungen',
    otherH2: 'Weitere Leistungen',
  },

  workPage: {
    eyebrow: 'Projekte',
    h1: 'Wir arbeiten mit dem, was wir verkaufen.',
    lede:
      'Keine Kundenlogos an der Wand. Fünf Produkte, die wir gebaut, ausgeliefert und bis heute betreut haben — und jedes davon ist gerade jetzt live. Öffnen Sie sie und urteilen Sie selbst. Das sechste ist Narrator, das interne Tool, auf dem unsere Video-Lokalisierung läuft.',
    problem: 'Das Problem',
    built: 'Was wir gebaut haben',
    result: 'Ergebnis',
    lesson: 'Warum das für Sie zählt',
    visit: 'Öffnen',
    closingH2: 'Sie brauchen etwas Ähnliches?',
    closingLede: 'Beschreiben Sie das Problem, und wir sagen Ihnen, was dafür nötig ist.',
    closingCta: 'Kontakt aufnehmen',
    allWork: 'Alle Projekte',
    shotAlt: 'Screenshot der Startseite von {name}',
  },

  contactPage: {
    eyebrow: 'Kontakt',
    h1: 'Sagen Sie uns, was es geben sollte.',
    lede:
      'Beschreiben Sie das Problem, nicht die Lösung. Wenn wir nicht die Richtigen dafür sind, sagen wir das — diese Antwort kostet nichts und spart beiden Seiten einen Monat.',
    openMail: 'Im Mailprogramm öffnen',
    copy: 'Adresse kopieren',
    copied: 'Kopiert',
    expectH2: 'Was Sie erwartet',
    helpH2: 'Was uns hilft, schnell zu antworten',
    help: [
      'Was die Sache leisten soll, in einfachen Worten',
      'Ob es schon etwas gibt und was daran nicht funktioniert',
      'Ungefähr wann es live sein muss und was passiert, wenn nicht',
      'Ein Budgetrahmen — auch grob spart er viel Raterei',
    ],
    form: {
      h2: 'Anfrage senden',
      name: 'Name',
      email: 'E-Mail',
      message: 'Beschreiben Sie Ihr Problem',
      messageHint: 'In normalen Worten. Falls es schon etwas gibt, schreiben Sie, was daran nicht stimmt.',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet…',
      okTitle: 'Angekommen.',
      okBody: 'Wir melden uns innerhalb von 24 Stunden.',
      failed: 'Senden fehlgeschlagen.',
      // Keyed by the code the route returns, so the visitor reads the reason in
      // the language of the page they are on.
      errors: {
        rate_limited: 'Zu schnell. Warten Sie eine halbe Minute und versuchen Sie es erneut.',
        invalid_name: 'Bitte geben Sie Ihren Namen ein.',
        invalid_email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        message_too_long: 'Die Nachricht ist zu lang.',
        not_configured: 'Das Formular funktioniert derzeit auf unserer Seite nicht.',
        save_failed: 'Speichern fehlgeschlagen.',
        send_failed: 'Senden fehlgeschlagen. Bitte erneut versuchen oder uns direkt per E-Mail schreiben.',
      },
      mailFallback: 'Aus Ihrem Mailprogramm senden',
      mailPrefill: 'Lieber aus Ihrem Mailprogramm? Mit ausgefüllten Daten öffnen',
      honeypot: 'Nicht ausfüllen',
      subject: 'Anfrage über die Website',
    },
  },

  // Entry prices for the home page and /services. The figures themselves are
  // not here: they come from serviceDetails[].pricing.min and videoPage.priceMin
  // through servicePriceFor(), so there is one number to change, not three.
  prices: {
    packagesLabel: 'Pakete',
    from: 'ab {price}',
    perMonth: '/ Mon.',
    label: 'Preise',
    h2: 'Was es kostet',
    lede: 'Sechs Leistungen, sechs Einstiegspreise. Auf der Seite jeder Leistung steht, was in welche Spanne fällt und wo die nächste beginnt.',
    more: 'Preise im Detail',
    cta: 'Angebot anfragen',
  },

  videoPage: {
    // Page title, now that video is a package rather than a card of its own.
    title: 'Vertontes Video und Lokalisierung',
    // Lowest figure in pricing[] below, as a number for servicePriceFor().
    priceMin: 450,
    eyebrow: 'Leistungen',
    pricingH2: 'Was es kostet',
    // Siehe die Notiz in hr.js — pro Sprache statt als Paket.
    pricing: [
      {
        price: '450 – 900 €',
        name: 'Ein Film, eine Sprache',
        body: 'Skript, Stimme, Mischung unter dem Ton, den das Material schon trägt, und Untertitel im Format, das die Plattform akzeptiert. Ihr Bild wird nicht neu kodiert.',
      },
      {
        price: '+150 – 300 €',
        name: 'Jede weitere Sprache',
        body: 'Derselbe Film in einem weiteren Markt. Der erste Durchgang trägt Skript und Mischung, jede Sprache danach kostet deutlich weniger.',
      },
      {
        price: 'ab 1.800 €',
        name: 'Mehrere Filme',
        body: 'Eine Reihe von Filmen oder ein ganzes Materialarchiv, nach Umfang.',
      },
    ],
    vatNote: 'Alle Preise zzgl. MwSt.; derzeit sind wir nicht mehrwertsteuerpflichtig, daher weist die Rechnung keine MwSt. aus. Der Preis hängt von der Laufzeit ab; weitere Sprachen werden je Sprache berechnet.',
    h1: 'Ein Film. Jeder Markt, in dem Sie verkaufen.',
    lede:
      'Für jede Sprache neu zu drehen ist der Weg, auf dem Videobudgets sterben. Wir vertonen, was Sie bereits haben, und produzieren aus einem Durchgang eine Fassung für jeden Markt.',
    cta: 'Über einen Film sprechen',

    gapH2: 'Der Teil, den niemand löst',
    gapP: [
      'Das meiste Material ist nicht stumm. Es hat Musik, einen Sprecher oder ein Interview — und genau daran scheitern automatische Vertonungswerkzeuge. Sie setzen leeren Ton voraus und reden über den, der bereits spricht.',
      'Wir erkennen, wo das Material bereits eine Stimme trägt, und setzen die Erzählung darum herum. Über Ihren Sprecher redet niemand. Die Musik übertönt den Satz nicht. Das ist keine Einstellung, an die jemand gedacht hat, sondern aus dem Ton selbst gemessen.',
    ],

    howH2: 'Wie es abläuft',
    howLede: 'Vier Schritte, und Sie sehen nach jedem ein Ergebnis, nicht erst am Ende.',
    steps: [
      ['Das Skript', 'Wir schreiben die Erzählung für Ihr vorhandenes Material, in der Sprache, die Ihre Marke tatsächlich spricht. Die Länge rechnen wir von der Laufzeit zurück, damit nichts gehetzt wirkt und nichts ohne Bild endet.'],
      ['Die Stimme', 'Neuronale Stimmen in über hundert Sprach- und Regionalvarianten, mit Kontrolle über Tempo, Tonhöhe und Vortrag. Sie hören die Kandidaten an Ihrem eigenen Material, bevor etwas festgelegt wird.'],
      ['Die Mischung', 'Der vorhandene Ton wird nicht weggeworfen. Er senkt sich um einen gemessenen Wert unter die Stimme und kommt in den Pausen zurück, damit der Film seine Energie behält statt zur Diashow mit Stimme zu werden.'],
      ['Die Lieferung', 'Ein fertiger Master pro Sprache, dazu eine Untertiteldatei, benannt so, wie es die jeweilige Plattform verlangt. Ihr Bild wird nicht neu kodiert, außer Sie wünschen eingebrannte Titel.'],
    ],

    quote: ['Der Film auf unserer Startseite ist genau so entstanden — ', 'Skript, Stimme, Mischung und Untertitel', ', mit Werkzeugen, die wir selbst gebaut haben, weil nichts von der Stange es sauber konnte.'],

    capsH2: 'Untertitel sind kein Nachgedanke',
    capsP: [
      'Die meisten Menschen sehen Ihr Video zuerst ohne Ton. Ohne Untertitel existiert die Erzählung, für die Sie bezahlt haben, für sie schlicht nicht.',
      'Jede Lieferung enthält Untertitel pro Sprache, benannt so, wie es das Ziel verlangt — Facebook lehnt den Upload ab, wenn der Dateiname falsch ist. Genau solche Details kosten eine Kampagne still ihre Reichweite.',
    ],

    getH2: 'Was Sie bekommen',
    get: [
      'Einen fertigen Master pro Sprache, Bild unangetastet',
      'Eine Untertiteldatei pro Sprache, im Format, das die jeweilige Plattform akzeptiert',
      'Das Erzählskript, damit die Worte Ihnen gehören und wiederverwendbar sind',
      'Timecodes, damit eine spätere Änderung kein Neuanfang ist',
    ],

    closingH2: 'Haben Sie Material, das mehr leisten könnte?',
    closingLede:
      'Schicken Sie uns, was Sie haben, und welche Märkte zählen. Wir sagen Ihnen, was nötig wäre — und wenn es sich nicht lohnt, sagen wir auch das.',
  },

  services: [
    {
      slug: 'websites',
      title: 'Websites und digitale Plattformen',
      short: 'Websites und Shops, die sofort laden, die Sprache Ihrer Kunden sprechen und für Google und KI-Suche bereit sind.',
      body: [
        'Die meisten Websites kleiner Firmen verlieren den Besucher vor dem ersten Satz: langsam, auf derselben Vorlage wie die Konkurrenz, mit einem Anfrageformular, das niemand ausfüllt.',
        'Wir bauen Websites und Shops, die auf jedem Bildschirm sofort laden, in den Sprachen Ihrer Kunden, und technisch für Google und für die KI-Assistenten vorbereitet sind, die heute immer öfter statt Google antworten.',
        'Was im Preis enthalten ist und was nicht, steht schriftlich fest, bevor wir anfangen — keine Überraschungen auf der Rechnung.',
      ],
    },
    {
      slug: 'platforms',
      title: 'Individuelle Anwendungsentwicklung',
      short: 'Von der Idee bis in die Produktion — ausgeliefert, überwacht und ab Tag eins bereit für echte Nutzer.',
      body: [
        'Die meisten Projekte scheitern nicht an der Idee. Sie scheitern auf der Strecke zwischen einem Entwurf, der gut aussieht, und einem System, das die ersten hundert Nutzer übersteht.',
        'Wir bauen den gesamten Weg: Datenmodell, Anwendung, Auslieferung, Überwachung. Keinen Prototyp, der sich gut vorführen lässt und dann unter einem echten Katalog zusammenbricht.',
        'Sie bekommen ein laufendes Produkt, das Repository, in dem es lebt, und eine Auslieferung, die Sie beobachten können — kein Übergabedokument, das beides beschreibt.',
      ],
    },
    {
      slug: 'ai',
      title: 'Automatisierung von Geschäftsprozessen',
      short: 'Wiederkehrende Arbeit übernimmt ein Prozess — in den Systemen, die Ihr Team schon nutzt.',
      body: [
        'Jede Woche überträgt jemand Daten von einem System ins andere. Jeden Monat baut jemand denselben Report von Hand. Das ist kein Problem der Menschen, sondern des Prozesses.',
        'Wir starten bei einer konkreten Aufgabe und messen, wie viele Stunden sie freimacht. KI kommt dort zum Einsatz, wo sie sich rechnet — nicht dort, wo sie gut klingt.',
        'Der Prozess lebt in den Werkzeugen, die Ihr Team ohnehin jeden Morgen öffnet. Niemand muss eine neue Oberfläche lernen.',
      ],
    },
    {
      slug: 'integrations',
      title: 'Integration verschiedener Systeme',
      short: 'Shop, Buchhaltung, CRM und Lager tauschen Daten selbst aus, statt dass jemand sie abtippt.',
      body: [
        'Eine Bestellung kommt im Shop an, jemand überträgt sie in die Buchhaltung und passt danach den Lagerbestand von Hand an. Jedes abgetippte Feld ist eine Fehlerquelle und eine Stunde, die niemand sieht.',
        'Wir verbinden die Systeme, die Sie schon nutzen, sodass Daten einmal eingegeben werden und die anderen sie selbst übernehmen — in eine Richtung oder in beide.',
        'Wenn eine Seite ihre API ändert, ändert sich die Integration mit. Dafür ist die Wartung da.',
      ],
    },
    {
      slug: 'ai-solutions',
      title: 'KI-Lösungen und Integrationen',
      short: 'KI dort, wo Lesen und Schreiben die Arbeit ist: Beschreibungen für den ganzen Katalog, Vertonung in jeder Sprache, Dokumente, die sich selbst verarbeiten.',
      body: [
        'Tausende Artikel ohne Beschreibung, ein Video, das nur eine Sprache spricht, PDFs, die jemand von Hand abtippt. Das sind die Aufgaben, bei denen KI wirklich Zeit spart, weil die Arbeit aus Text und Sprache besteht.',
        'Jede dieser Lösungen läuft zuerst auf unseren eigenen Produkten: Lumenta AI schreibt Beschreibungen, Narrator vertont Videos, DocuFlow liest Rechnungen.',
        'Die Freigabe vor der Veröffentlichung bleibt immer bei Ihnen.',
      ],
      // Packages with their own pages and prices; this card is their umbrella.
      packages: [
        {
          slug: 'ecommerce',
          name: 'Produktbeschreibungen für Ihren Shop',
        },
        {
          slug: 'video',
          name: 'Video-Vertonung und Lokalisierung',
        },
      ],
    },
    {
      slug: 'architecture',
      title: 'Technische Wartung und Support',
      short: 'Monitoring, Backups und Updates — und ein Ansprechpartner, wenn etwas stillsteht.',
      body: [
        'Das meiste, was in einem Projekt schiefgeht, geht bei einer Übergabe schief: zwischen Designer und Entwickler, oder zwischen einer Agentur und dem, an den sie still weitervergeben hat.',
        'Architektur, Oberfläche und Betrieb bleiben bei demselben Team, damit es keine Nahtstelle gibt, durch die Dinge fallen.',
        'Dazu gehört auch der unglamouröse Teil — Backups, Updates, Überwachung und erreichbar sein, wenn etwas kaputtgeht.',
      ],
    },
  ],

  work: [
    {
      slug: 'bezmaske',
      kind: 'Live-Plattform',
      short: 'Eine Arbeitgeber-Bewertungsplattform für Kroatien und die Region — und eine Lehrstunde darin, eine clientseitig gerenderte App ranken zu lassen.',
      problem:
        'Eine Bewertungsplattform lebt oder stirbt mit der Suche und damit, wie ihre Links beim Teilen aussehen. Beides ist genau das, worin eine clientseitig gerenderte Single-Page-App am schlechtesten ist: Crawler und soziale Netzwerke bekommen eine leere Hülle.',
      built: [
        'Prerender-Schicht vor der App, die Crawlern eine vollständig aufgebaute Seite mit korrektem Canonical pro Seite ausliefert',
        'Open-Graph-Deduplizierung, damit ein geteilter Link als diese Seite erscheint und nicht als generische Sitekarte',
        'Automatische Sitemap-Erzeugung nach Zeitplan, sobald neue Inhalte entstehen',
        'Nächtliche, WAL-sichere Datenbank-Backups mit Integritätsprüfung und Replikation außerhalb des Servers',
      ],
      lesson:
        'Eine Bewertungsseite können viele Teams bauen. Eine zu bauen, die Suchmaschinen und soziale Plattformen als echte Seite behandeln — ohne Neuschreiben — ist der Teil, für den es Erfahrung braucht.',
    },
    {
      slug: 'lumenta-ai',
      kind: 'Live-Produkt',
      title: '12.000 Beschreibungen in neun Tagen — geprüfte Systemkapazität',
      short: 'KI-Copywriting für den E-Commerce — der ganze Katalog in einem Markenton, auf Kroatisch und Deutsch.',
      problem:
        'Der Katalog wächst schneller, als ihn jemand beschreiben kann. Vom Lieferanten übernommene Texte wertet Google als Duplikat, und ein externer Texter berechnet 3 bis 15 Euro pro Artikel — bei 12.000 Artikeln eine Summe, die kein Shop einplant.',
      built: [
        'Ein System, das jeden Artikel im Ton der Marke und mit ihrer Terminologie beschreibt, in der Sprache des Marktes statt nachträglich übersetzt.',
        'Jeder Text durchläuft eine Qualitätsprüfung vor der Veröffentlichung, und die Generierungskosten sind pro Artikel gedeckelt.',
        'Neben dem Katalog Tools für tägliche Beiträge — Instagram, Facebook, TikTok, YouTube, Newsletter — an einem Ort. Sie entstanden aus unserem eigenen Bedarf: Beiträge für mehrere Netzwerke kosteten uns Stunden, und die vorhandenen Tools waren verstreut, jedes mit eigenem Abo.',
        'Lumenta Motion: ein fertiges TikTok-Skript einfügen oder stattdessen ein paar Felder ausfüllen — heraus kommt ein gerendertes MP4, bereit zur Veröffentlichung.',
      ],
      result: [
        'Kapazität, gemessen in einer Simulation mit parallelen Strängen: 12.000 Beschreibungen in 9 Tagen — im Schnitt 65 Sekunden pro Text',
        '0,02 € Generierungskosten pro Beschreibung, gegenüber 3–15 € beim externen Texter',
        'Acht Tools in Produktion, von der Produktbeschreibung bis zum Newsletter',
      ],
      lesson:
        'Kostenkontrolle, Caching und Qualitätsprüfung sind hier entstanden — am eigenen Produkt. In Ihr Projekt kommen sie fertig. Wir lernen nicht an Ihrem Katalog.',
    },
    {
      slug: 'the-dog-habit',
      kind: 'Live-Publikation',
      short: 'Eine Publikation, die selbst recherchiert, schreibt und illustriert — und nach demselben Zeitplan auf einen eigenen YouTube-Kanal veröffentlicht.',
      problem:
        'Content-Seiten sterben an Unregelmäßigkeit. Wöchentlich von Hand zu veröffentlichen ist Arbeit; ein Jahr lang wöchentlich zu veröffentlichen ist eine ganz andere Arbeit — und sobald man aufhört, geht der Traffic mit.',
      built: [
        'Durchgehender Ablauf: Recherche, Entwurf, Bilderzeugung, Veröffentlichung',
        'Kurzvideos, die nach Zeitplan erzeugt und auf einen eigenen YouTube-Kanal gestellt werden',
        'Läuft unbeaufsichtigt — niemand öffnet einen Editor, damit es weitergeht',
        'Jede Stufe ist prüfbar, ein schwaches Ergebnis also nachvollziehbar statt rätselhaft',
      ],
      lesson:
        'Das ist der Beweis, dass Content-Automatisierung den Kontakt mit der Wirklichkeit übersteht: echtes Publikum, echter Zeitplan, und das auf Blog und Videokanal zugleich.',
    },
    {
      slug: 'unmaskedwords',
      kind: 'Live-Plattform',
      short: 'Eine anonyme Plattform für das, was Menschen nicht mit ihrem Namen unterschreiben.',
      problem:
        'Anonymität ist leicht versprochen und schwer wirklich geliefert. Die Technik steckt vor allem in der Entscheidung, was man sich weigert zu speichern.',
      built: [
        'So entworfen, dass von vornherein wenig da ist, das auslaufen könnte',
        'Teilt Infrastruktur mit unseren anderen Projekten, aber nicht deren Daten',
        'Läuft auf demselben Server, den wir selbst betreiben und sichern',
      ],
      lesson:
        'Hat uns gelehrt, mehrere unabhängige Produkte auf einem sorgfältig geführten Server zu betreiben — die Art Entscheidung, die ein Kundenbudget vernünftig hält.',
    },
    {
      slug: 'docuflow-ai',
      kind: 'Live-Produkt',
      short:
        'Eingangsbelege für kleine Unternehmen in Zeiten der kroatischen Fiskalisierung 2.0 — E-Rechnungen kommen von selbst, PDFs, Scans und Fotos liest die KI und macht daraus mit einer Freigabe eine Aktion.',
      problem:
        'Die kroatische Fiskalisierung 2.0 haben wir verfolgt, als noch niemand genau wusste, wie sie funktionieren würde und warum sie eingeführt wird. Beim genaueren Hinsehen fiel uns auf, was in den Ankündigungen fehlte: Die Pflicht zur E-Rechnung bedeutet nicht das Ende des Papiers. Ein kleines Unternehmen erhält weiterhin PDFs, fotografierte Belege, Scans und Barquittungen — nur jetzt zusätzlich zu E-Rechnungen. Zwei Welten, und kein Tool für beide.',
      built: [
        'E-Rechnungen kommen automatisch über einen zertifizierten Zugangsdienst (ePoslovanje, doku.hr). Die Daten sind bereits strukturiert, daher fällt dafür keine KI-Verarbeitung an.',
        'Alles andere — PDF, Scan, Foto — liest die KI (Claude) und extrahiert Beträge, Fälligkeiten, IBAN und Steuernummer als strukturierte, prüfbare Daten.',
        'Eine Action Engine, die den nächsten Schritt vorschlägt — eine Zahlungserinnerung, eine Buchhaltungsaufgabe — und ihn erst verschickt, wenn ein Mensch zustimmt, mit echtem E-Mail-Versand hinter jeder freigegebenen Erinnerung',
        'KI-Kostenerfassung pro Aufruf von Anfang an eingebaut, damit das Produkt seine eigene Marge kennt, bevor der erste Kunde es tut',
        'Ein Sicherheits-Audit, das die meisten Teams ganz auslassen: jede Datenbankfunktion mit erhöhten Rechten geprüft, Berechtigungen geschlossen, von denen niemand mehr wusste, dass sie offen standen',
      ],
      result: [
        'Eine echte E-Rechnung wurde über die Testumgebung des Zugangsdienstes gesendet, abgerufen und in der App angezeigt — ohne einen einzigen KI-Aufruf. „E-Rechnungen ohne KI-Verarbeitungskosten“ ist gemessen, nicht angenommen.',
        'Die KI-Extraktion wurde an echten fotografierten und gescannten kroatischen Belegen und Zahlscheinen gemessen. Unsichere Ziffern in IBAN und Steuernummer werden über Prüfsummen (mod-97, mod 11-10) entschieden, nicht geraten.',
        'In Produktion, das ganze Produkt auf Kroatisch',
      ],
      lesson:
        'Der KI-Aufruf, der ein Dokument liest, ist die leichte Hälfte. Vertrauen verdient man mit allem drumherum — dem Prüfschritt, der nie übersprungen wird, den Kosten, die sich belegen lassen, dem Zugriff, der nachweislich abgeschlossen ist. Und mit einer klaren Grenze: DocuFlow fiskalisiert den Rechnungseingang bewusst nicht, denn das ist die gesetzliche Rolle des Zugangsdienstes. Es führt den Nutzer zu diesem Schritt, statt so zu tun, als würde es ihn übernehmen.',
    },
    {
      slug: 'narrator',
      kind: 'Internes Tool',
      title: 'Narrator — ein Video, über hundert Sprachen',
      short: 'Unser eigenes Tool für mehrsprachige Video-Sprecherstimmen — Timing, Musik, Untertitel und Übersetzung in einem Durchgang.',
      problem:
        'Für die Promo-Videos von Lumenta Labs brauchten wir Sprecherstimmen in mehreren Sprachen. Wir hätten für jede Sprache ein Studio bezahlen oder einen TTS-Dienst abonnieren können. Stattdessen haben wir ein eigenes Tool gebaut — in fünf Tagen.',
      built: [
        'Sprecherstimme über Azure Neural TTS, gelegt um die Stellen, an denen im Originalvideo bereits gesprochen wird — das Tool findet sie selbst',
        'Die Musik wird automatisch unter die Stimme abgesenkt',
        'Untertitel werden in einem Format exportiert, das YouTube und Facebook akzeptieren',
        'Übersetzte Fassungen mit einem Klick, Markennamen bleiben unangetastet',
        'Über hundert Sprachen verfügbar — eine neue Sprache braucht weder ein neues Tool noch einen neuen Sprecher',
      ],
      result: [
        'Dasselbe Promo-Video bekam eine Sprecherstimme in vier Sprachen: Englisch, Deutsch, Kroatisch und Niederländisch',
        'In fünf Tagen gebaut und seitdem täglich im Einsatz',
        'Damit vertonen wir unsere eigenen Promo-Videos sowie Filme und Videos, die wir für Kunden produzieren',
      ],
      lesson:
        'Der teure Teil der Lokalisierung ist nicht die Stimme, sondern alles drumherum: Timing, Musik, Untertitel, Markennamen. Ist das automatisiert, wird eine neue Sprache vom Projekt zum Klick. Darauf läuft unsere Video-Lokalisierung — Sie bekommen eine Fassung für jeden Markt, nicht ein neues Projekt für jede Sprache.',
      closingLink: { path: '/services/video', label: 'Video-Lokalisierung ansehen' },
    },
  ],

  pillars: [
    ['Direkt', 'Keine Zwischenhändler, keine Projektleiter, die Ihre Fragen an jemand anderen weitergeben.'],
    ['Konkret', 'Eine klare Vereinbarung und eine definierte Lieferung, keine Präsentation darüber.'],
    ['Messbar', 'Sie wissen, was gebaut wird, was es kostet und wann es fertig ist.'],
  ],
};

export default de;
