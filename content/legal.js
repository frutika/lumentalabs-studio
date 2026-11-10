/**
 * The security page (three languages) and the privacy notice in Croatian and
 * German. The English privacy notice stays in app/(en)/privacy/page.jsx, where
 * it was written; these two are its translations, section for section, and
 * must change together with it.
 *
 * Paragraphs may carry [text](href) links and these tokens, filled in by
 * DocPage from site.config so a fact is never typed twice: {email}, {entity},
 * {address}, {oib}, {domain}, {founder}.
 *
 * Every figure on the security page describes how the server is actually
 * configured (14-day backup and log retention, nightly backups, key-only SSH,
 * provider regions). Change the configuration and this file in the same breath.
 */

export const SECURITY_UPDATED = '2026-11-10';

export const security = {
  hr: {
    meta: {
      title: 'Sigurnost i podaci',
      description:
        'Gdje se čuvaju podaci klijenata, koliko dugo, tko ih obrađuje i što se događa kad suradnja završi. Poslužitelj u Frankfurtu, noćne sigurnosne kopije, ugovor o obradi.',
    },
    eyebrow: 'Sigurnost i podaci',
    h1: 'Gdje su vaši podaci i tko ih vidi',
    lede:
      'Kad gradimo ili održavamo sustav za vas, kroz njega prolaze vaši podaci i podaci vaših korisnika. Ovdje piše gdje se čuvaju, koliko dugo, tko ih obrađuje i što se s njima događa kad suradnja završi.',
    updatedLabel: 'Zadnja izmjena',
    sections: [
      {
        id: 'opseg',
        h2: 'Na što se ovo odnosi',
        paragraphs: [
          'Na sustave koje radimo i održavamo za klijente: web stranice, aplikacije, automatizacije i integracije. U tom odnosu vi ste voditelj obrade, a mi izvršitelj: podatke obrađujemo samo po vašim uputama i samo za posao koji smo dogovorili.',
          'Što prikuplja sama ova web stranica piše u [pravilima privatnosti](/hr/privacy). Naši vlastiti proizvodi imaju svoja pravila, na svojim adresama.',
        ],
      },
      {
        id: 'lokacija',
        h2: 'Gdje se podaci čuvaju',
        paragraphs: ['Postoje dva načina, a birate vi, prije početka.'],
        list: [
          'Na našem poslužitelju. Nalazi se u podatkovnom centru u Frankfurtu, u Njemačkoj, kod pružatelja Hostinger. Sigurnosne kopije spremaju se odvojeno, u europskoj regiji Cloudflareove pohrane R2.',
          'Na vašoj infrastrukturi. Sustav postavljamo na vaš poslužitelj ili vaš račun u oblaku. Podaci tada ne napuštaju vaše okruženje, a mi radimo s pristupom koji nam date i koji u svakom trenutku možete povući.',
        ],
        after: [
          'Ako neki dio projekta traži pružatelja izvan Europske unije, to piše u ponudi prije nego što krenemo, i bez vašeg pisanog pristanka se ne uvodi. U praksi se to tiče AI obrade i slanja e-pošte, opisanih niže.',
        ],
      },
      {
        id: 'rokovi',
        h2: 'Koliko dugo se čuvaju',
        table: {
          head: ['Podatak', 'Rok čuvanja'],
          rows: [
            ['Podaci u vašem sustavu', 'Dok traje ugovor, ili kraće ako tako odredite. Rokove brisanja po vrsti podatka možemo ugraditi u sam sustav.'],
            ['Sigurnosne kopije', '14 dana. Starije kopije brišu se automatski, s poslužitelja i s odvojene pohrane.'],
            ['Zapisi web poslužitelja (IP adresa, vrijeme, tražena stranica)', '14 dana, zatim se brišu automatski.'],
            ['Pristupni podaci koje ste nam dali', 'Do kraja suradnje. Tada ih brišemo s naše strane.'],
            ['Prepiska, ponude i ugovori', 'Dok traje suradnja i onoliko dugo koliko nalažu porezni i računovodstveni propisi.'],
          ],
        },
      },
      {
        id: 'kraj-suradnje',
        h2: 'Kad suradnja završi',
        paragraphs: [
          'Podatke vam predajemo u obliku koji se može otvoriti bez nas: izvoz baze i datoteke, uz izvorni kod ako je tako ugovoreno.',
          'Nakon vaše potvrde da ste ih preuzeli brišemo ih s naših sustava u roku od 30 dana. Iz sigurnosnih kopija nestaju najkasnije 14 dana nakon toga. Brisanje na zahtjev potvrđujemo pisano.',
        ],
      },
      {
        id: 'obrada',
        h2: 'Tko obrađuje podatke',
        paragraphs: [
          'Lumenta Labs je obrt jedne osobe. Pristup produkcijskim sustavima i podacima ima {founder}, i nitko drugi: nema podizvođača ni vanjskih suradnika.',
          'Za infrastrukturu koristimo pružatelje s popisa. Koji od njih sudjeluju u vašem projektu piše u ugovoru o obradi, a novog ne uvodimo bez najave.',
        ],
        table: {
          head: ['Pružatelj', 'Čemu služi', 'Gdje obrađuje'],
          rows: [
            ['Hostinger', 'Poslužitelj na kojem rade sustavi koje hostamo mi', 'Frankfurt, Njemačka'],
            ['Cloudflare (R2)', 'Sigurnosne kopije izvan poslužitelja', 'Europa'],
            ['Supabase', 'Baza podataka i prijava korisnika, u aplikacijama koje ih koriste', 'Regija se bira pri postavljanju; za klijentske projekte unutar EU-a'],
            ['Resend', 'Slanje e-pošte iz aplikacije (potvrde, obavijesti)', 'SAD'],
            ['Anthropic', 'AI obrada teksta i dokumenata, samo u projektima koji je koriste', 'SAD'],
            ['Microsoft Azure', 'Sintetizirani glas za naraciju videa', 'Sjeverna Europa (Irska)'],
            ['GitHub', 'Izvorni kod u privatnim repozitorijima. Podaci iz vašeg sustava tamo ne idu.', 'SAD'],
          ],
        },
      },
      {
        id: 'ai',
        h2: 'AI i vaši podaci',
        paragraphs: [
          'AI koristimo samo u projektima u kojima je to dogovoreno, i samo na podacima koji su za taj posao potrebni. Koji podaci idu modelu piše u ponudi.',
          'Modele pozivamo preko poslovnog API-ja tvrtke Anthropic. Prema njihovim uvjetima za poslovne korisnike, podaci poslani preko API-ja ne koriste se za treniranje modela. Obrada se odvija u SAD-u, a prijenos je uređen ugovorom o obradi podataka sa standardnim ugovornim klauzulama.',
          'Ako vaši podaci ne smiju napustiti Europsku uniju, recite to na početku. Tada AI dio radimo preko pružatelja koji obrađuje unutar EU-a, ili ga ne radimo.',
          'Rezultat AI obrade ne objavljuje se sam od sebe: odobrenje ostaje kod vas.',
        ],
      },
      {
        id: 'zastita',
        h2: 'Kako su podaci zaštićeni',
        list: [
          'Sav promet između korisnika i sustava je šifriran (HTTPS).',
          'Na poslužitelju su s interneta dostupni samo web i SSH. Prijava na SSH moguća je samo ključem; lozinke su isključene.',
          'Sigurnosne zakrpe operativnog sustava instaliraju se automatski.',
          'Lozinke i API ključevi ne stoje u kodu. Čuvaju se odvojeno i mijenjaju se kad postoji sumnja da su otkriveni.',
          'Svaka izmjena koda ide kroz zaseban zahtjev za izmjenu, pa ostaje zapisano što se promijenilo, kada i zašto.',
          'U aplikacijama s više korisnika pravo pristupa provjerava se na poslužitelju i u bazi, a ne samo u sučelju.',
        ],
        after: [
          'Nemamo certifikat ISO 27001 ni SOC 2. Ono što radimo opisano je ovdje, a na upitnik o sigurnosti odgovaramo pisano.',
        ],
      },
      {
        id: 'kopije',
        h2: 'Sigurnosne kopije i povrat',
        paragraphs: [
          'Baze i datoteke sustava koje hostamo kopiraju se svake noći. Svaka kopija prolazi provjeru ispravnosti, a zatim se sprema i izvan poslužitelja, pa kvar poslužitelja ne znači gubitak podataka.',
          'Svako jutro automatska provjera potvrđuje da je noćna kopija nastala; ako nije, stiže nam upozorenje. Povrat isprobavamo na stvarnim kopijama, jer kopija koju nitko nije vratio nije dokaz.',
          'U najgorem slučaju gubi se do jednog dana podataka. Ako vaš sustav traži manje, to se dogovara i ugrađuje zasebno.',
        ],
      },
      {
        id: 'incident',
        h2: 'Ako dođe do incidenta',
        paragraphs: [
          'Ako saznamo za povredu koja se tiče vaših podataka, javljamo vam bez odgode, a najkasnije u roku od 48 sati. U obavijesti piše što se dogodilo, koji su podaci zahvaćeni i što smo poduzeli.',
          'Kao voditelj obrade vi odlučujete treba li povredu prijaviti Agenciji za zaštitu osobnih podataka (AZOP), za što propis daje 72 sata. Dajemo vam podatke koji su za tu prijavu potrebni.',
        ],
      },
      {
        id: 'ugovori',
        h2: 'Ugovori i dokumenti',
        list: [
          'Ugovor o obradi podataka prema članku 28. GDPR-a potpisujemo prije nego što dobijemo pristup osobnim podacima.',
          'Ugovor o povjerljivosti (NDA) potpisujemo na zahtjev, i prije prvog razgovora o detaljima.',
          'Popis pružatelja koji sudjeluju u vašem projektu sastavni je dio ugovora.',
          'Na upitnike o sigurnosti i zaštiti podataka u postupcima nabave odgovaramo pisano.',
        ],
      },
      {
        id: 'pitanja',
        h2: 'Pitanja',
        paragraphs: [
          'Ako ovdje nema odgovora na vaše pitanje, pišite na {email}. Odgovara osoba koja sustav postavlja i održava.',
        ],
      },
    ],
    seeAlso: [
      ['Pravila privatnosti', '/hr/privacy'],
      ['Održavanje i hosting', '/hr/services/odrzavanje-i-hosting-web-aplikacija'],
      ['Kontakt', '/hr/contact'],
    ],
  },

  en: {
    meta: {
      title: 'Security and data',
      description:
        'Where client data is stored, for how long, who processes it and what happens when the work ends. A server in Frankfurt, nightly backups, a data processing agreement.',
    },
    eyebrow: 'Security and data',
    h1: 'Where your data is and who sees it',
    lede:
      'When we build or maintain a system for you, your data and your users’ data pass through it. This page says where it is stored, for how long, who processes it and what happens to it when the work ends.',
    updatedLabel: 'Last updated',
    sections: [
      {
        id: 'scope',
        h2: 'What this covers',
        paragraphs: [
          'The systems we build and maintain for clients: websites, applications, automations and integrations. In that relationship you are the controller and we are the processor: we process data only on your instructions and only for the work we agreed.',
          'What this website itself collects is in the [privacy notice](/privacy). Our own products have their own notices, at their own addresses.',
        ],
      },
      {
        id: 'location',
        h2: 'Where data is stored',
        paragraphs: ['There are two ways, and you choose before we start.'],
        list: [
          'On our server. It is in a data centre in Frankfurt, Germany, with Hostinger. Backups are kept separately, in the European region of Cloudflare’s R2 storage.',
          'On your infrastructure. We deploy the system to your server or your cloud account. The data then never leaves your environment, and we work with access that you grant and can withdraw at any time.',
        ],
        after: [
          'If any part of a project needs a provider outside the European Union, the proposal says so before we start, and it is not introduced without your written consent. In practice this concerns AI processing and sending email, both described below.',
        ],
      },
      {
        id: 'retention',
        h2: 'How long it is kept',
        table: {
          head: ['Data', 'Retention'],
          rows: [
            ['Data in your system', 'For the length of the contract, or less if you say so. Deletion periods per type of data can be built into the system itself.'],
            ['Backups', '14 days. Older copies are deleted automatically, from the server and from the separate storage.'],
            ['Web server logs (IP address, time, page requested)', '14 days, then deleted automatically.'],
            ['Credentials you gave us', 'Until the work ends. We then delete them on our side.'],
            ['Correspondence, proposals and contracts', 'For the length of the work and for as long as tax and accounting rules require.'],
          ],
        },
      },
      {
        id: 'end-of-work',
        h2: 'When the work ends',
        paragraphs: [
          'We hand the data over in a form you can open without us: an export of the database and the files, with the source code if the contract says so.',
          'Once you confirm you have it, we delete it from our systems within 30 days. It leaves the backups no later than 14 days after that. On request we confirm the deletion in writing.',
        ],
      },
      {
        id: 'processing',
        h2: 'Who processes the data',
        paragraphs: [
          'Lumenta Labs is a one-person business. {founder} has access to production systems and data, and nobody else does: there are no subcontractors and no outside collaborators.',
          'For infrastructure we use the providers listed here. Which of them take part in your project is written in the data processing agreement, and we do not add a new one without notice.',
        ],
        table: {
          head: ['Provider', 'What it is for', 'Where it processes'],
          rows: [
            ['Hostinger', 'The server that runs the systems we host', 'Frankfurt, Germany'],
            ['Cloudflare (R2)', 'Off-server backups', 'Europe'],
            ['Supabase', 'Database and user sign-in, in applications that use them', 'Region chosen at setup; inside the EU for client projects'],
            ['Resend', 'Email sent by the application (confirmations, notifications)', 'USA'],
            ['Anthropic', 'AI processing of text and documents, only in projects that use it', 'USA'],
            ['Microsoft Azure', 'Synthesised voice for video narration', 'North Europe (Ireland)'],
            ['GitHub', 'Source code in private repositories. Data from your system does not go there.', 'USA'],
          ],
        },
      },
      {
        id: 'ai',
        h2: 'AI and your data',
        paragraphs: [
          'We use AI only in projects where that was agreed, and only on the data that work needs. Which data goes to the model is written in the proposal.',
          'We call the models through Anthropic’s commercial API. Under their terms for business customers, data sent through the API is not used to train models. Processing takes place in the USA, and the transfer is governed by a data processing agreement with standard contractual clauses.',
          'If your data must not leave the European Union, say so at the start. We then do the AI part through a provider that processes inside the EU, or we do not do it.',
          'The result of AI processing is never published by itself: approval stays with you.',
        ],
      },
      {
        id: 'protection',
        h2: 'How data is protected',
        list: [
          'All traffic between users and the system is encrypted (HTTPS).',
          'Only web and SSH are reachable from the internet on the server. SSH sign-in works with a key only; passwords are switched off.',
          'Operating system security patches are installed automatically.',
          'Passwords and API keys are not in the code. They are kept separately and changed whenever there is reason to think they were exposed.',
          'Every code change goes through its own change request, so what changed, when and why stays on record.',
          'In applications with several users, access rights are checked on the server and in the database, not only in the interface.',
        ],
        after: [
          'We hold no ISO 27001 or SOC 2 certificate. What we do is described here, and we answer security questionnaires in writing.',
        ],
      },
      {
        id: 'backups',
        h2: 'Backups and restore',
        paragraphs: [
          'The databases and files of the systems we host are copied every night. Each copy passes an integrity check and is then also stored off the server, so a server failure does not mean lost data.',
          'Every morning an automatic check confirms that the nightly copy was made; if it was not, we get an alert. We test restoring from real copies, because a backup nobody has restored proves nothing.',
          'In the worst case up to one day of data is lost. If your system needs less than that, it is agreed and built separately.',
        ],
      },
      {
        id: 'incident',
        h2: 'If there is an incident',
        paragraphs: [
          'If we learn of a breach that concerns your data, we tell you without delay, and within 48 hours at the latest. The notice says what happened, which data is affected and what we have done.',
          'As the controller you decide whether the breach has to be reported to the supervisory authority, for which the regulation allows 72 hours. We give you the information that report needs.',
        ],
      },
      {
        id: 'contracts',
        h2: 'Contracts and documents',
        list: [
          'We sign a data processing agreement under Article 28 GDPR before we get access to personal data.',
          'We sign a non-disclosure agreement on request, including before the first conversation about details.',
          'The list of providers that take part in your project is part of the contract.',
          'We answer security and data protection questionnaires in procurement procedures in writing.',
        ],
      },
      {
        id: 'questions',
        h2: 'Questions',
        paragraphs: [
          'If your question is not answered here, write to {email}. The answer comes from the person who sets up and maintains the system.',
        ],
      },
    ],
    seeAlso: [
      ['Privacy notice', '/privacy'],
      ['Hosting and maintenance', '/services/managed-hosting-and-maintenance'],
      ['Contact', '/contact'],
    ],
  },

  de: {
    meta: {
      title: 'Sicherheit und Daten',
      description:
        'Wo Kundendaten gespeichert werden, wie lange, wer sie verarbeitet und was am Ende der Zusammenarbeit geschieht. Server in Frankfurt, nächtliche Backups, Auftragsverarbeitungsvertrag.',
    },
    eyebrow: 'Sicherheit und Daten',
    h1: 'Wo Ihre Daten liegen und wer sie sieht',
    lede:
      'Wenn wir ein System für Sie bauen oder betreiben, laufen Ihre Daten und die Ihrer Nutzer hindurch. Hier steht, wo sie gespeichert werden, wie lange, wer sie verarbeitet und was am Ende der Zusammenarbeit mit ihnen geschieht.',
    updatedLabel: 'Zuletzt geändert',
    sections: [
      {
        id: 'geltung',
        h2: 'Worauf sich das bezieht',
        paragraphs: [
          'Auf die Systeme, die wir für Kunden bauen und betreiben: Websites, Anwendungen, Automatisierungen und Integrationen. In diesem Verhältnis sind Sie der Verantwortliche und wir der Auftragsverarbeiter: Wir verarbeiten Daten nur nach Ihrer Weisung und nur für die vereinbarte Arbeit.',
          'Was diese Website selbst erhebt, steht in der [Datenschutzerklärung](/de/privacy). Unsere eigenen Produkte haben eigene Erklärungen unter ihren eigenen Adressen.',
        ],
      },
      {
        id: 'speicherort',
        h2: 'Wo die Daten gespeichert werden',
        paragraphs: ['Es gibt zwei Wege, und Sie wählen vor dem Start.'],
        list: [
          'Auf unserem Server. Er steht in einem Rechenzentrum in Frankfurt am Main beim Anbieter Hostinger. Backups liegen getrennt davon in der europäischen Region des Cloudflare-Speichers R2.',
          'Auf Ihrer Infrastruktur. Wir richten das System auf Ihrem Server oder in Ihrem Cloud-Konto ein. Die Daten verlassen Ihre Umgebung dann nicht, und wir arbeiten mit einem Zugang, den Sie erteilen und jederzeit entziehen können.',
        ],
        after: [
          'Braucht ein Teil des Projekts einen Anbieter außerhalb der Europäischen Union, steht das im Angebot, bevor wir beginnen, und er wird nicht ohne Ihre schriftliche Zustimmung eingesetzt. In der Praxis betrifft das die KI-Verarbeitung und den E-Mail-Versand, beide unten beschrieben.',
        ],
      },
      {
        id: 'aufbewahrung',
        h2: 'Wie lange sie aufbewahrt werden',
        table: {
          head: ['Daten', 'Aufbewahrung'],
          rows: [
            ['Daten in Ihrem System', 'Für die Dauer des Vertrags oder kürzer, wenn Sie es so festlegen. Löschfristen je Datenart können wir in das System selbst einbauen.'],
            ['Backups', '14 Tage. Ältere Kopien werden automatisch gelöscht, auf dem Server und im getrennten Speicher.'],
            ['Webserver-Protokolle (IP-Adresse, Zeitpunkt, aufgerufene Seite)', '14 Tage, danach automatische Löschung.'],
            ['Zugangsdaten, die Sie uns gegeben haben', 'Bis zum Ende der Zusammenarbeit. Dann löschen wir sie auf unserer Seite.'],
            ['Korrespondenz, Angebote und Verträge', 'Für die Dauer der Zusammenarbeit und so lange, wie Steuer- und Buchführungsvorschriften es verlangen.'],
          ],
        },
      },
      {
        id: 'ende',
        h2: 'Wenn die Zusammenarbeit endet',
        paragraphs: [
          'Wir übergeben die Daten in einer Form, die Sie ohne uns öffnen können: einen Export der Datenbank und der Dateien, dazu den Quellcode, wenn es so vereinbart ist.',
          'Sobald Sie den Erhalt bestätigen, löschen wir sie innerhalb von 30 Tagen von unseren Systemen. Aus den Backups verschwinden sie spätestens 14 Tage danach. Auf Wunsch bestätigen wir die Löschung schriftlich.',
        ],
      },
      {
        id: 'verarbeitung',
        h2: 'Wer die Daten verarbeitet',
        paragraphs: [
          'Lumenta Labs ist ein Ein-Personen-Unternehmen. Zugang zu Produktivsystemen und Daten hat {founder}, und sonst niemand: Es gibt keine Subunternehmer und keine externen Mitarbeiter.',
          'Für die Infrastruktur nutzen wir die hier aufgeführten Anbieter. Welche davon an Ihrem Projekt beteiligt sind, steht im Auftragsverarbeitungsvertrag, und einen neuen setzen wir nicht ohne Ankündigung ein.',
        ],
        table: {
          head: ['Anbieter', 'Wofür', 'Ort der Verarbeitung'],
          rows: [
            ['Hostinger', 'Server, auf dem die von uns gehosteten Systeme laufen', 'Frankfurt am Main, Deutschland'],
            ['Cloudflare (R2)', 'Backups außerhalb des Servers', 'Europa'],
            ['Supabase', 'Datenbank und Nutzeranmeldung, in Anwendungen, die sie verwenden', 'Region wird bei der Einrichtung gewählt; für Kundenprojekte innerhalb der EU'],
            ['Resend', 'E-Mail-Versand aus der Anwendung (Bestätigungen, Benachrichtigungen)', 'USA'],
            ['Anthropic', 'KI-Verarbeitung von Texten und Dokumenten, nur in Projekten, die sie nutzen', 'USA'],
            ['Microsoft Azure', 'Synthetische Stimme für Videovertonung', 'Nordeuropa (Irland)'],
            ['GitHub', 'Quellcode in privaten Repositories. Daten aus Ihrem System gelangen nicht dorthin.', 'USA'],
          ],
        },
      },
      {
        id: 'ki',
        h2: 'KI und Ihre Daten',
        paragraphs: [
          'KI setzen wir nur in Projekten ein, in denen das vereinbart ist, und nur für die Daten, die diese Arbeit braucht. Welche Daten an das Modell gehen, steht im Angebot.',
          'Die Modelle rufen wir über die kommerzielle API von Anthropic auf. Nach deren Bedingungen für Geschäftskunden werden über die API gesendete Daten nicht zum Training von Modellen verwendet. Die Verarbeitung findet in den USA statt; die Übermittlung ist durch einen Auftragsverarbeitungsvertrag mit Standardvertragsklauseln geregelt.',
          'Dürfen Ihre Daten die Europäische Union nicht verlassen, sagen Sie es zu Beginn. Dann setzen wir den KI-Teil über einen Anbieter um, der innerhalb der EU verarbeitet, oder wir setzen ihn nicht um.',
          'Das Ergebnis einer KI-Verarbeitung wird nie von selbst veröffentlicht: Die Freigabe bleibt bei Ihnen.',
        ],
      },
      {
        id: 'schutz',
        h2: 'Wie die Daten geschützt sind',
        list: [
          'Der gesamte Verkehr zwischen Nutzern und System ist verschlüsselt (HTTPS).',
          'Auf dem Server sind aus dem Internet nur Web und SSH erreichbar. Die SSH-Anmeldung funktioniert nur mit Schlüssel; Passwörter sind abgeschaltet.',
          'Sicherheitsupdates des Betriebssystems werden automatisch installiert.',
          'Passwörter und API-Schlüssel stehen nicht im Code. Sie werden getrennt aufbewahrt und geändert, sobald Grund zur Annahme besteht, dass sie offengelegt wurden.',
          'Jede Codeänderung läuft über einen eigenen Änderungsantrag, sodass festgehalten bleibt, was sich wann und warum geändert hat.',
          'In Anwendungen mit mehreren Nutzern werden Zugriffsrechte auf dem Server und in der Datenbank geprüft, nicht nur in der Oberfläche.',
        ],
        after: [
          'Wir haben kein ISO-27001- und kein SOC-2-Zertifikat. Was wir tun, ist hier beschrieben, und Sicherheitsfragebögen beantworten wir schriftlich.',
        ],
      },
      {
        id: 'backups',
        h2: 'Backups und Wiederherstellung',
        paragraphs: [
          'Datenbanken und Dateien der von uns gehosteten Systeme werden jede Nacht kopiert. Jede Kopie durchläuft eine Integritätsprüfung und wird dann auch außerhalb des Servers gespeichert, sodass ein Serverausfall keinen Datenverlust bedeutet.',
          'Jeden Morgen bestätigt eine automatische Prüfung, dass die nächtliche Kopie entstanden ist; wenn nicht, erhalten wir eine Warnung. Die Wiederherstellung testen wir an echten Kopien, denn ein Backup, das niemand zurückgespielt hat, beweist nichts.',
          'Im schlimmsten Fall gehen Daten von bis zu einem Tag verloren. Braucht Ihr System weniger, wird das gesondert vereinbart und umgesetzt.',
        ],
      },
      {
        id: 'vorfall',
        h2: 'Wenn es zu einem Vorfall kommt',
        paragraphs: [
          'Erfahren wir von einer Verletzung, die Ihre Daten betrifft, informieren wir Sie unverzüglich, spätestens innerhalb von 48 Stunden. In der Mitteilung steht, was geschehen ist, welche Daten betroffen sind und was wir unternommen haben.',
          'Als Verantwortlicher entscheiden Sie, ob die Verletzung der Aufsichtsbehörde zu melden ist, wofür die Verordnung 72 Stunden vorsieht. Wir geben Ihnen die Angaben, die diese Meldung braucht.',
        ],
      },
      {
        id: 'vertraege',
        h2: 'Verträge und Unterlagen',
        list: [
          'Einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO schließen wir, bevor wir Zugang zu personenbezogenen Daten erhalten.',
          'Eine Vertraulichkeitsvereinbarung (NDA) unterzeichnen wir auf Wunsch, auch vor dem ersten Gespräch über Details.',
          'Die Liste der an Ihrem Projekt beteiligten Anbieter ist Bestandteil des Vertrags.',
          'Fragebögen zu Sicherheit und Datenschutz in Vergabeverfahren beantworten wir schriftlich.',
        ],
      },
      {
        id: 'fragen',
        h2: 'Fragen',
        paragraphs: [
          'Wenn Ihre Frage hier nicht beantwortet ist, schreiben Sie an {email}. Es antwortet die Person, die das System einrichtet und betreibt.',
        ],
      },
    ],
    seeAlso: [
      ['Datenschutzerklärung', '/de/privacy'],
      ['Hosting und Wartung', '/de/services/hosting-und-wartung'],
      ['Kontakt', '/de/contact'],
    ],
  },
};

