(() => {
  const MAX_TRIES = 6;
  const EPOCH_UTC = Date.UTC(2026, 10, 25); // Nov 25, 2026 -> Daily #1
  const PLAYERS = window.PLAYERS || [];

  // Monetization config: drop your real Ko-fi / BuyMeACoffee / PayPal.me URL here anytime
  const CONFIG = {
    supportUrl: "https://github.com/hiassan07-ship-it/clubpath",
  };

  const els = {
    modeToggleBtn: document.getElementById("modeToggleBtn"),
    statsBtn: document.getElementById("statsBtn"),
    helpBtn: document.getElementById("helpBtn"),
    puzzleBadge: document.getElementById("puzzleBadge"),
    streakBadge: document.getElementById("streakBadge"),
    attemptsBadge: document.getElementById("attemptsBadge"),
    eraTag: document.getElementById("eraTag"),
    careerList: document.getElementById("careerList"),
    hintConfed: document.getElementById("hintConfed"),
    hintPos: document.getElementById("hintPos"),
    hintNat: document.getElementById("hintNat"),
    hintInit: document.getElementById("hintInit"),
    guessSection: document.getElementById("guessSection"),
    playerInput: document.getElementById("playerInput"),
    submitGuessBtn: document.getElementById("submitGuessBtn"),
    skipBtn: document.getElementById("skipBtn"),
    suggestions: document.getElementById("suggestions"),
    guessHistory: document.getElementById("guessHistory"),
    resultPanel: document.getElementById("resultPanel"),
    resultTitle: document.getElementById("resultTitle"),
    resultSub: document.getElementById("resultSub"),
    sharePreview: document.getElementById("sharePreview"),
    shareBtn: document.getElementById("shareBtn"),
    nextUnlimitedBtn: document.getElementById("nextUnlimitedBtn"),
    countdownText: document.getElementById("countdownText"),
    supportLink: document.getElementById("supportLink"),
    statsModal: document.getElementById("statsModal"),
    helpModal: document.getElementById("helpModal"),
    stPlayed: document.getElementById("stPlayed"),
    stWinPct: document.getElementById("stWinPct"),
    stStreak: document.getElementById("stStreak"),
    stBest: document.getElementById("stBest"),
    toast: document.getElementById("toast"),
  };

  let mode = "daily"; // "daily" | "unlimited"
  let currentPlayer = null;
  let guesses = []; // [{ text, status: 'wrong'|'correct'|'skip' }]
  let finished = false;
  let won = false;
  let activeSugIndex = -1;
  let lastUnlimitedIdx = -1;

  function norm(str) {
    return (str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim();
  }

  function getDailyInfo() {
    const now = new Date();
    const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    const dayNum = Math.max(1, Math.floor((todayUtc - EPOCH_UTC) / 86400000) + 1);
    const key = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-${String(now.getUTCDate()).padStart(2, "0")}`;
    // Deterministic pseudo-random permutation so order feels shuffled
    const idx = ((dayNum - 1) * 37 + 13) % PLAYERS.length;
    return { dayNum, key, player: PLAYERS[idx] };
  }

  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem("clubpath_stats_v1") || "{}") || {};
    } catch {
      return {};
    }
  }

  function saveStats(st) {
    localStorage.setItem("clubpath_stats_v1", JSON.stringify(st));
  }

  function getStatsObj() {
    const s = loadStats();
    return {
      played: s.played || 0,
      won: s.won || 0,
      streak: s.streak || 0,
      best: s.best || 0,
      lastDayKey: s.lastDayKey || null,
    };
  }

  function loadDailyState(key) {
    try {
      const raw = JSON.parse(localStorage.getItem(`clubpath_day_${key}`) || "null");
      return raw;
    } catch {
      return null;
    }
  }

  function saveDailyState(key) {
    localStorage.setItem(
      `clubpath_day_${key}`,
      JSON.stringify({ guesses, finished, won })
    );
  }

  function initialsOf(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + ".")
      .join(" ");
  }

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => els.toast.classList.add("hidden"), 2200);
  }

  function renderStatsUI() {
    const st = getStatsObj();
    els.streakBadge.textContent = `🔥 Streak: ${st.streak}`;
    els.stPlayed.textContent = st.played;
    els.stWinPct.textContent = st.played ? `${Math.round((st.won / st.played) * 100)}%` : "0%";
    els.stStreak.textContent = st.streak;
    els.stBest.textContent = st.best;
  }

  function renderBoard() {
    const p = currentPlayer;
    els.careerList.innerHTML = "";
    p.career.forEach((step, idx) => {
      const li = document.createElement("li");
      li.className = "career-row";
      li.innerHTML = `
        <div class="career-left">
          <span class="step-num">${idx + 1}</span>
          <span class="club-name">${step.club}${step.loan ? '<span class="loan-pill">LOAN</span>' : ""}</span>
        </div>
        <span class="career-years">${step.years}</span>
      `;
      els.careerList.appendChild(li);
    });

    const firstYear = p.career[0]?.years?.slice(0, 4) || "";
    const lastStep = p.career[p.career.length - 1]?.years || "";
    els.eraTag.textContent = lastStep.includes("present")
      ? `Active • Debut ${firstYear}`
      : `Career from ${firstYear}`;

    const triesUsed = guesses.length;
    const left = Math.max(0, MAX_TRIES - triesUsed);
    els.attemptsBadge.textContent = finished
      ? won ? `Solved in ${triesUsed}/${MAX_TRIES}` : `Out of tries`
      : `${left} ${left === 1 ? "try" : "tries"} left`;

    // Hints unlock progressively (or all shown on finish)
    const setHint = (el, unlocked, val, lockedText) => {
      el.classList.toggle("unlocked", unlocked);
      el.querySelector(".hint-val").textContent = unlocked ? val : lockedText;
    };
    setHint(els.hintConfed, finished || triesUsed >= 2, p.region, "After 2 tries");
    setHint(els.hintPos, finished || triesUsed >= 3, p.pos, "After 3 tries");
    setHint(els.hintNat, finished || triesUsed >= 4, p.nation, "After 4 tries");
    setHint(els.hintInit, finished || triesUsed >= 5, initialsOf(p.name), "After 5 tries");

    // History
    els.guessHistory.innerHTML = "";
    guesses.forEach((g, idx) => {
      const li = document.createElement("li");
      li.className = `guess-item ${g.status}`;
      const icon = g.status === "correct" ? "✅" : g.status === "skip" ? "⏭️" : "❌";
      li.innerHTML = `<span>#${idx + 1} ${g.text}</span><span>${icon}</span>`;
      els.guessHistory.appendChild(li);
    });

    // Result panel
    els.guessSection.classList.toggle("hidden", finished);
    els.resultPanel.classList.toggle("hidden", !finished);
    if (finished) {
      els.resultTitle.textContent = won
        ? `⚽ Golazo! ${p.name}`
        : `Full Time — It was ${p.name}`;
      els.resultSub.textContent = `${p.nation} • ${p.pos}`;
      els.sharePreview.textContent = buildShareText();
      els.nextUnlimitedBtn.textContent = mode === "daily" ? "Play Unlimited Mode" : "Next Random Player →";
    }
    renderStatsUI();
  }

  function buildShareText() {
    const label = mode === "daily" ? `Daily #${getDailyInfo().dayNum}` : "Unlimited";
    const score = won ? `${guesses.length}/${MAX_TRIES}` : `X/${MAX_TRIES}`;
    const blocks = guesses
      .map((g) => (g.status === "correct" ? "🟩" : g.status === "skip" ? "🟨" : "🟥"))
      .join("") + "⬜".repeat(Math.max(0, MAX_TRIES - guesses.length));
    return `⚽ ClubPath ${label} — ${score}\n${blocks}\n${window.location.href.split("?")[0]}`;
  }

  function matchesPlayer(inputText, target) {
    const n = norm(inputText);
    if (!n) return false;
    const candidates = [target.name, ...(target.aliases || [])].map(norm);
    return candidates.includes(n);
  }

  function recordDailyCompletion(didWin) {
    const { key } = getDailyInfo();
    const st = getStatsObj();
    if (st.lastDayKey === key) return;
    st.played += 1;
    if (didWin) {
      st.won += 1;
      st.streak += 1;
      st.best = Math.max(st.best, st.streak);
    } else {
      st.streak = 0;
    }
    st.lastDayKey = key;
    saveStats(st);
  }

  function submitGuess(rawName) {
    if (finished) return;
    const text = (rawName ?? els.playerInput.value).trim();
    if (!text) return;

    const isCorrect = matchesPlayer(text, currentPlayer);
    guesses.push({ text, status: isCorrect ? "correct" : "wrong" });
    els.playerInput.value = "";
    hideSuggestions();

    if (isCorrect) {
      finished = true;
      won = true;
      if (mode === "daily") recordDailyCompletion(true);
    } else if (guesses.length >= MAX_TRIES) {
      finished = true;
      won = false;
      if (mode === "daily") recordDailyCompletion(false);
    }

    if (mode === "daily") saveDailyState(getDailyInfo().key);
    renderBoard();
  }

  function skipTurn() {
    if (finished) return;
    guesses.push({ text: "Skipped (revealed clue)", status: "skip" });
    if (guesses.length >= MAX_TRIES) {
      finished = true;
      won = false;
      if (mode === "daily") recordDailyCompletion(false);
    }
    if (mode === "daily") saveDailyState(getDailyInfo().key);
    renderBoard();
  }

  function hideSuggestions() {
    els.suggestions.classList.add("hidden");
    els.suggestions.innerHTML = "";
    activeSugIndex = -1;
  }

  function updateSuggestions() {
    const q = norm(els.playerInput.value);
    if (q.length < 2) {
      hideSuggestions();
      return;
    }
    const matches = PLAYERS.filter((p) => {
      const hay = [p.name, ...(p.aliases || [])].map(norm).join(" ");
      return hay.includes(q);
    }).slice(0, 7);

    if (!matches.length) {
      hideSuggestions();
      return;
    }
    els.suggestions.innerHTML = "";
    matches.forEach((p, idx) => {
      const li = document.createElement("li");
      li.dataset.name = p.name;
      li.innerHTML = `<span>${p.name}</span><span class="sug-meta">${p.pos}</span>`;
      li.addEventListener("mousedown", (e) => {
        e.preventDefault();
        submitGuess(p.name);
      });
      if (idx === activeSugIndex) li.classList.add("active");
      els.suggestions.appendChild(li);
    });
    els.suggestions.classList.remove("hidden");
  }

  function startDaily() {
    mode = "daily";
    const info = getDailyInfo();
    currentPlayer = info.player;
    const saved = loadDailyState(info.key);
    guesses = saved?.guesses || [];
    finished = Boolean(saved?.finished);
    won = Boolean(saved?.won);
    els.puzzleBadge.textContent = `Daily #${info.dayNum}`;
    els.modeToggleBtn.textContent = "Unlimited";
    els.modeToggleBtn.classList.remove("active");
    renderBoard();
  }

  function startUnlimited() {
    mode = "unlimited";
    let idx = Math.floor(Math.random() * PLAYERS.length);
    if (PLAYERS.length > 1 && idx === lastUnlimitedIdx) {
      idx = (idx + 1) % PLAYERS.length;
    }
    lastUnlimitedIdx = idx;
    currentPlayer = PLAYERS[idx];
    guesses = [];
    finished = false;
    won = false;
    els.puzzleBadge.textContent = "Unlimited Mode";
    els.modeToggleBtn.textContent = "Back to Daily";
    els.modeToggleBtn.classList.add("active");
    renderBoard();
    els.playerInput.focus();
  }

  function updateCountdown() {
    if (mode !== "daily" || !finished) {
      els.countdownText.textContent = "";
      return;
    }
    const now = new Date();
    const nextUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
    const diff = Math.max(0, Math.floor((nextUtc - now.getTime()) / 1000));
    const h = String(Math.floor(diff / 3600)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
    const s = String(diff % 60).padStart(2, "0");
    els.countdownText.textContent = `Next Daily Player in ${h}:${m}:${s}`;
  }

  // Wire events
  els.playerInput.addEventListener("input", () => {
    activeSugIndex = -1;
    updateSuggestions();
  });

  els.playerInput.addEventListener("keydown", (e) => {
    const items = Array.from(els.suggestions.querySelectorAll("li"));
    if (e.key === "ArrowDown" && items.length) {
      e.preventDefault();
      activeSugIndex = (activeSugIndex + 1) % items.length;
      items.forEach((el, i) => el.classList.toggle("active", i === activeSugIndex));
    } else if (e.key === "ArrowUp" && items.length) {
      e.preventDefault();
      activeSugIndex = (activeSugIndex - 1 + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle("active", i === activeSugIndex));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeSugIndex >= 0 && items[activeSugIndex]) {
        submitGuess(items[activeSugIndex].dataset.name);
      } else {
        submitGuess();
      }
    } else if (e.key === "Escape") {
      hideSuggestions();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) hideSuggestions();
  });

  els.submitGuessBtn.addEventListener("click", () => submitGuess());
  els.skipBtn.addEventListener("click", skipTurn);

  els.modeToggleBtn.addEventListener("click", () => {
    if (mode === "daily") startUnlimited();
    else startDaily();
  });

  els.nextUnlimitedBtn.addEventListener("click", startUnlimited);

  els.shareBtn.addEventListener("click", async () => {
    const txt = buildShareText();
    try {
      await navigator.clipboard.writeText(txt);
      showToast("Result copied — paste anywhere to share!");
    } catch {
      showToast("Copy the box above to share!");
    }
  });

  els.statsBtn.addEventListener("click", () => {
    renderStatsUI();
    els.statsModal.classList.remove("hidden");
  });
  els.helpBtn.addEventListener("click", () => els.helpModal.classList.remove("hidden"));
  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.close)?.classList.add("hidden");
    });
  });
  [els.statsModal, els.helpModal].forEach((m) => {
    m.addEventListener("click", (e) => {
      if (e.target === m) m.classList.add("hidden");
    });
  });

  els.supportLink.href = CONFIG.supportUrl;

  startDaily();
  setInterval(updateCountdown, 1000);
})();
