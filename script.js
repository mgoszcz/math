const scenarios = window.gameScenarios ?? [];
const GameEngine = window.GameEngine;

const state = {
  selectedClass: 1,
  selectedScenarioId: scenarios[0]?.id ?? null,
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
const previewTitle = document.getElementById("preview-title");
const previewSubtitle = document.getElementById("preview-subtitle");
const heroText = document.getElementById("hero-text");
const caseTitle = document.getElementById("case-title");
const goalTitle = document.getElementById("goal-title");
const progressLabel = document.getElementById("progress-label");
const statusText = document.getElementById("status-text");
const cluesList = document.getElementById("clues-list");
const hotspots = document.getElementById("hotspots");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalLocation = document.getElementById("modal-location");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDialogue = document.getElementById("modal-dialogue");
const questionLabel = document.getElementById("question-label");
const questionPrompt = document.getElementById("question-prompt");
const answerGrid = document.getElementById("answer-grid");
const feedbackMessage = document.getElementById("feedback-message");
const endingBackdrop = document.getElementById("ending-backdrop");
const endingText = document.getElementById("ending-text");
const modalIllustration = document.getElementById("modal-illustration");
const trailPath = document.getElementById("trail-path");

const engineElements = {
  caseTitle,
  goalTitle,
  progressLabel,
  statusText,
  cluesList,
  hotspots,
  modalBackdrop,
  modalLocation,
  modalTitle,
  modalDescription,
  modalDialogue,
  questionLabel,
  questionPrompt,
  answerGrid,
  feedbackMessage,
  endingBackdrop,
  endingText,
  modalIllustration,
  trailPath,
};

function getSelectedScenario() {
  return scenarios.find((scenario) => scenario.id === state.selectedScenarioId) ?? scenarios[0];
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

function syncScenarioPreview() {
  const scenario = getSelectedScenario();
  if (!scenario) return;

  previewTitle.textContent = `Sprawa: ${scenario.title}`;
  previewSubtitle.textContent = scenario.subtitle;
  heroText.textContent = scenario.intro;
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

renderScenarioPicker();
syncScenarioPreview();
