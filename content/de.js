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
    home: {
      // Siehe die Notiz in hr.js — das Template erreicht dieses Segment nicht.
      title: 'Digitalstudio für Web, KI und Automatisierung — Lumenta Labs',
      description:
        'Wir bauen Webplattformen, KI-Werkzeuge und Automatisierungen, die im Produktivbetrieb halten. Zwölf eigene Produkte, ein Team von Anfang bis Betrieb.',
    },
    services: {
      title: 'Entwicklung und KI-Automatisierung',
      description:
        'Fünf Probleme, die wir lösen: Webplattformen, KI-Prozessautomatisierung, Produktbeschreibungen im ganzen Katalog, Video-Lokalisierung und Wartung.',
    },
    work: {
      title: 'Produkte, die wir gebaut haben',
      description:
        'Fünf Produkte, die wir gebaut und bis heute betreut haben — Bezmaske, Lumenta AI, The Dog Habit, UnmaskedWords und DocuFlow AI. Alle sind live.',
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

  a11y: {
    skip: 'Zum Hauptinhalt springen',
    langNav: 'Sprache',
    mainNav: 'Hauptnavigation',
    footerNav: 'Fußzeile',
    legalNav: 'Rechtliches',
    heroVideoPause: 'Hintergrundvideo pausieren',
    heroVideoPlay: 'Hintergrundvideo abspielen',
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
      'Fünf Dinge, sauber umgesetzt, vom selben Team, das auch dann noch da ist, wenn etwas geändert werden muss.',

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

    about: {
      h2: 'Wer das macht',
      paragraphs: [
        'Hinter Lumenta Labs stehe ich, Denis. Seit zwölf Jahren baue ich digitale Produkte, die letzten sechs davon spezialisiert auf KI und Automatisierung.',
        'Sie sprechen direkt mit mir. Derselbe Mensch, der Ihr Angebot schreibt, schreibt auch den Code und bringt ihn in Produktion — kein Account Manager dazwischen, keine Subunternehmer im Ausland.',
        'Zwölf eigene Produkte laufen in Produktion: Lumenta AI, The Dog Habit, UnmaskedWords, BezMaske und weitere. Alles, was ich Kunden anbiete, ist zuerst durch sie hindurchgegangen. Ich verkaufe nichts, was ich nicht selbst am Laufen gehalten habe.',
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
    h1: 'Fünf Probleme, die wir lösen',
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
        notFor: 'Sie eine Website mit fünf Unterseiten brauchen — da fahren Sie mit einer fertigen Lösung günstiger. Das sagen wir Ihnen sofort.',
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
        slug: 'ecommerce',
        title: 'Tausende Artikel ohne Beschreibung — oder mit denen des Lieferanten',
        paragraphs: [
          'Der Katalog wächst schneller, als ihn jemand beschreiben kann. Vom Lieferanten übernommene Texte wertet Google als Duplikat, und maschinelle Übersetzung sieht man sofort.',
          'Wir richten einen Prozess ein, der den ganzen Katalog beschreibt — in Ihrem Ton, mit Ihrer Terminologie, in der Sprache des Marktes, in dem Sie tatsächlich verkaufen. Nicht nachträglich übersetzt.',
        ],
        gets: [
          'Den ganzen Katalog abgedeckt in Wochen, nicht Monaten',
          'Texte, die nach einer Marke klingen — nicht nach tausend zufälligen KI-Absätzen',
          'Kontrolle vor der Veröffentlichung: nichts geht raus ohne Ihre Freigabe',
        ],
        notFor: 'Sie hundert Artikel haben und einen Texter, der hinterherkommt.',
      },
      {
        slug: 'video',
        title: 'Ein Video, fünf Märkte',
        paragraphs: [
          'Pro Markt zu drehen ist der teuerste Weg zu derselben Botschaft in fünf Sprachen.',
          'Aus einer Produktion liefern wir Sprecher, Vertonung, Mischung und Untertitel für jede Sprachversion.',
        ],
        gets: [
          'Alle Sprachversionen aus einem Dreh',
          'Untertitel und Sprecher abgestimmt auf den Text Ihrer Website',
          'Material, das veröffentlichungsfertig ist — kein Rohexport',
        ],
        notFor: 'Sie ein Video in einer Sprache brauchen — lokal geht das schneller.',
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
          a: 'Wenn Sie fünf Unterseiten brauchen, ist eine Standardlösung günstiger, und das sagen wir Ihnen sofort. Das hier ist für Systeme, die wachsen müssen.',
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
      slug: 'ecommerce',
      path: 'produktbeschreibungen-automatisieren',
      title: 'KI-Produktbeschreibungen für den Onlineshop',
      description:
        'Produktbeschreibungen für den ganzen Katalog, in Ihrem Ton und in der Sprache des Marktes, in dem Sie verkaufen. Freigabe vor jeder Veröffentlichung.',
      h1: 'KI-Produktbeschreibungen für den ganzen Katalog',
      lede:
        'Tausende Artikel ohne Beschreibung — oder mit der des Lieferanten, die Google als Duplikat liest. Wir richten den Prozess ein, der sie schreibt.',
      intro: [
        'Der Katalog wächst schneller, als jemand ihn beschreiben kann. Vom Lieferanten übernommene Texte gelten als Duplicate Content, und maschinelle Übersetzung sieht man in der ersten Zeile. Beides kostet Positionen.',
        'Wir richten einen Prozess ein, der Beschreibungen über den gesamten Katalog schreibt — in Ihrem Ton, mit Ihrer Terminologie, in der Sprache des Marktes, in dem Sie tatsächlich verkaufen.',
        'Nichts geht ohne Ihre Freigabe raus. Die Kontrolle ist Teil des Prozesses, kein Zusatz.',
      ],
      pricing: {
        q: 'Was kosten generierte Produktbeschreibungen?',
        bands: [
          {
            price: '1.500 – 4.000 €',
            name: 'Bis tausend Artikel, eine Sprache',
            body: 'Wir stellen den Prozess auf Ihren Ton und Ihre Terminologie ein und gehen den Katalog durch. Sie prüfen und geben frei, bevor etwas erscheint.',
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
            price: '4.000 – 12.000 €',
            name: 'Ganzer Katalog, mehrere Sprachen',
            body: 'Derselbe Prozess über den gesamten Katalog und jeden Markt, in dem Sie verkaufen — in dieser Sprache geschrieben, nicht nachträglich übersetzt.',
            examples: [
              'Tausende Artikel in zwei oder mehr Märkten',
              'Kategorie- und Kampagnentexte neben den Beschreibungen',
            ],
            boundary: '',
          },
        ],
        min: 1500,
        max: 12000,
      },
      faq: [
        {
          q: 'Wie lange dauert ein kompletter Katalog?',
          a: 'Kataloge werden in Wochen abgedeckt, nicht in Monaten. Der genaue Rahmen hängt von Artikelzahl und Sprachen ab — nennen Sie beides und wir schätzen.',
        },
        {
          q: 'Klingen die Texte wie generische KI?',
          a: 'Der Prozess wird auf Ihren Ton und Ihre Terminologie eingestellt, damit der Katalog wie eine Marke klingt.',
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
    vatNote: 'Alle Preise verstehen sich zzgl. MwSt. Das endgültige Angebot hängt vom Umfang ab — die Spanne sagt Ihnen sofort, ob wir in derselben Größenordnung liegen.',
    priceQ: 'Was kostet das?',
    getsH2: 'Was Sie bekommen',
    notForH2: 'Wann das nichts für Sie ist',
    faqH2: 'Häufige Fragen',
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
      'Keine Kundenlogos an der Wand. Fünf Produkte, die wir gebaut, ausgeliefert und bis heute betreut haben — und jedes davon ist gerade jetzt live. Öffnen Sie sie und urteilen Sie selbst.',
    problem: 'Das Problem',
    built: 'Was wir gebaut haben',
    result: 'Ergebnis',
    lesson: 'Warum das für Sie zählt',
    visit: 'Öffnen',
    closingH2: 'Sie brauchen etwas Ähnliches?',
    closingLede: 'Beschreiben Sie das Problem, und wir sagen Ihnen, was dafür nötig ist.',
    closingCta: 'Kontakt aufnehmen',
    allWork: 'Alle Projekte',
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
      },
      mailFallback: 'Aus Ihrem Mailprogramm senden',
      mailPrefill: 'Lieber aus Ihrem Mailprogramm? Mit ausgefüllten Daten öffnen',
      honeypot: 'Nicht ausfüllen',
      subject: 'Anfrage über die Website',
    },
  },

  videoPage: {
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
    vatNote: 'Alle Preise zzgl. MwSt. Der Preis hängt von der Laufzeit ab; weitere Sprachen werden je Sprache berechnet.',
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
      slug: 'platforms',
      title: 'Webplattformen und Anwendungen',
      short: 'Von der Idee bis in die Produktion — ausgeliefert, überwacht und ab Tag eins bereit für echte Nutzer.',
      body: [
        'Die meisten Projekte scheitern nicht an der Idee. Sie scheitern auf der Strecke zwischen einem Entwurf, der gut aussieht, und einem System, das die ersten hundert Nutzer übersteht.',
        'Wir bauen den gesamten Weg: Datenmodell, Anwendung, Auslieferung, Überwachung. Keinen Prototyp, der sich gut vorführen lässt und dann unter einem echten Katalog zusammenbricht.',
        'Sie bekommen ein laufendes Produkt, das Repository, in dem es lebt, und eine Auslieferung, die Sie beobachten können — kein Übergabedokument, das beides beschreibt.',
      ],
    },
    {
      slug: 'ai',
      title: 'KI-Werkzeuge und Integrationen',
      short: 'Inhaltserstellung und Prozessautomatisierung, eingebaut in Ihre bestehenden Systeme.',
      body: [
        'KI ist erst nützlich, wenn sie eine konkrete Aufgabe und ein messbares Ergebnis hat. Wir beginnen bei der Aufgabe, nicht beim Modell.',
        'Inhaltserstellung, die Ihren Ton über jede Seite hält. Automatisierung, die die wiederkehrende Arbeit entfernt, die niemand von Hand machen sollte.',
        'Es geht in die Werkzeuge, die Ihr Team ohnehin jeden Morgen öffnet. Niemand muss eine neue Oberfläche lernen, um davon zu profitieren.',
      ],
    },
    {
      slug: 'ecommerce',
      title: 'Content-Automatisierung für E-Commerce',
      short: 'Beschreibungen, Kategorieseiten und Kampagnen in dem Umfang, den ein echter Katalog verlangt.',
      body: [
        'Ein Shop mit viertausend Artikeln lässt sich nicht von Hand schreiben, und ein Shop aus einem generischen Modell liest sich wie jeder andere.',
        'Wir bauen Abläufe, die im Umfang des gesamten Katalogs erzeugen und dabei in Ihrem Ton, Ihrer Terminologie und der Sprache bleiben, in der Ihre Kunden tatsächlich kaufen.',
        'Für uns ist das keine Theorie. Es ist das Produkt, das wir selbst betreiben.',
      ],
    },
    {
      slug: 'video',
      title: 'Vertontes Video und Lokalisierung',
      short: 'Ein Film, vertont und untertitelt für jeden Markt, in dem Sie verkaufen.',
      body: [
        'Das Material ist der teure Teil, und die meisten Unternehmen haben bereits welches — einen Produktfilm, einen Rundgang, ein Reel, das letztes Jahr jemand geschnitten hat. Was fehlt, ist derselbe Film, der zu jedem Markt spricht.',
        'Wir schreiben die Erzählung, vertonen sie, mischen sie gegen den Ton, den das Material bereits trägt, und liefern Untertitel im Format, das jede Plattform wirklich akzeptiert.',
        'Aus demselben Skript werden so viele Sprachfassungen, wie Sie brauchen — aus einem Produktionsdurchgang statt aus einem Dreh pro Markt.',
      ],
    },
    {
      slug: 'architecture',
      title: 'Architektur, Design und Wartung',
      short: 'Ein Team verantwortet den gesamten Stack — auch nach dem Start.',
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
      ],
      result: [
        'Kapazität: 12.000 Beschreibungen in 9 Tagen — im Schnitt 65 Sekunden pro Text',
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
        'KI-Dokumentenverarbeitung für kleine Unternehmen — Rechnungen und Belege werden extrahiert, geprüft und mit einer Freigabe zur Aktion.',
      problem:
        'Jede Rechnung und jeder Beleg, der in einem kleinen Unternehmen ankommt, ist eine kleine Pflicht: lesen, entscheiden, was als Nächstes passiert, dann nicht vergessen, es auch zu tun. Multipliziert mit hundert Dokumenten im Monat wird aus der Pflicht ein eigener Job.',
      built: [
        'KI-Extraktions-Pipeline (Claude), die Rechnungen und Belege in strukturierte, prüfbare Daten verwandelt — zwei echte Dokumenttypen, keine Demo eines einzigen',
        'Eine Action Engine, die den nächsten Schritt vorschlägt — eine Zahlungserinnerung, eine Buchhaltungsaufgabe — und ihn erst verschickt, wenn ein Mensch zustimmt, mit echtem E-Mail-Versand hinter jeder freigegebenen Erinnerung',
        'KI-Kostenerfassung pro Aufruf und nutzungsbasierte Abrechnung von Anfang an eingebaut, damit das Produkt seine eigene Marge kennt, bevor der erste Kunde es tut',
        'Ein Sicherheits-Audit, das die meisten Teams ganz auslassen: jede Datenbankfunktion mit erhöhten Rechten geprüft, Berechtigungen geschlossen, von denen niemand mehr wusste, dass sie offen standen',
      ],
      lesson:
        'Der KI-Aufruf, der ein Dokument liest, ist die leichte Hälfte. Vertrauen verdient man mit allem drumherum — dem Prüfschritt, der nie übersprungen wird, den Kosten, die sich belegen lassen, dem Zugriff, der nachweislich abgeschlossen ist.',
    },
  ],

  pillars: [
    ['Direkt', 'Keine Zwischenhändler, keine Projektleiter, die Ihre Fragen an jemand anderen weitergeben.'],
    ['Konkret', 'Eine klare Vereinbarung und eine definierte Lieferung, keine Präsentation darüber.'],
    ['Messbar', 'Sie wissen, was gebaut wird, was es kostet und wann es fertig ist.'],
  ],
};

export default de;
