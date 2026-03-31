# Format scenariusza

## Cel

Silnik gry jest zasilany danymi scenariusza. Kazda nowa sprawa powinna byc dodawana bez zmian w logice aplikacji, tylko przez dopisanie nowego obiektu scenariusza w `data/scenarios.js`.

## Struktura wysokiego poziomu

Kazdy scenariusz zawiera:

- `id`: unikalny identyfikator sprawy,
- `title`: nazwa wyswietlana w wyborze spraw,
- `subtitle`: krotki opis sprawy na ekranie startowym,
- `intro`: tekst wprowadzajacy,
- `goalText`: glowny cel wyswietlany obok mapy,
- `emptyClueText`: tekst dla pustej listy wskazowek,
- `finalMessage`: tekst zakonczenia po rozwiazaniu sprawy,
- `math`: profile klas i szablony generatora matematyki,
- `map`: konfiguracja mapy i podpisow stref,
- `steps`: lista krokow rozgrywki.

## Pole `math`

Sekcja `math.classProfiles` przechowuje zasady trudnosci dla klas.

Kazda klasa ma:

- `maxValue`: gorny limit trudnosci dla danej klasy,
- `templates`: zestaw nazwanych szablonow zadan.

Przykladowe templateki:

- `add_small`
- `add_medium`
- `subtract_small`
- `subtract_medium`
- `mixed_easy`
- `mixed_medium`

Kazdy template definiuje:

- `kind`: obecnie `arithmetic`,
- `operations`: lista dozwolonych operacji, np. `add`, `subtract`,
- `operands.left` i `operands.right`: zakresy losowania liczb,
- `result`: ograniczenia wyniku,
- `allowNegativeResult`: czy dopuszczamy wyniki ujemne,
- `answerOptions`: zasady budowania odpowiedzi do wyboru.

Dzieki temu balans klas zmienia sie w jednym miejscu, bez przepisywania krokow scenariusza.

## Pole `map`

Sekcja `map` opisuje wspolna plansze dla sprawy.

Zawiera:

- `trailPath`: sciezke SVG laczaca punkty,
- `areas`: podpisy stref mapy, np. pokoj, kuchnia, taras.

Na obecnym etapie rozne scenariusze moga wspoldzielic ten sam layout mapy, ale miec inne tresci krokow.

## Pole `steps`

Kazdy krok ma:

- `id`: numer kroku,
- `title`: tytul w modalu,
- `shortLabel`: krotki podpis na hotspotcie,
- `kind`: `clue`, `character` albo `final`,
- `location`: lokalizacja wyswietlana w modalu,
- `description`: glowny opis,
- `dialogue`: opcjonalna kwestia postaci,
- `clue`: tekst wskazowki po poprawnej odpowiedzi,
- `challenge`: opis zadania,
- `hotspot`: pozycja punktu na mapie.

## Typy `challenge`

### 1. Matematyka

Przyklad:

```js
challenge: { type: "math", templateId: "mixed_easy" }
```

Silnik:

- znajduje profil aktualnej klasy,
- pobiera template o podanym `templateId`,
- generuje konkretne liczby i odpowiedzi na start sesji.

### 2. Wybor odpowiedzi

Przyklad:

```js
challenge: {
  type: "choice",
  prompt: "Kto ostatni mial ciastko?",
  options: ["Tata", "Siostra", "Kot"],
  correctAnswer: "Tata",
  successFeedback: "Tak!",
  failureFeedback: "To jeszcze nie to."
}
```

## Zasady dodawania nowej sprawy

1. Skopiowac istniejacy scenariusz jako punkt wyjscia.
2. Zmienic `id`, `title`, `subtitle`, `intro`, `goalText` i `finalMessage`.
3. Zostawic albo zmodyfikowac sekcje `math`.
4. Dostosowac `map`, jesli sprawa potrzebuje innego ukladu.
5. Rozpisac `steps`.
6. W krokach matematycznych korzystac z `templateId` zamiast wpisywac stale dzialania.
7. Sprawdzic, czy ostatni krok ma sensowny `challenge.type = "choice"` albo inny final.

## Rekomendacja

Na obecnym etapie najlepiej trzymac wszystkie sprawy w jednym pliku `data/scenarios.js`, a dopiero pozniej rozdzielic je do osobnych plikow lub prawdziwych JSON-ow, gdy liczba scenariuszy wzrosnie.
