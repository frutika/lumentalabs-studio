# Lumenta Labs — landing

Next.js stranica za `labs.lumenta.shop`. Deploy ide na **Hostinger Node.js Web Apps**
(Business plan), preko GitHuba, s automatskim redeployom na svaki push.

## Prije objave

Sve što je tvoja odluka je u `site.config.js` — namjerno nije nagađano:

| Polje | Što treba |
|---|---|
| `email` | Trenutno `hello@lumenta.shop`. **Provjeri postoji li ta adresa** ili je zamijeni. Osobna adresa nije upisana namjerno. |
| `reelUrl` | URL cijelog nariranog videa (YouTube / Vimeo / R2). Dok je prazan, cijela sekcija s videom se ne prikazuje. |
| `products[].href` | Linkovi na Lumenta AI, The Dog Habit i UnmaskedWords. Bez linka se ime prikaže kao običan tekst. |

## Lokalno

```
npm install
npm run dev
```

## Deploy na Hostinger

1. hPanel → na Business planu dodaj poddomenu `labs.lumenta.shop`.
   DNS zapis se kreira sam jer su nameserveri za `lumenta.shop` Hostingerovi
   (`ns1/ns2.dns-parking.com`). Apex `lumenta.shop` pokazuje na VPS i **ostaje netaknut**.
2. Websites → Add Website → **Node.js Apps** → Import Git Repository.
3. Build postavke bi se trebale same prepoznati. Ako ne: build `npm run build`,
   start `npm start`.
4. SSL je automatski, nginx ne diraš.

## Mediji

`public/media/hero.mp4` je 12-sekundna nijema petlja, 1280×720, **1.43 MB** —
izrezana iz originalnog B-rolla i komprimirana za web. `hero.jpg` je poster koji
stoji dok se video učitava.

Cijeli narirani video (227 MB) **namjerno nije u repou**. GitHub odbija datoteke
preko 100 MB, a i da ne odbija, stranica bi bila neupotrebljiva. Ide na YouTube
ili R2, pa se URL upiše u `reelUrl`.

## Napomena o disku

Hostingerov Node.js hosting nudi samo vanjske baze (Supabase, MongoDB Atlas,
MySQL) i nigdje ne jamči trajan lokalni disk. Ova stranica nema stanja pa je to
nebitno — ali ako ikad dodaš formu ili upload, podaci moraju ići van aplikacije.
