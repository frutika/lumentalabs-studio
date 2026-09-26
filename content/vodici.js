/**
 * The guides, as pages rather than as a pitch for a PDF.
 *
 * They lived only on vodici.lumentalabs.studio, where the whole site is a
 * 292-word landing page and the guides themselves are PDFs behind an e-mail
 * form. Google had nothing to index: `site:vodici.lumentalabs.studio` returned
 * zero documents. Three genuinely useful Croatian guides, invisible.
 *
 * So the content moves onto the domain and the PDF stays where it is. The page
 * is what ranks; the PDF is the packaged version for people who want one, and
 * the existing form on the subdomain keeps collecting addresses. Nothing about
 * that funnel has to change for the content to become findable.
 *
 * Croatian only, like the guides themselves. content/index.js narrows the
 * hreflang cluster accordingly.
 */

/**
 * A step is a list of blocks so each one can carry whatever it actually needs —
 * prose, a table of prerequisites, a prompt to copy, a numbered sub-sequence —
 * without a separate field per shape that most steps leave empty.
 *
 *   { type: 'p',       text }
 *   { type: 'list',    items }
 *   { type: 'table',   head, rows }
 *   { type: 'callout', title, text }
 *   { type: 'code',    text }
 *   { type: 'substeps' items: [{ h, text }] }
 */
