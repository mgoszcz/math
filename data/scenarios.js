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
    math: {
      classProfiles: {
        1: {
          maxValue: 20,
          templates: {
            add_small: {
              kind: "arithmetic",
              operations: ["add"],
              operands: {
                left: { min: 1, max: 9 },
                right: { min: 1, max: 9 }
              },
              result: { min: 0, max: 20 },
              answerOptions: { count: 3, deltaMin: 1, deltaMax: 4, minValue: 0 }
            },
            add_medium: {
              kind: "arithmetic",
              operations: ["add"],
              operands: {
                left: { min: 4, max: 12 },
                right: { min: 3, max: 9 }
              },
              result: { min: 0, max: 20 },
              answerOptions: { count: 3, deltaMin: 1, deltaMax: 5, minValue: 0 }
            },
            subtract_small: {
              kind: "arithmetic",
              operations: ["subtract"],
              operands: {
                left: { min: 6, max: 16 },
                right: { min: 1, max: 8 }
              },
              result: { min: 0, max: 20 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 1, deltaMax: 4, minValue: 0 }
            },
            subtract_medium: {
              kind: "arithmetic",
              operations: ["subtract"],
              operands: {
                left: { min: 10, max: 20 },
                right: { min: 2, max: 10 }
              },
              result: { min: 0, max: 20 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 1, deltaMax: 5, minValue: 0 }
            },
            mixed_easy: {
              kind: "arithmetic",
              operations: ["add", "subtract"],
              operands: {
                left: { min: 4, max: 14 },
                right: { min: 1, max: 8 }
              },
              result: { min: 0, max: 20 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 1, deltaMax: 4, minValue: 0 }
            },
            mixed_medium: {
              kind: "arithmetic",
              operations: ["add", "subtract"],
              operands: {
                left: { min: 8, max: 18 },
                right: { min: 2, max: 9 }
              },
              result: { min: 0, max: 20 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 1, deltaMax: 5, minValue: 0 }
            }
          }
        },
        2: {
          maxValue: 30,
          templates: {
            add_small: {
              kind: "arithmetic",
              operations: ["add"],
              operands: {
                left: { min: 6, max: 16 },
                right: { min: 4, max: 12 }
              },
              result: { min: 0, max: 30 },
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 6, minValue: 0 }
            },
            add_medium: {
              kind: "arithmetic",
              operations: ["add"],
              operands: {
                left: { min: 10, max: 20 },
                right: { min: 6, max: 14 }
              },
              result: { min: 0, max: 30 },
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 7, minValue: 0 }
            },
            subtract_small: {
              kind: "arithmetic",
              operations: ["subtract"],
              operands: {
                left: { min: 12, max: 24 },
                right: { min: 3, max: 10 }
              },
              result: { min: 0, max: 30 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 6, minValue: 0 }
            },
            subtract_medium: {
              kind: "arithmetic",
              operations: ["subtract"],
              operands: {
                left: { min: 16, max: 30 },
                right: { min: 4, max: 14 }
              },
              result: { min: 0, max: 30 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 7, minValue: 0 }
            },
            mixed_easy: {
              kind: "arithmetic",
              operations: ["add", "subtract"],
              operands: {
                left: { min: 8, max: 20 },
                right: { min: 3, max: 12 }
              },
              result: { min: 0, max: 30 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 6, minValue: 0 }
            },
            mixed_medium: {
              kind: "arithmetic",
              operations: ["add", "subtract"],
              operands: {
                left: { min: 12, max: 26 },
                right: { min: 4, max: 14 }
              },
              result: { min: 0, max: 30 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 7, minValue: 0 }
            }
          }
        },
        3: {
          maxValue: 50,
          templates: {
            add_small: {
              kind: "arithmetic",
              operations: ["add"],
              operands: {
                left: { min: 10, max: 24 },
                right: { min: 8, max: 18 }
              },
              result: { min: 0, max: 50 },
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 8, minValue: 0 }
            },
            add_medium: {
              kind: "arithmetic",
              operations: ["add"],
              operands: {
                left: { min: 15, max: 32 },
                right: { min: 9, max: 20 }
              },
              result: { min: 0, max: 50 },
              answerOptions: { count: 3, deltaMin: 3, deltaMax: 9, minValue: 0 }
            },
            subtract_small: {
              kind: "arithmetic",
              operations: ["subtract"],
              operands: {
                left: { min: 18, max: 40 },
                right: { min: 5, max: 16 }
              },
              result: { min: 0, max: 50 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 8, minValue: 0 }
            },
            subtract_medium: {
              kind: "arithmetic",
              operations: ["subtract"],
              operands: {
                left: { min: 24, max: 50 },
                right: { min: 6, max: 20 }
              },
              result: { min: 0, max: 50 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 3, deltaMax: 9, minValue: 0 }
            },
            mixed_easy: {
              kind: "arithmetic",
              operations: ["add", "subtract"],
              operands: {
                left: { min: 12, max: 30 },
                right: { min: 5, max: 16 }
              },
              result: { min: 0, max: 50 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 2, deltaMax: 8, minValue: 0 }
            },
            mixed_medium: {
              kind: "arithmetic",
              operations: ["add", "subtract"],
              operands: {
                left: { min: 18, max: 40 },
                right: { min: 6, max: 20 }
              },
              result: { min: 0, max: 50 },
              allowNegativeResult: false,
              answerOptions: { count: 3, deltaMin: 3, deltaMax: 9, minValue: 0 }
            }
          }
        }
      }
    },
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
        challenge: { type: "math", templateId: "add_small" },
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
        challenge: { type: "math", templateId: "subtract_small" },
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
        challenge: { type: "math", templateId: "mixed_easy" },
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
        challenge: { type: "math", templateId: "subtract_small" },
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
        challenge: { type: "math", templateId: "mixed_medium" },
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
        challenge: { type: "math", templateId: "mixed_medium" },
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
        challenge: { type: "math", templateId: "add_small" },
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
        challenge: { type: "math", templateId: "subtract_medium" },
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
        challenge: { type: "math", templateId: "mixed_easy" },
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
