const scenarios = window.gameScenarios ?? [];
const GameEngine = window.GameEngine;
const heroes = [
  {
    id: "zosia",
    name: "Marysia",
    copy: "Spokojna tropicielka, ktora lubi zagladac tam, gdzie inni nie patrza.",
    avatarSrc: "./assets/heroes/zosia.jpg",
  },
  {
    id: "ania",
    name: "Ania",
    copy: "Wesola detektywka z rudymi wlosami i swietnym okiem do szczegolow.",
    avatarSrc: "./assets/heroes/ania.jpg",
  },
  {
    id: "leo",
    name: "Leo",
    copy: "Bystry detektyw, ktory lubi zadawac pytania i szybko laczy tropy.",
    avatarSrc: "./assets/heroes/leo.jpg",
  },
  {
    id: "maks",
    name: "Maks",
    copy: "Ruchliwy poszukiwacz z jasnymi wlosami i odwaga do nowych spraw.",
    avatarSrc: "./assets/heroes/maks.jpg",
  },
];

const state = {
  selectedClass: 1,
  selectedScenarioId: scenarios[0]?.id ?? null,
  selectedHeroId: heroes[0]?.id ?? null,
  engine: null,
};

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const playAgainButton = document.getElementById("play-again-button");
const closeModalButton = document.getElementById("close-modal-button");
const classButtons = document.querySelectorAll(".class-button");
const scenarioButtons = document.getElementById("scenario-buttons");
const heroOptions = document.getElementById("hero-options");
const previewTitle = document.getElementById("preview-title");
const previewSubtitle = document.getElementById("preview-subtitle");
const heroText = document.getElementById("hero-text");
const caseTitle = document.getElementById("case-title");
const goalTitle = document.getElementById("goal-title");
const progressLabel = document.getElementById("progress-label");
const statusText = document.getElementById("status-text");
const cluesList = document.getElementById("clues-list");
const hotspots = document.getElementById("hotspots");
const mapStage = document.getElementById("map-stage");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalLocation = document.getElementById("modal-location");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDialogue = document.getElementById("modal-dialogue");
const questionLabel = document.getElementById("question-label");
const questionPrompt = document.getElementById("question-prompt");
const answerGrid = document.getElementById("answer-grid");
const feedbackMessage = document.getElementById("feedback-message");
const questionActions = document.getElementById("question-actions");
const nextStepButton = document.getElementById("next-step-button");
const endingBackdrop = document.getElementById("ending-backdrop");
const endingText = document.getElementById("ending-text");
const modalIllustration = document.getElementById("modal-illustration");
const modalPortrait = document.getElementById("modal-portrait");
const modalIllustrationBadge = document.getElementById(
  "modal-illustration-badge",
);
const trailPath = document.getElementById("trail-path");
const selectedHeroAvatar = document.getElementById("selected-hero-avatar");
const selectedHeroName = document.getElementById("selected-hero-name");
const selectedHeroCopy = document.getElementById("selected-hero-copy");

const engineElements = {
  caseTitle,
  goalTitle,
  progressLabel,
  statusText,
  cluesList,
  hotspots,
  mapStage,
  modalBackdrop,
  modalLocation,
  modalTitle,
  modalDescription,
  modalDialogue,
  questionLabel,
  questionPrompt,
  answerGrid,
  feedbackMessage,
  questionActions,
  nextStepButton,
  endingBackdrop,
  endingText,
  modalIllustration,
  modalPortrait,
  modalIllustrationBadge,
  trailPath,
};

function getSelectedScenario() {
  return (
    scenarios.find((scenario) => scenario.id === state.selectedScenarioId) ??
    scenarios[0]
  );
}

function getSelectedHero() {
  return heroes.find((hero) => hero.id === state.selectedHeroId) ?? heroes[0];
}

function renderScenarioPicker() {
  scenarioButtons.innerHTML = "";

  scenarios.forEach((scenario) => {
    const button = document.createElement("button");
    button.className = `scenario-button ${scenario.id === state.selectedScenarioId ? "selected" : ""}`;
    button.textContent = scenario.title;
    button.addEventListener("click", () => {
      state.selectedScenarioId = scenario.id;
      renderScenarioPicker();
      syncScenarioPreview();
    });
    scenarioButtons.appendChild(button);
  });
}

function renderHeroPicker() {
  heroOptions.innerHTML = "";

  heroes.forEach((hero) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hero-option ${hero.id === state.selectedHeroId ? "selected" : ""}`;

    const avatar = document.createElement("img");
    avatar.className = "hero-avatar";
    avatar.src = hero.avatarSrc;
    avatar.alt = `Portret bohatera ${hero.name}`;

    const name = document.createElement("h3");
    name.className = "hero-option-name";
    name.textContent = hero.name;

    const copy = document.createElement("p");
    copy.className = "hero-option-copy";
    copy.textContent = hero.copy;

    button.append(avatar, name, copy);
    button.addEventListener("click", () => {
      state.selectedHeroId = hero.id;
      renderHeroPicker();
      syncSelectedHeroSummary();
    });

    heroOptions.appendChild(button);
  });
}

function syncScenarioPreview() {
  const scenario = getSelectedScenario();
  if (!scenario) return;

  previewTitle.textContent = `Sprawa: ${scenario.title}`;
  previewSubtitle.textContent = scenario.subtitle;
  heroText.textContent = scenario.intro;
}

function syncSelectedHeroSummary() {
  const hero = getSelectedHero();
  if (!hero) return;

  selectedHeroName.textContent = hero.name;
  selectedHeroCopy.textContent = hero.copy;
  selectedHeroAvatar.src = hero.avatarSrc;
  selectedHeroAvatar.alt = `Portret bohatera ${hero.name}`;
}

function startGame() {
  const scenario = getSelectedScenario();
  if (!scenario || !GameEngine) return;

  state.engine = new GameEngine({
    scenario,
    selectedClass: state.selectedClass,
    elements: engineElements,
  });

  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  endingBackdrop.classList.add("hidden");
  state.engine.start();
}

function resetToStart() {
  modalBackdrop.classList.add("hidden");
  endingBackdrop.classList.add("hidden");
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
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
closeModalButton.addEventListener("click", () => state.engine?.closeModal());
nextStepButton.addEventListener("click", () =>
  state.engine?.advanceAfterSuccess(),
);

renderScenarioPicker();
renderHeroPicker();
syncScenarioPreview();
syncSelectedHeroSummary();
