/* =========================================================================
 * app.js — English 8 HK2 quiz (Global Success).
 * Single-language English. Renders home / exam / result screens, instant
 * per-question feedback, scoring, retry, and review.
 * ========================================================================= */

(function () {
  "use strict";

  var state = {
    examId: null,
    exam: null,
    answers: [],
    locked: [],
    startTs: 0,
    elapsedMs: 0,
    timerId: null,
    finished: false
  };

  function $(s, r)  { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function pad2(n)  { return n < 10 ? "0" + n : "" + n; }
  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return pad2(Math.floor(s / 60)) + ":" + pad2(s % 60);
  }
  function showScreen(id) {
    $$(".screen").forEach(function (el) { el.classList.remove("active"); });
    $("#" + id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    var grid = $("#exam-grid");
    grid.innerHTML = "";
    (window.EXAMS || []).forEach(function (ex, i) {
      var card = document.createElement("div");
      card.className = "exam-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.innerHTML =
        '<span class="exam-tag">Exam ' + (i + 1) + '</span>' +
        '<div class="exam-card-title"></div>' +
        '<div class="exam-card-topics"></div>' +
        '<div class="exam-card-meta">' +
          '<span>📝 <strong>' + ex.questions.length + '</strong> questions</span>' +
          '<span class="dot">•</span>' +
          '<span>⏱ ~' + ex.duration + ' min</span>' +
        '</div>' +
        '<span class="exam-card-cta">Start →</span>';
      $(".exam-card-title", card).textContent = ex.title;
      $(".exam-card-topics", card).textContent = ex.topics;

      card.addEventListener("click", function () { startExam(ex.id); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startExam(ex.id); }
      });
      grid.appendChild(card);
    });
  }

  /* ---------- EXAM ---------- */
  function startExam(id) {
    var ex = (window.EXAMS || []).filter(function (e) { return e.id === id; })[0];
    if (!ex) return;
    state.examId = id;
    state.exam = ex;
    state.answers = ex.questions.map(function () { return -1; });
    state.locked  = ex.questions.map(function () { return false; });
    state.startTs = Date.now();
    state.elapsedMs = 0;
    state.finished = false;

    $("#exam-title").textContent  = ex.title;
    $("#exam-topics").textContent = ex.topics;

    renderQuestions();
    updateStats();
    startTimer();
    showScreen("screen-exam");
  }

  function renderQuestions() {
    var ex = state.exam;
    var box = $("#questions");
    box.innerHTML = "";
    ex.questions.forEach(function (q, qi) {
      var qEl = document.createElement("div");
      qEl.className = "question";
      qEl.setAttribute("data-qi", qi);

      var letters = ["A", "B", "C", "D", "E", "F"];
      var optionsHtml = q.options.map(function (op, oi) {
        return '' +
          '<div class="option" data-oi="' + oi + '">' +
            '<span class="option-letter">' + letters[oi] + '</span>' +
            '<span class="option-text"></span>' +
          '</div>';
      }).join("");

      qEl.innerHTML =
        '<div class="q-header">' +
          '<span class="q-num">' + (qi + 1) + '</span>' +
          '<span class="q-text"></span>' +
        '</div>' +
        '<div class="options">' + optionsHtml + '</div>' +
        '<div class="feedback"><div class="feedback-title"></div><div class="feedback-body"></div></div>';

      $(".q-text", qEl).textContent = q.q;
      $$(".option", qEl).forEach(function (optEl, oi) {
        $(".option-text", optEl).textContent = q.options[oi];
        optEl.addEventListener("click", function () { onAnswer(qi, oi); });
      });

      box.appendChild(qEl);
    });
  }

  function onAnswer(qi, oi) {
    if (state.locked[qi] || state.finished) return;
    state.answers[qi] = oi;
    state.locked[qi]  = true;

    var q = state.exam.questions[qi];
    var qEl = $('.question[data-qi="' + qi + '"]');
    var opts = $$(".option", qEl);

    opts.forEach(function (optEl, k) {
      optEl.classList.add("locked");
      if (k === q.correct) optEl.classList.add("correct");
      else if (k === oi)   optEl.classList.add("wrong");
    });

    var fb = $(".feedback", qEl);
    var isCorrect = oi === q.correct;
    fb.classList.add("show");
    fb.classList.toggle("correct", isCorrect);
    fb.classList.toggle("wrong", !isCorrect);
    var head = isCorrect ? "✓ Correct!" : "✗ Incorrect.";
    if (!isCorrect) head += " Correct answer: " + ["A", "B", "C", "D"][q.correct] + ".";
    $(".feedback-title", qEl).textContent = head;
    $(".feedback-body", qEl).textContent  = q.explanation;

    updateStats();
  }

  function score() {
    var c = 0, w = 0, s = 0;
    state.exam.questions.forEach(function (q, i) {
      if (state.answers[i] === -1) s++;
      else if (state.answers[i] === q.correct) c++;
      else w++;
    });
    return { correct: c, wrong: w, skipped: s, total: state.exam.questions.length };
  }

  function updateStats() {
    var sc = score();
    var answered = sc.correct + sc.wrong;
    $("#exam-progress").textContent = answered + "/" + sc.total;
    $("#exam-score").textContent    = sc.correct;
    $("#progress-fill").style.width = (answered / sc.total * 100) + "%";
  }

  function startTimer() {
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(function () {
      if (state.finished) return;
      state.elapsedMs = Date.now() - state.startTs;
      $("#exam-time").textContent = fmtTime(state.elapsedMs);
    }, 500);
  }
  function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    state.elapsedMs = Date.now() - state.startTs;
  }

  function finishExam(force) {
    var sc = score();
    if (!force && sc.skipped > 0) {
      if (!confirm("You have " + sc.skipped + " unanswered question(s). Submit anyway?")) return;
    }
    state.finished = true;
    stopTimer();
    renderResult();
    showScreen("screen-result");
  }

  /* ---------- RESULT ---------- */
  function renderResult() {
    var ex = state.exam;
    var sc = score();
    var pct = Math.round(sc.correct / sc.total * 100);

    $("#result-title").textContent    = ex.title;
    $("#result-percent").textContent  = pct + "%";
    $("#result-fraction").textContent = sc.correct + " / " + sc.total;
    $("#stat-correct").textContent = sc.correct;
    $("#stat-wrong").textContent   = sc.wrong;
    $("#stat-skipped").textContent = sc.skipped;
    $("#stat-time").textContent    = fmtTime(state.elapsedMs);

    var feedback;
    if (pct >= 90)      feedback = "Excellent! You really know this material.";
    else if (pct >= 75) feedback = "Great work — review a few items and you're set.";
    else if (pct >= 50) feedback = "Decent. Review the missed questions to lock it in.";
    else                feedback = "Needs more review — don't give up, try again!";
    $("#result-feedback").textContent = feedback;

    var fg = $("#rc-fg");
    var circ = 2 * Math.PI * 52;
    fg.setAttribute("stroke-dasharray",  circ.toFixed(2));
    fg.setAttribute("stroke-dashoffset", circ.toFixed(2));
    fg.classList.remove("bad", "warn");
    if (pct < 50)      fg.classList.add("bad");
    else if (pct < 75) fg.classList.add("warn");
    requestAnimationFrame(function () {
      fg.setAttribute("stroke-dashoffset", (circ * (1 - pct / 100)).toFixed(2));
    });
  }

  /* ---------- NAV ---------- */
  function goHome(forceConfirm) {
    if (forceConfirm && state.exam && !state.finished) {
      var sc = score();
      if (sc.correct + sc.wrong > 0 &&
          !confirm("You're in the middle of an exam. Going back will lose your progress. Continue?")) return;
    }
    stopTimer();
    state.exam = null; state.examId = null; state.finished = false;
    showScreen("screen-home");
  }

  function init() {
    renderHome();
    $("#btn-back").addEventListener("click",   function () { goHome(true); });
    $("#btn-finish").addEventListener("click", function () { finishExam(false); });
    $("#btn-retry").addEventListener("click",  function () { startExam(state.examId); });
    $("#btn-review").addEventListener("click", function () {
      state.finished = true;
      showScreen("screen-exam");
    });
    $("#btn-home").addEventListener("click",   function () { goHome(false); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
