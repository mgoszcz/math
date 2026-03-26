window.gameScenarios = [
  {
    id: "missing-bear",
    title: "Gdzie zaginal mis?",
    subtitle: "10 punktow. 10 zadan. Jedna domowa tajemnica do rozwiazania.",
    intro:
      "Rozwiaz zagadke zaginionego misia. Szukaj tropow na mapie domu i ogrodu, rozwiazuj dzialania i odkrywaj kolejne wskazowki.",
    goalText: "Znajdz misia i rozwiaz zagadke",
    emptyClueText: "Jeszcze nic tu nie ma. Pierwszy trop czeka w pokoju.",
    finalMessage:
      "Tata wzial misia na taras, bo chcial, zeby tez siedzial przy stole podczas podwieczorku. Potem zaniosl koc do ogrodu i zapomnial, ze mis zostal pod pledem obok hustawki.",
    map: {
      trailPath:
        "M20 16 L37 16 L37 22 L46 22 L46 32 L56 32 L66 32 L66 39 L72 39 L72 46 L80 46 L80 52 L88 52",
      areas: [
        { key: "bedroom", className: "room room-bedroom", label: "Pokoj" },
        { key: "hall", className: "room room-hall", label: "Korytarz" },
        { key: "kitchen", className: "room room-kitchen", label: "Kuchnia" },
        { key: "living", className: "room room-living", label: "Salon" },
        { key: "terrace", className: "room room-terrace", label: "Taras" },
        { key: "shed", className: "garden-shed", label: "Domek" },
        { key: "swing", className: "garden-swing", label: "Hustawka" },
        { key: "picnic", className: "garden-picnic", label: "Koc" }
      ]
    },
    steps: [
      {
        id: 1,
        title: "Pokoj dziecka",
        shortLabel: "Pokoj",
        kind: "clue",
        location: "Pokoj dziecka",
        description: "Mis zniknal z lozka. Zostala tylko wgniotka na poduszce.",
        dialogue: "",
        clue: "Na podlodze lezy brazowy klaczek.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "7 + 5 = ?", correctAnswer: 12 },
            2: { prompt: "14 + 8 = ?", correctAnswer: 22 },
            3: { prompt: "23 + 14 = ?", correctAnswer: 37 }
          }
        },
        hotspot: { x: 19, y: 20 }
      },
      {
        id: 2,
        title: "Korytarz",
        shortLabel: "Korytarz",
        kind: "clue",
        location: "Korytarz",
        description: "Na podlodze widac slady. Jedne male, jedne bardzo duze.",
        dialogue: "",
        clue: "Duzy slad wyglada jak kapec taty.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "13 - 4 = ?", correctAnswer: 9 },
            2: { prompt: "21 - 6 = ?", correctAnswer: 15 },
            3: { prompt: "34 - 9 = ?", correctAnswer: 25 }
          }
        },
        hotspot: { x: 36, y: 20 }
      },
      {
        id: 3,
        title: "Kuchnia",
        shortLabel: "Kuchnia",
        kind: "character",
        location: "Kuchnia",
        description: "Na stole leza okruszki. Czy mis byl na podwieczorku?",
        dialogue: "Tata: Ja? Nic nie wiem... moze mis byl bardzo glodny.",
        clue: "Obok talerza jest nitka od koca z tarasu.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "9 + 6 = ?", correctAnswer: 15 },
            2: { prompt: "17 + 9 = ?", correctAnswer: 26 },
            3: { prompt: "28 + 13 = ?", correctAnswer: 41 }
          }
        },
        hotspot: { x: 47, y: 26 }
      },
      {
        id: 4,
        title: "Salon",
        shortLabel: "Salon",
        kind: "character",
        location: "Salon",
        description: "Pod stolikiem cos wystaje. To nie mis. To jego mala kokardka!",
        dialogue: "Siostra: Widzialam, jak tata cos niosl, ale bardzo sie spieszyl.",
        clue: "Kokardka prowadzi w strone tarasu.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "15 - 7 = ?", correctAnswer: 8 },
            2: { prompt: "24 - 8 = ?", correctAnswer: 16 },
            3: { prompt: "41 - 15 = ?", correctAnswer: 26 }
          }
        },
        hotspot: { x: 19, y: 40 }
      },
      {
        id: 5,
        title: "Taras",
        shortLabel: "Taras",
        kind: "character",
        location: "Taras",
        description: "Na krzesle lezy zwiniety koc. Wyglada na bardzo podejrzany.",
        dialogue: "Tata: To zwykly koc. Na pewno nie ukrywa misia. Chyba.",
        clue: "Na kocu jest trawka. Trzeba isc dalej do ogrodu.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "8 + 8 = ?", correctAnswer: 16 },
            2: { prompt: "19 + 7 = ?", correctAnswer: 26 },
            3: { prompt: "26 + 18 = ?", correctAnswer: 44 }
          }
        },
        hotspot: { x: 53, y: 42 }
      },
      {
        id: 6,
        title: "Sciezka",
        shortLabel: "Sciezka",
        kind: "clue",
        location: "Ogrodowa sciezka",
        description: "Na sciezce leza dwa ciasteczkowe okruszki. Ktos tedy szedl.",
        dialogue: "",
        clue: "Slad prowadzi obok domku na narzedzia.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "16 - 9 = ?", correctAnswer: 7 },
            2: { prompt: "27 - 11 = ?", correctAnswer: 16 },
            3: { prompt: "45 - 17 = ?", correctAnswer: 28 }
          }
        },
        hotspot: { x: 68, y: 42 }
      },
      {
        id: 7,
        title: "Domek",
        shortLabel: "Domek",
        kind: "character",
        location: "Domek na narzedzia",
        description: "W srodku cos pluszowego... ale to tylko rekawica ogrodowa.",
        dialogue: "Siostra: Ha, juz myslalam, ze to on!",
        clue: "Przy drzwiach lezy guziczek od poduszki z hustawki.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "6 + 7 = ?", correctAnswer: 13 },
            2: { prompt: "12 + 15 = ?", correctAnswer: 27 },
            3: { prompt: "22 + 19 = ?", correctAnswer: 41 }
          }
        },
        hotspot: { x: 71, y: 53 }
      },
      {
        id: 8,
        title: "Hustawka",
        shortLabel: "Hustawka",
        kind: "character",
        location: "Hustawka",
        description: "Hustawka jeszcze lekko sie rusza. Jakby ktos przed chwila tu siedzial.",
        dialogue: "Tata: Eee... odpoczywalem tu tylko chwilke. Z misiem? Nie pamietam!",
        clue: "Obok hustawki lezy zlozony koc piknikowy.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "18 - 8 = ?", correctAnswer: 10 },
            2: { prompt: "30 - 12 = ?", correctAnswer: 18 },
            3: { prompt: "50 - 21 = ?", correctAnswer: 29 }
          }
        },
        hotspot: { x: 75, y: 66 }
      },
      {
        id: 9,
        title: "Koc",
        shortLabel: "Koc",
        kind: "clue",
        location: "Koc piknikowy",
        description: "Pod kocem widac znajomy, pluszowy ksztalt... czy to juz to?",
        dialogue: "",
        clue: "To mis! Trzeba jeszcze ustalic, kto go tu zostawil.",
        challenge: {
          type: "math",
          variants: {
            1: { prompt: "11 + 4 = ?", correctAnswer: 15 },
            2: { prompt: "16 + 13 = ?", correctAnswer: 29 },
            3: { prompt: "24 + 25 = ?", correctAnswer: 49 }
          }
        },
        hotspot: { x: 83, y: 79 }
      },
      {
        id: 10,
        title: "Final",
        shortLabel: "Final",
        kind: "final",
        location: "Rozwiazanie sprawy",
        description: "Kto ostatni mial misia? Wybierz najlepszego podejrzanego.",
        dialogue: "",
        clue: "Tata wzial misia na taras i zapomnial go pod kocem po podwieczorku.",
        challenge: {
          type: "choice",
          prompt: "Kto ostatni mial misia?",
          options: ["Tata", "Siostra", "Kot lub pies"],
          correctAnswer: "Tata",
          successFeedback: "Tak! To tata ostatni mial misia.",
          failureFeedback: "To nie ten trop. Sprawdz jeszcze raz."
        },
        hotspot: { x: 89, y: 90 }
      }
    ]
  }
];
