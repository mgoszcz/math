(function () {
  const MathChallengeGenerator = window.MathChallengeGenerator;
  const illustrationLibrary = {
    tata: {
      src: "./assets/npc/tata.png",
      alt: "Portret taty",
      badge: "Podejrzany",
      moodClass: "is-tata",
    },
    siostra: {
      src: "./assets/npc/siostra.png",
      alt: "Portret siostry",
      badge: "Swiadek",
      moodClass: "is-siostra",
    },
    clue: {
      src: "./assets/npc/trop.png",
      alt: "Ilustracja tropu",
      badge: "Trop",
      moodClass: "is-clue",
    },
    final: {
      src: "./assets/npc/final.jpg",
      alt: "Ilustracja finalu sprawy",
      badge: "Final",
      moodClass: "is-final",
    },
  };

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
        pendingAdvanceStepId: null,
      };
      this.pendingAdvanceTimeoutId = null;
      this.pendingAdvanceIntervalId = null;
      this.pendingAdvanceCountdown = 0;
    }

    start() {
      this.state.currentStepId = this.scenario.steps[0]?.id ?? null;
      this.state.completedStepIds = [];
      this.state.foundClues = [];
      this.state.activeStepId = null;
      this.state.generatedChallenges = this.generateSessionChallenges();
      this.state.pendingAdvanceStepId = null;
      this.clearPendingAdvance();

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
      this.applyMapArtwork();

      this.scenario.map.areas.forEach((area) => {
        const areaElement = document.querySelector(`[data-map-area="${area.key}"]`);
        if (areaElement) areaElement.textContent = area.label;
      });
    }

    applyMapArtwork() {
      const mapStage = this.elements.mapStage;
      if (!mapStage) return;

      const backgroundImage = this.scenario.map?.backgroundImage;

      if (backgroundImage) {
        mapStage.style.setProperty("--map-artwork", `url("${backgroundImage}")`);
        mapStage.classList.add("has-illustrated-background");
        return;
      }

      mapStage.style.removeProperty("--map-artwork");
      mapStage.classList.remove("has-illustrated-background");
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
        const iconSymbol = status === "completed" ? "✓" : status === "available" ? "?" : "";

        button.className = `hotspot ${status}`;
        button.style.left = `${step.hotspot.x}%`;
        button.style.top = `${step.hotspot.y}%`;
        button.style.transform = "translate(-50%, -50%)";
        button.disabled = status === "locked";
        button.setAttribute("aria-label", `${step.id}. ${step.shortLabel}`);
        button.innerHTML = `
          <span class="hotspot-step-number">${step.id}</span>
          <span class="hotspot-icon" aria-hidden="true">${iconSymbol}</span>
        `;

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
      this.elements.questionActions.classList.add("hidden");
      this.styleIllustration(step);
      this.resetNextButtonLabel();
      this.clearPendingAdvance();

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

    styleIllustration(step) {
      const illustration = this.getIllustrationForStep(step);
      const illustrationElement = this.elements.modalIllustration;

      illustrationElement.classList.remove("is-tata", "is-siostra", "is-clue", "is-final");
      illustrationElement.classList.add(illustration.moodClass);
      this.elements.modalPortrait.src = illustration.src;
      this.elements.modalPortrait.alt = illustration.alt;
      this.elements.modalIllustrationBadge.textContent = illustration.badge;
    }

    getIllustrationForStep(step) {
      if (step.kind === "final") {
        return illustrationLibrary.final;
      }

      const dialogue = step.dialogue ?? "";

      if (dialogue.startsWith("Tata:")) {
        return illustrationLibrary.tata;
      }

      if (dialogue.startsWith("Siostra:")) {
        return illustrationLibrary.siostra;
      }

      return illustrationLibrary.clue;
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
        this.prepareStepCompletion(step);
      } else {
        button.classList.add("wrong");
        this.elements.feedbackMessage.textContent = "To jeszcze nie ta odpowiedz. Sprobuj ponownie.";
      }
    }

    handleChoiceAnswer(step, option, button, sessionChallenge) {
      if (option === sessionChallenge.correctAnswer) {
        button.classList.add("correct");
        this.elements.feedbackMessage.textContent = sessionChallenge.successFeedback;
        this.prepareStepCompletion(step);
      } else {
        button.classList.add("wrong");
        this.elements.feedbackMessage.textContent = sessionChallenge.failureFeedback;
      }
    }

    prepareStepCompletion(step) {
      this.state.pendingAdvanceStepId = step.id;
      this.lockAnswerButtons();
      this.elements.questionActions.classList.remove("hidden");
      this.startAdvanceCountdown();
    }

    lockAnswerButtons() {
      this.elements.answerGrid.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
    }

    startAdvanceCountdown() {
      this.clearPendingAdvance();
      this.pendingAdvanceCountdown = 10;
      this.updateNextButtonLabel();

      this.pendingAdvanceIntervalId = window.setInterval(() => {
        this.pendingAdvanceCountdown -= 1;

        if (this.pendingAdvanceCountdown <= 0) {
          this.advanceAfterSuccess();
          return;
        }

        this.updateNextButtonLabel();
      }, 1000);

      this.pendingAdvanceTimeoutId = window.setTimeout(() => {
        this.advanceAfterSuccess();
      }, 10000);
    }

    updateNextButtonLabel() {
      this.elements.nextStepButton.textContent = `Dalej (${this.pendingAdvanceCountdown})`;
    }

    resetNextButtonLabel() {
      this.elements.nextStepButton.textContent = "Dalej";
    }

    clearPendingAdvance() {
      if (this.pendingAdvanceTimeoutId) {
        window.clearTimeout(this.pendingAdvanceTimeoutId);
        this.pendingAdvanceTimeoutId = null;
      }

      if (this.pendingAdvanceIntervalId) {
        window.clearInterval(this.pendingAdvanceIntervalId);
        this.pendingAdvanceIntervalId = null;
      }
    }

    advanceAfterSuccess() {
      const pendingStepId = this.state.pendingAdvanceStepId;
      if (!pendingStepId) return;

      const step = this.scenario.steps.find((item) => item.id === pendingStepId);
      if (!step) return;

      this.state.pendingAdvanceStepId = null;
      this.clearPendingAdvance();
      this.completeStep(step);
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
        this.elements.questionActions.classList.add("hidden");
        this.resetNextButtonLabel();
        this.render();

        if (step.kind === "final") {
          this.showEnding();
        }
      }, 0);
    }

    showEnding() {
      this.elements.endingText.textContent = this.scenario.finalMessage;
      this.elements.endingBackdrop.classList.remove("hidden");
    }

    closeModal() {
      this.clearPendingAdvance();
      this.state.pendingAdvanceStepId = null;
      this.elements.questionActions.classList.add("hidden");
      this.resetNextButtonLabel();
      this.elements.modalBackdrop.classList.add("hidden");
    }
  }

  window.GameEngine = GameEngine;
})();
