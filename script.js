const steps = [
  {
    id: 1,
    title: "Pokoj dziecka",
    shortLabel: "Pokoj",
    kind: "clue",
    location: "Pokoj dziecka",
    description: "Mis zniknal z lozka. Zostala tylko wgniotka na poduszce.",
    dialogue: "",
    clue: "Na podlodze lezy brazowy klaczek.",
    questions: { 1: 12, 2: 22, 3: 37 },
    promptText: { 1: "7 + 5 = ?", 2: "14 + 8 = ?", 3: "23 + 14 = ?" },
    hotspot: { x: 19, y: 20 },
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
    questions: { 1: 9, 2: 15, 3: 25 },
    promptText: { 1: "13 - 4 = ?", 2: "21 - 6 = ?", 3: "34 - 9 = ?" },
    hotspot: { x: 36, y: 20 },
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
    questions: { 1: 15, 2: 26, 3: 41 },
    promptText: { 1: "9 + 6 = ?", 2: "17 + 9 = ?", 3: "28 + 13 = ?" },
    hotspot: { x: 47, y: 26 },
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
    questions: { 1: 8, 2: 16, 3: 26 },
    promptText: { 1: "15 - 7 = ?", 2: "24 - 8 = ?", 3: "41 - 15 = ?" },
    hotspot: { x: 19, y: 40 },
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
    questions: { 1: 16, 2: 26, 3: 44 },
    promptText: { 1: "8 + 8 = ?", 2: "19 + 7 = ?", 3: "26 + 18 = ?" },
    hotspot: { x: 53, y: 42 },
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
    questions: { 1: 7, 2: 16, 3: 28 },
    promptText: { 1: "16 - 9 = ?", 2: "27 - 11 = ?", 3: "45 - 17 = ?" },
    hotspot: { x: 68, y: 42 },
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
    questions: { 1: 13, 2: 27, 3: 41 },
    promptText: { 1: "6 + 7 = ?", 2: "12 + 15 = ?", 3: "22 + 19 = ?" },
    hotspot: { x: 71, y: 53 },
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
    questions: { 1: 10, 2: 18, 3: 29 },
    promptText: { 1: "18 - 8 = ?", 2: "30 - 12 = ?", 3: "50 - 21 = ?" },
    hotspot: { x: 75, y: 66 },
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
    questions: { 1: 15, 2: 29, 3: 49 },
    promptText: { 1: "11 + 4 = ?", 2: "16 + 13 = ?", 3: "24 + 25 = ?" },
    hotspot: { x: 83, y: 79 },
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
    choices: ["Tata", "Siostra", "Kot lub pies"],
    correctChoice: "Tata",
    hotspot: { x: 89, y: 90 },
  },
];

const state = {
  selectedClass: 1,
  currentStepId: 1,
  completedStepIds: [],
  foundClues: [],
  activeStepId: null,
};

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const playAgainButton = document.getElementById("play-again-button");
const classButtons = document.querySelectorAll(".class-button");
const hotspotsContainer = document.getElementById("hotspots");
const progressLabel = document.getElementById("progress-label");
const statusText = document.getElementById("status-text");
const cluesList = document.getElementById("clues-list");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModalButton = document.getElementById("close-modal-button");
const modalLocation = document.getElementById("modal-location");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDialogue = document.getElementById("modal-dialogue");
const questionPrompt = document.getElementById("question-prompt");
const answerGrid = document.getElementById("answer-grid");
const feedbackMessage = document.getElementById("feedback-message");
const endingBackdrop = document.getElementById("ending-backdrop");
const endingText = document.getElementById("ending-text");
const modalIllustration = document.getElementById("modal-illustration");

function buildHotspots() {
  hotspotsContainer.innerHTML = "";

  steps.forEach((step) => {
    const button = document.createElement("button");
    const status = getStepStatus(step.id);

    button.className = `hotspot ${status}`;
    button.style.left = `${step.hotspot.x}%`;
    button.style.top = `${step.hotspot.y}%`;
    button.style.transform = "translate(-50%, -50%)";
    button.disabled = status === "locked";
    button.innerHTML = `<span class="hotspot-label">${step.id}. ${step.shortLabel}</span>`;

    if (status !== "locked") {
      button.addEventListener("click", () => openStep(step.id));
    }

    hotspotsContainer.appendChild(button);
  });
}

function getStepStatus(stepId) {
  if (state.completedStepIds.includes(stepId)) return "completed";
  if (state.currentStepId === stepId) return "available";
  return "locked";
}

function updateProgress() {
  progressLabel.textContent = `${state.completedStepIds.length} / 10`;
}

function updateStatusText() {
  const nextStep = steps.find((step) => step.id === state.currentStepId);

  if (!nextStep) {
    statusText.textContent = "Misia odnaleziono. Mozna zaczynac nowe sledztwo.";
    return;
  }

  statusText.textContent = `Aktywny punkt: ${nextStep.location}. Kliknij pulsujacy znacznik na mapie.`;
}

