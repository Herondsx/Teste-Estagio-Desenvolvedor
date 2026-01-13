const icons = {
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 7a5 5 0 0 1 9.9-1"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>'
};

const questions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Em Python, qual é o resultado da execução do seguinte código: `print(type([]))`?",
    icon: icons.terminal,
    iconBg: "#0046ad",
    options: [
      { text: "<class 'list'>", isCorrect: true },
      { text: "<class 'array'>", isCorrect: false },
      { text: "<class 'dict'>", isCorrect: false },
      { text: "<class 'tuple'>", isCorrect: false }
    ],
    hint: "Lembre-se de qual estrutura de dados é definida usando colchetes em Python."
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "No C#, qual é o método correto para exibir uma linha de texto no console?",
    icon: icons.code,
    iconBg: "#0046ad",
    options: [
      { text: "print(\"Olá Mundo\");", isCorrect: false },
      { text: "System.out.println(\"Olá Mundo\");", isCorrect: false },
      { text: "Console.WriteLine(\"Olá Mundo\");", isCorrect: true },
      { text: "echo \"Olá Mundo\";", isCorrect: false }
    ],
    hint: "Pense na classe padrão do sistema usada para interagir com a entrada e saída do terminal."
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "No desenvolvimento Web (HTML), qual tag é utilizada para criar um hiperlink clicável?",
    icon: icons.globe,
    iconBg: "#0046ad",
    options: [
      { text: "<link>", isCorrect: false },
      { text: "<a>", isCorrect: true },
      { text: "<href>", isCorrect: false },
      { text: "<url>", isCorrect: false }
    ],
    hint: "O nome da tag vem da palavra 'Anchor' (âncora)."
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Utilizando Git e GitHub, qual comando é usado para enviar os commits locais para o repositório remoto?",
    icon: icons.git,
    iconBg: "#0046ad",
    options: [
      { text: "git pull", isCorrect: false },
      { text: "git push", isCorrect: true },
      { text: "git commit", isCorrect: false },
      { text: "git fetch", isCorrect: false }
    ],
    hint: "O termo em inglês significa 'empurrar'."
  },
  {
    id: 5,
    type: "essay",
    question: "Pergunta Dissertativa: Explique por que o tratamento de exceções (Try/Catch) é importante e dê um exemplo de uso.",
    icon: icons.file,
    iconBg: "#0046ad",
    hint: "Pense em como o programa se comporta quando ocorre um erro inesperado."
  }
];

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const state = {
  currentQuestionIndex: 0,
  showResult: false,
  userAnswers: {},
  essayAnswer: "",
  showLogin: false,
  isAdmin: false,
  username: "",
  password: "",
  loginError: "",
  direction: 1
};

function calculateScore() {
  let score = 0;
  questions.forEach((q, idx) => {
    if (q.type === "multiple-choice") {
      const selectedIdx = state.userAnswers[idx];
      if (selectedIdx !== undefined && q.options[selectedIdx].isCorrect) {
        score++;
      }
    } else if (q.type === "essay") {
      if (state.essayAnswer.trim().length > 10) score++;
    }
  });
  return score;
}

// Mostra ou esconde o botão Next sem re-renderizar tudo
function updateNextButtonState() {
  const currentQuestion = questions[state.currentQuestionIndex];
  let isAnswered = false;

  if (currentQuestion.type === "essay") {
    isAnswered = state.essayAnswer.trim().length > 0;
  } else {
    isAnswered = state.userAnswers[state.currentQuestionIndex] !== undefined;
  }

  const nextBtn = document.querySelector(".next-button");
  if (nextBtn) {
    if (isAnswered) {
      nextBtn.classList.add("visible");
    } else {
      nextBtn.classList.remove("visible");
    }
  }
}

function renderQuizView() {
  const currentQuestion = questions[state.currentQuestionIndex];
  const progress = (state.currentQuestionIndex / questions.length) * 100;

  const isCurrentAnswered = currentQuestion.type === "essay"
    ? state.essayAnswer.trim().length > 0
    : state.userAnswers[state.currentQuestionIndex] !== undefined;

  const directionClass = state.direction > 0 ? "slide-right" : "slide-left";

  const optionsHtml = currentQuestion.type === "multiple-choice"
    ? currentQuestion.options.map((option, idx) => {
        const isSelected = state.userAnswers[state.currentQuestionIndex] === idx;
        return `
          <button class="option-button ${isSelected ? "selected" : ""}" data-option="${idx}">
            <span class="option-text">${escapeHtml(option.text)}</span>
            <span class="chevron">${icons.chevronRight}</span>
            <span class="dot"></span>
          </button>
        `;
      }).join("")
    : `
      <div class="essay-box">
        <textarea
          class="essay-input"
          data-action="essay"
          placeholder="Sua resposta..."
        >${state.essayAnswer}</textarea>
      </div>
    `;

  return `
    <div class="page quiz-page">
      <div class="top-bar">
        <div class="logo-wrap">
          <img src="Logo1.png" alt="Logo" class="logo-img">
        </div>
        <div class="top-meta">
          <span class="meta-label">Questão ${state.currentQuestionIndex + 1}</span>
          <span class="meta-label">${questions.length} Total</span>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width:${progress}%"></div>
        </div>
      </div>

      <div class="question-card ${directionClass}">
        <div class="card-header">
          <div class="icon-pill" style="background:${currentQuestion.iconBg}">
            ${currentQuestion.icon}
          </div>
          <h2 class="question-text">${currentQuestion.question}</h2>
        </div>

        <div class="options">
          ${optionsHtml}
        </div>
      </div>

      <p class="hint">Dica: ${currentQuestion.hint}</p>

      <button class="next-button ${isCurrentAnswered ? "visible" : ""}" data-action="next">
        ${state.currentQuestionIndex === questions.length - 1 ? "Finalizar Teste" : "Próxima Questão"}
        ${icons.arrowRight}
      </button>
    </div>
  `;
}

