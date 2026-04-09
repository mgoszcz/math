# Prompty tla mapy

Ten dokument przygotowuje generowanie ilustracyjnego tla mapy dla gry.

## Cel

Chcemy jedno glowne tlo planszy:

- widok z gory,
- dom po lewej i ogrod po prawej,
- przyjazny styl ilustracyjny dla dzieci 6-9 lat,
- czytelne pomieszczenia i obiekty,
- bez napisow i bez postaci,
- z wolnym miejscem na hotspoty i sciezke tropow.

To tlo ma byc warstwa pod spodem. Interaktywne znaczniki, postac gracza i logika gry zostaja osobno w HTML/CSS/JS.

## Prompt glowny

```text
Use case: illustration-story
Asset type: game map background
Primary request: top-down illustrated board for a children's detective math game, showing a cozy family house on the left and a garden on the right
Scene/backdrop: one continuous scene viewed from above, warm daylight, cheerful home atmosphere
Subject: a child-friendly house floor plan with visible bedroom, hallway, kitchen, living room and terrace, connected to a garden with path, shed, swing and picnic blanket
Style/medium: polished children's book illustration, clean shapes, soft painterly texture, playful but believable proportions
Composition/framing: strict top-down view, landscape format, house on left half, garden on right half, clear open areas for clickable markers, no perspective tilt
Lighting/mood: warm morning light, safe, inviting, playful mystery mood
Color palette: warm creams, honey wood, soft greens, sky blue accents, gentle coral and yellow details
Materials/textures: wooden floors, soft rugs, simple furniture, grass, stone path, picnic blanket, garden plants
Constraints: no text, no labels, no speech bubbles, no characters, no watermark, no UI, no icons, no strong shadows hiding details
Avoid: photorealism, clutter, too many tiny objects, isometric perspective, dark horror mood
```

## Wariant A

Bardziej bajkowy i miekki:

```text
Use case: illustration-story
Asset type: game board background
Primary request: cozy top-down children's mystery game map of a home and garden
Style/medium: storybook illustration with soft edges, hand-painted feel, high readability for children
Composition/framing: top-down layout, simple readable room boundaries, generous negative space for game markers
Constraints: no text, no people, no animals, no UI, no watermark
Avoid: realism, messy textures, dramatic shadows
```

## Wariant B

Bardziej planszowy i uporzadkowany:

```text
Use case: illustration-story
Asset type: board game map background
Primary request: top-down family house and garden map for an educational detective game for children
Style/medium: polished board-game illustration, clean outlines, bright family-friendly colors
Composition/framing: map-like layout with very readable zones and objects, house rooms clearly separated, garden path clearly visible
Constraints: no labels, no characters, no UI overlays, no watermark
Avoid: clutter, realistic photography, angled camera, dark tones
```

## Format pliku

Najlepiej przygotowac:

- `jpg` albo `png`,
- format poziomy,
- proporcja zblizona do obecnej planszy, np. `1600x1000` albo `1920x1200`.

## Proponowana lokalizacja pliku

```text
assets/backgrounds/home-garden-board.jpg
```

## Jak podpiac do gry

Po dodaniu pliku do repozytorium wystarczy dopisac w `data/scenarios.js` do `map`:

```js
backgroundImage: "./assets/backgrounds/home-garden-board.jpg"
```

Silnik jest juz przygotowany na takie pole i automatycznie przelaczy plansze na tryb tla ilustracyjnego.