function updateClues() {
  if (state.foundClues.length === 0) {
    cluesList.innerHTML = "<li>Jeszcze nic tu nie ma. Pierwszy trop czeka w pokoju.</li>";
    return;
  }

  cluesList.innerHTML = state.foundClues.map((clue) => `<li>${clue}</li>`).join("");
}

function startGame() {
  state.currentStepId = 1;
  state.completedStepIds = [];
  state.foundClues = [];
  state.activeStepId = null;

  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  endingBackdrop.classList.add("hidden");

  buildHotspots();
  updateProgress();
  updateStatusText();
  updateClues();
}

function resetToStart() {
  modalBackdrop.classList.add("hidden");
  endingBackdrop.classList.add("hidden");
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

function openStep(stepId) {
  const step = steps.find((item) => item.id === stepId);
  if (!step) return;

  state.activeStepId = stepId;
  modalLocation.textContent = step.location;
  modalTitle.textContent = step.title;
  modalDescription.textContent = step.description;
  feedbackMessage.textContent = "";
  styleIllustration(step.kind);

  if (step.dialogue) {
    modalDialogue.textContent = step.dialogue;
    modalDialogue.classList.remove("hidden");
  } else {
    modalDialogue.classList.add("hidden");
  }

  if (step.kind === "final") {
    questionPrompt.textContent = "Kto ostatni mial misia?";
    renderFinalChoices(step);
  } else {
    questionPrompt.textContent = step.promptText[state.selectedClass];
    renderMathChoices(step);
  }

  modalBackdrop.classList.remove("hidden");
}

function styleIllustration(kind) {
  if (kind === "character") {
    modalIllustration.style.background = "linear-gradient(135deg, #f8d9b9, #d7e8f7)";
  } else if (kind === "final") {
    modalIllustration.style.background = "linear-gradient(135deg, #f6de90, #d8ebc7)";
  } else {
    modalIllustration.style.background = "linear-gradient(135deg, #f7ddb4, #d6ebcf)";
  }
}

function renderMathChoices(step) {
  const correctAnswer = step.questions[state.selectedClass];
  const options = createAnswerOptions(correctAnswer);

  answerGrid.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = option;
    button.addEventListener("click", () => handleMathAnswer(step, option, button, correctAnswer));
    answerGrid.appendChild(button);
  });
}

function renderFinalChoices(step) {
  answerGrid.innerHTML = "";

  step.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = choice;
    button.addEventListener("click", () => handleFinalChoice(step, choice, button));
    answerGrid.appendChild(button);
  });
}

function createAnswerOptions(correctAnswer) {
  const options = new Set([correctAnswer]);

  while (options.size < 3) {
    const offset = Math.floor(Math.random() * 6) + 1;
    const direction = Math.random() > 0.5 ? 1 : -1;
    const candidate = correctAnswer + offset * direction;

    if (candidate >= 0) options.add(candidate);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
}

function handleMathAnswer(step, option, button, correctAnswer) {
  if (option === correctAnswer) {
    button.classList.add("correct");
    feedbackMessage.textContent = `Brawo! ${step.clue}`;
    completeStep(step);
  } else {
    button.classList.add("wrong");
    feedbackMessage.textContent = "To jeszcze nie ta odpowiedz. Sprobuj ponownie.";
  }
}

function handleFinalChoice(step, choice, button) {
  if (choice === step.correctChoice) {
    button.classList.add("correct");
    feedbackMessage.textContent = "Tak! To tata ostatni mial misia.";
    completeStep(step);
  } else {
    button.classList.add("wrong");
    feedbackMessage.textContent = "To nie ten trop. Sprawdz jeszcze raz.";
  }
}

function completeStep(step) {
  if (!state.completedStepIds.includes(step.id)) {
    state.completedStepIds.push(step.id);
    if (step.clue) state.foundClues.push(step.clue);
  }

  state.currentStepId = step.id + 1;

  setTimeout(() => {
    modalBackdrop.classList.add("hidden");
    buildHotspots();
    updateProgress();
    updateStatusText();
    updateClues();

    if (step.kind === "final") {
      showEnding();
    }
  }, 1200);
}

function showEnding() {
  endingText.textContent =
    "Tata wzial misia na taras, bo chcial, zeby tez siedzial przy stole podczas podwieczorku. Potem zaniosl koc do ogrodu i zapomnial, ze mis zostal pod pledem obok hustawki.";
  endingBackdrop.classList.remove("hidden");
}

classButtons.forEach((button) => {
  button.addEventListener("click", () => {
    classButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    state.selectedClass = Number(button.dataset.class);
  });
});

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetToStart);
playAgainButton.addEventListener("click", resetToStart);
closeModalButton.addEventListener("click", () => modalBackdrop.classList.add("hidden"));

buildHotspots();