function renderLoginForm() {
  return `
    <form id="login-form" class="login-form">
      <h3 class="login-title">
        ${icons.user}
        Login Administrativo
      </h3>
      <div class="field">
        <input type="text" name="username" placeholder="Usuário" value="${state.username}" />
      </div>
      <div class="field">
        <input type="password" name="password" placeholder="Senha" value="${state.password}" />
      </div>
      ${state.loginError ? `<p class="error">${state.loginError}</p>` : ""}
      <div class="login-actions">
        <button type="button" class="ghost-button" data-action="cancel-login">Cancelar</button>
        <button type="submit" class="primary-button">Entrar</button>
      </div>
    </form>
  `;
}

function renderGabaritoItem(q, qIdx) {
  const userSelectedIdx = state.userAnswers[qIdx];
  const optionsHtml = q.type === "multiple-choice"
    ? q.options.map((opt, optIdx) => {
        const isUserChoice = userSelectedIdx === optIdx;
        const isRight = opt.isCorrect;
        let cls = "admin-option";
        if (isRight) cls += " correct";
        if (isUserChoice && !isRight) cls += " wrong";
        if (isUserChoice && isRight) cls += " chosen-right";
        return `
          <div class="${cls}">
            <span>${escapeHtml(opt.text)}</span>
            ${isUserChoice ? '<span class="tag">Escolhido</span>' : ""}
          </div>
        `;
      }).join("")
    : `
      <div class="essay-result">"${state.essayAnswer || "Não respondeu"}"</div>
    `;

  return `
    <div class="gabarito-item">
      <p class="gabarito-question">
        <span class="question-index">#${qIdx + 1}</span>
        ${q.question}
      </p>
      <div class="admin-options">
        ${optionsHtml}
      </div>
    </div>
  `;
}

function renderResultView() {
  const finalScore = calculateScore();

  if (!state.isAdmin) {
    return `
      <div class="page result-page">
        <div class="result-card">
          <div class="logo-wrap">
            <img src="Logo1.png" alt="Logo" class="logo-img">
          </div>

          <div class="result-icon">
            ${icons.checkCircle}
          </div>

          <h2 class="result-title">Teste Finalizado</h2>
          <p class="result-text">
            Obrigado por completar o teste. Suas respostas foram registradas com sucesso e serão analisadas pela nossa equipe.
          </p>

          ${!state.showLogin ? `
            <button class="muted-button" data-action="toggle-login">
              ${icons.lock}
              Acesso Recrutador
            </button>
          ` : renderLoginForm()}
        </div>
      </div>
    `;
  }

  return `
    <div class="page result-page">
      <div class="result-card admin-card">
        <div class="admin-header">
          <div class="admin-title">
            ${icons.unlock}
            <span>Gabarito</span>
          </div>
          <div class="score">
            <p class="score-label">Pontuação</p>
            <p class="score-value">${finalScore} / ${questions.length}</p>
          </div>
        </div>

        <div class="gabarito-list custom-scroll">
          ${questions.map((q, qIdx) => renderGabaritoItem(q, qIdx)).join("")}
        </div>

        <button class="primary-button full" data-action="restart">
          Novo Teste (Logout)
        </button>
      </div>
    </div>
  `;
}

function render() {
  const root = document.getElementById("app");
  if (!root) return;

  root.innerHTML = state.showResult ? renderResultView() : renderQuizView();
  bindEvents();
}

function bindEvents() {
  const optionButtons = document.querySelectorAll("[data-option]");
  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-option"));
      state.userAnswers[state.currentQuestionIndex] = idx;

      optionButtons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      updateNextButtonState();
    });
  });

  const essayField = document.querySelector("[data-action='essay']");
  if (essayField) {
    essayField.addEventListener("input", (e) => {
      state.essayAnswer = e.target.value;
      updateNextButtonState();
    });
  }

  const nextButton = document.querySelector("[data-action='next']");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (state.currentQuestionIndex < questions.length - 1) {
        state.direction = 1;
        state.currentQuestionIndex += 1;
        render();
      } else {
        state.showResult = true;
        render();
      }
    });
  }

  const toggleLogin = document.querySelector("[data-action='toggle-login']");
  if (toggleLogin) {
    toggleLogin.addEventListener("click", () => {
      state.showLogin = true;
      state.loginError = "";
      render();
    });
  }

  const cancelLogin = document.querySelector("[data-action='cancel-login']");
  if (cancelLogin) {
    cancelLogin.addEventListener("click", () => {
      state.showLogin = false;
      state.username = "";
      state.password = "";
      state.loginError = "";
      render();
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(loginForm);
      state.username = (formData.get("username") || "").trim();
      state.password = (formData.get("password") || "").trim();

      if (state.username === "comau" && state.password === "comau") {
        state.isAdmin = true;
        state.showLogin = false;
        state.loginError = "";
      } else {
        state.loginError = "Credenciais inválidas.";
      }
      render();
    });
  }

  const restartButton = document.querySelector("[data-action='restart']");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      state.direction = -1;
      state.currentQuestionIndex = 0;
      state.showResult = false;
      state.userAnswers = {};
      state.essayAnswer = "";
      state.isAdmin = false;
      state.showLogin = false;
      state.username = "";
      state.password = "";
      state.loginError = "";
      render();
    });
  }
}

document.addEventListener("DOMContentLoaded", render);
