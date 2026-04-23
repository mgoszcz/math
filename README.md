# Mali Detektywi Matematyczni

Prosty projekt przeglądarkowej gry edukacyjnej dla dzieci z klas 1-3.

## Cel

Gra ma pomagać ćwiczyć dodawanie i odejmowanie w lekkiej, zabawnej formule detektywistycznej. Dziecko przechodzi przez krótką zagadkę, odwiedza kolejne miejsca na mapie i odblokowuje wskazówki, rozwiązując działania matematyczne.

## Główny Pomysł

- Każda sprawa to jedna mała zagadka, np. `Gdzie zaginął miś?`
- Gracz wciela się w detektywa.
- Na planszy widać dom, ogród albo inne przyjazne miejsce z tropami.
- Kliknięcie aktywnego punktu otwiera krótkie okno z ilustracją, 1-2 zdaniami i działaniem matematycznym.
- Po poprawnej odpowiedzi gracz dostaje wskazówkę i odblokowuje kolejny trop.
- Jedna sprawa składa się z 10 działań.
- Na końcu gracz wybiera rozwiązanie zagadki i dostaje pozytywne podsumowanie.

## Proponowana Technologia

Na start rekomendowany jest:

- `Vite`
- `React`
- `TypeScript`
- `CSS` lub `CSS Modules`
- `SVG` jako mapa i znaczniki punktów na planszy

Dlaczego ten wybór:

- łatwy start lokalny,
- szybkie prototypowanie,
- wygodne budowanie interfejsu okienek i mapy,
- proste rozszerzanie o nowe sprawy,
- brak potrzeby ciężkiego silnika gier na pierwszą wersję.

## Założenia Projektowe

- Mało tekstu, dużo obrazu.
- Duże przyciski i czytelne cyfry.
- Spokojny, przyjazny klimat bez presji i kar.
- Poziom trudności dopasowany do wieku.
- Zagadki zapisane jako dane, aby można było łatwo dodawać nowe historie.

## Architektura

Aktualny kierunek projektu to `generic engine + dane scenariusza`.

- silnik gry obsługuje ekran startowy, mapę, hotspoty, modal, postęp i finał,
- scenariusze są przechowywane osobno i opisują treść sprawy oraz kroki rozgrywki,
- obecnie dane są zapisane w module JS, ale format jest celowo zbliżony do przyszłego JSON-a,
- taka struktura pozwoli później generować nowe sprawy automatycznie i dołączać je bez przebudowy logiki,
- zadania matematyczne są generowane z szablonów przypisanych do klasy i kroku scenariusza.

Edycja poziomów trudności:

- profile klas znajdują się w [data/scenarios.js](/D:/GitRepo/math/data/scenarios.js) w sekcji `math.classProfiles`,
- każda klasa ma własne szablony, np. `add_small`, `subtract_small`, `mixed_easy`, `mixed_medium`,
- krok scenariusza wskazuje tylko `templateId`, dzięki czemu balans można zmieniać centralnie,
- architektura jest otwarta na kolejne operacje, np. mnożenie i dzielenie, przez rozszerzenie generatora w [engine/math-generator.js](/D:/GitRepo/math/engine/math-generator.js).

Na przyszłość warto dodać jeszcze jedną warstwę:

- zapis wyników dziecka,
- historię odpowiedzi,
- adaptację poziomu trudności na podstawie skuteczności.

## Pierwsza Wersja MVP

Pierwsze wydanie powinno zawierać:

- 1 sprawę detektywistyczną,
- 1 mapę domu i ogrodu,
- 10 działań z dodawania i odejmowania,
- prosty ekran startowy,
- ekran końcowy z rozwiązaniem sprawy,
- podstawowe efekty wizualne i dźwiękowe.

## Dokumentacja

Szczegółowy plan i projekt gry znajdują się w dokumentach:

- [Plan projektu](D:\GitRepo\math\docs\plan.md)
- [Projekt gry](D:\GitRepo\math\docs\game-design.md)
- [Format scenariusza](D:\GitRepo\math\docs\scenario-format.md)
- [Prompty tła mapy](D:\GitRepo\math\docs\map-background-prompts.md)
- [Mini projekt wizualny](D:\GitRepo\math\docs\visual-mini-project.md)

## Lokalny Prototyp

W katalogu głównym znajduje się pierwsza grywalna wersja prototypu:

- `index.html`
- `styles.css`
- `script.js`
- `data/scenarios.js`
- `engine/math-generator.js`
- `engine/game-engine.js`

Uruchomienie lokalne:

1. Otwórz [index.html](D:\GitRepo\math\index.html) w przeglądarce.

Można też uruchomić prosty lokalny serwer, jeśli będzie potrzebny później, ale na obecnym etapie nie jest to konieczne.
