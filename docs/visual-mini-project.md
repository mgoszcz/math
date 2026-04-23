# Mini projekt graficzny

## Cel etapu

Celem tego etapu jest podniesienie gry z poziomu dzialajacego prototypu do poziomu atrakcyjnej, przyjaznej wizualnie gry dla dzieci 6-9 lat.

Na tym etapie nie zmieniamy glownej mechaniki. Skupiamy sie na tym, aby:

- dziecko mocniej utozsamialo sie z bohaterem,
- mapa wygladala jak prawdziwe miejsce przygody,
- postaci i tropy byly bardziej czytelne,
- interakcje wygladaly mniej technicznie, a bardziej jak element swiata gry.

## Kierunek wizualny

### Hasla przewodnie

- domowa przygoda,
- cieply ilustracyjny realizm,
- detektywistyczna zabawa,
- czytelnosc dla mlodszych dzieci,
- duzo obrazu, malo tekstu.

### Styl graficzny

Rekomendowany styl:

- ilustracje 2D,
- widok z gory lub pol-rzutowy,
- miekki obrys,
- duze, czytelne ksztalty,
- nasycone ale cieple kolory,
- swiat bez chaosu i bez zbednych detali.

Chodzi o efekt pomiedzy:

- plansza z ksiazki obrazkowej,
- przyjazna gra edukacyjna,
- spokojna domowa scena z humorem.

## Bohater gracza

### Cel

Dziecko powinno miec poczucie, ze to ono wyrusza na sledztwo.

### Zakres MVP+

Na ekranie startowym dodajemy wybor bohatera:

- 2 chlopcy,
- 2 dziewczynki,
- roznice glownie przez kolor wlosow, fryzure i kolor ubrania.

### Rekomendacja projektowa

Kazda postac powinna miec:

- duza glowe i czytelna twarz,
- prosty ubior w mocnym kolorze,
- male akcenty detektywistyczne, np. lupa, opaska, notes, plecak.

Nie robimy realistycznych proporcji. Lepiej sprawdzi sie styl lekko kreskowkowy.

### Stan danych

Docelowo kazdy bohater powinien miec w danych:

- `id`,
- `name`,
- `avatar`,
- `mapSprite`,
- `accentColor`.

## Postaci NPC

### Kogo pokazujemy

Na poczatek:

- tata,
- siostra,
- kotek,
- opcjonalnie pies,
- neutralne ilustracje dla tropow.

### Zasada

Kazdy krok typu `character` powinien moc wyswietlac ilustracje konkretnej osoby.

To znaczy, ze w danych kroku warto docelowo dodac np.:

- `characterId: "dad"`,
- `characterId: "sister"`.

### Styl portretow

Portrety nie musza byc pelnymi ilustracjami postaci.

Na start wystarcza:

- popiersie,
- czytelna twarz,
- charakterystyczne wlosy i ubranie,
- tlo z delikatnym kolorem przypisanym do postaci.

## Nowa mapa domu i ogrodu

### Gowna decyzja

Mapa powinna przejsc z "umownego layoutu" do "czytelnej ilustracji miejsca".

### Dom

W domu chcemy pokazac nie tylko granice pomieszczen, ale tez ich przeznaczenie.

Przykladowe elementy:

- pokoj dziecka: lozko, poduszka, skrzynia na zabawki, klocki,
- korytarz: dywanik, wieszak, kapcie,
- kuchnia: stol, krzesla, blat, talerzyk, kubek,
- salon: kanapa, fotel, stolik, poduszka,
- taras: stolik, krzeslo, kubek, suszarka lub koc.

### Ogrod

W ogrodzie chcemy dodac:

- sciezke z kamieni,
- hustawke,
- domek na narzedzia,
- koc piknikowy,
- krzaki i drzewka,
- kilka malych obiektow, np. konewka, pilka, klamerki.

### Cel

Dziecko po samej mapie powinno rozumiec:

- gdzie jest kuchnia,
- gdzie jest salon,
- gdzie moglo cos spasc,
- gdzie warto szukac tropow.

## Hotspoty i tropy

### Co zmieniamy

Obecne duze kola z tekstem zamieniamy na bardziej naturalne znaczniki.

