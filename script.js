(() => {
  'use strict';

  const STORAGE_KEY_FAVS = 'dilemma_favorites_v1';
  const STORAGE_KEY_PROGRESS = 'dilemma_progress_v1';

  const DEFAULT_PLAYERS = 4;
  const MIN_PLAYERS = 2;
  const MAX_PLAYERS = 20;

  const state = {
    currentScreen: 'home',
    currentCategory: 'normal',
    currentQuestion: null,
    gameMode: 'classic', // 'classic' | 'group'
    groupPlayers: DEFAULT_PLAYERS,
    playerNames: [],
    groupSession: {
      stage: 'voting', // 'voting' | 'pass' | 'results'
      currentVoter: 1,
      tempChoice: null,
      votesA: 0,
      votesB: 0,
      votersA: [],
      votersB: []
    },
    favorites: [],
    progress: {},
    toastTimer: null,
    lastDrawReshuffled: false,
    exitGuardActive: false,
    exitGuardTimer: null
  };

  // REFERENCIAS DOM
  const screens = {
    home: document.getElementById('screen-home'),
    game: document.getElementById('screen-game'),
    favs: document.getElementById('screen-favs')
  };

  const dom = {
    catCards: document.querySelectorAll('.cat-card'),
    btnModeClassic: document.getElementById('btn-mode-classic'),
    btnModeGroup: document.getElementById('btn-mode-group'),
    playersConfig: document.getElementById('players-config'),
    btnPlayersDec: document.getElementById('btn-players-dec'),
    btnPlayersInc: document.getElementById('btn-players-inc'),
    playersCount: document.getElementById('players-count'),
    playersNamesGrid: document.getElementById('players-names-grid'),
    btnStart: document.getElementById('btn-start'),
    btnBackMenu: document.getElementById('btn-back-menu'),
    btnNext: document.getElementById('btn-next'),
    btnSkip: document.getElementById('btn-skip'),
    gameFooter: document.getElementById('game-footer'),
    dilemmaArena: document.getElementById('dilemma-arena'),
    turnBadge: document.getElementById('turn-badge'),
    optionA: document.getElementById('option-a'),
    optionB: document.getElementById('option-b'),
    textA: document.getElementById('text-option-a'),
    textB: document.getElementById('text-option-b'),
    groupPassView: document.getElementById('group-pass-view'),
    passSecretPill: document.getElementById('pass-secret-pill'),
    passTitle: document.getElementById('pass-title'),
    passDesc: document.getElementById('pass-desc'),
    btnReadyVote: document.getElementById('btn-ready-vote'),
    groupResultsView: document.getElementById('group-results-view'),
    resultsWinnerBadge: document.getElementById('results-winner-badge'),
    resultsTotalInfo: document.getElementById('results-total-info'),
    resultCardA: document.getElementById('result-card-a'),
    resultCardB: document.getElementById('result-card-b'),
    resultPctA: document.getElementById('result-pct-a'),
    resultPctB: document.getElementById('result-pct-b'),
    resultVotesA: document.getElementById('result-votes-a'),
    resultVotesB: document.getElementById('result-votes-b'),
    resultBarA: document.getElementById('result-bar-a'),
    resultBarB: document.getElementById('result-bar-b'),
    resultTextA: document.getElementById('result-text-a'),
    resultTextB: document.getElementById('result-text-b'),
    resultVotersA: document.getElementById('result-voters-a'),
    resultVotersB: document.getElementById('result-voters-b'),
    catBadge: document.getElementById('game-cat-badge'),
    roundCounter: document.getElementById('round-counter'),
    btnToggleFav: document.getElementById('btn-toggle-fav'),
    btnOpenFavs: document.getElementById('btn-open-favs'),
    btnCloseFavs: document.getElementById('btn-close-favs'),
    btnClearFavs: document.getElementById('btn-clear-favs'),
    favCount: document.getElementById('fav-count'),
    favsList: document.getElementById('favs-list'),
    modalConfirmClear: document.getElementById('modal-confirm-clear'),
    btnCancelClear: document.getElementById('btn-cancel-clear'),
    btnConfirmClear: document.getElementById('btn-confirm-clear'),
    toast: document.getElementById('toast')
  };

  // UTILIDADES
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function vibrate(ms = 25) {
    if (navigator.vibrate) {
      navigator.vibrate(ms);
    }
  }

  function showToast(message) {
    if (state.toastTimer) {
      clearTimeout(state.toastTimer);
      state.toastTimer = null;
    }
    dom.toast.textContent = message;
    dom.toast.classList.add('show');
    state.toastTimer = setTimeout(() => {
      dom.toast.classList.remove('show');
      state.toastTimer = null;
    }, 2600);
  }

  function resetExitGuard() {
    state.exitGuardActive = false;
    if (state.exitGuardTimer) {
      clearTimeout(state.exitGuardTimer);
      state.exitGuardTimer = null;
    }
  }

  function getPlayerDisplayName(playerNumber) {
    const raw = state.playerNames[playerNumber - 1];
    if (typeof raw === 'string' && raw.trim() !== '') {
      return raw.trim();
    }
    return `Jugador ${playerNumber}`;
  }

  function findQuestionById(category, id) {
    if (!id || !QUESTIONS_DB[category]) return null;
    return QUESTIONS_DB[category].find(q => q.id === id) || null;
  }

  function findQuestionInAllCategories(id) {
    if (typeof id !== 'string' || !id) return null;
    const categories = Object.keys(QUESTIONS_DB);
    for (let i = 0; i < categories.length; i++) {
      const cat = categories[i];
      const found = findQuestionById(cat, id);
      if (found) {
        return {
          id: found.id,
          category: CATEGORY_NAMES[cat] || cat,
          a: found.a,
          b: found.b
        };
      }
    }
    return null;
  }

  // PERSISTENCIA Y VALIDACIÓN DEL PROGRESO DE MAZOS EN LOCALSTORAGE
  function createDefaultCategoryProgress() {
    return {
      remainingIds: [],
      round: 1,
      currentId: null,
      lastId: null,
      selectedChoice: null
    };
  }

  function sanitizeCategoryProgress(saved, validIds) {
    if (!saved || typeof saved !== 'object') {
      return createDefaultCategoryProgress();
    }

    const currentId = (typeof saved.currentId === 'string' && validIds.has(saved.currentId))
      ? saved.currentId
      : null;

    const lastId = (typeof saved.lastId === 'string' && validIds.has(saved.lastId))
      ? saved.lastId
      : null;

    const remainingIds = [];
    const seenIds = new Set();

    if (Array.isArray(saved.remainingIds)) {
      saved.remainingIds.forEach(id => {
        if (
          typeof id === 'string' &&
          validIds.has(id) &&
          id !== currentId &&
          !seenIds.has(id)
        ) {
          seenIds.add(id);
          remainingIds.push(id);
        }
      });
    }

    const round = (Number.isInteger(saved.round) && saved.round >= 1)
      ? saved.round
      : 1;

    const selectedChoice = (currentId && (saved.selectedChoice === 'A' || saved.selectedChoice === 'B'))
      ? saved.selectedChoice
      : null;

    return {
      remainingIds,
      round,
      currentId,
      lastId,
      selectedChoice
    };
  }

  function loadProgress() {
    let rawCategories = {};

    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      const parsed = raw ? JSON.parse(raw) : null;

      if (parsed && typeof parsed === 'object') {
        if (typeof parsed.selectedCategory === 'string' && QUESTIONS_DB[parsed.selectedCategory]) {
          state.currentCategory = parsed.selectedCategory;
        }
        if (parsed.gameMode === 'classic' || parsed.gameMode === 'group') {
          state.gameMode = parsed.gameMode;
        }
        if (parsed.categories && typeof parsed.categories === 'object') {
          rawCategories = parsed.categories;
        }
      }
    } catch (e) {
      rawCategories = {};
    }

    state.progress = {};
    Object.keys(QUESTIONS_DB).forEach(cat => {
      const validIds = new Set(QUESTIONS_DB[cat].map(q => q.id));
      state.progress[cat] = sanitizeCategoryProgress(rawCategories[cat], validIds);
    });

    // Siempre iniciamos con jugadores reiniciados y casillas de apodos limpias
    state.groupPlayers = DEFAULT_PLAYERS;
    state.playerNames = [];

    syncSelectedCategoryUI();
    syncModeSelectorUI();
    renderPlayerNameInputs();
    saveProgress();
  }

  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_KEY_PROGRESS,
        JSON.stringify({
          selectedCategory: state.currentCategory,
          gameMode: state.gameMode,
          categories: state.progress
        })
      );
    } catch (e) {}
  }

  function syncSelectedCategoryUI() {
    dom.catCards.forEach(card => {
      const isSelected = card.dataset.category === state.currentCategory;
      card.classList.toggle('selected', isSelected);
      card.setAttribute('aria-pressed', String(isSelected));
    });
  }

  function syncModeSelectorUI() {
    const isGroup = state.gameMode === 'group';
    dom.btnModeClassic.classList.toggle('active', !isGroup);
    dom.btnModeClassic.setAttribute('aria-pressed', String(!isGroup));
    dom.btnModeGroup.classList.toggle('active', isGroup);
    dom.btnModeGroup.setAttribute('aria-pressed', String(isGroup));
    dom.playersConfig.hidden = !isGroup;
    dom.playersCount.textContent = String(state.groupPlayers);
    dom.btnPlayersDec.disabled = state.groupPlayers <= MIN_PLAYERS;
    dom.btnPlayersInc.disabled = state.groupPlayers >= MAX_PLAYERS;
  }

  function renderPlayerNameInputs() {
    if (!dom.playersNamesGrid) return;
    dom.playersNamesGrid.textContent = '';

    for (let i = 0; i < state.groupPlayers; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'player-name-input';
      input.maxLength = 18;
      input.placeholder = `Jugador ${i + 1}`;
      input.value = state.playerNames[i] || '';
      input.setAttribute('aria-label', `Nombre o apodo del jugador ${i + 1}`);

      input.addEventListener('input', () => {
        state.playerNames[i] = input.value;
      });

      dom.playersNamesGrid.appendChild(input);
    }
  }

  function setGameMode(mode) {
    if (mode !== 'classic' && mode !== 'group') return;
    vibrate(20);
    state.gameMode = mode;
    syncModeSelectorUI();
    saveProgress();
  }

  function changePlayersCount(delta) {
    const next = state.groupPlayers + delta;
    if (next < MIN_PLAYERS || next > MAX_PLAYERS) return;
    vibrate(15);
    state.groupPlayers = next;
    state.playerNames = state.playerNames.slice(0, next);
    syncModeSelectorUI();
    renderPlayerNameInputs();
  }

  // MOTOR DE MAZOS (SIN REPETICIÓN ENTRE CICLOS NI INCREMENTO DE RONDA AL SALTAR)
  function buildShuffledDeckIds(category, avoidFirstId) {
    const allIds = QUESTIONS_DB[category].map(q => q.id);
    const shuffled = shuffleArray(allIds);

    // .pop() extrae el último elemento; evitamos que coincida con la última pregunta vista
    if (shuffled.length > 1 && avoidFirstId && shuffled[shuffled.length - 1] === avoidFirstId) {
      const swapIndex = Math.floor(Math.random() * (shuffled.length - 1));
      const temp = shuffled[shuffled.length - 1];
      shuffled[shuffled.length - 1] = shuffled[swapIndex];
      shuffled[swapIndex] = temp;
    }

    return shuffled;
  }

  function resetGroupVotingForCurrentQuestion() {
    state.groupSession.stage = 'voting';
    state.groupSession.currentVoter = 1;
    state.groupSession.tempChoice = null;
    state.groupSession.votesA = 0;
    state.groupSession.votesB = 0;
    state.groupSession.votersA = [];
    state.groupSession.votersB = [];
  }

  function drawNextQuestionForCategory(category, incrementRound = false) {
    const catProg = state.progress[category];
    state.lastDrawReshuffled = false;

    if (catProg.currentId) {
      catProg.lastId = catProg.currentId;
    }

    if (!catProg.remainingIds || catProg.remainingIds.length === 0) {
      if (catProg.lastId) {
        showToast('Categoría completada sin repetir. Barajando nuevo mazo...');
        state.lastDrawReshuffled = true;
      }
      catProg.remainingIds = buildShuffledDeckIds(category, catProg.lastId);
    }

    const nextId = catProg.remainingIds.pop();
    catProg.currentId = nextId;
    catProg.selectedChoice = null;

    if (incrementRound) {
      catProg.round += 1;
    }

    resetGroupVotingForCurrentQuestion();
    saveProgress();
    return findQuestionById(category, nextId);
  }

  function startOrResumeCategory() {
    const cat = state.currentCategory;
    const catProg = state.progress[cat];

    if (catProg.currentId) {
      catProg.lastId = catProg.currentId;
      catProg.currentId = null;
    }

    catProg.round = 1;
    catProg.remainingIds = buildShuffledDeckIds(cat, catProg.lastId);

    state.currentQuestion = drawNextQuestionForCategory(cat, false);
    renderCurrentQuestion();
  }

  function advanceToNextAnsweredRound() {
    const cat = state.currentCategory;
    const catProg = state.progress[cat];

    if (state.gameMode === 'group') {
      handleGroupMainButtonAction();
      return;
    }

    // Modo clásico: solo avanza e incrementa la ronda si se ha respondido A o B
    if (!catProg.selectedChoice) {
      return;
    }

    state.currentQuestion = drawNextQuestionForCategory(cat, true);
    renderCurrentQuestion();
  }

  function handleGroupMainButtonAction() {
    const gs = state.groupSession;

    if (gs.stage === 'voting') {
      if (gs.tempChoice !== 'A' && gs.tempChoice !== 'B') return;

      const voterName = getPlayerDisplayName(gs.currentVoter);
      if (gs.tempChoice === 'A') {
        gs.votesA += 1;
        gs.votersA.push(voterName);
      } else {
        gs.votesB += 1;
        gs.votersB.push(voterName);
      }
      gs.tempChoice = null;

      if (gs.currentVoter < state.groupPlayers) {
        gs.currentVoter += 1;
        gs.stage = 'pass';
      } else {
        gs.stage = 'results';
      }
      renderCurrentQuestion();
      return;
    }

    if (gs.stage === 'results') {
      const cat = state.currentCategory;
      state.currentQuestion = drawNextQuestionForCategory(cat, true);
      renderCurrentQuestion();
    }
  }

  function handleReadyNextVoter() {
    if (state.gameMode !== 'group' || state.groupSession.stage !== 'pass') return;
    vibrate(30);
    state.groupSession.stage = 'voting';
    state.groupSession.tempChoice = null;
    renderCurrentQuestion();
  }

  function skipCurrentQuestion() {
    const cat = state.currentCategory;
    // Saltar extrae una nueva pregunta pero nunca incrementa el número de ronda
    state.currentQuestion = drawNextQuestionForCategory(cat, false);
    renderCurrentQuestion();

    if (!state.lastDrawReshuffled) {
      showToast('Pregunta saltada');
    }
  }

  function renderGroupResultsView(q) {
    const gs = state.groupSession;
    const total = gs.votesA + gs.votesB;
    const pctA = total > 0 ? Math.round((gs.votesA / total) * 100) : 0;
    const pctB = total > 0 ? (100 - pctA) : 0;

    dom.resultsWinnerBadge.classList.remove('winner-b', 'winner-tie');
    dom.resultCardA.classList.remove('winner');
    dom.resultCardB.classList.remove('winner');

    if (gs.votesA > gs.votesB) {
      dom.resultsWinnerBadge.textContent = '🏆 GANA LA OPCIÓN A';
      dom.resultCardA.classList.add('winner');
    } else if (gs.votesB > gs.votesA) {
      dom.resultsWinnerBadge.textContent = '🏆 GANA LA OPCIÓN B';
      dom.resultsWinnerBadge.classList.add('winner-b');
      dom.resultCardB.classList.add('winner');
    } else {
      dom.resultsWinnerBadge.textContent = '⚡ ¡EMPATE EXACTO!';
      dom.resultsWinnerBadge.classList.add('winner-tie');
      dom.resultCardA.classList.add('winner');
      dom.resultCardB.classList.add('winner');
    }

    dom.resultsTotalInfo.textContent = `${total} ${total === 1 ? 'participante ha votado' : 'participantes han votado'}`;

    dom.resultPctA.textContent = `${pctA}%`;
    dom.resultPctB.textContent = `${pctB}%`;
    dom.resultVotesA.textContent = `(${gs.votesA} ${gs.votesA === 1 ? 'voto' : 'votos'})`;
    dom.resultVotesB.textContent = `(${gs.votesB} ${gs.votesB === 1 ? 'voto' : 'votos'})`;

    dom.resultBarA.style.width = `${pctA}%`;
    dom.resultBarB.style.width = `${pctB}%`;

    dom.resultTextA.textContent = q.a;
    dom.resultTextB.textContent = q.b;

    renderVotersList(dom.resultVotersA, gs.votersA);
    renderVotersList(dom.resultVotersB, gs.votersB);
  }

  function renderVotersList(container, voters) {
    if (!container) return;
    container.textContent = '';

    const label = document.createElement('span');
    label.className = 'voters-label';
    label.textContent = 'HAN VOTADO:';
    container.appendChild(label);

    if (!Array.isArray(voters) || voters.length === 0) {
      const empty = document.createElement('span');
      empty.className = 'voter-empty';
      empty.textContent = 'Nadie';
      container.appendChild(empty);
      return;
    }

    voters.forEach(name => {
      const chip = document.createElement('span');
      chip.className = 'voter-chip';
      chip.textContent = name;
      container.appendChild(chip);
    });
  }

  function renderCurrentQuestion() {
    const cat = state.currentCategory;
    const catProg = state.progress[cat];
    const q = state.currentQuestion;
    if (!q) return;

    dom.catBadge.textContent = CATEGORY_NAMES[cat];
    dom.roundCounter.textContent = `RONDA ${catProg.round}`;
    const favActive = isFavorite(q.id);
    dom.btnToggleFav.classList.toggle('active', favActive);
    dom.btnToggleFav.setAttribute('aria-pressed', String(favActive));

    dom.textA.textContent = q.a;
    dom.textB.textContent = q.b;
    dom.optionA.scrollTop = 0;
    dom.optionB.scrollTop = 0;

    if (state.gameMode === 'classic') {
      dom.dilemmaArena.hidden = false;
      dom.groupPassView.hidden = true;
      dom.groupResultsView.hidden = true;
      dom.gameFooter.hidden = false;
      dom.turnBadge.hidden = true;
      dom.btnSkip.hidden = false;

      const choice = catProg.selectedChoice;
      dom.optionA.classList.toggle('selected', choice === 'A');
      dom.optionA.setAttribute('aria-pressed', String(choice === 'A'));
      dom.optionB.classList.toggle('selected', choice === 'B');
      dom.optionB.setAttribute('aria-pressed', String(choice === 'B'));

      const hasSelection = choice === 'A' || choice === 'B';
      dom.btnNext.textContent = 'SIGUIENTE DILEMA →';
      dom.btnNext.disabled = !hasSelection;
      dom.btnNext.classList.toggle('ready', hasSelection);
      return;
    }

    // MODO VOTACIÓN GRUPAL
    const gs = state.groupSession;

    if (gs.stage === 'voting') {
      dom.dilemmaArena.hidden = false;
      dom.groupPassView.hidden = true;
      dom.groupResultsView.hidden = true;
      dom.gameFooter.hidden = false;
      dom.btnSkip.hidden = false;

      const currentName = getPlayerDisplayName(gs.currentVoter);
      dom.turnBadge.hidden = false;
      dom.turnBadge.textContent = `TURNO DE ${currentName.toUpperCase()} (${gs.currentVoter}/${state.groupPlayers}) • VOTO SECRETO`;

      const choice = gs.tempChoice;
      dom.optionA.classList.toggle('selected', choice === 'A');
      dom.optionA.setAttribute('aria-pressed', String(choice === 'A'));
      dom.optionB.classList.toggle('selected', choice === 'B');
      dom.optionB.setAttribute('aria-pressed', String(choice === 'B'));

      const hasSelection = choice === 'A' || choice === 'B';
      dom.btnNext.textContent = `CONFIRMAR VOTO DE ${currentName.toUpperCase()} 🔒`;
      dom.btnNext.disabled = !hasSelection;
      dom.btnNext.classList.toggle('ready', hasSelection);
      return;
    }

    if (gs.stage === 'pass') {
      dom.dilemmaArena.hidden = true;
      dom.groupPassView.hidden = false;
      dom.groupResultsView.hidden = true;
      dom.gameFooter.hidden = true;

      const prevName = getPlayerDisplayName(gs.currentVoter - 1);
      const nextName = getPlayerDisplayName(gs.currentVoter);

      dom.passSecretPill.textContent = `✓ VOTO DE ${prevName.toUpperCase()} GUARDADO`;
      dom.passTitle.textContent = `PASA EL MÓVIL A ${nextName.toUpperCase()}`;
      dom.passDesc.textContent = `Tu elección ha quedado oculta. Entrega el teléfono a ${nextName} sin revelar tu respuesta.`;
      dom.btnReadyVote.textContent = `SOY ${nextName.toUpperCase()} • VOTAR`;
      return;
    }

    if (gs.stage === 'results') {
      dom.dilemmaArena.hidden = true;
      dom.groupPassView.hidden = true;
      dom.groupResultsView.hidden = false;
      dom.gameFooter.hidden = false;
      dom.btnSkip.hidden = true;

      renderGroupResultsView(q);

      dom.btnNext.textContent = 'SIGUIENTE DILEMA →';
      dom.btnNext.disabled = false;
      dom.btnNext.classList.add('ready');
    }
  }

  function selectOption(choice) {
    if (choice !== 'A' && choice !== 'B') return;
    vibrate(35);

    if (state.gameMode === 'group') {
      if (state.groupSession.stage !== 'voting') return;
      state.groupSession.tempChoice = choice;
    } else {
      const catProg = state.progress[state.currentCategory];
      catProg.selectedChoice = choice;
      saveProgress();
    }

    dom.optionA.classList.toggle('selected', choice === 'A');
    dom.optionA.setAttribute('aria-pressed', String(choice === 'A'));
    dom.optionB.classList.toggle('selected', choice === 'B');
    dom.optionB.setAttribute('aria-pressed', String(choice === 'B'));
    dom.btnNext.disabled = false;
    dom.btnNext.classList.add('ready');
  }

  // GESTIÓN, VALIDACIÓN Y SINCRONIZACIÓN DE FAVORITOS EN LOCALSTORAGE
  function isValidFavoriteItem(item) {
    if (!item || typeof item !== 'object') return false;
    if (typeof item.id !== 'string' || item.id.trim() === '') return false;
    if (typeof item.category !== 'string' || item.category.trim() === '') return false;
    if (typeof item.a !== 'string' || item.a.trim() === '') return false;
    if (typeof item.b !== 'string' || item.b.trim() === '') return false;
    return true;
  }

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_FAVS);
      const parsed = raw ? JSON.parse(raw) : [];

      if (Array.isArray(parsed)) {
        const validFavorites = [];
        const seenFavIds = new Set();

        parsed.forEach(item => {
          if (isValidFavoriteItem(item)) {
            const cleanId = item.id.trim();
            if (!seenFavIds.has(cleanId)) {
              seenFavIds.add(cleanId);

              const syncedQuestion = findQuestionInAllCategories(cleanId);
              if (syncedQuestion) {
                validFavorites.push(syncedQuestion);
              } else {
                validFavorites.push({
                  id: cleanId,
                  category: item.category.trim(),
                  a: item.a.trim(),
                  b: item.b.trim()
                });
              }
            }
          }
        });

        state.favorites = validFavorites;
      } else {
        state.favorites = [];
      }
    } catch (e) {
      state.favorites = [];
    }

    saveFavorites();
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(state.favorites));
    } catch (e) {}
    updateFavCounter();
  }

  function updateFavCounter() {
    dom.favCount.textContent = String(state.favorites.length);
    if (dom.btnClearFavs) {
      dom.btnClearFavs.disabled = state.favorites.length === 0;
    }
  }

  function isFavorite(questionId) {
    return state.favorites.some(item => item.id === questionId);
  }

  function toggleCurrentFavorite() {
    if (!state.currentQuestion) return;
    vibrate(30);

    const q = state.currentQuestion;
    const index = state.favorites.findIndex(item => item.id === q.id);

    if (index >= 0) {
      state.favorites.splice(index, 1);
      dom.btnToggleFav.classList.remove('active');
      dom.btnToggleFav.setAttribute('aria-pressed', 'false');
    } else {
      state.favorites.unshift({
        id: q.id,
        category: CATEGORY_NAMES[state.currentCategory],
        a: q.a,
        b: q.b
      });
      dom.btnToggleFav.classList.add('active');
      dom.btnToggleFav.setAttribute('aria-pressed', 'true');
    }
    saveFavorites();
  }

  function createFavoriteOptionNode(label, text) {
    const optDiv = document.createElement('div');
    optDiv.className = 'fav-opt';

    const strong = document.createElement('strong');
    strong.textContent = `${label}: `;

    const textNode = document.createTextNode(text || '');

    optDiv.appendChild(strong);
    optDiv.appendChild(textNode);
    return optDiv;
  }

  function renderFavoritesList() {
    dom.favsList.textContent = '';
    updateFavCounter();

    if (state.favorites.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty-msg';
      empty.textContent = 'Todavía no has guardado ningún dilema en favoritos. Pulsa el corazón ♥ durante una partida.';
      dom.favsList.appendChild(empty);
      return;
    }

    state.favorites.forEach(item => {
      const card = document.createElement('div');
      card.className = 'fav-item';

      const header = document.createElement('div');
      header.className = 'fav-item-header';

      const badge = document.createElement('span');
      badge.className = 'cat-pill';
      badge.textContent = item.category;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'fav-remove';
      removeBtn.type = 'button';
      removeBtn.textContent = 'ELIMINAR';
      removeBtn.addEventListener('click', () => {
        vibrate(20);
        state.favorites = state.favorites.filter(f => f.id !== item.id);
        saveFavorites();
        renderFavoritesList();
      });

      header.appendChild(badge);
      header.appendChild(removeBtn);

      const optA = createFavoriteOptionNode('A', item.a);
      const optB = createFavoriteOptionNode('B', item.b);

      card.appendChild(header);
      card.appendChild(optA);
      card.appendChild(optB);
      dom.favsList.appendChild(card);
    });
  }

  // MODAL DE CONFIRMACIÓN PARA BORRAR FAVORITOS
  function openClearFavoritesModal() {
    if (state.favorites.length === 0) return;
    vibrate(25);
    dom.modalConfirmClear.hidden = false;
    if (dom.btnCancelClear) {
      dom.btnCancelClear.focus();
    }
  }

  function closeClearFavoritesModal() {
    if (dom.modalConfirmClear.hidden) return;
    dom.modalConfirmClear.hidden = true;
    if (state.currentScreen === 'favs' && dom.btnClearFavs && !dom.btnClearFavs.disabled) {
      dom.btnClearFavs.focus();
    }
  }

  function confirmClearAllFavorites() {
    vibrate(40);
    state.favorites = [];
    saveFavorites();
    closeClearFavoritesModal();
    renderFavoritesList();
    showToast('Favoritos eliminados');
  }

  // NAVEGACIÓN E INTEGRACIÓN CON EL BOTÓN ATRÁS DE ANDROID (HISTORY API)
  function showScreen(screenKey, pushHistory = true) {
    resetExitGuard();
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenKey].classList.add('active');
    state.currentScreen = screenKey;

    if (pushHistory && window.history && window.history.pushState) {
      window.history.pushState({ screen: screenKey }, '');
    }
  }

  function navigateBackToHome() {
    closeClearFavoritesModal();
    resetExitGuard();
    if (state.currentScreen === 'home') return;

    if (window.history && window.history.state && window.history.state.screen !== 'home') {
      window.history.back();
    } else {
      showScreen('home', false);
    }
  }

  function initHistoryNavigation() {
    if (!window.history || !window.history.replaceState) return;

    window.history.replaceState({ screen: 'exit-guard' }, '');
    window.history.pushState({ screen: 'home' }, '');

    window.addEventListener('popstate', event => {
      if (!dom.modalConfirmClear.hidden) {
        closeClearFavoritesModal();
        resetExitGuard();
        window.history.pushState({ screen: state.currentScreen }, '');
        return;
      }

      const targetState = event.state;

      if (state.currentScreen !== 'home') {
        showScreen('home', false);
        if (!targetState || targetState.screen === 'exit-guard') {
          window.history.pushState({ screen: 'home' }, '');
        }
        return;
      }

      if (!targetState || targetState.screen === 'exit-guard') {
        if (state.exitGuardActive) {
          resetExitGuard();
          window.history.back();
        } else {
          state.exitGuardActive = true;
          showToast('Pulsa atrás otra vez para salir de DILEMMA');
          window.history.pushState({ screen: 'home' }, '');
          if (state.exitGuardTimer) clearTimeout(state.exitGuardTimer);
          state.exitGuardTimer = setTimeout(() => {
            state.exitGuardActive = false;
            state.exitGuardTimer = null;
          }, 2000);
        }
      }
    });
  }

  // EVENTOS DE INTERFAZ
  function initEvents() {
    dom.catCards.forEach(card => {
      card.addEventListener('click', () => {
        vibrate(20);
        state.currentCategory = card.dataset.category;
        syncSelectedCategoryUI();
        saveProgress();
      });
    });

    dom.btnModeClassic.addEventListener('click', () => setGameMode('classic'));
    dom.btnModeGroup.addEventListener('click', () => setGameMode('group'));

    dom.btnPlayersDec.addEventListener('click', () => changePlayersCount(-1));
    dom.btnPlayersInc.addEventListener('click', () => changePlayersCount(1));

    dom.btnStart.addEventListener('click', () => {
      vibrate(40);
      startOrResumeCategory();
      showScreen('game', true);
    });

    dom.btnBackMenu.addEventListener('click', () => {
      vibrate(20);
      navigateBackToHome();
    });

    dom.optionA.addEventListener('click', () => selectOption('A'));
    dom.optionB.addEventListener('click', () => selectOption('B'));

    dom.btnReadyVote.addEventListener('click', handleReadyNextVoter);

    dom.btnNext.addEventListener('click', () => {
      vibrate(25);
      advanceToNextAnsweredRound();
    });

    dom.btnSkip.addEventListener('click', () => {
      vibrate(20);
      skipCurrentQuestion();
    });

    dom.btnToggleFav.addEventListener('click', toggleCurrentFavorite);

    dom.btnOpenFavs.addEventListener('click', () => {
      vibrate(20);
      renderFavoritesList();
      showScreen('favs', true);
    });

    dom.btnCloseFavs.addEventListener('click', () => {
      vibrate(20);
      navigateBackToHome();
    });

    dom.btnClearFavs.addEventListener('click', openClearFavoritesModal);

    dom.btnCancelClear.addEventListener('click', () => {
      vibrate(15);
      closeClearFavoritesModal();
    });

    dom.btnConfirmClear.addEventListener('click', confirmClearAllFavorites);

    dom.modalConfirmClear.addEventListener('click', event => {
      if (event.target === dom.modalConfirmClear) {
        closeClearFavoritesModal();
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !dom.modalConfirmClear.hidden) {
        closeClearFavoritesModal();
      }
    });
  }

  // SERVICE WORKER (MODO OFFLINE Y ACTUALIZACIÓN ATÓMICA SIN MEZCLAR ARCHIVOS)
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then(registration => {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          }

          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
              }
            });
          });
        })
        .catch(() => {});
    });
  }

  // INICIALIZACIÓN
  loadFavorites();
  loadProgress();
  initHistoryNavigation();
  initEvents();
  registerSW();
})();
