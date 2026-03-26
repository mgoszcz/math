# Layout mapy

## Cel

Mapa ma byc glownym ekranem gry. Dziecko powinno od razu rozumiec:

- gdzie jest teraz,
- co moze kliknac,
- jaki ma postep,
- dokad prowadzi kolejny trop.

Mapa powinna wygladac jak przyjazna ilustracja domu i ogrodu widziana lekko z gory, w stylu pol-rzutowym. To da poczucie "prawdziwego miejsca", ale bez zbyt duzej zlozonosci.

## Uklad ogolny

Rekomendowany uklad ekranu:

- gora: prosty pasek naglowka,
- srodek: duza mapa domu i ogrodu,
- dol lub rog: pasek postepu i przyciski pomocnicze.

## Strefy interfejsu

### 1. Pasek gorny

Elementy:

- nazwa sprawy, np. `Gdzie zaginal mis?`,
- licznik postepu `3/10`,
- przycisk dzwieku,
- przycisk powrotu do startu.

Zasady:

- pasek ma byc niski, zeby nie zabieral miejsca mapie,
- elementy duze i czytelne,
- licznik postepu powinien byc dodatkowo pokazany kolorem lub ikonami.

### 2. Glowna plansza

Plansza zajmuje wiekszosc ekranu.

Podzial:

- lewa strona: dom,
- prawa strona: ogrod,
- centralnie: wyjscie na taras jako lacznik historii.

To tworzy naturalna trase od pokoju dziecka przez dom do ogrodu i finalu.

### 3. Pasek dolny lub panel boczny

Elementy:

- przycisk `Podpowiedz`,
- mini lista znalezionych wskazowek jako ikonki,
- opcjonalnie przycisk `Mapa` lub `Dalej`, jesli bedzie potrzebny na mobile.

Na desktopie panel moze byc po prawej. Na mobile lepiej umiescic go na dole.

## Rozmieszczenie punktow na mapie

Punkty powinny prowadzic wzrok dziecka z lewej do prawej i lekko z gory na dol.

```text
+--------------------------------------------------------------+
| Naglowek: [Sprawa]                      [3/10] [Dzwiek]      |
+--------------------------------------------------------------+
|                                                              |
|   DOM                                     OGROD              |
|                                                              |
|   [1 Pokoj] -------- [2 Korytarz]                            |
|        |                    |                                |
|        |               [3 Kuchnia]                           |
|        |                    |                                |
|   [4 Salon] ---------- [5 Taras] ------ [6 Sciezka]         |
|                                           |                  |
|                                      [7 Domek]              |
|                                           |                  |
|                                      [8 Hustawka]           |
|                                           |                  |
|                                      [9 Koc]                |
|                                           |                  |
|                                      [10 Final]             |
|                                                              |
+--------------------------------------------------------------+
| [Podpowiedz]     [Ikony wskazowek]                           |
+--------------------------------------------------------------+
```

## Opis stref mapy

### Dom

Dom zajmuje lewa polowe planszy i jest pokazany jako prosty przekroj pomieszczen.

Pomieszczenia:

- pokoj dziecka u gory po lewej,
- korytarz w centrum,
- kuchnia u gory lub srodka po prawej stronie domu,
- salon na dole po lewej,
- taras jako wyjscie z domu do ogrodu.

Dlaczego tak:

- dziecko intuicyjnie rozumie relacje miedzy pokojami,
- punkty ukladaja sie w logiczna trase,
- latwo pokazac przejscie z domu do ogrodu.

### Ogrod

Ogrod zajmuje prawa polowe planszy.

Elementy tla:

- trawnik,
- kamienna sciezka,
- domek na narzedzia,
- hustawka,
- miejsce piknikowe z kocem,
- kilka krzakow i drzew dla klimatu.

To daje przyjazne, rozpoznawalne miejsce i pozwala ukryc final w naturalny sposob.

## Zasady punktow interakcji

Kazdy punkt na mapie powinien miec 1 z 3 stanow:

- zablokowany,
- aktywny,
- ukonczony.

### Zablokowany

Wyglad:

- wyszarzony,
- bez animacji,
- opcjonalnie mala ikona klodki.

### Aktywny

Wyglad:

- wyrazny kolor kontrastowy,
- pulsujaca obwodka,
- delikatne podskakiwanie lub blysk.

To ma jasno mowic dziecku: `kliknij tutaj`.

### Ukonczony

Wyglad:

- znaczek lupy, gwiazdki albo odhaczenia,
- spokojniejszy kolor niz aktywny punkt,
- widoczna nitka lub sciezka do kolejnego punktu.

## Rodzaje znacznikow

Warto rozroznic wizualnie typ interakcji:

- trop: ikonka lupy lub slad,
- postac: ikonka buzi lub sylwetki,
- final: wieksza odznaka z gwiazdka.

To pomaga dzieciu odroznic: `szukam rzeczy` od `rozmawiam z kims`.

## Okno zdarzenia

Po kliknieciu punktu otwiera sie duze, centralne okno modalne.

Uklad okna:

- gora: ilustracja tropu lub postaci,
- srodek: 1-2 zdania tekstu,
- dol: dzialanie matematyczne,
- pod spodem: 3 duze odpowiedzi.

Rekomendacja:

- szerokie okno na desktopie,
- prawie pelny ekran na mobile,
- zamkniecie tylko przez przycisk `X` lub po rozwiazaniu, zalezy od decyzji UX.

## Warstwa narracyjna

Mapa nie powinna byc tylko plansza. Powinna tez dawac odczucie postepu.

Dlatego warto dodac:

- laczace linie miedzy punktami,
- rozjasnianie kolejnych fragmentow mapy,
- delikatne pojawianie sie nowych punktow po poprawnej odpowiedzi.

To sprawi, ze dziecko bedzie czulo, ze rzeczywiscie idzie po tropach.

## Kolory i styl

Kierunek:

- cieple beze i kremy dla domu,
- zielenie i blekity dla ogrodu,
- akcent czerwony lub pomaranczowy dla aktywnego punktu,
- zlote lub zolte elementy dla nagrod i sukcesu.

Styl:

- ilustracyjny,
- miekki,
- zaokraglone ksztalty,
- bez ostrych kontrastow i bez chaosu.

## Responsywnosc

### Desktop

- mapa w proporcji zblizonej do `16:9`,
- naglowek na gorze,
- dodatkowy panel moze byc po prawej.

### Tablet

- bardzo zblizony do desktopu,
- wieksze klikane obszary,
- mniej drobnych detali tla.

### Mobile

- mapa nadal jako glowny ekran,
- panel wskazowek i przyciski przeniesione na dol,
- po kliknieciu punktu modal zajmuje prawie caly ekran,
- hotspoty musza byc wieksze niz na desktopie.

## Rekomendacja wdrozeniowa

Najprosciej zbudowac mape jako jedna ilustracje tla plus absolutnie pozycjonowane hotspoty.

Technicznie:

- tlo mapy jako `SVG` albo ilustracja rastrowa,
- punkty jako przyciski `button`,
- pozycjonowanie punktow procentowo,
- laczenie mapy i hotspotow w jednym komponencie React.

To bedzie:

- proste do wdrozenia,
- latwe do poprawiania,
- dobre dla lokalnego MVP.

## Najwazniejsze decyzje

- jedna glowna plansza z domem i ogrodem,
- okolo 10 punktow ustawionych w logicznej trasie,
- dom po lewej, ogrod po prawej,
- taras jako srodek i punkt przejscia,
- aktywny punkt zawsze bardzo wyraznie zaznaczony,
- modal z ilustracja, krotkim tekstem i zadaniem.