### Nowy model

- aktywny punkt: duzy znak `?`,
- krok ukonczony: znaczek lupy, gwiazdki albo odhaczenia,
- punkt zablokowany: brak znaku albo delikatna przygaszona ikona.

### Dlaczego to lepsze

- mapa wyglada bardziej jak scena przygodowa,
- mniej tekstu na planszy,
- dziecko widzi bardziej "tajemnice do odkrycia" niz techniczny etap gry.

## Bohater na mapie

### Etap 1

Dodajemy sprite bohatera na mapie.

Na start wystarczy:

- jedna mala postac widoczna na planszy,
- ustawiana przy aktualnym punkcie,
- zwrocona w bok lub lekko po skosie.

### Etap 2

Dodajemy prosty ruch miedzy punktami:

- po zakonczeniu kroku bohater przesuwa sie do kolejnego hotspotu,
- ruch liniowy z lekkim easingiem,
- opcjonalny delikatny bounce.

Nie potrzebujemy jeszcze prawdziwej animacji chodzenia klatka po klatce.

## Modal zdarzenia

### Co poprawiamy

Modal powinien mocniej odrozniac:

- trop,
- rozmowe z postacia,
- final sprawy.

### Rekomendacja

- dla tropu: ilustracja obiektu lub miejsca,
- dla rozmowy: portret postaci,
- dla finalu: specjalna plansza sukcesu lub tablica detektywa.

### Uklad

Docelowo:

- ilustracja u gory,
- 1-2 zdania tekstu,
- duze dzialanie,
- odpowiedzi,
- po sukcesie: czytelne `Dalej`.

## Ekran startowy

### Co dodajemy

Na ekranie startowym powinny sie pojawic trzy warstwy wyboru:

1. wybor sprawy,
2. wybor bohatera,
3. wybor klasy.

### Rekomendowany uklad

- lewa strona: duza ilustracja lub karta przygody,
- prawa strona: wybor sprawy i bohatera,
- na dole: przycisk `Rozpocznij sledztwo`.

### Bohaterowie

Wybierani jako duze kafelki z ilustracja i kolorem akcentowym.

## Lista assetow

### Assety potrzebne na najblizszy etap

1. Bohaterowie gracza
- chlopiec 1,
- chlopiec 2,
- dziewczynka 1,
- dziewczynka 2.

2. Postaci NPC
- tata,
- siostra,
- kotek,
- neutralna ilustracja tropu.

3. Mapa
- nowa ilustracja domu,
- nowa ilustracja ogrodu,
- warstwa hotspotow `?`,
- ikonki stanu ukonczonego.

4. Drobne UI
- ikona lupy,
- ikona gwiazdki albo odhaczenia,
- ikona dzwieku,
- ikona podpowiedzi.

## Sposob wdrozenia technicznego

### Etap 1. Dane i struktura

Dodac do danych:

- liste bohaterow gracza,
- liste postaci NPC,
- referencje do ilustracji w krokach `character`,
- ewentualny typ ilustracji dla kroku `clue`.

### Etap 2. Ekran startowy

Dodac komponent wyboru bohatera i zapis wyboru w stanie sesji.

### Etap 3. Mapa

Przebudowac plansze na bardziej ilustracyjna:

- meble w domu,
- bardziej szczegolowy ogrod,
- pytajniki jako hotspoty,
- miejsce na sprite bohatera.

### Etap 4. Modal

Podmienic dekoracyjne tlo na realne ilustracje postaci i tropow.

### Etap 5. Ruch bohatera

Dodac animowane przejscie miedzy punktami.

## Kolejnosc realizacji

1. Dodac wybor bohatera.
2. Dodac dane postaci i portrety w modalach.
3. Przebudowac hotspoty na pytajniki.
4. Dopracowac nowy rzut mapy domu i ogrodu.
5. Dodac bohatera na mapie.
6. Dodac jego prosty ruch miedzy punktami.

## Rekomendacja na nastepny krok

Najlepiej zaczac od:

- wyboru bohatera,
- danych postaci,
- podpiecia portretow do modalow.

To da duzy wzrost jakosci przy relatywnie niskim ryzyku i bez przebudowy calej mapy na samym poczatku.