export const VODICI = [
  {
    slug: 'automatizacija-opisa-proizvoda',
    num: '01',
    // The title carries the query. "Automatizirajte opise proizvoda" is what a
    // shop owner types; "Vodič #1" is what a series index calls it.
    title: 'Automatizacija opisa proizvoda uz n8n i AI',
    h1: 'Automatizirajte opise proizvoda uz n8n i AI',
    description:
      'Korak-po-korak vodič: radni tok u n8n koji sam generira prodajne opise proizvoda iz Google tablice, uz AI model. Bez programiranja, za manje od 30 minuta.',
    lede:
      'Izradite svoj prvi radni tok koji sam generira prodajne opise proizvoda iz tablice — bez programiranja. Od praznog platna do gotove automatizacije za manje od 30 minuta.',
    facts: [
      ['Trajanje', '~30 min'],
      ['Razina', 'početna'],
      ['Alati', 'n8n · OpenAI/Claude · Google Sheets'],
      ['Cijena', '0 € (self-host)'],
    ],
    intro: [
      'Ako vodite internetsku trgovinu ili pišete sadržaj za klijente, opisi proizvoda vam jedu sate. Ovaj vodič pokazuje kako da jednom izradite „stroj" koji vas tog posla oslobodi zauvijek: upišete naziv i značajke proizvoda u tablicu, a n8n uz pomoć AI-a vrati gotov, prodajni opis natrag u istu tablicu.',
      'Sve radimo u n8n — alatu za automatizaciju otvorenog koda koji povezuje aplikacije i AI modele u vizualni „radni tok". Ne treba vam nijedna linija koda.',
    ],
    outcome: {
      title: 'Što ćete imati na kraju',
      text: 'Radni tok koji čita retke iz Google tablice, šalje značajke proizvoda AI modelu i upisuje generirani opis u stupac „Opis" — automatski, za desetke proizvoda odjednom.',
    },
    steps: [
      {
        num: '01',
        h: 'Preduvjeti',
        blocks: [
          { type: 'p', text: 'Prije nego što krenete, osigurajte sljedeće. Sve stavke imaju besplatnu opciju.' },
          {
            type: 'table',
            head: ['Što', 'Zašto', 'Cijena'],
            rows: [
              ['n8n račun (cloud) ili Docker za self-host', 'Motor koji pokreće automatizaciju', 'Self-host 0 € · Cloud od 24 €/mj'],
              ['API ključ AI modela (OpenAI ili Anthropic Claude)', 'Generira same opise', 'Plaćate samo potrošene tokene'],
              ['Google račun i jedna tablica', 'Ulaz (proizvodi) i izlaz (opisi)', 'Besplatno'],
            ],
          },
          {
            type: 'callout',
            title: 'Dobra vijest o troškovima',
            text: 'AI čvorovi u n8n-u besplatni su na razini platforme — plaćate isključivo svom AI pružatelju za potrošnju tokena. Jedan opis proizvoda obično košta manje od jednog eurocenta.',
          },
        ],
      },
      {
        num: '02',
        h: 'Instalacija n8n',
        blocks: [
          { type: 'p', text: 'Birate jednu od dvije opcije. Ako želite najbrže isprobati, idite na cloud. Ako želite 0 € i potpuni nadzor, self-host.' },
          {
            type: 'substeps',
            items: [
              { h: 'A) n8n Cloud (najlakše)', text: 'Otvorite n8n.io → Get started, napravite račun i u par minuta dobivate svoj prostor. Cijene 2026: Starter 24 €/mj, Pro 60 €/mj (−17 % godišnje).' },
              { h: 'B) Self-host (besplatno)', text: 'Uz Docker je jedna naredba, pa otvorite http://localhost:5678 u pregledniku.' },
            ],
          },
          {
            type: 'code',
            text: 'docker run -it --rm \\\n  -p 5678:5678 \\\n  -v n8n_data:/home/node/.n8n \\\n  docker.n8n.io/n8nio/n8n',
          },
          {
            type: 'callout',
            title: 'Napomena',
            text: 'Community (self-host) izdanje je u potpunosti besplatno, s neograničenim izvršavanjima i pristupom svim integracijama. Za timski rad i podršku bira se cloud ili Business plan.',
          },
        ],
      },
      {
        num: '03',
        h: 'Priprema Google tablice',
        blocks: [
          { type: 'p', text: 'Izradite novu Google tablicu s ovim stupcima. Prvi redak su nazivi stupaca:' },
          {
            type: 'table',
            head: ['Naziv', 'Kategorija', 'Ključne značajke', 'Ton', 'Opis'],
            rows: [
              ['Kožne tenisice Aura', 'Obuća', 'prava koža, memory foam, uniseks', 'moderan, samouvjeren', '(prazno)'],
              ['Termo-boca Nord 750 ml', 'Oprema', 'čelik, drži toplo 12 h, bez BPA', 'praktičan, aktivan', '(prazno)'],
            ],
          },
          {
            type: 'list',
            items: [
              'Stupac „Opis" ostaje prazan — njega popunjava automatizacija.',
              'Dodajte koliko god redaka želite; radni tok obrađuje sve odjednom.',
            ],
          },
        ],
      },
      {
        num: '04',
        h: 'Izrada radnog toka i okidača',
        blocks: [
          {
            type: 'substeps',
            items: [
              { h: 'Izradite novi radni tok', text: 'U n8n-u kliknite + Create Workflow i dajte mu naziv, npr. „Auto-opisi proizvoda".' },
              { h: 'Dodajte okidač', text: 'Kliknite + i potražite Manual Trigger (za test) ili Schedule Trigger (npr. svako jutro u 8 h). Za početak izaberite Manual Trigger.' },
              { h: 'Povežite Google Sheets (čitanje)', text: 'Dodajte čvor Google Sheets s operacijom Get Rows. Povežite svoj Google račun preko OAuth-a i izaberite tablicu i list. Ovaj čvor vraća sve retke kao podatke koje prosljeđujemo AI-u.' },
            ],
          },
        ],
      },
      {
        num: '05',
        h: 'Dodavanje AI Agent čvora',
        blocks: [
          { type: 'p', text: 'n8n ima ugrađen AI Agent čvor sa 70+ komponenti za jezične modele. Podržani pružatelji u 2026.: OpenAI, Anthropic, Mistral, Google Vertex AI te lokalni modeli preko Ollame.' },
          {
            type: 'substeps',
            items: [
              { h: 'Dodajte „AI Agent" (ili „Message a Model")', text: 'Povežite ga nakon Google Sheets čvora, tako da za svaki redak dobije značajke proizvoda.' },
              { h: 'Zakačite Chat Model', text: 'Ispod AI Agenta izaberite podčvor Chat Model — npr. OpenAI Chat Model ili Anthropic Chat Model. Unesite svoj API ključ i izaberite model.' },
            ],
          },
          {
            type: 'callout',
            title: 'Savjet za odnos kvalitete i cijene',
            text: 'Za opise proizvoda srednji i brzi modeli daju izvrstan odnos cijene i kvalitete. Skuplje „reasoning" modele čuvajte za složene zadatke.',
          },
        ],
      },
      {
        num: '06',
        h: 'Prompt koji daje prodajne opise',
        blocks: [
          { type: 'p', text: 'U polje poruke AI Agenta zalijepite ovaj prompt. Vitičaste zagrade ubacuju vrijednosti iz tablice za svaki redak:' },
          {
            type: 'code',
            text: `Ti si iskusan e-commerce copywriter.
Napiši prodajni opis proizvoda na hrvatskom jeziku.

Proizvod: {{ $json["Naziv"] }}
Kategorija: {{ $json["Kategorija"] }}
Značajke: {{ $json["Ključne značajke"] }}
Željeni ton: {{ $json["Ton"] }}

Pravila:
- 40 do 70 riječi, bez uvodnih fraza.
- Naglasi korist za kupca, ne samo značajke.
- Završi kratkim pozivom na akciju.
- Vrati SAMO tekst opisa, bez naslova.`,
          },
          {
            type: 'callout',
            title: 'Za dvojezično (HR + EN)',
            text: 'Duplicirajte AI čvor i u drugom promptu promijenite jezik u English, pa upišite u stupac „Description". Isti tok, dva tržišta.',
          },
        ],
      },
      {
        num: '07',
        h: 'Upis rezultata natrag u tablicu',
        blocks: [
          {
            type: 'substeps',
            items: [
              { h: 'Dodajte Google Sheets (upis)', text: 'Novi Google Sheets čvor s operacijom Update Row. Izaberite istu tablicu i list.' },
              { h: 'Mapirajte izlaz AI-a u stupac „Opis"', text: 'U polju „Opis" izaberite izlaz prethodnog AI čvora, npr. {{ $json.output }}. Kao ključ za povezivanje retka koristite jedinstveni stupac — „Naziv" ili ID retka.' },
            ],
          },
          {
            type: 'callout',
            title: 'Provjera veze',
            text: 'Linije između čvorova moraju činiti neprekidan lanac: Trigger → Get Rows → AI Agent → Update Row. Ako je neki čvor siv ili isprekidan, nije povezan.',
          },
        ],
      },
      {
        num: '08',
        h: 'Testiranje, pokretanje i skaliranje',
        blocks: [
          {
            type: 'list',
            items: [
              'Test: kliknite Execute Workflow i pratite kako se podaci kreću kroz čvorove; svaka zelena kvačica znači uspjeh.',
              'Provjera: otvorite tablicu — stupac „Opis" trebao bi se popuniti.',
              'Automatizacija: zamijenite Manual Trigger sa Schedule Trigger da radi npr. svako jutro, ili Webhookom da se pokrene čim dodate novi proizvod.',
              'Skaliranje: dodajte čvor za slanje na e-poštu ili Slack, ili povežite izravno sa Shopifyjem ili WooCommerceom umjesto tablice.',
            ],
          },
        ],
      },
    ],
    mistakes: {
      h2: 'Česte pogreške i rješenja',
      head: ['Simptom', 'Uzrok i rješenje'],
      rows: [
        ['„Unauthorized" na AI čvoru', 'Pogrešan ili istekao API ključ — ponovno ga generirajte kod pružatelja.'],
        ['Prazan stupac „Opis"', 'Pogrešno mapiranje izlaza ili ključnog stupca u Update Row čvoru.'],
        ['Opis predugačak ili generičan', 'Precizniji prompt: ograničite broj riječi i tražite konkretnu korist.'],
        ['Rate limit ili pogreška 429', 'Dodajte mali Wait čvor ili smanjite broj redaka po pokretanju.'],
      ],
    },
    // Links to the service page this guide naturally leads to, so a reader who
    // decides they would rather not do it themselves has somewhere to go.
    related: 'ecommerce',
  },
  {
    slug: 'automatizacija-objava-na-drustvenim-mrezama',
    num: '02',
    title: 'Automatizacija objava na društvenim mrežama uz n8n i AI',
    h1: 'Automatizirajte objave na društvenim mrežama',
    description:
      'Korak-po-korak vodič: radni tok koji iz jedne tablice ideja piše objave prilagođene svakoj mreži i objavljuje ih po rasporedu — X, LinkedIn, Facebook, Instagram.',
    lede:
      'Izradite radni tok koji iz jedne tablice sadržaja sam piše objave prilagođene svakoj platformi i objavljuje ih po rasporedu. Bez svakodnevnog prijavljivanja u pet aplikacija.',
    facts: [
      ['Trajanje', '~45 min'],
      ['Razina', 'početna–srednja'],
      ['Alati', 'n8n · OpenAI/Claude · društvene mreže'],
      ['Cijena', '0 € (self-host)'],
    ],
    intro: [
      'Objavljivanje na više mreža ručno znači isti sadržaj prepisivati pet puta, svaki put drugačije. Ovaj vodič pokazuje kako da jednu ideju upišete u tablicu, a n8n uz pomoć AI-a napiše verziju prilagođenu svakoj platformi i objavi je sam, po rasporedu koji odredite.',
      'Tok ide ovako: tablica ideja → AI piše po platformi → odobrenje (opcijski) → objava ili raspored.',
    ],
    outcome: {
      title: 'Što ćete imati na kraju',
      text: 'Radni tok koji iz jednog retka tablice generira zasebne objave za X, LinkedIn, Facebook i Instagram, pošalje vam ih na odobrenje i objavi ih automatski. n8n podržava sedam i više mreža, uključujući TikTok, Threads i YouTube Shorts.',
    },
    steps: [
      {
        num: '01',
        h: 'Preduvjeti i pristupi',
        blocks: [
          { type: 'p', text: 'Uz n8n i AI ključ, kao u prvom vodiču, za objavljivanje trebate pristup svakoj mreži na kojoj želite objavljivati. Krenite s jednom ili dvije, pa dodajte ostale.' },
          {
            type: 'table',
            head: ['Mreža', 'Kako se povezuje', 'Napomena'],
            rows: [
              ['X (Twitter)', 'Nativni čvor ili X API (developer račun)', 'Potreban razvojni pristup za objavu'],
              ['LinkedIn', 'Nativni LinkedIn čvor (OAuth)', 'Objava na osobni profil ili profil tvrtke'],
              ['Facebook i Instagram', 'Facebook Graph API (HTTP Request čvor)', 'Traži poslovni račun i povezanu stranicu'],
              ['Više mreža odjednom', 'Buffer ili sličan servis za raspoređivanje', 'Najlakši način za start bez svakog API-ja posebno'],
            ],
          },
          {
            type: 'callout',
            title: 'Preporuka za brz start',
            text: 'Ako ne želite odmah otvarati razvojne račune za svaku mrežu, počnite preko Buffera: n8n šalje gotov tekst Bufferu, a Buffer objavljuje i raspoređuje na sve povezane mreže.',
          },
        ],
      },
      {
        num: '02',
        h: 'Tablica sadržaja kao izvor ideja',
        blocks: [
          { type: 'p', text: 'Napravite Google tablicu koja je vaš kalendar ideja. Svaki redak je jedna objava koju AI razrađuje za sve mreže:' },
          {
            type: 'table',
            head: ['Datum', 'Tema / ideja', 'Ključne točke', 'Poziv na akciju', 'Status'],
            rows: [
              ['05. 08.', 'Nova kolekcija tenisica Aura', 'prava koža, udobnost, uniseks', 'Kupi uz 10 % popusta', 'za objavu'],
              ['07. 08.', 'Savjet: kako održavati kožnu obuću', '3 koraka, kratko i korisno', 'Pogledaj vodič', 'za objavu'],
            ],
          },
          {
            type: 'list',
            items: [
              'Stupac „Status" koristite da radni tok obrađuje samo retke označene s „za objavu".',
              'Nakon objave n8n stupac mijenja u „objavljeno" da se ista objava ne ponovi.',
            ],
          },
        ],
      },
      {
        num: '03',
        h: 'Okidač: raspored ili ručno',
        blocks: [
          {
            type: 'substeps',
            items: [
              { h: 'Izradite radni tok', text: 'U n8n-u kliknite + Create Workflow i nazovite ga npr. „Auto-objave društvene mreže".' },
              { h: 'Dodajte Schedule Trigger', text: 'Postavite ga npr. na svaki radni dan u 9:00. Za testiranje koristite Manual Trigger.' },
              { h: 'Dohvatite retke „za objavu"', text: 'Čvor Google Sheets s operacijom Get Rows, uz filtar po stupcu Status = „za objavu". Tako obrađujete točno ono što je spremno.' },
            ],
          },
        ],
      },
      {
        num: '04',
        h: 'AI piše objavu po mreži',
        blocks: [
          { type: 'p', text: 'Dodajte AI Agent čvor s Chat Modelom. Svaka mreža ima drugačiji ton i duljinu, pa tražite od AI-a da vrati sve verzije odjednom u strukturiranom obliku:' },
          {
            type: 'code',
            text: `Ti si voditelj društvenih mreža za e-commerce brend.
Na temelju ideje napiši objave prilagođene svakoj mreži, na hrvatskom.

Ideja: {{ $json["Tema / ideja"] }}
Ključne točke: {{ $json["Ključne točke"] }}
Poziv na akciju: {{ $json["Poziv na akciju"] }}

Vrati JSON s poljima:
- "x": do 280 znakova, dinamično, 1-2 hashtaga
- "linkedin": profesionalan ton, 3-4 rečenice
- "facebook": topao, razgovorni ton, s emotikonom
- "instagram": kratak uvod + 5 relevantnih hashtagova

Vrati SAMO ispravan JSON, bez dodatnog teksta.`,
          },
          {
            type: 'callout',
            title: 'Zašto JSON',
            text: 'Kad AI vrati JSON, u sljedećim čvorovima lako uzimate baš pravu verziju za pravu mrežu: {{ $json.x }}, {{ $json.linkedin }} i tako redom.',
          },
        ],
      },
      {
        num: '05',
        h: 'Korak odobrenja',
        blocks: [
          { type: 'p', text: 'Prije nego išta ode uživo, pametno je da vam objave prvo dođu na pregled. n8n to rješava čvorom koji čeka vašu potvrdu.' },
          {
            type: 'substeps',
            items: [
              { h: 'Pošaljite nacrt na pregled', text: 'Dodajte čvor Telegram, Slack ili Send Email koji vam šalje sve četiri verzije objave.' },
              { h: 'Čekajte potvrdu', text: 'Uz Wait čvor ili „human in the loop" pristup, radni tok se nastavlja tek kad odobrite. Odbijete li, objava se preskače.' },
            ],
          },
          {
            type: 'callout',
            title: 'Savjet',
            text: 'Dok gradite povjerenje u sustav, držite korak odobrenja uključen. Kad vidite da AI stabilno daje dobar ton, možete ga isključiti za potpuno automatski rad.',
          },
        ],
      },
      {
        num: '06',
        h: 'Objava na mreže',
        blocks: [
          { type: 'p', text: 'Za svaku mrežu dodajte čvor koji uzima svoju verziju teksta iz AI izlaza. Tri načina, od najlakšeg:' },
          {
            type: 'table',
            head: ['Način', 'Kada koristiti'],
            rows: [
              ['Nativni čvor (X, LinkedIn)', 'Kad n8n ima gotov čvor za mrežu — najjednostavnije, samo OAuth i tekst.'],
              ['HTTP Request (Facebook/Instagram Graph API)', 'Kad nema nativnog čvora — šaljete tekst izravno na API mreže.'],
              ['Buffer', 'Kad želite jednim potezom objaviti ili rasporediti na više mreža bez zasebnih API-ja.'],
            ],
          },
          {
            type: 'callout',
            title: 'Mapiranje teksta',
            text: 'U svakom čvoru za objavu povežite pravo polje: X čvor na {{ $json.x }}, LinkedIn na {{ $json.linkedin }}, i tako redom.',
          },
        ],
      },
      {
        num: '07',
        h: 'Raspored, evidencija i ponovna upotreba',
        blocks: [
          {
            type: 'list',
            items: [
              'Označite kao objavljeno: na kraju dodajte Google Sheets Update Row koji stupac Status mijenja u „objavljeno".',
              'Raspoređivanje: želite li objave u razmacima, koristite Buffer ili dodajte Wait čvorove između mreža.',
              'Evidencija: zapišite datum i vrijeme objave u tablicu radi pregleda učinka.',
              'Recikliranje sadržaja: najbolje objave nakon mjesec dana ponovno provucite kroz AI za osvježenu verziju.',
            ],
          },
        ],
      },
    ],
    mistakes: {
      h2: 'Česte pogreške i rješenja',
      head: ['Simptom', 'Uzrok i rješenje'],
      rows: [
        ['Objava predugačka za X', 'U promptu naglasite tvrdo ograničenje od 280 znakova i dodajte provjeru duljine.'],
        ['AI vratio pokvaren JSON', 'Dodajte uputu „vrati samo ispravan JSON" i čvor za parsiranje; po potrebi ponovite poziv.'],
        ['Facebook ili Instagram odbija objavu', 'Provjerite koristite li poslovni račun i važeći Graph API token s dozvolama.'],
        ['Ista objava izašla dvaput', 'Nedostaje korak koji Status mijenja u „objavljeno" nakon uspjeha.'],
      ],
    },
    related: 'ai',
  },
  {
    slug: 'ai-korisnicka-podrska-rag',
    num: '03',
    title: 'AI korisnička podrška s bazom znanja (RAG) uz n8n',
    h1: 'Automatizirajte korisničku podršku uz AI',
    description:
      'Korak-po-korak vodič: AI pomoćnik koji odgovara na upite kupaca iz vaše baze znanja (RAG), rutinske rješava sam, a složene prosljeđuje čovjeku.',
    lede:
      'Izradite AI pomoćnika koji odgovara na upite kupaca iz vaše vlastite baze znanja — točno, na temelju vaših dokumenata. Rutinske upite rješava sam, složene prosljeđuje čovjeku.',
    facts: [
      ['Trajanje', '~60 min'],
      ['Razina', 'srednja'],
      ['Alati', 'n8n · OpenAI/Claude · vector store'],
      ['Cijena', '0 € (self-host)'],
    ],
    intro: [
      'Obični chatbot izmišlja odgovore. AI podrška s RAG-om (Retrieval-Augmented Generation) prvo pretraži vaše dokumente, pa odgovor sastavi samo na temelju onoga što tamo piše. Rezultat su točni odgovori o vašim proizvodima, dostavi, povratima i uvjetima — bez izmišljanja.',
      'Sustav ima dva radna toka: jedan puni bazu znanja iz vaših dokumenata, drugi dočekuje upite kupaca i odgovara.',
    ],
    outcome: {
      title: 'Što ćete imati na kraju',
      text: 'AI pomoćnika povezanog s e-poštom ili chatom na webu koji odgovara iz vaše baze znanja, prosljeđuje složene slučajeve čovjeku i bilježi svaki razgovor.',
    },
    steps: [
      {
        num: '01',
        h: 'Preduvjeti',
        blocks: [
          { type: 'p', text: 'Uz n8n i AI ključ, kao u prethodnim vodičima, za bazu znanja treba i mjesto gdje se spremaju vektori — brojčani zapisi značenja teksta.' },
          {
            type: 'table',
            head: ['Što', 'Uloga', 'Opcija'],
            rows: [
              ['AI model (OpenAI ili Anthropic Claude)', 'Sastavlja odgovore', 'Plaćate tokene po upitu'],
              ['Embeddings model', 'Pretvara dokumente i upite u vektore', 'Npr. OpenAI embeddings'],
              ['Vector store', 'Sprema i pretražuje bazu znanja', 'Supabase, Pinecone ili lokalni'],
              ['Izvor upita', 'Odakle stižu pitanja', 'E-pošta, web chat, obrazac'],
            ],
          },
          {
            type: 'callout',
            title: 'Što je vector store',
            text: 'Zamislite ga kao pametnu tražilicu po značenju: umjesto da traži točnu riječ, pronalazi odlomke koji su po smislu najbliži pitanju kupca. To je srce RAG-a.',
          },
        ],
      },
      {
        num: '02',
        h: 'Priprema baze znanja',
        blocks: [
          { type: 'p', text: 'Skupite na jedno mjesto sve što AI treba znati. Što je jasnija baza, to su bolji odgovori.' },
          {
            type: 'list',
            items: [
              'FAQ: pitanja i odgovori o dostavi, povratima, plaćanju i veličinama.',
              'Politike: uvjeti kupnje, reklamacije, jamstvo.',
              'Proizvodi: ključne značajke, materijali, održavanje.',
            ],
          },
          {
            type: 'callout',
            title: 'Format',
            text: 'Držite dokumente u Google Driveu ili Notionu — n8n ih odande čita — i pišite kratke, jasne odlomke. Jedan odlomak, jedna tema. Tako pretraga vraća precizne dijelove.',
          },
        ],
      },
      {
        num: '03',
        h: 'Tok 1 — punjenje baze',
        blocks: [
          { type: 'p', text: 'Ovaj radni tok pokrećete kad dodate ili promijenite dokumente. On „uči" bazu znanja.' },
          {
            type: 'substeps',
            items: [
              { h: 'Učitajte dokumente', text: 'Čvor Google Drive ili Notion dohvaća datoteke iz mape s bazom znanja.' },
              { h: 'Podijelite na dijelove (chunking)', text: 'Čvorom Text Splitter dijelite duge dokumente na manje odlomke da pretraga bude precizna.' },
              { h: 'Izračunajte embeddings i spremite', text: 'Čvor Embeddings pretvara svaki odlomak u vektor, a Vector Store ga sprema. Baza je sad spremna za pretragu.' },
            ],
          },
          {
            type: 'callout',
            title: 'Automatsko osvježavanje',
            text: 'Povežite okidač na promjenu u Google Drive mapi — čim ažurirate dokument, baza znanja se sama osvježava.',
          },
        ],
      },
      {
        num: '04',
        h: 'Tok 2 — okidač upita',
        blocks: [
          { type: 'p', text: 'Drugi radni tok dočekuje pitanja kupaca. Birate odakle stižu:' },
          {
            type: 'table',
            head: ['Kanal', 'Okidač u n8n'],
            rows: [
              ['E-pošta podrške', 'Email Trigger (IMAP) — čita nove poruke'],
              ['Chat na webu', 'Chat Trigger ili Webhook'],
              ['Kontakt obrazac', 'Webhook s vaše stranice'],
            ],
          },
          {
            type: 'callout',
            title: 'Preporuka za start',
            text: 'Krenite s e-poštom podrške: najmanje rizika, a odmah štedi sate. Web chat dodajte kad ste zadovoljni kvalitetom odgovora.',
          },
        ],
      },
      {
        num: '05',
        h: 'AI Agent s bazom znanja',
        blocks: [
          { type: 'p', text: 'Srce sustava: AI Agent čvor kojem kao alat dodate Vector Store. Agent sam pretraži bazu i sastavi odgovor. U system prompt upišite pravila:' },
          {
            type: 'code',
            text: `Ti si ljubazan agent podrške za [naziv brenda].
Odgovaraj na hrvatskom, kratko i jasno.

Pravila:
- Koristi ISKLJUČIVO informacije iz baze znanja.
- Ako odgovor ne postoji u bazi, reci da ćeš proslijediti
  upit kolegi i ne izmišljaj.
- Budi uljudan i profesionalan, oslovi kupca s „Vi".
- Na kraju ponudi dodatnu pomoć.

Pitanje kupca: {{ $json["poruka"] }}`,
          },
          {
            type: 'callout',
            title: 'Ključno pravilo',
            text: 'Uputa „koristi isključivo bazu znanja i ne izmišljaj" najvažnija je zaštita od pogrešnih odgovora. Bez nje AI može halucinirati.',
          },
        ],
      },
      {
        num: '06',
        h: 'Odgovor: automatski ili uz pregled',
        blocks: [
          { type: 'p', text: 'Odaberite razinu automatizacije prema tome koliko vjerujete sustavu:' },
          {
            type: 'substeps',
            items: [
              { h: 'A) Nacrt uz pregled (preporuka za start)', text: 'AI sastavi odgovor, ali ga ne šalje — pošalje ga vama ili agentu na Slack, Telegram ili kao skicu u e-pošti. Čovjek potvrdi ili doradi pa pošalje.' },
              { h: 'B) Potpuno automatski', text: 'Čvor Send Email ili chat odgovor šalje odmah. Koristite tek kad kroz fazu A vidite da su odgovori pouzdani.' },
            ],
          },
        ],
      },
      {
        num: '07',
        h: 'Eskalacija, granice i evidencija',
        blocks: [
          {
            type: 'list',
            items: [
              'Eskalacija na čovjeka: ako baza nema odgovor ili kupac traži čovjeka, čvorom IF preusmjerite upit u vaš sandučić ili tim.',
              'Granice: osjetljive teme — reklamacije, povrat novca, pravni upiti — uvijek šaljite čovjeku, ne AI-u.',
              'Evidencija: svaki upit i odgovor spremite u tablicu ili bazu radi kontrole kvalitete.',
              'Poboljšavanje: pitanja bez dobrog odgovora dodajte u bazu znanja — sustav s vremenom postaje bolji.',
            ],
          },
        ],
      },
    ],
    mistakes: {
      h2: 'Česte pogreške i rješenja',
      head: ['Simptom', 'Uzrok i rješenje'],
      rows: [
        ['AI izmišlja odgovore', 'Ojačajte uputu „samo iz baze" i provjerite je li Vector Store povezan kao alat.'],
        ['Odgovori promašuju temu', 'Odlomci u bazi su preveliki — smanjite veličinu dijelova i budite konkretniji.'],
        ['Baza „ne zna" novi sadržaj', 'Niste ponovno pokrenuli Tok 1 nakon izmjene dokumenata.'],
        ['Spor odgovor', 'Prevelik broj dohvaćenih odlomaka — ograničite na tri do pet najrelevantnijih.'],
      ],
    },
    related: 'ai',
  },
];

export const VODIC_SLUGS = VODICI.map((v) => v.slug);
export const vodicBySlug = (slug) => VODICI.find((v) => v.slug === slug);
