(function () {
  const operationRegistry = {
    add: {
      symbol: "+",
      solve: (left, right) => left + right,
    },
    subtract: {
      symbol: "-",
      solve: (left, right) => left - right,
    },
    multiply: {
      symbol: "x",
      solve: (left, right) => left * right,
    },
    divide: {
      symbol: ":",
      solve: (left, right) => left / right,
    },
  };

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(items) {
    const copy = [...items];

    for (let index = copy.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[target]] = [copy[target], copy[index]];
    }

    return copy;
  }

  function pickOperation(operations) {
    if (!operations || operations.length === 0) {
      throw new Error("Brak zdefiniowanych operacji dla generatora.");
    }

    const choice = operations[randomBetween(0, operations.length - 1)];
    const operationKey = typeof choice === "string" ? choice : choice.type;
    const operation = operationRegistry[operationKey];

    if (!operation) {
      throw new Error(`Nieznana operacja: ${operationKey}`);
    }

    return { key: operationKey, ...operation };
  }

  function buildPrompt(left, operation, right) {
    return `${left} ${operation.symbol} ${right} = ?`;
  }

  function createAnswerOptions(correctAnswer, config) {
    const count = config?.count ?? 3;
    const deltaMin = config?.deltaMin ?? 1;
    const deltaMax = config?.deltaMax ?? 6;
    const minValue = config?.minValue ?? 0;
    const options = new Set([correctAnswer]);

    while (options.size < count) {
      const delta = randomBetween(deltaMin, deltaMax);
      const direction = Math.random() > 0.5 ? 1 : -1;
      const candidate = correctAnswer + delta * direction;

      if (candidate >= minValue) {
        options.add(candidate);
      }
    }

    return shuffle(Array.from(options));
  }

  function generateArithmeticTask(template) {
    const operation = pickOperation(template.operations);
    const leftRange = template.operands?.left ?? { min: 0, max: 10 };
    const rightRange = template.operands?.right ?? { min: 0, max: 10 };
    const resultRange = template.result ?? {};
    const allowNegative = template.allowNegativeResult ?? false;
    const requireInteger = template.requireIntegerResult ?? true;

    for (let attempt = 0; attempt < 500; attempt += 1) {
      const left = randomBetween(leftRange.min, leftRange.max);
      const right = randomBetween(rightRange.min, rightRange.max);
      const correctAnswer = operation.solve(left, right);

      if (operation.key === "divide" && right === 0) continue;
      if (!allowNegative && correctAnswer < 0) continue;
      if (resultRange.min !== undefined && correctAnswer < resultRange.min) continue;
      if (resultRange.max !== undefined && correctAnswer > resultRange.max) continue;
      if (requireInteger && !Number.isInteger(correctAnswer)) continue;

      return {
        prompt: buildPrompt(left, operation, right),
        correctAnswer,
        options: createAnswerOptions(correctAnswer, template.answerOptions),
        meta: {
          operation: operation.key,
          left,
          right,
        },
      };
    }

    throw new Error("Nie udalo sie wygenerowac poprawnego zadania matematycznego.");
  }

  function generateChallenge({ scenario, selectedClass, challengeSpec }) {
    if (challengeSpec.type === "choice") {
      return {
        prompt: challengeSpec.prompt,
        options: [...challengeSpec.options],
        correctAnswer: challengeSpec.correctAnswer,
        successFeedback: challengeSpec.successFeedback,
        failureFeedback: challengeSpec.failureFeedback,
      };
    }

    const classProfile = scenario.math?.classProfiles?.[selectedClass];
    if (!classProfile) {
      throw new Error(`Brak profilu matematycznego dla klasy ${selectedClass}.`);
    }

    const template = classProfile.templates?.[challengeSpec.templateId];
    if (!template) {
      throw new Error(`Brak szablonu matematycznego: ${challengeSpec.templateId}.`);
    }

    if (template.kind !== "arithmetic") {
      throw new Error(`Nieobslugiwany rodzaj generatora: ${template.kind}`);
    }

    return generateArithmeticTask(template);
  }

  window.MathChallengeGenerator = {
    generateChallenge,
  };
})();
