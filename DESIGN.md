# DESIGN.md — BeautySocials

## Visual theme

**Roze-gedrenkte editorial.** Een schoonheidssalon-magazine uit 2026 dat zojuist een Y2K bubble-render-fase heeft doorlopen. Foundation-roze als canvas, zware Fraunces-italic koppen die uit het scherm komen ademen, en glossy 3D-bubble objecten die de pagina bevolken zoals emoji's een chat. Niets is sober. Alles voelt premium.

Color strategy: **Drenched** voor brand-momenten (hero, CTA-secties, dividers), **Committed** voor inhoudssecties (één hoofdtoon per sectie, sterke roze-accenten), nooit **Restrained**.

Theme: **light, in roze.** Geen dark mode. Salon-eigenaren bekijken dit overdag, op een laptop in de salon, tussen behandelingen door, met natuurlijk licht aan beide kanten. De pagina is een welkomstmoment, geen tool.

## Color palette (OKLCH)

```css
/* Roze schaal */
--blush-50:   oklch(0.985 0.008 8);    /* near-white pink, kaarten */
--blush-100:  oklch(0.965 0.020 8);    /* lichtroze sectie */
--blush-200:  oklch(0.935 0.040 6);    /* hero-canvas, dominant */
--blush-300:  oklch(0.890 0.065 6);    /* deeper canvas, divider */
--blush-400:  oklch(0.820 0.090 4);    /* bubble shadow */
--blush-500:  oklch(0.720 0.140 2);    /* bubble highlight */
--bs-pink:    oklch(0.620 0.230 358);  /* primary brand pink, knoppen */
--bs-pink-deep: oklch(0.510 0.240 0);  /* hover/donkerder accent */
--bs-pink-soft: oklch(0.770 0.180 6);  /* zachtere bubble fill */

/* Neutralen — getint */
--ink:        oklch(0.215 0.025 12);   /* body tekst, donker met roze ondertoon */
--ink-soft:   oklch(0.380 0.030 12);   /* secundaire tekst */
--mute:       oklch(0.620 0.020 14);   /* meta */
--paper:      oklch(0.992 0.005 30);   /* bijna-wit, warm */

/* Functioneel */
--success:    oklch(0.700 0.150 155);
--warning:    oklch(0.780 0.155 80);
```

Geen `#fff`, geen `#000`. Elke neutraal heeft een kleine roze of warm-bruine ondertoon.

## Typography

### Display: Fraunces (variabele Google Font)

Hoge optical contrast, soft-axes, italic met character. Past bij beauty-editorial vibe en past bij het bestaande wordmark-gevoel.

- **Wordmark/extra-large**: Fraunces, italic, weight 600, optical-size 144, soft 100, wonk 1
- **Hero koppen**: Fraunces, italic, weight 500, optical-size 96
- **Section koppen**: Fraunces, italic, weight 500, optical-size 60
- **Quote-koppen** (gebruikt als statements): Fraunces, italic, weight 400, optical-size 72

### Body: Manrope (variabele Google Font)

Geometrische sans met warmte. Past bij Fraunces, leest fijn op roze achtergronden.

- **Body**: Manrope 400, 16-18px, line-height 1.55
- **Lead/intro**: Manrope 400, 19-21px, line-height 1.5
- **Eyebrow/label**: Manrope 600, 12-13px, tracking 0.12em, uppercase
- **Button**: Manrope 600, 14-15px

### Schaal

```
xs:   12px
sm:   14px
base: 16px
md:   19px
lg:   24px
xl:   32px
2xl:  44px
3xl:  60px
4xl:  88px
5xl:  120px
6xl:  160px
```

Stap-ratio ≥1.25. Vrij springen tussen stappen voor ritme.

## Spacing

8-pt grid, niet rigide. Vier ritmes:

