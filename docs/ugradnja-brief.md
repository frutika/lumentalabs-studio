# Brief za ugradnju — zalijepi u Claude sesiju na VPS-u

Radi u `/root/lumentalabs-studio`.

**Git tok (obavezno):** nova grana za svaki korak, PR, squash merge. Nikad direktno u `main`. **Traži potvrdu prije mergea i prije deploya.**

**Prije koda:** pronađi kako projekt rješava i18n za `[lang]` rute (dictionary JSON/TS, `getDictionary`, ili slično) i **dodaj nove tekstove kao ključeve u hr i de rječnik** — ne hardkodiraj stringove u komponente. Ako rječnika nema, prati postojeći obrazac koji već koristi `/hr` i `/de`.

Radi korake redom. **Stani nakon svakog koraka i javi prije nego kreneš na sljedeći.**

---

## Korak 1 — sekcija „Tko ovo radi" na naslovnici (grana `feat/about-section`)

Nova sekcija na naslovnici, **iznad** sekcije „Kako radimo". Ispod teksta traka s tri kartice s brojkama.

Ostavi mjesto za fotografiju (`next/image`, placeholder dok Denis ne pošalje sliku) i za linkove na LinkedIn i GitHub — ostavi ih kao TODO komentar ako URL-ovi nisu poznati.

### HR

Naslov: **Tko ovo radi**

> Iza Lumenta Labsa stojim ja, Denis. Dvanaest godina gradim digitalne proizvode, zadnjih šest specijalizirano za AI i automatizaciju.
>
> Razgovarate izravno sa mnom. Isti čovjek koji vam piše ponudu piše i kod, i diže ga u produkciju — nema account managera koji prenosi poruke, nema podizvođača u trećoj zemlji.
>
> Dvanaest vlastitih proizvoda drži se u produkciji: Lumenta AI, The Dog Habit, UnmaskedWords, BezMaske i ostali. Sve što nudim klijentima prvo je prošlo kroz njih. Ne prodajem ništa što nisam sam držao u zraku.

CTA: **Pogledajte što smo izgradili →** (vodi na `/hr/work`)

Kartice: `12+` / godina u digitalnom razvoju · `6` / godina u AI-u i automatizaciji · `12` / vlastitih proizvoda u produkciji

### DE

Naslov: **Wer das macht**

> Hinter Lumenta Labs stehe ich, Denis. Seit zwölf Jahren baue ich digitale Produkte, die letzten sechs davon spezialisiert auf KI und Automatisierung.
>
> Sie sprechen direkt mit mir. Derselbe Mensch, der Ihr Angebot schreibt, schreibt auch den Code und bringt ihn in Produktion — kein Account Manager dazwischen, keine Subunternehmer im Ausland.
>
> Zwölf eigene Produkte laufen in Produktion: Lumenta AI, The Dog Habit, UnmaskedWords, BezMaske und weitere. Alles, was ich Kunden anbiete, ist zuerst durch sie hindurchgegangen. Ich verkaufe nichts, was ich nicht selbst am Laufen gehalten habe.

CTA: **Sehen Sie, was wir gebaut haben →** (vodi na `/de/work`)

Kartice: `12+` / Jahre digitale Entwicklung · `6` / Jahre KI und Automatisierung · `12` / eigene Produkte in Produktion

---

## Korak 2 — case study Lumenta AI (grana `feat/case-study-lumenta-ai`)

Prepiši `/[lang]/work/lumenta-ai`. **Pazi: brojka je kapacitet sustava, ne isporučen posao.** Nigdje — ni u meta opisu, ni u OG tekstu, ni u sažetku na `/work` listi — ne smije pisati „isporučili smo", „za klijenta" ili „u projektu".

### HR

Naslov: **12.000 opisa u devet dana — provjereni kapacitet sustava**
Podnaslov: *AI copywriting za e-trgovinu — cijeli katalog u jednom brand tonu, na hrvatskom i njemačkom.*

**Problem**
> Katalog raste brže nego što ga itko stigne opisati. Opisi preuzeti od dobavljača Google tretira kao duplikat, a vanjski copywriter za tekst naplaćuje 3 do 15 eura po artiklu — na katalogu od 12.000 artikala to je trošak koji nijedna trgovina ne planira.

