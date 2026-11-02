# Lumenta Labs — landing

Next.js stranica za `lumentalabs.studio`. Domena je već na **Hostinger Business
hostingu** koji podržava Node.js Web Apps; deploy ide preko GitHuba, s
automatskim redeployom na svaki push.

## Prije objave

Sve što je tvoja odluka je u `site.config.js` — namjerno nije nagađano:

| Polje | Što treba |
|---|---|
| `email` | Trenutno `hello@lumentalabs.studio`. **Provjeri postoji li ta adresa** ili je zamijeni. Osobna adresa nije upisana namjerno. |
| `reels` | Po jedan URL po jeziku (YouTube / Vimeo / R2). Za jezik bez unosa cijela sekcija s videom se ne prikazuje — nema fallbacka na engleski. |
| `work[].href` | Linkovi na Bezmaske, Lumenta AI, The Dog Habit i UnmaskedWords. |

## Lokalno

```
npm install
npm run dev
```

## Deploy na Hostinger

1. hPanel → `lumentalabs.studio` je već na Business planu.
   Websites → Add Website → **Node.js Apps** → Import Git Repository.
2. Build postavke bi se trebale same prepoznati. Ako ne: build `npm run build`,
   start `npm start`.
3. SSL je automatski, nginx ne diraš.

## Kontakt forma

`app/api/contact/route.js` šalje svaki upit kao jedan email preko Resenda na
`hello@lumentalabs.studio` (reply-to je posjetiteljev email). Baze nema — inbox je
zapis. Ranije je forma pisala u Supabase Free projekt, koji se pauzirao zbog
neaktivnosti; pauziran projekt bi tiho srušio formu.

Env varijabla na Hostingeru (hPanel → Node.js App → Environment variables):

| Varijabla | Za što |
|---|---|
| `RESEND_API_KEY` | Slanje upita. Bez nje ruta vraća `503 not_configured`. Domena `lumentalabs.studio` mora biti verificirana (DKIM/SPF) u Resendu. |

Nakon dodavanja/promjene env varijable, app treba restart da je proces
pokupi.

Ako Resend odbije slanje, ruta vraća `502 send_failed` i posjetitelj dobije poruku
da pokuša ponovno — upit se ne smije tiho izgubiti, jer kopije nigdje drugdje nema.

`GET /api/contact` javlja je li Resend konfiguriran (`{"ok":true,"resend":"configured"|"missing"}`),
bez otkrivanja vrijednosti. Ako upit ne stigne, provjeri Hostinger app log za
`[contact] rejected: Resend answered ...`.

## Fontovi

Instrument Serif, Geist i Geist Mono su u `app/fonts/` (OFL, licence uz njih) i
učitavaju se preko `next/font/local` u `app/fonts.js`. Ništa ne ide na Google Fonts —
ni iz preglednika ni pri buildu — jer `/privacy` obećaje da stranica ne učitava
fontove s drugih domena.

## Mediji

Hero je od redizajna (listopad 2026.) platno s projektima, bez videa; nekadašnja
petlja `hero.mp4` obrisana je iz repoa (ostaje u git povijesti). `hero.jpg` je i
dalje slika za društvene mreže (Open Graph / Twitter kartica).

Cijeli narirani video (227 MB) **namjerno nije u repou**. GitHub odbija datoteke
preko 100 MB, a i da ne odbija, stranica bi bila neupotrebljiva. Ide na YouTube
ili R2, pa se URL upiše u `site.config.js` pod `reels.<lang>.id`.

## Napomena o disku

Hostingerov Node.js hosting nudi samo vanjske baze (Supabase, MongoDB Atlas,
MySQL) i nigdje ne jamči trajan lokalni disk. Ova stranica nema stanja pa je to
nebitno — ali ako ikad dodaš formu ili upload, podaci moraju ići van aplikacije.