```
tight:    4 / 8 / 12 px      — interne component-paddings
normal:   16 / 24 / 32 px    — component-spacing
loose:    48 / 72 / 96 px    — sectie-binnenruimte
generous: 144 / 192 / 240 px — sectie-tot-sectie
```

Variatie is regel: hero 192px naar volgende sectie, FAQ-sectie 96px tussen rijen.

## Layout

- Maximum content-breedte: 1280px voor full-width secties, 880px voor lopende tekst, 640px voor formulieren
- Hero is **breed** maar tekst zit niet midden — links uitgelijnd voor leesbaarheid, rechts ruimte voor bubble-decor
- Geen container-by-default. Hero, partner-streamer en footer zijn full-bleed, andere secties contained
- Geen identieke kaart-grids. Pakketten breken het ritme via highlight-pakket. Merken-USPs gebruiken asymmetrische cluster-layout
- Cards: alleen in pakketten. Daarbuiten: tekst-op-canvas met spacing als grens

## Componenten

### Knoppen

```
.btn-primary   — bs-pink fill, paper text, 12px radius, lichte druk-glans
.btn-ghost     — transparant, 1.5px ink border, hover = ink fill
.btn-pill      — 999px radius, klein, voor secundaire CTA's en filters
.btn-icon      — vierkant, voor icoon-only acties (bel, menu)
```

Hover-states: subtiele schaal (1.02) + shadow-lift, geen kleurflip op primary.

### Bubble-decor

Inline SVG met radial gradient fills. Vier basisvormen die over de hele site terugkomen:

- `bubble-heart` — opgeblazen hartje
- `bubble-thumb` — like-duim
- `bubble-arrow` — share-pijl
- `bubble-quote` — quote-mark
- `bubble-blob` — abstract orb

Glans via stacked radial gradients + drop-shadow filter. Schaalbaar 24px → 240px.

### Telefoon-mockup

Inline SVG frame, screenshot-grid in body. Drijft hetzij staand hetzij licht gekanteld in hero-secties.

### Form-inputs

Onderlijn-stijl, geen kader-boxen. Label drijft op met focus. Validation-state via kleur + bubble-icon, geen rode rand.

### Accordion

Plus-icon links (in bubble-stijl), tekst dropt open met staggered word-reveal. Eén open tegelijk. Stijl voor FAQ.

## Motion

GSAP voor orkestratie, CSS voor micro-interactions. Easing-vocabulair:

- **`expo.out`** voor entrance (alles dat verschijnt)
- **`power3.inOut`** voor state-changes (accordion, modal)
- **`sine.inOut`** voor idle-loops (bubble-floating)

Globale regels:

- Geen layout-animatie (`width`, `height`, `top`)
- Wel: `transform`, `opacity`, `filter`
- Stagger-default: 0.06s tussen elementen
- Idle bubbles drijven met phase-offsets, nooit synchroon
- Page-load choreografie: header → hero-eyebrow → hero-kop (split-words) → hero-bubbles → CTA → onderkant fade-in
- Scroll-reveals: parallax bubbles op andere snelheden dan tekst (~0.85x)
- Page-transitions: paper wipe over scherm, 600ms, met serif-ink "BS"-watermark dat door wipe valt
- `prefers-reduced-motion`: alleen opacity, geen transform, geen idle-loops

## Atmosfeer

- **Grain overlay** (1% opacity, screen-blend) op hero-secties voor analoge warmte
- **Soft inner glow** op bubble-objecten via inset radial-gradient
- **Drop-shadow** op bubbles is roze-getint, niet zwart-grijs (`oklch(0.55 0.18 4 / 0.25)`)

## Don'ts

- Geen paarse gradients
- Geen Inter
- Geen identieke kaartrij voor pakketten (de "meest gekozen" breekt de rij)
- Geen modals voor primaire flows
- Geen em-dashes in copy
- Geen side-stripe borders
- Geen `background-clip: text` gradient text
- Geen glassmorphism als default