/**
 * The privacy notice, translated. Same sections in the same order as the
 * English page; the date shown is legal.updated, shared by all three.
 */
export const privacy = {
  hr: {
    meta: {
      title: 'Pravila privatnosti',
      description: 'Što ova stranica prikuplja, što ne prikuplja i koja prava imate.',
    },
    eyebrow: 'Pravno',
    h1: 'Pravila privatnosti',
    lede:
      'Ova stranica ne postavlja kolačiće, nema analitiku i ne učitava ništa od trećih strana. Ono malo što se obrađuje opisano je ovdje u cijelosti.',
    updatedLabel: 'Zadnja izmjena',
    sections: [
      {
        h2: 'Tko je odgovoran',
        paragraphs: [
          '{entity}, {address}, OIB {oib}, voditelj je obrade svih osobnih podataka opisanih ovdje. Možete nam pisati na {email}.',
        ],
      },
      {
        h2: 'Što ova stranica ne radi',
        paragraphs: [
          'Nema analitike, oglašavanja, piksela za praćenje, fontova s tuđih domena ni dodataka društvenih mreža. Svaka datoteka koju stranica učita dolazi s domene {domain}. Kontakt obrazac jedino je mjesto na kojem stranica u vaše ime komunicira s drugom uslugom, i opisan je u cijelosti.',
        ],
      },
      {
        h2: 'Jedina iznimka: video',
        paragraphs: [
          'Na početnoj stranici nudi se uvodni film smješten na YouTubeu. Namjerno ga ne ugrađujemo na uobičajen način, jer se obična ugradnja javlja Googleu čim se stranica otvori. Prije klika vidite samo sliku poslanu s domene {domain}, i ništa drugo.',
          'Tek kad pritisnete reprodukciju učitava se player, i to s adrese youtube-nocookie.com, YouTubeova načina rada s pojačanom privatnošću. Od tog trenutka YouTube prima vašu IP adresu i može spremati podatke na vaš uređaj prema [Googleovim pravilima privatnosti](https://policies.google.com/privacy), na koja ne utječemo. Ako reprodukciju ne pokrenete, ništa se od toga ne događa.',
        ],
      },
      {
        h2: 'Što se neizbježno obrađuje',
        paragraphs: [
          'Kao i svaku web stranicu, ovu poslužuje web poslužitelj koji vodi zapise pristupa. Oni obično sadrže vašu IP adresu, vrijeme zahtjeva, traženu stranicu i oznaku vašeg preglednika. Ne koristimo ih za izradu vašeg profila; postoje da bi se stranica mogla održavati, ispravljati i braniti od zlouporabe.',
          'Pravna je osnova naš legitimni interes da stranica radi i bude sigurna (članak 6. stavak 1. točka (f) GDPR-a). Zapise drži naš pružatelj hostinga i čuva ih onoliko dugo koliko taj pružatelj čuva zapise poslužitelja.',
        ],
      },
      {
        h2: 'Ako nam pišete ili koristite kontakt obrazac',
        paragraphs: [
          'Kad nam pišete, e-poštom ili preko kontakt obrasca, primamo vaše ime, adresu e-pošte, poruku koju upišete i, na obrascu, paket koji ste odabrali ako ste ga odabrali. Koristimo ih da vam odgovorimo i, ako iz toga nastane suradnja, da je provedemo. Osnova je vaš zahtjev i radnje prije sklapanja ugovora (članak 6. stavak 1. točka (b) GDPR-a) ili naš legitimni interes da odgovaramo na upite.',
          'Sam obrazac ne sprema ništa na vaš uređaj: ni kolačić ni lokalnu pohranu. Kad pritisnete slanje, šalje ono što ste upisali i podatak o tome gdje je vaš posjet počeo: prvu stranicu koju ste ovdje otvorili (uključujući oznaku kampanje u adresi, ako postoji), stranicu na kojoj ste bili neposredno prije kontakta i naziv web stranice koja vas je ovamo uputila, ako postoji. To se drži samo u memoriji stranice i govori nam koje stranice i kanali dovode do upita; putuje s vašom porukom i nikad se ne koristi za praćenje drugdje. Slanje je ograničeno po IP adresi radi sprečavanja zlouporabe, a skriveno polje namijenjeno hvatanju automatskih botova odbacuje se bez čitanja ako ga stvarni posjetitelj ne dotakne.',
          'Prepisku čuvamo dok je važna za suradnju koja traje ili je moguća, a brišemo je kad to više nije.',
        ],
      },
      {
        h2: 'Tko još sudjeluje',
        paragraphs: [
          'Kontakt obrazac ne sprema se ni u kakvu bazu: vaša poruka isporučuje se kao jedna poruka e-pošte u naš sandučić preko našeg pružatelja usluge slanja e-pošte i tamo se čuva kao svaka druga pošta koju primimo. Naš pružatelj hostinga poslužuje stranicu i vodi gore opisane zapise pristupa. Svaki od njih djeluje kao naš izvršitelj obrade na temelju ugovora koji ograničava što smije raditi s vašim podacima. Osobne podatke ne prodajemo i ne dijelimo ni s kim drugim, i ne prenosimo ih namjerno izvan Europskog gospodarskog prostora.',
        ],
      },
      {
        h2: 'Poveznice na naše druge projekte',
        paragraphs: [
          'Stranice pod [Radovima](/hr/work) vode na zasebne stranice koje vodimo. One imaju vlastita pravila privatnosti i vlastitu obradu; ova pravila na njih se ne odnose.',
        ],
      },
      {
        h2: 'Vaša prava',
        paragraphs: [
          'Možete zatražiti pristup svojim podacima, njihov ispravak ili brisanje, ograničenje obrade ili prenosivost, i možete prigovoriti obradi koja se temelji na legitimnom interesu. Pišite na {email} i odgovorit ćemo u zakonskom roku.',
          'Ako smatrate da smo s vašim podacima postupili loše, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP) ili nadzornom tijelu u mjestu u kojem živite.',
        ],
      },
      {
        h2: 'Izmjene',
        paragraphs: [
          'Ako se ova pravila promijene, s njima se mijenja i datum na vrhu. Nema popisa adresa koji bismo obavijestili, jer ga ne vodimo.',
        ],
      },
    ],
    seeAlso: [
      ['Sigurnost i podaci', '/hr/security'],
      ['Cookies (EN)', '/cookies'],
      ['Terms (EN)', '/terms'],
    ],
  },

  de: {
    meta: {
      title: 'Datenschutzerklärung',
      description: 'Was diese Website erhebt, was sie nicht erhebt und welche Rechte Sie haben.',
    },
    eyebrow: 'Rechtliches',
    h1: 'Datenschutzerklärung',
    lede:
      'Diese Website setzt keine Cookies, betreibt keine Analyse und lädt nichts von Dritten. Das Wenige, das verarbeitet wird, ist hier vollständig beschrieben.',
    updatedLabel: 'Zuletzt geändert',
    sections: [
      {
        h2: 'Wer verantwortlich ist',
        paragraphs: [
          '{entity}, {address}, OIB {oib}, ist Verantwortlicher für alle hier beschriebenen personenbezogenen Daten. Sie erreichen uns unter {email}.',
        ],
      },
      {
        h2: 'Was diese Website nicht tut',
        paragraphs: [
          'Es gibt keine Analyse, keine Werbung, keine Tracking-Pixel, keine Schriften von fremden Domains und keine Social-Media-Widgets. Jede Datei, die die Seite lädt, kommt von {domain} selbst. Das Kontaktformular ist die einzige Stelle, an der die Website in Ihrem Namen mit einem anderen Dienst spricht, und es ist vollständig beschrieben.',
        ],
      },
      {
        h2: 'Die eine Ausnahme: das Video',
        paragraphs: [
          'Die Startseite bietet einen Einführungsfilm an, der bei YouTube liegt. Wir binden ihn bewusst nicht auf die übliche Weise ein, weil eine normale Einbettung Google kontaktiert, sobald die Seite geöffnet wird. Vor dem Klick sehen Sie nur ein Standbild, das von {domain} ausgeliefert wird, und sonst nichts.',
          'Erst wenn Sie auf Abspielen drücken, wird der Player geladen, und zwar von youtube-nocookie.com, dem erweiterten Datenschutzmodus von YouTube. Ab diesem Moment erhält YouTube Ihre IP-Adresse und kann Daten auf Ihrem Gerät speichern, gemäß der [Datenschutzerklärung von Google](https://policies.google.com/privacy), auf die wir keinen Einfluss haben. Wenn Sie nie auf Abspielen drücken, geschieht nichts davon.',
        ],
      },
      {
        h2: 'Was unvermeidlich verarbeitet wird',
        paragraphs: [
          'Wie jede Website wird auch diese von einem Webserver ausgeliefert, der Zugriffsprotokolle führt. Sie enthalten in der Regel Ihre IP-Adresse, den Zeitpunkt der Anfrage, die angeforderte Seite und die Kennung Ihres Browsers. Wir erstellen daraus kein Profil von Ihnen; die Protokolle dienen dazu, die Website zu betreiben, Fehler zu beheben und sie gegen Missbrauch zu schützen.',
          'Rechtsgrundlage ist unser berechtigtes Interesse an einem funktionierenden und sicheren Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Die Protokolle liegen bei unserem Hosting-Anbieter und werden so lange aufbewahrt, wie dieser Anbieter Serverprotokolle aufbewahrt.',
        ],
      },
      {
        h2: 'Wenn Sie uns schreiben oder das Kontaktformular nutzen',
        paragraphs: [
          'Wenn Sie uns schreiben, per E-Mail oder über das Kontaktformular, erhalten wir Ihren Namen, Ihre E-Mail-Adresse, die Nachricht, die Sie eingeben, und beim Formular das gewählte Paket, falls Sie eines gewählt haben. Wir verwenden diese Angaben, um Ihnen zu antworten und, wenn daraus eine Zusammenarbeit entsteht, um sie durchzuführen. Grundlage ist Ihre Anfrage und die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) oder unser berechtigtes Interesse, Anfragen zu beantworten.',
          'Das Formular selbst speichert nichts auf Ihrem Gerät: kein Cookie, keinen lokalen Speicher. Beim Absenden überträgt es Ihre Eingaben zusammen mit der Angabe, wo Ihr Besuch begann: die erste Seite, die Sie hier geöffnet haben (einschließlich eines Kampagnen-Tags in der Adresse, falls vorhanden), die Seite unmittelbar vor der Kontaktseite und den Namen der Website, die Sie hierher verlinkt hat, falls es eine gab. Das wird nur im Speicher der Seite gehalten und zeigt uns, welche Seiten und Kanäle zu Anfragen führen; es reist mit Ihrer Nachricht und wird nie verwendet, um Sie anderswo zu verfolgen. Einsendungen sind zum Schutz vor Missbrauch je IP-Adresse begrenzt, und ein verstecktes Feld zum Erkennen automatischer Bots wird ungelesen verworfen, wenn ein echter Besucher es nie berührt.',
          'Korrespondenz bewahren wir so lange auf, wie sie für eine laufende oder mögliche Zusammenarbeit von Bedeutung ist, und löschen sie, wenn sie es nicht mehr ist.',
        ],
      },
      {
        h2: 'Wer sonst beteiligt ist',
        paragraphs: [
          'Das Kontaktformular wird in keiner Datenbank gespeichert: Ihre Nachricht wird als eine E-Mail über unseren E-Mail-Versanddienst in unser Postfach zugestellt und dort wie jede andere E-Mail aufbewahrt, die wir erhalten. Unser Hosting-Anbieter liefert die Website aus und führt die oben beschriebenen Zugriffsprotokolle. Beide handeln als unsere Auftragsverarbeiter auf Grundlage eines Vertrags, der begrenzt, was sie mit Ihren Daten tun dürfen. Wir verkaufen personenbezogene Daten nicht und geben sie an niemanden sonst weiter, und wir übermitteln sie nicht absichtlich in Länder außerhalb des Europäischen Wirtschaftsraums.',
        ],
      },
      {
        h2: 'Links zu unseren anderen Projekten',
        paragraphs: [
          'Die Seiten unter [Projekte](/de/work) verlinken auf eigenständige Websites, die wir betreiben. Diese haben eigene Datenschutzerklärungen und eine eigene Verarbeitung; diese Erklärung gilt für sie nicht.',
        ],
      },
      {
        h2: 'Ihre Rechte',
        paragraphs: [
          'Sie können Auskunft über Ihre Daten, deren Berichtigung oder Löschung, die Einschränkung der Verarbeitung oder Datenübertragbarkeit verlangen und einer Verarbeitung widersprechen, die auf berechtigtem Interesse beruht. Schreiben Sie an {email}, und wir antworten innerhalb der gesetzlichen Frist.',
          'Wenn Sie der Ansicht sind, dass wir mit Ihren Daten nicht korrekt umgegangen sind, können Sie sich bei der kroatischen Datenschutzbehörde (AZOP) oder bei der Aufsichtsbehörde an Ihrem Wohnort beschweren.',
        ],
      },
      {
        h2: 'Änderungen',
        paragraphs: [
          'Ändert sich diese Erklärung, ändert sich das Datum oben mit. Es gibt keinen Verteiler, den wir benachrichtigen könnten, weil wir keinen führen.',
        ],
      },
    ],
    seeAlso: [
      ['Sicherheit und Daten', '/de/security'],
      ['Impressum (EN)', '/terms#operator'],
      ['Cookies (EN)', '/cookies'],
      ['Terms (EN)', '/terms'],
    ],
  },
};
