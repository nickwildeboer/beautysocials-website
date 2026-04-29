# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketingsite voor **BeautySocials** — een SaaS social-mediatool voor schoonheidssalons (kant-en-klare posts, AI post creator, merkenbibliotheek). Klant: Arjan. Bouwer: Nick (VLNK).

De site is de marketing-frontend, niet de app zelf.

**Status: pre-implementatie.** Geen code, geen package manager, geen tests. Alleen brand assets en briefingdocumenten. De tech-stack ligt nog niet vast — die beslissing valt aan het begin van de werksessie samen met de gebruiker.

## Referentiemateriaal in de root

Alle inhoudelijke context zit hier:

- `SITEMAP_BS_maart2026.docx` — volledige paginastructuur en copy (NL). Hoofdbron voor alle teksten.
- `Prototype 2 Home pagina – 2.pdf` — homepage layout-prototype.
- `beauty socials.pdf` — hero/sleutelvisual referentie.
- `Logo BS.png` / `Logo BS roze.png` — logo-lockup (3D bubble "BS" + serif wordmark).
- `Woord BS.png` / `Woord BS roze.png` — alleen de wordmark.
- `*.eps`-versies voor vector/druk.

### Assets uitlezen

`pdftoppm` / `pdftotext` zijn niet beschikbaar op deze machine. Gebruik macOS native tools:

```bash
# DOCX → tekst
textutil -convert txt -stdout "SITEMAP_BS_maart2026.docx"

# PDF → PNG (alleen eerste pagina)
sips -s format png "<bestand>.pdf" --out /tmp/preview.png
```

Logos lees je direct met de Read tool (PNG).

## Brand

- Roze monochroom basis, witte tussensecties
- Y2K 3D-bubble taal: opgeblazen objecten (hartjes, share-arrows, like-thumbs, quote-marks) als visuele anker-elementen
- Display: zware serif — zie `Woord BS roze.png` als referentie voor het type
- Body: sans-serif
- Tone: speels, feminien, professioneel
- Doelgroep: salon-eigenaren met weinig tijd en weinig social-media-affiniteit

## Pagina's en pakketten

Sitemap dekt zes routes: **Homepage**, **Tarieven**, **Merken** (B2B-partnerpagina), **Team**, **FAQ's**, **Contact** (formulier).

Tarieven:
- **Silk** €35/m — basis
- **Shine** €59/m — meest gekozen
- **Daimond** €89/m — premium (let op de spelling met één "i")

Door de hele site terugkerend: "Test 14 dagen gratis" + "Inloggen" als CTA-paar, plus een telefoon-CTA in de header.

## Design-workflow (impeccable)

De `impeccable` skill staat globaal in `/Users/Nick/.claude/skills/impeccable/` en is leidend voor design-werk in dit project. Volgorde:

1. `node /Users/Nick/.claude/skills/impeccable/scripts/load-context.mjs` — laadt PRODUCT.md en DESIGN.md uit de project-root.
2. PRODUCT.md ontbreekt → `/impeccable teach` (gebruikt sitemap als bron).
3. DESIGN.md ontbreekt → `/impeccable document` na de eerste implementatie, of handmatig schrijven op basis van het prototype.
4. `/impeccable shape <pagina>` → UX-skelet. Wacht op expliciete bevestiging van de gebruiker.
5. `/impeccable craft <pagina>` → productie-grade implementatie.

Sla geen stappen over. De skill-gates blokkeren `craft` zonder bevestigde shape brief.

## Schrijf- en communicatieregels

Volg de globale instructies in `/Users/Nick/.claude/CLAUDE.md`. Kernpunten die in dit project hard zijn:

- Antwoord in het Nederlands
- "Je"/"jouw", korte actieve zinnen
- Geen em-dashes, geen puntkomma's, geen "niet alleen X, maar ook Y"
- Hou de verboden-woordenlijst uit de globale instructies aan
- Geen samenvattingen aan het einde van een antwoord
