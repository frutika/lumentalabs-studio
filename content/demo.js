/**
 * The e-commerce service demo (app/components/ContentDemo.jsx).
 *
 * `outputs` are real Lumenta AI generations — its own product-description
 * prompt and model, run once and stored here — never copy written by hand.
 * The demo is not rendered while `products` is empty, so it can never show an
 * invented result. To refresh: run the generator script against the Lumenta AI
 * app and paste its JSON into DEMO.
 */
export const DEMO = {
  "model": "claude-sonnet-5",
  "generated": "2026-10-22",
  "products": [
    {
      "id": "olive-oil",
      "product_name": "Extra virgin olive oil, 500 ml",
      "product_category": "Food & gourmet",
      "product_features": "Cold-pressed, single estate in Istria, Oblica and Leccino olives, harvested October 2025, 480 mg/kg polyphenols, dark glass bottle",
      "tone": "friendly",
      "outputs": {
        "english": {
          "product_title": "Istrian Extra Virgin Olive Oil, 500ml – Cold-Pressed Single Estate",
          "short_description": "Meet your new everyday extra virgin olive oil: cold-pressed from Oblica and Leccino olives on a single Istrian estate, bursting with 480 mg/kg polyphenols. Harvested October 2025 and bottled in protective dark glass, it's rich, peppery, and bursting with fresh-pressed flavor in every drizzle.",
          "key_benefits": [
            "Delivers rich, authentic flavor from single-estate Istrian olives",
            "Packed with 480 mg/kg polyphenols for added antioxidant support",
            "Cold-pressed shortly after October 2025 harvest to preserve freshness and nutrients",
            "Protective dark glass bottle shields oil from light to maintain quality",
            "Versatile for drizzling, dressing, dipping, and everyday cooking"
          ],
          "seo_meta_description": "Cold-pressed extra virgin olive oil from a single Istrian estate. High polyphenols, fresh October 2025 harvest, dark glass bottle. Shop 500ml now."
        },
        "croatian": {
          "product_title": "Extra djevičansko maslinovo ulje iz Istre, 500 ml – berba 2025",
          "short_description": "Hladno prešano extra djevičansko maslinovo ulje s jednog istarskog imanja, od sorti Oblica i Leccino. Bogato polifenolima (480 mg/kg), svježe ubrano u listopadu 2025. Čuva se u tamnoj staklenoj boci koja mu jamči okus i svježinu do zadnje kapi. Pravi zalogaj Istre na vašem stolu.",
          "key_benefits": [
            "Hladno prešano odmah nakon berbe za maksimalnu svježinu i aromu",
            "Visok udio polifenola (480 mg/kg) za bogat okus i antioksidativna svojstva",
            "Potječe s jednog istarskog imanja – bez miješanja s drugim uljima",
            "Tamna staklena boca štiti kvalitetu i produžuje trajnost nakon otvaranja",
            "Savršeno za salate, kruh i finalni dodatak toplim jelima"
          ],
          "seo_meta_description": "Extra djevičansko maslinovo ulje iz Istre, berba 2025., 480 mg/kg polifenola. Hladno prešano, jedno imanje, tamna boca 500 ml. Naručite danas!"
        },
        "german": {
          "product_title": "Natives Olivenöl Extra aus Istrien, 500 ml – kaltgepresst",
          "short_description": "Dieses native Olivenöl extra stammt von einem einzigen Gut in Istrien und wurde im Oktober 2025 geerntet. Mit 480 mg/kg Polyphenolen überzeugt es durch intensiven Geschmack und hohe Qualität. Kaltgepresst und in dunklem Glas abgefüllt, schützt es seine wertvollen Inhaltsstoffe perfekt – ein Genuss für jeden Tag.",
          "key_benefits": [
            "Kaltgepresst für maximalen Erhalt von Aroma und Nährstoffen",
            "Hoher Polyphenolgehalt (480 mg/kg) für besondere Qualität und gesundheitlichen Mehrwert",
            "Stammt von einem einzigen Estate in Istrien – volle Rückverfolgbarkeit",
            "Dunkles Glas schützt vor Lichteinfall und bewahrt die Frische",
            "Frische Ernte von Oktober 2025 aus Oblica- und Leccino-Oliven"
          ],
          "seo_meta_description": "Natives Olivenöl Extra aus Istrien, kaltgepresst, 480 mg/kg Polyphenole. Ernte 2025, dunkles Glas, 500 ml. Jetzt probieren!"
        }
      }
    },
    {
      "id": "dripper",
      "product_name": "Ceramic pour-over coffee dripper",
      "product_category": "Home & kitchen",
      "product_features": "Handmade stoneware, fits size 02 paper filters, spiral ribs for even extraction, dishwasher safe, made in a small studio in Zagreb",
      "tone": "professional",
      "outputs": {
        "english": {
          "product_title": "Handmade Ceramic Pour-Over Coffee Dripper - Stoneware, Size 02",
          "short_description": "Precision-crafted in a small Zagreb studio, this stoneware pour-over dripper features spiral ribs engineered for even extraction and a richer cup. Compatible with standard size 02 filters and dishwasher safe for effortless cleanup. A durable, design-forward addition to your daily brewing ritual.",
          "key_benefits": [
            "Achieves even extraction through engineered spiral rib design for a balanced, flavorful cup every time",
            "Fits widely available size 02 paper filters, eliminating dependency on proprietary accessories",
            "Retains brewing heat consistently thanks to durable handmade stoneware construction",
            "Cleans up effortlessly with full dishwasher-safe convenience",
            "Showcases authentic artisanal craftsmanship from a small studio in Zagreb, with natural variations in every piece"
          ],
          "seo_meta_description": "Handmade ceramic pour-over coffee dripper with spiral ribs for even extraction. Fits size 02 filters, dishwasher safe. Crafted in Zagreb."
        },
        "croatian": {
          "product_title": "Keramički dripper za pour-over kavu - ručna izrada, Zagreb",
          "short_description": "Ručno izrađen keramički dripper od kamenine koji donosi preciznost specijalty kave u vaš dom. Spiralna rebra osiguravaju ravnomjernu ekstrakciju i bogatiju aromu, dok praktična izrada u perilici posuđa štedi vaše vrijeme. Svaki komad nastaje u maloj studijskoj radionici u Zagrebu, s pažnjom posvećenom svakom detalju.",
          "key_benefits": [
            "Postigni ravnomjernu ekstrakciju zahvaljujući inovativnim spiralnim rebrima",
            "Uživaj u dugotrajnoj kvaliteti ručno izrađene kamenine otporne na habanje",
            "Pojednostavi svakodnevno čišćenje - dripper je potpuno siguran za perilicu posuđa",
            "Koristi lako dostupne filtere veličine 02 bez dodatnih kompliciranja",
            "Podrži lokalnu zanatsku proizvodnju s proizvodom izrađenim u Zagrebu"
          ],
          "seo_meta_description": "Ručno izrađen keramički dripper za pour-over kavu iz Zagreba. Spiralna rebra za savršenu ekstrakciju, siguran za perilicu posuđa."
        },
        "german": {
          "product_title": "Keramik Kaffeefilter Handfilter – Handgefertigt in Zagreb",
          "short_description": "Entdecken Sie puren Kaffeegenuss mit diesem handgefertigten Steingut-Handfilter. Die spiralförmigen Rillen sorgen für eine gleichmäßige Extraktion und ein vollmundiges Aroma. Passend für Papierfilter Größe 02, spülmaschinenfest und in einem kleinen Studio in Zagreb mit Liebe zum Detail gefertigt – ein Must-have für anspruchsvolle Kaffeeliebhaber.",
          "key_benefits": [
            "Gleichmäßige Extraktion dank innovativer Spiralrillen für aromatischen Kaffeegenuss",
            "Handgefertigt aus robustem Steingut – jedes Stück ein Unikat",
            "Kompatibel mit gängigen Papierfiltern der Größe 02",
            "Einfache Reinigung dank spülmaschinenfester Materialien",
            "Nachhaltig produziert in einem kleinen Studio in Zagreb"
          ],
          "seo_meta_description": "Handgefertigter Keramik Kaffeedripper aus Zagreb mit Spiralrillen für perfekte Extraktion. Spülmaschinenfest, passend für Filter Größe 02. Jetzt entdecken!"
        }
      }
    }
  ]
};

