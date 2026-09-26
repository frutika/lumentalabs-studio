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
];

export const VODIC_SLUGS = VODICI.map((v) => v.slug);
export const vodicBySlug = (slug) => VODICI.find((v) => v.slug === slug);
