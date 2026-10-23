// Blog posts. Each one declares its own language and is published only in
// that language — a post is written for one audience, and a translation of a
// piece aimed at somebody else is a worse page than no page. The English posts
// are technical postmortems for a developer audience; the Croatian ones are
// about how the studio sells. Neither set is a translation of the other, so
// they are separate sections rather than an hreflang pair.
//
// Same content-as-data pattern as work[] and services[]: one place to edit, no
// CMS, no extra dependency, and it ships in the same static build.
//
// body[] is a small block language rendered generically by BlogPost.jsx:
//   { p: '...' }              paragraph
//   { h2: '...' }             section heading
//   { ul: ['...', '...'] }    bullet list
//   { code: 'lang', text }    code block
//   { quote: '...' }          pull quote / lesson line
//   { links: [{ text, href, note? }] }
//                             where to go next; '/…' is internal, https leaves
//
// cover is a variant key rendered by BlogCover.jsx — a small inline SVG
// diagram of the post's actual failure, not a stock photo. Same reasoning as
// the rest of this file: no CMS, no image pipeline, ships in the static build.

const posts = [
  {
    slug: 'greske-u-opisima-proizvoda',
    lang: 'hr',
    cover: 'spec-mismatch',
    title: 'Pregledali smo 30 hrvatskih webshopova. Ovih šest grešaka u opisima proizvoda ponavlja se posvuda',
    description:
      'U 24 od 30 hrvatskih webshopova našli smo greške u opisima proizvoda. Šest obrazaca koji se ponavljaju i kako svoju trgovinu provjeriti za 15 minuta.',
    date: '2026-10-24',
    tags: ['Webshop', 'Opisi proizvoda', 'SEO'],
    excerpt:
      'Najčešća greška nije loš stil nego opis koji tvrdi jedno, a specifikacija ispod njega drugo. Kupac tada ne zna čemu vjerovati, pa ne kupi.',
    body: [
      {
        p: 'U listopadu smo detaljno pregledali 30 hrvatskih nišnih webshopova: alate, rasvjetu, dječju opremu, opremu za kavu, hranu za ljubimce, vrtni namještaj, nautiku. Nismo gledali dizajn ni cijene, nego samo jedno: što kupac pročita kad otvori stranicu proizvoda.',
      },
      {
        p: 'U 24 od 30 trgovina našli smo barem jednu grešku koja kupca može zbuniti ili mu dati razlog da ode. U šest trgovina opisi su bili dobri, pa ih ovdje ne spominjemo dalje. Sve što slijedi su stvarni primjeri, ali bez imena trgovina: cilj nije prozivati nikoga, nego pokazati obrasce koji se ponavljaju.',
      },
      {
        p: 'Jedna napomena o metodi: za svaku trgovinu otvorili smo jednu do dvije stranice proizvoda, ne cijeli katalog. Brojke ispod zato su donja granica. Greška koju smo vidjeli na jednoj stranici rijetko je jedina u katalogu, jer je nastala istim postupkom kao i sve ostale.',
      },
      { h2: '1. Opis kaže jedno, specifikacija drugo' },
      {
        p: 'Najčešća i najskuplja greška, u sedam trgovina. Nekoliko primjera:',
      },
      {
        ul: [
          'SUP daska: 350 cm u opisu, 320 cm u specifikaciji.',
          'Električni moped: opis spominje drugi model iz iste serije i brzinu od 50 km/h, specifikacija ispod kaže 80 km/h.',
          'Auto žarulja: opis objašnjava kako radi s CANBUS sustavom, a specifikacija kaže da ga žarulja nema.',
          'Vrtna fotelja: opis kaže da je crna, a naslov i specifikacija da je antracit.',
          'Set nasadnih ključeva: cijeli opis govori o drugoj vrsti alata i drugim veličinama. Proizvod iz naslova u tekstu se uopće ne spominje.',
        ],
      },
      {
        p: 'Zašto je to gore od praznog opisa: prazan opis kupca ne informira, a proturječan ga tjera da posumnja u sve ostalo na stranici. Ako dužina nije točna, je li točna nosivost? Kupac koji nije siguran ili pita (i čeka odgovor), ili kupi drugdje.',
      },
      {
        p: 'Kako nastaje: opis je jednom napisan za sličan proizvod ili stariji model, pa kopiran. Specifikacija se kasnije ažurirala iz feeda dobavljača, a tekst nije.',
      },
      { h2: '2. Tekst proizvođača, preuzet od riječi do riječi' },
      {
        p: 'Sedam trgovina. Ponekad je to cijeli tehnički list proizvođača bez ijedne rečenice koja kaže kome je proizvod namijenjen, ponekad marketinški tekst o brendu u kojem o samom proizvodu ima tek nekoliko riječi.',
      },
      {
        p: 'Problem nije samo stil. Isti tekst ima svaka druga trgovina koja prodaje isti proizvod. Google za to ne kažnjava, ali od više stranica s istim tekstom obično prikaže jednu, a ostale ne. Ako taj opis ima dvadeset trgovina, velika je šansa da prikazana stranica nije vaša.',
      },
      { h2: '3. Engleski usred hrvatskog i strojni prijevod' },
      {
        p: 'Šest trgovina. Opis sjedala za bicikl potpuno na engleskom u inače hrvatskoj trgovini. Engleska rečenica o modi zalutala usred opisa dječjeg tricikla. Zemlja podrijetla napisana kao „Cambodia”. Naslov proizvoda na engleskom.',
      },
      {
        p: 'Strojni prijevod je podmukliji, jer na prvi pogled izgleda kao hrvatski. U jednom opisu umjesto „namjene” piše „sudbina”, jer je prevoditelj krivo shvatio riječ iz izvornika. U drugom rečenica „štiti od MacBook od 16”” koja se razumije tek kad se zamisli engleski original.',
      },
      {
        p: 'Kupac to ne doživljava kao jezičnu sitnicu, nego kao znak da trgovina nije pažljiva. A trgovini koja nije pažljiva s tekstom teže je vjerovati i s dostavom i reklamacijama.',
      },
      { h2: '4. Tipfeleri, krivo napisan brend i tekst bez dijakritika' },
      {
        p: 'Pet trgovina. Opis bez ijednog č, ć, š i ž („Velicina cestica”). Naziv brenda napisan s greškom, na stranici koja taj brend prodaje. Gramatičke greške preuzete iz loše prevedenog teksta proizvođača („Ukusni patka i losos”).',
      },
      {
        p: 'Tekst bez dijakritika ima i SEO posljedicu, ne samo estetsku: kupci pretražuju i s kvačicama i bez njih, a vi time sami birate da vas nađe samo dio njih.',
      },
      { h2: '5. Prazan opis ili trinaest riječi' },
      {
        p: 'Tri trgovine. Kartica „Opis” koja je potpuno prazna, pa kupac vidi samo pet stavki specifikacije. Klasična gitara s opisom od trinaest riječi, a upravo kod gitare kupac želi znati drvo, menzuru i za koga je. Maslinovo ulje s pedesetak riječi, bez ijedne o tome odakle je i po čemu je drugačije.',
      },
      {
        p: 'Ovo je najlakša greška za popraviti i ona koju kupac najviše primijeti, jer na stranici jednostavno nema ničega što bi ga uvjerilo.',
      },
      { h2: '6. Nema meta opisa' },
      {
        p: 'Najmanje četiri trgovine, a vjerojatno i više, jer meta opis nismo provjerili svugdje. Meta opis je tekst koji Google prikazuje ispod naslova u rezultatima pretraživanja. Kad ga nema, Google sam izabere komad teksta sa stranice, a to je često početak tehničkog lista ili rečenica iz podnožja.',
      },
      {
        p: 'Google ni postojeći meta opis ne prikazuje uvijek, ali kad ga nema, šansa da u rezultatima stoji nešto što prodaje pada gotovo na nulu.',
      },
      {
        quote: 'Kupac ne vidi vaš proces, nego samo rezultat. A rezultat kojemu ne vjeruje ne kupuje.',
      },
      { h2: 'Bonus: zdravstvene tvrdnje' },
      {
        p: 'Jedna trgovina dodacima prehrani imala je opise sa zdravstvenim tvrdnjama bez izvora i proizvod čiji naziv obećava sastojak kojeg u sastavu nema. To nije stilski problem nego regulatorni: tvrdnje o zdravlju na hrani i dodacima prehrani u EU smiju biti samo one s odobrenog popisa. Ako prodajete takve proizvode, opis mora prodavati i biti usklađen, i to je posao za nekoga tko poznaje pravila.',
      },
      { h2: 'Kako provjeriti svoju trgovinu za 15 minuta' },
      {
        p: 'Ne treba vam alat ni agencija da biste vidjeli imate li ove probleme. Odaberite pet proizvoda: dva najprodavanija, dva nasumična i jedan koji ste dodali najnovije. Za svaki provjerite:',
      },
      {
        ul: [
          'Slažu li se brojke u opisu s brojkama u specifikaciji i naslovu? Dimenzije, težina, snaga, model, boja.',
          'Kopirajte jednu rečenicu iz opisa i pretražite je pod navodnicima. Ako je ima još deset trgovina, tekst nije vaš.',
          'Ima li ijedna rečenica na engleskom, ili rečenica koja zvuči kao prijevod?',
          'Ima li opis č, ć, š, ž i đ? Je li naziv brenda napisan točno?',
          'Govori li opis kome je proizvod namijenjen i zašto baš on, ili samo nabraja specifikaciju?',
          'Utipkajte naziv proizvoda u Google i pogledajte tekst ispod vaše stranice. Je li to nešto što ste vi napisali?',
        ],
      },
      {
        p: 'Ako je sve u redu na pet proizvoda, vjerojatno ste među onih šest trgovina koje ne trebaju ništa mijenjati. Ako nije, pogreška je gotovo sigurno sustavna, jer su i ostali opisi nastali na isti način.',
      },
      { h2: 'Što s tim' },
      {
        p: 'Za desetak artikala dovoljno je sjesti i ispraviti ih ručno. Za stotine i tisuće artikala pravi posao nije pisanje nego postupak: tekst koji se piše iz provjerenih podataka o proizvodu, uz provjeru da opis ne tvrdi ništa što specifikacija ne potvrđuje, i čovjek koji pročita prije objave.',
      },
      {
        p: 'Tako radimo i mi. Svaki opis koji napravimo provjeravamo tvrdnju po tvrdnju prema izvornim podacima, a proturječja koja nađemo u vašim podacima ne skrivamo nego vam ih označimo, jer su ona najčešće pravi problem.',
      },
      { h2: 'Gdje dalje' },
      {
        links: [
          { text: 'Opisi proizvoda za webshop kao projekt', href: '/hr/services/ai-opisi-proizvoda-za-webshop', note: 'primjer opisa i česta pitanja' },
          { text: 'Opisi proizvoda: sami, alatom ili s agencijom?', href: '/hr/blog/opisi-proizvoda-sami-alat-ili-agencija', note: 'koji put odgovara vašem katalogu' },
          { text: 'Vodič: automatizirajte opise proizvoda uz n8n i AI', href: '/hr/vodici/automatizacija-opisa-proizvoda', note: 'besplatno, oko 30 minuta' },
        ],
      },
    ],
  },
  {
    slug: 'nitko-ovo-ne-radi',
    lang: 'hr',
    cover: 'three-answers',
    relatedWork: 'docuflow-ai',
    title: '„Nitko ovo ne radi” gotovo nikad nije prilika',
    description:
      'Rečenica „ne postoji ništa slično” ima tri moguća objašnjenja, a samo je jedno bezopasno. Četiri stvarne ideje, razlozi zašto ne postoje i kako to provjeriti za 20 minuta.',
    date: '2026-10-11',
    tags: ['Ideje', 'Validacija', 'Tržište'],
    excerpt:
      'Rečenica koja zvuči kao najjači argument za ideju najčešće je znak da istraga nije ni počela.',
    body: [
      {
        p: 'Gotovo svaka ideja za aplikaciju koju vidimo ima istu rečenicu: „Ne postoji ništa slično.” Ili blaže: „Postoje alati, ali nijedan ne radi ovo kako treba.”',
      },
      {
        p: 'Ta rečenica zvuči kao najjači argument za ideju. U praksi je najčešće znak da istraga nije ni počela. Može biti točna, ali to treba dokazati, a ne pretpostaviti.',
      },
      { h2: 'Tri stvarna odgovora' },
      {
        p: 'Kad se pitanje „zašto ovo ne postoji” shvati ozbiljno, odgovor je gotovo uvijek jedan od tri:',
      },
      {
        ul: [
          'Postoji, samo ga niste našli. Pretraživali ste na hrvatskom, samo prvu stranicu rezultata ili svoj naziv za rješenje umjesto riječi kojima drugi opisuju problem.',
          'Postojao je, pa je nestao. Netko je probao, potrošio novac i odustao. Ta priča vrijedi više od bilo koje analize tržišta, jer pokazuje gdje je zid.',
          'Ne postoji jer ga nešto ne dopušta: zakon, povjerenje, odgovornost ili ekonomija tržišta. Ideja nije nova, nego je prepreka stara.',
        ],
      },
      {
        p: 'Prvi odgovor je najbezopasniji: znači da ulazite na tržište s konkurencijom, što nije loše. Treći je najopasniji, jer ga je najlakše ne vidjeti dok nešto već niste izgradili.',
      },
      { h2: 'Četiri ideje, četiri razloga' },
      {
        p: 'Sve četiri su stvarne ideje koje smo nedavno provukli kroz naš filter od 12 pitanja, i sve četiri su tvrdile da nešto ne postoji.',
      },
      {
        p: 'Dating aplikacija u kojoj se ne može samo „swipeati”, nego treba reagirati na konkretan detalj iz profila. Tvrdnja: sve aplikacije teže brzim matchevima. Stvarnost: Hinge radi upravo to i na tome je izgradio cijeli brend. Prvi odgovor: postoji, samo nije pronađen.',
      },
      {
        p: 'Digitalni izvršitelj, aplikacija koja obitelji šalje lozinke ako se korisnik dulje vrijeme ne javi. Tvrdnja: nema jednostavnog rješenja za prosječnog čovjeka. Stvarnost: Google ima upravitelja neaktivnog računa, Apple omogućuje kontakt koji nasljeđuje pristup računu, a neki upravitelji lozinki imaju hitni pristup za člana obitelji. Besplatno, i od tvrtki kojima ljudi već vjeruju. Ono što nedostaje, čuvanje tuđih lozinki u novoj i maloj aplikaciji, nedostaje s razlogom: povjerenje.',
      },
      {
        p: 'Prehrambeni plan za ljude s kroničnim bolestima, prema sadržaju hladnjaka i današnjim simptomima. Tvrdnja: postojeće aplikacije su previše općenite. Stvarnost: softver koji daje individualne preporuke za upravljanje bolešću u EU može spadati pod propise o medicinskim proizvodima, s certifikacijom koja traje godinama. Verzija bez bolesti i simptoma nije regulirana, ali je onda samo još jedna aplikacija s receptima. Treći odgovor: prepreka je zakon.',
      },
      {
        p: 'Platforma za male poslove u kvartu, od sastavljanja ormara do čuvanja psa na dva sata. Tvrdnja: postoje samo globalne platforme i nepregledne oglasnice. Stvarnost: TaskRabbit postoji i u vlasništvu je IKEA-e, ali radi u velikim gradovima. Platforma treba dovoljno ljudi na obje strane, u isto vrijeme, unutar par kilometara. A nakon prvog dobrog posla ljudi razmijene brojeve i platforma im više ne treba. Treći odgovor: prepreka je ekonomija tržišta.',
      },
      { h2: 'Kako to provjeriti za 20 minuta' },
      {
        p: 'Ne treba vam analiza tržišta. Treba vam dvadeset minuta i malo nepovjerenja prema vlastitoj ideji.',
      },
      {
        ul: [
          'Opišite problem na engleskom, na tri različita načina, i pretražite svaki. Ne tražite svoj naziv za rješenje, nego riječi kojima bi korisnik opisao muku.',
          'Pretražite App Store i Google Play, ne samo web. Mnogi potrošački proizvodi postoje samo kao aplikacija.',
          'Uz ime prvog pronađenog proizvoda dodajte „alternative”. Stranice s usporedbama izlistaju cijelu kategoriju odjednom.',
          'Potražite „shut down” ili „zašto se ugasio” uz naziv kategorije. Ugašeni projekti su najjeftinija lekcija koju ćete ikad dobiti.',
          'Pitajte jednu osobu iz branše. Ona često zna ne samo što postoji, nego i zašto nešto ne postoji.',
        ],
      },
      {
        p: 'Ako ni nakon toga ne nađete ništa, tek tada postaje zanimljivo. Ali sada imate pitanje koje vrijedi više od same ideje: koji od tri razloga vrijedi ovdje?',
      },
      { h2: 'Kada je ipak prilika' },
      {
        p: 'Ideja koja ne postoji može biti dobra. Tada obično vrijedi jedno od dvoje:',
      },
      {
        ul: [
          'Prepreka je lokalna. Veliki igrači ne rade za hrvatski jezik, hrvatske propise ili hrvatske dokumente, jer im se to ne isplati. Za njih je tržište premalo, a za nekoga tko je ovdje dovoljno je veliko.',
          'Imate nešto što drugi nemaju: pristup, znanje ili podatke koji ruše upravo onu prepreku zbog koje ideja ne postoji.',
        ],
      },
      {
        p: 'Tako je nastao i DocuFlow. Fiskalizaciju 2.0 pratili smo dok još nije bilo jasno kako će raditi i vidjeli da obavezni eRačun ne pokriva sve: ostaju skenirani, fotografirani i PDF računi. Globalni alati to ne rade za hrvatsko tržište, ne zato što se nitko nije sjetio, nego zato što im je premalo.',
      },
      {
        quote: 'Pitanje nije postoji li nešto slično. Pitanje je zašto ne postoji i jeste li vi ti koji taj razlog možete ukloniti.',
      },
      {
        p: 'Ako imate ideju i niste sigurni na koji ste od tri odgovora naišli, provucite je kroz naš filter ili nam je pošaljite, pa ćemo je pogledati zajedno.',
      },
      { h2: 'Gdje dalje' },
      {
        links: [
          { text: '12 pitanja koja postavimo svakoj ideji prije prve linije koda', href: '/hr/blog/filter-ideja-12-pitanja', note: 'cijeli filter, s primjerima' },
          { text: 'DocuFlow: kako je nastao', href: '/hr/work/docuflow-ai', note: 'prilika koju je otvorila lokalna prepreka' },
        ],
      },
    ],
  },
  {
    slug: 'filter-ideja-12-pitanja',
    lang: 'hr',
    cover: 'idea-filter',
    title: '12 pitanja koja postavimo svakoj ideji prije prve linije koda',
    description:
      'Filter od 12 pitanja kroz koji provučemo svaku ideju za aplikaciju, našu ili klijentovu: četiri pitanja koja je ruše i osam koja je boduju. Traje deset minuta, štedi mjesece.',
    date: '2026-10-11',
    tags: ['Ideje', 'Validacija', 'Proizvod'],
    excerpt:
      'Većina aplikacija ne propadne zbog lošeg koda, nego zbog pitanja koje nitko nije postavio prije nego što je kod napisan.',
    body: [
      {
        p: 'Većina aplikacija ne propadne zbog lošeg koda. Propadne zbog pitanja koje nitko nije postavio prije nego što je kod napisan: smije li se to uopće raditi, tko će platiti i zašto to već netko ne radi.',
      },
      {
        p: 'Zato svaku ideju, našu ili klijentovu, prije početka provučemo kroz isti filter od 12 pitanja. Traje pet do deset minuta. Ovdje ga dijelimo cijelog, onako kako ga sami koristimo.',
      },
      { h2: 'Kako filter radi' },
      {
        ul: [
          'Eliminacija: četiri pitanja na koja je dovoljan jedan loš odgovor da ideja padne. Ovdje se ne boduje i ne pregovara.',
          'Bodovanje: ideje koje prođu eliminaciju dobivaju 0, 1 ili 2 boda na osam pitanja, najviše 16.',
          'Odluka: 12 bodova ili više znači da vrijedi provjeriti potražnju. Između 8 i 11: suzite ideju i ocijenite je ponovno. Ispod 8: u ladicu.',
        ],
      },
      {
        p: 'Eliminacija ide prva jer odvaja ideje koje su teške od onih koje su za vas nemoguće. Visok zbroj bodova ne spašava ideju koja u srži krije pravni ili sigurnosni problem.',
      },
      { h2: 'Prvi dio: četiri pitanja koja ruše ideju' },
      {
        p: '1. Zašto ovo već ne postoji? Ako je odgovor „nitko se nije sjetio”, provjerite još jednom. Gotovo uvijek postoji ili isti proizvod, ili razlog zašto ga nema: zakon, povjerenje ili odgovornost. Pravo pitanje je možete li taj razlog riješiti bolje od drugih.',
      },
      {
        p: '2. Je li područje regulirano? Zdravlje, pravni savjeti, financije, čuvanje tuđeg novca ili lozinki, podaci o djeci. Ako jest, postoji li siguran, informativni oblik proizvoda koji ne prelazi tu granicu? Ako ne postoji, ideja otpada.',
      },
      {
        p: '3. Koja je najgora greška? Zamislite da aplikacija pogriješi. Je li posljedica neugodnost ili stvarna šteta za zdravlje, novac ili nešto nepovratno? Ako je šteta, može li je sama arhitektura spriječiti, primjerice provjerom ili čovjekom koji potvrđuje odluku?',
      },
      {
        p: '4. Može li to nositi vaš oblik poslovanja? Obrtnik za obveze obrta odgovara cijelom svojom imovinom. Može li jedan nezadovoljan korisnik napraviti štetu veću od godišnjeg prihoda? Ako može, ideja traži drugačiju strukturu, osiguranje ili odustajanje.',
      },
      { h2: 'Drugi dio: osam pitanja za bodovanje' },
      {
        p: 'Svako pitanje nosi 0, 1 ili 2 boda. Bodujte strogo: kad dvojite između dvije ocjene, uzmite nižu.',
      },
      {
        ul: [
          'Bol u trenutku: plaća li korisnik sada, za problem koji ima danas? 0 bodova ako je „bilo bi lijepo imati”, 2 ako je problem hitan i košta ga novca ili vremena.',
          'Plaćanje: tko plaća, koliko i koliko često? 0 ako nije jasno tko bi platio, 2 ako postoji jasan kupac i model koji odgovara tome koliko često se proizvod koristi.',
          'Besplatna alternativa: radi li nešto besplatno 80 % posla? 0 ako da, i već je u rukama korisnika. 2 ako ne postoji ili je znatno slabija.',
          'Ponovna upotreba: koliko možete preuzeti iz onoga što već imate? 0 ako sve gradite od nule, 2 ako veći dio tehnologije već postoji.',
          'Validacija u dva tjedna: možete li dokazati potražnju prije koda? 0 ako se potražnja vidi tek s gotovim proizvodom, 2 ako je pokažu landing stranica, lista čekanja ili ručni pilot.',
          'Dostupnost kupaca: znate li gdje je prvih sto kupaca? 0 ako su „svi” ciljana skupina, 2 ako znate grupe, kanale ili ljude po imenu.',
          'Trošak po korisniku: ostaje li marža pozitivna? 0 ako AI, API ili infrastruktura pojedu cijenu, 2 ako je trošak nizak ili se dijeli među korisnicima.',
          'Strateška vrijednost: što dobivate ako ideja ne uspije kao posao? 0 ako ništa osim izgubljenog vremena, 2 ako ostaje referenca, znanje ili dio koji koristite drugdje.',
        ],
      },
      {
        p: 'Ocjena 1 je sve između. U našem iskustvu besplatna alternativa ruši najviše ideja. Strateška vrijednost je razlog zašto ponekad gradimo i ono što neće biti veliki posao, ali će pokazati što znamo.',
      },
      { h2: 'Ideja koja pada: digitalni izvršitelj' },
      {
        p: 'Aplikacija čuva korisnikove lozinke i šalje ih obitelji ako se korisnik određeno vrijeme ne javi. Zvuči korisno i emotivno je jaka. Pada već na eliminaciji:',
      },
      {
        ul: [
          'Regulacija: čuvanje tuđih lozinki i pristup računima preminule osobe pravno su osjetljivi.',
          'Najgora greška: lažni okidač (bolnica, izgubljen mobitel, tjedan bez signala) šalje lozinke, a to se ne može poništiti.',
          'Oblik poslovanja: jedno curenje podataka znači štetu koju mala tvrtka ne može pokriti.',
        ],
      },
      {
        p: 'Problemi su u samoj srži ideje, ne u izvedbi, pa ih bolji kod ne rješava.',
      },
      { h2: 'Ideja koja prođe, ali ne dovoljno: planer vremena kao budžet' },
      {
        p: 'Korisnik tjedno ima 168 sati i raspoređuje ih u „omotnice”, kao novac u aplikacijama za budžet. Eliminaciju prolazi lako: nije regulirano i greška nikome ne može naštetiti.',
      },
      {
        p: 'Bodovanje daje oko 10 od 16. Trošak po korisniku i strateška vrijednost su jaki, ali bol nije hitna, a besplatnih alata za planiranje je puno. Rezultat nije „ne”, nego „suzite”: pronađite ono po čemu se razlikuje od kalendara, pa ocijenite ponovno.',
      },
      {
        quote: 'Filter ne kaže koja će ideja uspjeti. Kaže koju ne vrijedi graditi i što treba provjeriti prije prve linije koda.',
      },
      { h2: 'Najteže je primijeniti ga na vlastite ideje' },
      {
        p: 'Filter najviše vrijedi upravo na idejama u koje ste već zaljubljeni. Tamo je najlakše preskočiti pitanje koje boli, ili dati 2 boda gdje pošteno ide 1.',
      },
      {
        p: 'Imate ideju za aplikaciju i niste sigurni prolazi li? Pošaljite nam je, pa ćemo je zajedno provući kroz svih 12 pitanja.',
      },
    ],
  },
  {
    slug: 'opisi-proizvoda-sami-alat-ili-agencija',
    lang: 'hr',
    cover: 'ladder',
    title: 'Opisi proizvoda za webshop: sami, alatom ili s agencijom?',
    description:
      'Tri načina da webshop dobije vlastite opise proizvoda, s pravim cijenama: besplatno sami, alatom od 19 $ mjesečno ili projektom od 2 € po opisu. Kako odabrati prema broju artikala i jezika.',
    date: '2026-09-30',
    tags: ['Webshop', 'Opisi proizvoda', 'AI'],
    excerpt:
      'Nije pitanje koji je način najbolji, nego koji odgovara vašem katalogu. Dva pitanja to odluče: koliko artikala imate i na koliko jezika prodajete.',
    body: [
      {
        p: 'Katalog bez opisa, ili s opisima prepisanim od dobavljača, problem je gotovo svakog webshopa. Rješenja ima više nego ikad, i zato je teško odabrati: jedni kažu da to napravite sami za pola sata, drugi prodaju pretplatu, treći nude projekt od nekoliko tisuća eura.',
      },
      {
        p: 'Mi nudimo sva tri puta — besplatni vodič, vlastiti alat i projekt — pa ovdje nemamo razloga gurati najskuplji. Najskuplji je za većinu trgovina pogrešan izbor.',
      },
      { h2: 'Dva pitanja koja odluče umjesto vas' },
      {
        ul: [
          'Koliko artikala treba opisati — i koliko novih dolazi svaki mjesec?',
          'Na koliko jezika prodajete?',
        ],
      },
      {
        p: 'Treće pitanje je manje očito, ali jednako važno: tko će pregledati tekst prije objave. Svaki od tri puta pretpostavlja da netko pročita opis prije nego što ga vidi kupac. AI zna pogriješiti u činjenicama — dimenziji, materijalu, kompatibilnosti — i to ne smije otkriti kupac.',
      },
      { h2: '1. Sami, uz besplatni vodič' },
      {
        p: 'Napravite vlastitu automatizaciju: u Google tablicu upišete naziv i značajke proizvoda, a radni tok u alatu n8n pošalje ih AI modelu i upiše gotov opis natrag u tablicu. Programiranje nije potrebno. Postavljanje traje oko pola sata, a naš vodič prolazi svaki korak.',
      },
      {
        p: 'Cijena: n8n na vlastitom računalu ili serveru je besplatan. Plaćate samo pozive AI modelu, izravno pružatelju (OpenAI ili Anthropic), po potrošnji.',
      },
      {
        p: 'Za koga: imate nekoga tko se ne boji tablice i postavljanja, želite potpunu kontrolu nad uputama koje model dobiva i ne smeta vam da je održavanje vaše. Kad se nešto promijeni, popravljate vi.',
      },
      { h2: '2. Alat: bez postavljanja, po kreditima' },
      {
        p: 'Lumenta AI je naš alat koji radi isto bez ikakvog postavljanja. Upišete naziv i značajke proizvoda, odaberete ton i jezik (hrvatski, engleski ili njemački) i dobijete opis.',
      },
      {
        ul: [
          'Pri registraciji dobivate 10 besplatnih kredita — dovoljno da isprobate na vlastitim artiklima.',
          'Pro: 19 $ mjesečno, 500 kredita.',
          'Business: 49 $ mjesečno, 2.000 kredita.',
          'Jedan opis troši jedan kredit. Krediti se obnavljaju mjesečno i dijele se s ostalim alatima u paketu.',
        ],
      },
      {
        p: 'Za koga: desetci do nekoliko stotina artikala, i novi artikli koji stalno pristižu. Opišete ih onda kad dođu, bez čekanja na nekoga.',
      },
      {
        p: 'Granica koju trebate znati prije pretplate: opisi se generiraju jedan po jedan, kroz obrazac. Nema uvoza cijelog kataloga odjednom. Za trideset novih artikala mjesečno to nije problem; za katalog od tisuću artikala to je tisuću unosa, i tada vam treba treći put.',
      },
      { h2: '3. Projekt: cijeli katalog, jedan ili više jezika' },
      {
        p: 'Ovdje radimo mi. Proces postavimo na vaš ton i vaše nazivlje, pa prođemo cijeli katalog. Vi pregledavate i odobravate prije objave.',
      },
      {
        ul: [
          'Prvih 100 opisa: 2 € po opisu.',
          'Od 101. do 500. opisa: 1,50 € po opisu.',
          'Svaki opis iznad petstotog: 1 €.',
          'Minimalna narudžba: 150 €. Katalog od 500 artikala ukupno je 800 €, od tisuću 1.300 €.',
        ],
      },
      {
        p: 'U cijenu su uključeni opis, naslov i meta opis za Google te jedan krug ispravaka, a isporučujemo tablicu spremnu za uvoz u webshop. Cijene su bez PDV-a. Kod više jezika opise pišemo na jeziku tržišta, s nazivljem kojim se tamo pretražuje, a ne tako da hrvatski tekst provučemo kroz prevoditelj.',
      },
      {
        p: 'Za usporedbu: objavljene hrvatske cijene za pisanje opisa kreću se od 5 do 25 € po opisu. Katalog od tisuću artikala je po toj logici 5.000 do 25.000 €, a kod nas 1.300 €.',
      },
      {
        p: 'Za koga: tisuće artikala, više tržišta, i nitko u timu tko bi to stigao sam.',
      },
      { h2: 'Kako odabrati u jednoj minuti' },
      {
        ul: [
          'Stotinjak artikala i netko tko ih stigne napisati? Ne treba vam ništa od ovoga. Iskreno.',
          'Želite razumjeti kako to radi i imate pola sata? Vodič.',
          'Desetci do nekoliko stotina artikala, novi stalno dolaze? Alat.',
          'Tisuću artikala i više, ili više od jednog jezika? Projekt.',
        ],
      },
      {
        quote: 'Pravi izbor ne ovisi o tome koliko želite potrošiti, nego o tome koliko artikala imate i tko će ih pregledati.',
      },
      { h2: 'Što vrijedi za sva tri puta' },
      {
        p: 'Nemojte ostaviti opise dobavljača. Uvriježeno je da Google za duplicirani sadržaj kažnjava, a ne kažnjava — to stoji u njegovoj vlastitoj dokumentaciji. Ono što radi je tiše: od više stranica s istim tekstom prikaže jednu, a ostale ne. Ako isti opis ima dvadeset trgovina, velika je šansa da prikazana stranica nije vaša.',
      },
      {
        p: 'Dajte modelu prave podatke. Opis je dobar onoliko koliko su dobre značajke koje upišete. „Majica, pamuk” daje općenit tekst; „majica, 100 % organski pamuk, 180 g/m², kroj oversize” daje tekst koji prodaje.',
      },
      {
        p: 'I na kraju, već spomenuto: netko mora pročitati prije objave. To nije posao koji alat — ni naš — radi umjesto vas.',
      },
      { h2: 'Gdje dalje' },
      {
        links: [
          { text: 'Vodič: automatizirajte opise proizvoda uz n8n i AI', href: '/hr/vodici/automatizacija-opisa-proizvoda', note: 'besplatno, oko 30 minuta' },
          { text: 'Lumenta AI', href: 'https://lumenta.shop', note: '10 besplatnih kredita pri registraciji' },
          { text: 'Opisi proizvoda za webshop kao projekt', href: '/hr/services/ai-opisi-proizvoda-za-webshop', note: 'pojasevi, primjeri i česta pitanja' },
        ],
      },
    ],
  },
  {
    slug: 'cijene-na-stranici',
    lang: 'hr',
    cover: 'price-filter',
    title: 'Cijene nismo objavili zbog kupaca, nego zbog sebe',
    description:
      'Objavljena cijena ne prodaje, nego filtrira — i prije toga tjera vas da napišete što zapravo prodajete. Što smo otkrili kad smo rasponima morali pridružiti sadržaj.',
    date: '2026-09-29',
    tags: ['Ponuda', 'Cijene', 'Pozicioniranje'],
    excerpt:
      'Uobičajen savjet je da se cijena ne objavljuje jer gubite pregovarački prostor. Ono što se stvarno gubi su tri e-maila dok obje strane ne shvate da nisu u istom redu veličine.',
    body: [
      {
        p: 'Ažurirano 24. 10. 2026.: opise proizvoda za webshop danas naplaćujemo po opisu (od 2 € po opisu, minimalno 150 €), a ne u pojasevima koji se spominju niže. Ovaj tekst opisuje kako su prve objavljene cijene nastale; aktualni cjenik je na stranici usluge.',
      },
      {
        p: 'Uobičajen savjet glasi: cijenu ne stavljaj na stranicu. Izgubit ćeš pregovarački prostor, konkurencija će je vidjeti, a svaki je projekt ionako drugačiji. Sve troje je točno. I svejedno smo cijene objavili.',
      },
      {
        p: 'Razlog nije bio marketinški. Kad nemate objavljenu cijenu, svaki upit počinje uzajamnim pogađanjem: vi pokušavate procijeniti koliko čovjek misli potrošiti, on pokušava procijeniti jeste li preskupi da bi uopće pitao. To se razriješi oko trećeg e-maila, kad netko konačno spomene broj i ispostavi se da ste cijelo vrijeme razgovarali o različitim projektima.',
      },
      {
        p: 'Taj razgovor nije besplatan. Košta vas sat vremena i njega tjedan dana čekanja, a završi ničim. Objavljena cijena taj sat ne štedi kupcu — štedi ga vama, i to prije nego što je potrošen.',
      },
      { h2: 'Prvo iznenađenje: nismo znali što prodajemo' },
      {
        p: 'Cijenu je lako napisati. Teško je napisati što je u njoj.',
      },
      {
        p: 'Naš prvi cjenik imao je pojas „6.000 – 12.000 € — interni alat ili dashboard s korisnicima”. Izgledao je razumno dok me netko nije pitao što to točno znači. Nisam imao dobar odgovor, a cijenu sam postavio sam.',
      },
      {
        quote: 'Ako čovjek koji je postavio cijenu ne zna objasniti što je u pojasu, kupac koji dolazi s Googlea nema nikakve šanse.',
      },
      {
        p: 'Problem nije bio u brojci nego u jeziku. „Interni alat ili dashboard” je način na koji mi opisujemo arhitekturu. Kupac svoj problem ne zove tako — on ima evidenciju radnih naloga koju terenski tim popunjava na papiru, ili Excel s deset kartica iz kojeg netko ručno slaže ponude. To su riječi koje on i upisuje u Google.',
      },
      {
        p: 'Prepravili smo sve pojaseve tako da svaki ima primjere umjesto kategorije. Izbacili smo riječ „dashboard” jer je prazna za onoga tko traži rješenje, a i nitko je ne pretražuje.',
      },
      {
        p: 'To je bio stvarni ishod objave cijena, a dogodio se prije nego što ih je ijedan kupac vidio: morali smo odgovoriti na pitanja koja smo dotad uspješno izbjegavali.',
      },
      { h2: 'Cijena filtrira, ne prodaje' },
      {
        p: 'Objavljeni raspon ne uvjerava nikoga da vas nazove. Njegov posao je suprotan — da odvrati onoga koga bi razgovor svejedno razočarao.',
      },
      {
        p: 'Naš najniži pojas za web aplikacije počinje na 6.000 €. Ta brojka kaže „ovo nije prezentacijska stranica od pet podstranica” jasnije nego bilo koji odlomak teksta na stranici usluga. Tko traži takvu stranicu, otiđe — i dobro je da ode, jer bismo mu ionako rekli da će jeftinije proći s gotovim rješenjem.',
      },
      {
        p: 'Zato je objavljena cijena ujedno i izjava o tome kakve probleme rješavate. Raspon od 1.500 do 12.000 € za opise cijelog kataloga govori da naplaćujete po katalogu, a ne po komadu — a to je cijeli poslovni model sažet u jedan redak.',
      },
      {
        p: 'Usput, taj redak ima i konkurentsku težinu koje nismo bili svjesni dok nismo provjerili. Objavljene hrvatske cijene za pisanje opisa kreću se od 5 do 25 € po opisu. Katalog od tisuću artikala je po toj logici 5.000 do 25.000 €. Naš gornji pojas za isti posao na više jezika je 12.000 €. Nismo bili malo jeftiniji nego jeftiniji za red veličine — i to nigdje nije pisalo dok cijenu nismo objavili.',
      },
      { h2: 'Tri stvari koje objavljena cijena ne smije biti' },
      {
        ul: [
          'Satnica pored projektnog dna. Ako pišete „od 6.000 €” i „70 €/h”, kupac će podijeliti i doći do 86 sati — pa pregovarati o satima umjesto o opsegu. Objavite jedno ili drugo.',
          'Jedan raspon preko cijele ponude. „Od 1.500 do 45.000 €” nije cijena nego raspon tržišta. Nekoliko užih pojaseva, svaki s primjerom, kupcu kaže u kojem je on; jedan široki raspon ne kaže ništa.',
          'Nejasno oko PDV-a. Napišite da je bez PDV-a od prvog dana. Ako uđete u sustav kasnije, inače to izgleda kao poskupljenje od 25 %.',
        ],
      },
      { h2: 'Ljestvica umjesto zida' },
      {
        p: 'Druga stvar koju smo promijenili tiče se onoga što nudimo besplatno.',
      },
      {
        p: 'Imali smo tri vodiča o automatizaciji — opisi proizvoda, objave na mrežama, AI podrška — zaključana kao PDF-ovi iza e-mail forme na zasebnoj poddomeni. Provjerili smo: Google o toj poddomeni nije znao ništa. Nula indeksiranih dokumenata. Tri korisna teksta, nevidljiva.',
      },
      {
        p: 'Objavili smo ih kao stranice, u cijelosti, bez upisivanja e-maila. PDF je ostao kao pakirana verzija za one koji ga žele, pa se lista i dalje puni — samo više nije jedini put do tog znanja.',
      },
      {
        quote: 'Tko će sam postaviti n8n, ionako ne bi bio klijent. Tko neće, sad vidi da znamo o čemu govorimo.',
      },
      {
        p: 'Svaki vodič sad završava s tri izlaza poredana po tome koliko čitatelja koštaju: napravi sam, koristi naš alat, mi to odradimo. Ranije su bila dva — vodič i usluga od nekoliko tisuća eura — pa je čovjek koji je pročitao osam koraka i pomislio „ovo je previše petljanja” ostajao bez sredstva. Srednja prečka je nedostajala.',
      },
      { h2: 'Što još ne znamo' },
      {
        p: 'Cijene su na stranici tek nekoliko dana. Nemamo podatke o tome je li upita manje, jesu li bolji, ni koliko ih je cijena odvratila. Tko vam nakon tjedan dana ponudi takvu brojku, izmislio ju je.',
      },
      {
        p: 'Ono što već znamo je uže, ali sigurnije: da bismo cijenu napisali, morali smo definirati pet usluga preciznije nego ikad dotad. Taj dio se isplatio prije nego što je itko kliknuo.',
      },
      { h2: 'Gdje dalje' },
      {
        links: [
          { text: 'Aktualni cjenik opisa proizvoda', href: '/hr/services/ai-opisi-proizvoda-za-webshop', note: 'cijena po opisu, s primjerima' },
        ],
      },
    ],
  },
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
