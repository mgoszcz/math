# Mali Detektywi Matematyczni

Prosty projekt przeglądarkowej gry edukacyjnej dla dzieci z klas 1-3.

## Cel

Gra ma pomagać ćwiczyć dodawanie i odejmowanie w lekkiej, zabawnej formule detektywistycznej. Dziecko przechodzi przez krótką zagadkę, odwiedza kolejne miejsca na mapie i odblokowuje wskazówki, rozwiązując działania matematyczne.

## Główny pomysł

- Każda sprawa to jedna mała zagadka, np. `Gdzie zaginął miś?`
- Gracz wciela się w detektywa.
- Na planszy widać dom, ogród albo inne przyjazne miejsce z tropami.
- Kliknięcie aktywnego punktu otwiera krótkie okno z ilustracją, 1-2 zdaniami i działaniem matematycznym.
- Po poprawnej odpowiedzi gracz dostaje wskazówkę i odblokowuje kolejny trop.
- Jedna sprawa składa się z 10 działań.
- Na końcu gracz wybiera rozwiązanie zagadki i dostaje pozytywne podsumowanie.

## Proponowana technologia

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

## Założenia projektowe

- Mało tekstu, dużo obrazu.
- Duże przyciski i czytelne cyfry.
- Spokojny, przyjazny klimat bez presji i kar.
- Poziom trudności dopasowany do wieku.
- Zagadki zapisane jako dane, aby można było łatwo dodawać nowe historie.

## Pierwsza wersja MVP

Pierwsze wydanie powinno zawierać:

- 1 sprawę detektywistyczną,
- 1 mapę domu i ogrodu,
- 10 działań z dodawania i odejmowania,
- prosty ekran startowy,
- ekran końcowy z rozwiązaniem sprawy,
- podstawowe efekty wizualne i dźwiękowe.

## Następny krok

Szczegółowy plan i projekt gry znajdują się w dokumentach:

- [Plan projektu](D:\GitRepo\math\docs\plan.md)
- [Projekt gry](D:\GitRepo\math\docs\game-design.md)

## Lokalny prototyp

W katalogu glownym znajduje sie pierwsza grywalna wersja prototypu:

- `index.html`
- `styles.css`
- `script.js`

Uruchomienie lokalne:

1. Otworz `index.html` w przegladarce.

Mozna tez uruchomic prosty lokalny serwer, jesli bedzie potrzebny pozniej, ale na obecnym etapie nie jest to konieczne.
