# Projekt gry

## Tytul roboczy

`Mali Detektywi Matematyczni`

## Grupa docelowa

- dzieci w wieku 6-9 lat,
- klasy 1-3 szkoly podstawowej,
- gra do samodzielnej zabawy lub wspolnej zabawy z rodzicem.

## Glowna petla rozgrywki

1. Gracz wybiera sprawe.
2. Oglada glowna mape miejsca zdarzenia.
3. Klika aktywny trop albo postac.
4. Otwiera sie krotkie okno z ilustracja i jednym zadaniem.
5. Po poprawnej odpowiedzi gracz dostaje wskazowke.
6. Odblokowuje sie kolejny punkt na mapie.
7. Po 10 rozwiazanych dzialaniach gracz odkrywa final sprawy.

## Zasady projektowe

- Jedna interakcja = jedna mala porcja tresci.
- Tekst ograniczony do minimum.
- Kazdy ekran powinien jasno mowic: `co widze`, `co klikam`, `co mam zrobic`.
- Gra nagradza poprawne odpowiedzi, ale nie zawstydza przy bledach.
- Blad powinien prowadzic do delikatnej zachety do ponownej proby.
- Swiat gry powinien byc lekko zabawny, ale osadzony w codziennych, znajomych sytuacjach.
- Dziecko ma czuc, ze rozwiazuje "prawdziwa" domowa tajemnice.

## Struktura pierwszej sprawy

### Sprawa

`Gdzie zaginal mis?`

### Miejsce

Dom i ogrod.

### Format planszy

- jedna glowna plansza z widokiem domu i ogrodu,
- okolo 10 aktywnych punktow interakcji,
- punkty odblokowywane krok po kroku, aby prowadzic dziecko przez historie.

### Przykladowa sekwencja punktow

1. Pokoj dziecka
2. Korytarz
3. Kuchnia
4. Salon
5. Taras
6. Ogrod
7. Domek na narzedzia
8. Hustawka
9. Krzak z tropem
10. Final

### Przykladowe typy interakcji

- slad lapy,
- odcisk buta,
- rozsypane klocki,
- okruszki ciastka,
- wypowiedz taty,
- wypowiedz siostry,
- otwarta szuflada,
- poruszajacy sie krzak.

## Matematyka

### Zakres MVP

- dodawanie i odejmowanie,
- dzialania prezentowane w duzej i czytelnej formie.

### Roznicowanie poziomu

Klasa 1:

- liczby do 20,
- najprostsze dzialania i mocniejsze wsparcie wizualne, np. kropki lub liczmany.

Klasa 2:

- liczby do 30,
- wiecej dzialan mieszanych.

Klasa 3:

- liczby do 50,
- prostsze zadania tekstowe w pojedynczym zdaniu.

## Ekrany

## 1. Ekran startowy

- duzy przycisk `Start`,
- wybor klasy,
- przycisk `Zagraj`.

## 2. Ekran mapy

- glowny ekran rozgrywki z ilustracja domu i ogrodu,
- zaznaczone aktywne punkty,
- pasek postepu `X/10`,
- ikona podpowiedzi,
- przycisk dzwieku.

## 3. Okno tropu lub postaci

- duza ilustracja,
- bardzo krotki opis,
- dzialanie matematyczne,
- 3 odpowiedzi do wyboru albo pole wpisania wyniku.

Na start lepsze beda `3 odpowiedzi do wyboru`, bo to prostsze dla mlodszych dzieci.

## 4. Ekran wskazowki

- krotka informacja typu `To wazny trop!`,
- ikonka znalezionej wskazowki,
- przycisk `Dalej`.

## 5. Ekran finalu

- pytanie `Kto zabral misia?`,
- 2-3 przyjazne opcje,
- animacja sukcesu,
- krotkie zakonczenie historii.

## Kierunek artystyczny

- ilustracyjny styl 2D,
- cieple kolory,
- duze obiekty i czytelne ksztalty,
- delikatne animacje punktow i okien,
- klimat przygody, ale bez straszenia,
- przyjazny realizm: znajome miejsca, codzienne przedmioty i domowe sytuacje pokazane w lekko bajkowy sposob.

## Dzwiek

- krotki dzwiek poprawnej odpowiedzi,
- delikatny dzwiek klikniecia,
- opcjonalna spokojna muzyka tla.

## Proponowana architektura danych

Kazda sprawa moze byc opisana jako dane JSON lub TS:

```ts
type Case = {
  id: string;
  title: string;
  mapId: string;
  steps: Step[];
  ending: Ending;
};

type Step = {
  id: string;
  kind: "clue" | "character";
  locationId: string;
  text: string;
  question: {
    prompt: string;
    correctAnswer: number;
    options: number[];
  };
  rewardText: string;
  unlocksStepId?: string;
};
```

Dzieki temu kolejne sprawy mozna dodawac bez przebudowy logiki gry.

## Proponowana struktura aplikacji

```text
src/
  app/
  components/
  features/case-select/
  features/game-map/
  features/math-challenge/
  features/case-resolution/
  data/cases/
  assets/maps/
  assets/ui/
```

## Decyzje na teraz

- Platforma: przegladarka internetowa uruchamiana lokalnie.
- Technologia: `React + TypeScript + Vite`.
- Forma interakcji: jedna glowna mapa sprawy + okna zdarzen.
- Zakres MVP: 1 sprawa, 10 dzialan, okolo 10 punktow interakcji, dodawanie i odejmowanie.
- Czas jednej sesji: maksymalnie 8-12 minut.
- Poziomy trudnosci: klasa 1 do 20, klasa 2 do 30, klasa 3 do 50.
- Priorytet: czytelnosc, klimat i prostota obslugi.

## Rekomendacja

Najlepiej zaczac od jednego bardzo dopracowanego scenariusza zamiast od wielu spraw naraz. To pozwoli szybciej sprawdzic, czy dzieci dobrze rozumieja mechanike i czy poziom tekstu jest odpowiedni.
