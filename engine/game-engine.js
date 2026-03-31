(function () {
  const MathChallengeGenerator = window.MathChallengeGenerator;

  class GameEngine {
    constructor({ scenario, selectedClass, elements }) {
      GameEngine.sessionCounter = (GameEngine.sessionCounter ?? 0) + 1;

      this.scenario = scenario;
      this.selectedClass = selectedClass;
      this.elements = elements;
      this.sessionNumber = GameEngine.sessionCounter;
      this.state = {
        currentStepId: scenario.steps[0]?.id ?? null,
        completedStepIds: [],
        foundClues: [],
        activeStepId: null,
        generatedChallenges: {},
      };
    }

    start() {
      this.state.currentStepId = this.scenario.steps[0]?.id ?? null;
      this.state.completedStepIds = [];
      this.state.foundClues = [];
      this.state.activeStepId = null;
      this.state.generatedChallenges = this.generateSessionChallenges();

      this.renderStaticScenarioContent();
      this.render();
    }

    generateSessionChallenges() {
      const generated = {};
      const templateUsageCounts = {};

      this.scenario.steps.forEach((step) => {
        const templateId = step.challenge.templateId;
        const templateUsageIndex = templateId ? (templateUsageCounts[templateId] ?? 0) : 0;

        if (templateId) {
          templateUsageCounts[templateId] = templateUsageIndex + 1;
        }

        generated[step.id] = MathChallengeGenerator.generateChallenge({
          scenario: this.scenario,
          selectedClass: this.selectedClass,
          challengeSpec: step.challenge,
          generationContext: {
            sessionNumber: this.sessionNumber,
            templateUsageIndex,
          },
        });
      });

      return generated;
    }

    renderStaticScenarioContent() {
      this.elements.caseTitle.textContent = this.scenario.title;
      this.elements.goalTitle.textContent = this.scenario.goalText;
      this.elements.trailPath.setAttribute("d", this.scenario.map.trailPath);

      this.scenario.map.areas.forEach((area) => {
        const areaElement = document.querySelector(`[data-map-area="${area.key}"]`);
        if (areaElement) areaElement.textContent = area.label;
      });
    }

    render() {
      this.buildHotspots();
      this.updateProgress();
      this.updateStatusText();
      this.updateClues();
    }

    buildHotspots() {
      this.elements.hotspots.innerHTML = "";

      this.scenario.steps.forEach((step) => {
        const button = document.createElement("button");
        const status = this.getStepStatus(step.id);

        button.className = `hotspot ${status}`;
        button.style.left = `${step.hotspot.x}%`;
        button.style.top = `${step.hotspot.y}%`;
        button.style.transform = "translate(-50%, -50%)";
        button.disabled = status === "locked";
        button.innerHTML = `<span class="hotspot-label">${step.id}. ${step.shortLabel}</span>`;

        if (status !== "locked") {
          button.addEventListener("click", () => this.openStep(step.id));
        }

        this.elements.hotspots.appendChild(button);
      });
    }

    getStepStatus(stepId) {
      if (this.state.completedStepIds.includes(stepId)) return "completed";
      if (this.state.currentStepId === stepId) return "available";
      return "locked";
    }

    updateProgress() {
      this.elements.progressLabel.textContent = `${this.state.completedStepIds.length} / ${this.scenario.steps.length}`;
    }

    updateStatusText() {
      const nextStep = this.scenario.steps.find((step) => step.id === this.state.currentStepId);

      if (!nextStep) {
        this.elements.statusText.textContent = "Misia odnaleziono. Mozna zaczynac nowe sledztwo.";
        return;
      }

      this.elements.statusText.textContent =
        `Aktywny punkt: ${nextStep.location}. Kliknij pulsujacy znacznik na mapie.`;
    }

    updateClues() {
      if (this.state.foundClues.length === 0) {
        this.elements.cluesList.innerHTML = `<li>${this.scenario.emptyClueText}</li>`;
        return;
      }

      this.elements.cluesList.innerHTML = this.state.foundClues.map((clue) => `<li>${clue}</li>`).join("");
    }

    openStep(stepId) {
      const step = this.scenario.steps.find((item) => item.id === stepId);
      if (!step) return;

      this.state.activeStepId = stepId;
      this.elements.modalLocation.textContent = step.location;
      this.elements.modalTitle.textContent = step.title;
      this.elements.modalDescription.textContent = step.description;
      this.elements.feedbackMessage.textContent = "";
      this.styleIllustration(step.kind);

      if (step.dialogue) {
        this.elements.modalDialogue.textContent = step.dialogue;
        this.elements.modalDialogue.classList.remove("hidden");
      } else {
        this.elements.modalDialogue.classList.add("hidden");
      }

      const sessionChallenge = this.state.generatedChallenges[step.id];

      if (step.challenge.type === "choice") {
        this.elements.questionLabel.textContent = "Wybierz odpowiedz";
        this.elements.questionPrompt.textContent = sessionChallenge.prompt;
        this.renderChoiceAnswers(step, sessionChallenge);
      } else {
        this.elements.questionLabel.textContent = "Rozwiaz dzialanie";
        this.elements.questionPrompt.textContent = sessionChallenge.prompt;
        this.renderMathAnswers(step, sessionChallenge);
      }

      this.elements.modalBackdrop.classList.remove("hidden");
    }

    styleIllustration(kind) {
      if (kind === "character") {
        this.elements.modalIllustration.style.background = "linear-gradient(135deg, #f8d9b9, #d7e8f7)";
      } else if (kind === "final") {
        this.elements.modalIllustration.style.background = "linear-gradient(135deg, #f6de90, #d8ebc7)";
      } else {
        this.elements.modalIllustration.style.background = "linear-gradient(135deg, #f7ddb4, #d6ebcf)";
      }
    }

    renderMathAnswers(step, sessionChallenge) {
      this.elements.answerGrid.innerHTML = "";

      sessionChallenge.options.forEach((option) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = option;
        button.addEventListener("click", () =>
          this.handleMathAnswer(step, option, button, sessionChallenge.correctAnswer)
        );
        this.elements.answerGrid.appendChild(button);
      });
    }

    renderChoiceAnswers(step, sessionChallenge) {
      this.elements.answerGrid.innerHTML = "";

      sessionChallenge.options.forEach((option) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = option;
        button.addEventListener("click", () => this.handleChoiceAnswer(step, option, button, sessionChallenge));
        this.elements.answerGrid.appendChild(button);
      });
    }

    handleMathAnswer(step, option, button, correctAnswer) {
      if (option === correctAnswer) {
        button.classList.add("correct");
        this.elements.feedbackMessage.textContent = `Brawo! ${step.clue}`;
        this.completeStep(step);
      } else {
        button.classList.add("wrong");
        this.elements.feedbackMessage.textContent = "To jeszcze nie ta odpowiedz. Sprobuj ponownie.";
      }
    }

    handleChoiceAnswer(step, option, button, sessionChallenge) {
      if (option === sessionChallenge.correctAnswer) {
        button.classList.add("correct");
        this.elements.feedbackMessage.textContent = sessionChallenge.successFeedback;
        this.completeStep(step);
      } else {
        button.classList.add("wrong");
        this.elements.feedbackMessage.textContent = sessionChallenge.failureFeedback;
      }
    }

    completeStep(step) {
      if (!this.state.completedStepIds.includes(step.id)) {
        this.state.completedStepIds.push(step.id);
        if (step.clue) this.state.foundClues.push(step.clue);
      }

      const currentIndex = this.scenario.steps.findIndex((item) => item.id === step.id);
      const nextStep = this.scenario.steps[currentIndex + 1];
      this.state.currentStepId = nextStep?.id ?? null;

      window.setTimeout(() => {
        this.elements.modalBackdrop.classList.add("hidden");
        this.render();

        if (step.kind === "final") {
          this.showEnding();
        }
      }, 1200);
    }

    showEnding() {
      this.elements.endingText.textContent = this.scenario.finalMessage;
      this.elements.endingBackdrop.classList.remove("hidden");
    }

    closeModal() {
      this.elements.modalBackdrop.classList.add("hidden");
    }
  }

  window.GameEngine = GameEngine;
})();