export const DEMO_UI = {
  en: {
    h2: 'Try it',
    input: 'Input',
    output: 'Lumenta AI output',
    product: 'Product',
    language: 'Output language',
    name: 'Name',
    category: 'Category',
    features: 'Features',
    tone: 'Tone',
    meta: 'Meta description:',
    generating: 'Writing…',
    note: 'Real Lumenta AI outputs, generated {date} and stored, so this demo makes no live AI calls. The input is the same for every language; only the output language changes.',
    products: { 'olive-oil': 'Olive oil', dripper: 'Coffee dripper' },
    tones: { friendly: 'Friendly', professional: 'Professional' },
  },
  hr: {
    h2: 'Isprobajte',
    input: 'Ulaz',
    output: 'Izlaz Lumenta AI-ja',
    product: 'Proizvod',
    language: 'Jezik izlaza',
    name: 'Naziv',
    category: 'Kategorija',
    features: 'Značajke',
    tone: 'Ton',
    meta: 'Meta opis:',
    generating: 'Pišem…',
    note: 'Stvarni izlazi Lumenta AI-ja, generirani {date} i spremljeni, pa ovaj demo ne radi pozive prema AI-ju uživo. Ulaz je isti za svaki jezik; mijenja se samo jezik izlaza.',
    products: { 'olive-oil': 'Maslinovo ulje', dripper: 'Keramički dripper' },
    tones: { friendly: 'Prijateljski', professional: 'Profesionalni' },
  },
  de: {
    h2: 'Ausprobieren',
    input: 'Eingabe',
    output: 'Ausgabe von Lumenta AI',
    product: 'Produkt',
    language: 'Ausgabesprache',
    name: 'Name',
    category: 'Kategorie',
    features: 'Merkmale',
    tone: 'Ton',
    meta: 'Meta-Beschreibung:',
    generating: 'Schreibe…',
    note: 'Echte Ausgaben von Lumenta AI, erzeugt am {date} und gespeichert – diese Demo ruft keine KI live auf. Die Eingabe ist für jede Sprache gleich; nur die Ausgabesprache ändert sich.',
    products: { 'olive-oil': 'Olivenöl', dripper: 'Kaffeefilter aus Keramik' },
    tones: { friendly: 'Freundlich', professional: 'Professionell' },
  },
};