**Što smo izgradili**
> Sustav koji piše opis za svaki artikl u tonu brenda i s njegovim nazivljem, na jeziku tržišta, a ne naknadno preveden. Svaki tekst prolazi provjeru kvalitete prije objave, a trošak generiranja je ograničen po artiklu, pa se ne može oteti.

**Rezultat**
> - Kapacitet: 12.000 opisa u 9 dana — prosjek obrade 65 sekundi po tekstu
> - 0,02 € trošak generiranja po opisu, naspram 3–15 € po tekstu kod vanjskog copywritera
> - Osam alata u produkciji, od opisa proizvoda do newslettera

**Zašto je to vama važno**
> Kontrola troška, predmemorija i provjera kvalitete razrađene su ovdje, na vlastitom proizvodu. U vaš projekt ulaze gotove. Ne učimo na vašem katalogu.

CTA: **Imate sličan problem? Opišite ga i reći ćemo vam što je potrebno.** → `/hr/contact`

### DE

Naslov: **12.000 Beschreibungen in neun Tagen — geprüfte Systemkapazität**
Podnaslov: *KI-Copywriting für den E-Commerce — der ganze Katalog in einem Markenton, auf Kroatisch und Deutsch.*

**Problem**
> Der Katalog wächst schneller, als ihn jemand beschreiben kann. Vom Lieferanten übernommene Texte wertet Google als Duplikat, und ein externer Texter berechnet 3 bis 15 Euro pro Artikel — bei 12.000 Artikeln eine Summe, die kein Shop einplant.

**Was wir gebaut haben**
> Ein System, das jeden Artikel im Ton der Marke und mit ihrer Terminologie beschreibt, in der Sprache des Marktes statt nachträglich übersetzt. Jeder Text durchläuft eine Qualitätsprüfung vor der Veröffentlichung, und die Generierungskosten sind pro Artikel gedeckelt.

**Ergebnis**
> - Kapazität: 12.000 Beschreibungen in 9 Tagen — im Schnitt 65 Sekunden pro Text
> - 0,02 € Generierungskosten pro Beschreibung, gegenüber 3–15 € beim externen Texter
> - Acht Tools in Produktion, von der Produktbeschreibung bis zum Newsletter

**Warum das für Sie zählt**
> Kostenkontrolle, Caching und Qualitätsprüfung sind hier entstanden — am eigenen Produkt. In Ihr Projekt kommen sie fertig. Wir lernen nicht an Ihrem Katalog.

---

## Korak 3 — sitni popravci (grana `fix/copy-typos`)

- Hero na naslovnici: `koruse` → `koriste` *(provjeri postoji li uopće — možda je greška u čitanju stranice)*
- Usluge: `Narirani video` → `Naracija i lokalizacija videa` *(isto provjeriti)*
- Ispod „AI nije naslov. AI je infrastruktura" dodaj rečenicu: *„U praksi: proces koji radi svaki dan, a ne demo koji radi jednom."*
  DE: *„In der Praxis: ein Prozess, der jeden Tag läuft — keine Demo, die einmal funktioniert."*
- Kontakt forma: polje **„Opišite problem"** postaje prvo i obavezno, iznad imena i emaila.
  DE: **„Beschreiben Sie Ihr Problem"**

---

## Korak 4 — usluge (grana `feat/services-rewrite`)

Cijela `/[lang]/services` stranica ide u novu strukturu („Pet problema koje rješavamo", pet blokova s „Što dobivate" i „Kad ovo nije za vas", HR i DE). Tekst je u dokumentu `web-tekstovi-v3.md`, odjeljak 3 — Denis će ti ga dati.

Ovo je najveći korak; ne kreći na njega dok koraci 1–3 nisu mergani.

---

## Nakon svakog koraka

1. `npm run build` — mora proći bez grešaka
2. Provjeri obje jezične verzije stranice
3. Otvori PR i **čekaj Denisovu potvrdu prije mergea i prije deploya**

**Napomena o buildu:** `next build` na ovom projektu zna ostati visjeti nakon što ispiše route tablicu — build je gotov, ali se proces ne gasi. Ako ti se to dogodi, koristi `timeout 300 npm run build; echo "exit=$?"`. `exit=124` uz potpun ispis znači da je build uspio.
