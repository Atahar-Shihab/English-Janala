/**
 * ==========================================================================
 * English Janala — Application Logic Engine (v2.0 Ultimate Suite)
 * ==========================================================================
 *
 * Core Features:
 * - Dynamic Lesson & All-Words Browsing with Bilingual Search
 * - 3D Flashcards Arena with Flip Animations & Mastery Tracking
 * - Multiple-Choice Vocabulary Quiz with Real-time Scoring & Summary
 * - Spelling & Typing Practice Arena with Dynamic Hints
 * - Memory Matching Mini-Game (English <-> Bengali)
 * - LocalStorage Bookmarks, Notes, Mastery, Daily Streaks & XP System
 * - Synthesized Audio Sound Effects (Web Audio API)
 * - Full Text-to-Speech Controls (US/UK, Rates, Loops)
 * - Particle Confetti Celebrations & Floating Quick-Action Dock
 * - Keyboard Shortcuts & Print Study Sheet Exporter
 *
 * @author Atahar Shihab
 * @license MIT
 * ==========================================================================
 */

// ==========================================================================
// 1. Global State Management
// ==========================================================================

const API_BASE = 'https://openapi.programming-hero.com/api';

const state = {
    allWords: (typeof DEFAULT_VOCABULARY !== 'undefined' && Array.isArray(DEFAULT_VOCABULARY)) ? [...DEFAULT_VOCABULARY] : [],
    currentWords: (typeof DEFAULT_VOCABULARY !== 'undefined' && Array.isArray(DEFAULT_VOCABULARY)) ? DEFAULT_VOCABULARY.filter(w => w.level_no === 1) : [],
    activeLessonId: 1,
    isFetching: false,
    activeMode: 'browse', // 'browse' | 'flashcards' | 'quiz' | 'spelling' | 'memory'
    
    // User preferences & persistence
    bookmarks: JSON.parse(localStorage.getItem('ej_bookmarks') || '[]'),
    mastered: JSON.parse(localStorage.getItem('ej_mastered') || '[]'),
    notes: JSON.parse(localStorage.getItem('ej_notes') || '{}'),
    recentSearches: JSON.parse(localStorage.getItem('ej_recent_searches') || '[]'),
    theme: localStorage.getItem('ej_theme') || 'light',
    
    // Gamification & Streak
    xp: parseInt(localStorage.getItem('ej_xp') || '0', 10),
    streak: JSON.parse(localStorage.getItem('ej_streak') || '{"count":1,"lastDate":""}'),
    dailyGoal: JSON.parse(localStorage.getItem('ej_daily_goal') || '{"target":10,"count":0,"date":""}'),
    studySeconds: 0,
    
    // Audio Preferences
    audio: {
        accent: localStorage.getItem('ej_audio_accent') || 'en-US',
        speed: parseFloat(localStorage.getItem('ej_audio_speed') || '0.85'),
        repeat: parseInt(localStorage.getItem('ej_audio_repeat') || '1', 10),
        sfx: localStorage.getItem('ej_audio_sfx') !== 'false'
    },
    
    // Filter & Layout
    sortMode: 'default',
    filterMode: 'all',
    viewLayout: localStorage.getItem('ej_view_layout') || 'grid',
    
    // Flashcard State
    flashcards: {
        list: [],
        index: 0,
        flipped: false
    },
    
    // Quiz State
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0,
        answered: false
    },
    
    // Spelling State
    spelling: {
        currentWord: null,
        hintRevealed: false
    },
    
    // Memory Game State
    memory: {
        cards: [],
        selected: [],
        matchedCount: 0,
        moves: 0,
        locked: false
    },

    activeModalWord: null
};

// ==========================================================================
// 2. Synthesized Web Audio API (Sound Effects)
// ==========================================================================

let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

/**
 * Plays synthesized sound effects without external audio files
 * @param {'correct' | 'wrong' | 'flip' | 'fanfare' | 'click'} type
 */
function playAudioSfx(type) {
    if (!state.audio.sfx) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        if (type === 'correct') {
            // Melodic ascending chime
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            // Gentle low buzz
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(140, now + 0.25);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'flip') {
            // Soft paper flip whoosh
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'fanfare') {
            // Victory chord
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                gain.gain.setValueAtTime(0.15, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
                osc.start(now + idx * 0.08);
                osc.stop(now + 0.6);
            });
        }
    } catch (e) {
        console.warn('Audio SFX error:', e);
    }
}

// ==========================================================================
// 3. Web Speech API (Pronunciation Audio Engine)
// ==========================================================================

function pronounceWord(word) {
    if (!word || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    let timesPlayed = 0;
    const playOnce = () => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = state.audio.accent;
        utterance.rate = state.audio.speed;

        // Try picking matching voice for dialect
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang === state.audio.accent || v.lang.startsWith(state.audio.accent.slice(0, 2)));
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.onend = () => {
            timesPlayed++;
            if (timesPlayed < state.audio.repeat) {
                setTimeout(playOnce, 300);
            }
        };

        window.speechSynthesis.speak(utterance);
    };

    playOnce();
    addXP(2); // Small reward for practicing listening
}

function setAudioAccent(accent) {
    state.audio.accent = accent;
    localStorage.setItem('ej_audio_accent', accent);
    document.getElementById('accent-us-btn')?.classList.toggle('btn-primary', accent === 'en-US');
    document.getElementById('accent-us-btn')?.classList.toggle('btn-outline', accent !== 'en-US');
    document.getElementById('accent-uk-btn')?.classList.toggle('btn-primary', accent === 'en-GB');
    document.getElementById('accent-uk-btn')?.classList.toggle('btn-outline', accent !== 'en-GB');
    showToast(`Accent set to ${accent === 'en-US' ? 'US' : 'UK'} English`, 'info');
}

function setAudioSpeed(speed) {
    state.audio.speed = speed;
    localStorage.setItem('ej_audio_speed', speed.toString());
    document.getElementById('speed-slow-btn')?.classList.toggle('btn-primary', speed === 0.65);
    document.getElementById('speed-normal-btn')?.classList.toggle('btn-primary', speed === 0.85);
    document.getElementById('speed-fast-btn')?.classList.toggle('btn-primary', speed === 1.0);
    showToast(`Speech rate set to ${speed}x`, 'info');
}

function setAudioRepeat(times) {
    state.audio.repeat = times;
    localStorage.setItem('ej_audio_repeat', times.toString());
    document.getElementById('repeat-1x-btn')?.classList.toggle('btn-primary', times === 1);
    document.getElementById('repeat-2x-btn')?.classList.toggle('btn-primary', times === 2);
    document.getElementById('repeat-3x-btn')?.classList.toggle('btn-primary', times === 3);
    showToast(`Audio repetition set to ${times}x`, 'info');
}

function toggleSoundEffects(enabled) {
    state.audio.sfx = enabled;
    localStorage.setItem('ej_audio_sfx', enabled.toString());
    showToast(`Sound effects ${enabled ? 'enabled' : 'muted'}`, 'info');
}

// ==========================================================================
// 4. Confetti Celebration Engine (Zero External Dependencies)
// ==========================================================================

function launchConfetti(duration = 2000) {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#22c55e', '#f59e0b', '#06b6d4'];

    for (let i = 0; i < 90; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.4,
            w: Math.random() * 9 + 4,
            h: Math.random() * 5 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 4 + 2,
            rot: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 10
        });
    }

    const start = performance.now();
    function animate(now) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vRot;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rot * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        if (now - start < duration) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    requestAnimationFrame(animate);
}

// ==========================================================================
// 5. Toast Notification System
// ==========================================================================

function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `app-toast ${type}`;

    let icon = 'fa-circle-check text-green-500';
    if (type === 'info') icon = 'fa-circle-info text-blue-500';
    if (type === 'warning') icon = 'fa-triangle-exclamation text-amber-500';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-hiding');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ==========================================================================
// 6. Gamification: Streaks, XP & Daily Goals
// ==========================================================================

function checkDailyStreak() {
    const today = new Date().toISOString().split('T')[0];
    const { count, lastDate } = state.streak;

    if (!lastDate) {
        state.streak = { count: 1, lastDate: today };
    } else if (lastDate === today) {
        // Already logged today
    } else {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (lastDate === yesterday) {
            state.streak.count += 1;
            state.streak.lastDate = today;
            showToast(`🔥 Streak continued! ${state.streak.count} Days!`, 'warning');
        } else {
            // Missed a day
            state.streak = { count: 1, lastDate: today };
        }
    }
    localStorage.setItem('ej_streak', JSON.stringify(state.streak));
    updateStreakUI();
}

function updateStreakUI() {
    const streakEl = document.getElementById('streak-counter-nav');
    if (streakEl) streakEl.innerText = `${state.streak.count} Day${state.streak.count > 1 ? 's' : ''}`;
}

function showStreakInfo() {
    showToast(`Study Streak: ${state.streak.count} consecutive day(s). Practice daily to keep the flame burning!`, 'info', 4000);
}

function addXP(amount) {
    state.xp += amount;
    localStorage.setItem('ej_xp', state.xp.toString());
    const xpEl = document.getElementById('xp-counter-nav');
    if (xpEl) xpEl.innerText = `${state.xp} XP`;
}

function updateDailyGoalProgress(increment = 1) {
    const today = new Date().toISOString().split('T')[0];
    if (state.dailyGoal.date !== today) {
        state.dailyGoal.date = today;
        state.dailyGoal.count = 0;
    }
    state.dailyGoal.count += increment;
    localStorage.setItem('ej_daily_goal', JSON.stringify(state.dailyGoal));

    renderDailyGoalUI();
    if (state.dailyGoal.count === state.dailyGoal.target) {
        launchConfetti(2500);
        playAudioSfx('fanfare');
        showToast(`🎉 Daily goal reached! (${state.dailyGoal.target} words learned today)`, 'success', 4000);
    }
}

function renderDailyGoalUI() {
    const today = new Date().toISOString().split('T')[0];
    if (state.dailyGoal.date !== today) {
        state.dailyGoal.date = today;
        state.dailyGoal.count = 0;
    }

    const { target, count } = state.dailyGoal;
    const percent = Math.min(100, Math.round((count / target) * 100));

    const bar = document.getElementById('daily-goal-bar');
    const percentEl = document.getElementById('daily-goal-percent');
    const targetEl = document.getElementById('daily-goal-target');
    const statsEl = document.getElementById('daily-goal-stats');

    if (bar) {
        bar.max = target;
        bar.value = count;
    }
    if (percentEl) percentEl.innerText = `${percent}%`;
    if (targetEl) targetEl.innerText = target.toString();
    if (statsEl) statsEl.innerText = `${count} of ${target} completed today`;
}

function changeDailyGoal() {
    const input = prompt('Enter your daily target (words per day):', state.dailyGoal.target.toString());
    const num = parseInt(input, 10);
    if (!isNaN(num) && num > 0) {
        state.dailyGoal.target = num;
        localStorage.setItem('ej_daily_goal', JSON.stringify(state.dailyGoal));
        renderDailyGoalUI();
        showToast(`Daily goal updated to ${num} words!`, 'info');
    }
}

// Session Study Timer
setInterval(() => {
    state.studySeconds++;
    const mins = Math.floor(state.studySeconds / 60);
    const secs = state.studySeconds % 60;
    const timerEl = document.getElementById('session-timer');
    if (timerEl) {
        timerEl.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
}, 1000);

// ==========================================================================
// 7. Syllables & Educational Linguistic Helpers
// ==========================================================================

function getSyllableBreakdown(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    if (clean.length <= 3) return clean;
    // Heuristic syllable hyphenation based on vowel patterns
    const syllables = clean.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi);
    return syllables ? syllables.join(' • ') : clean;
}

function estimateDifficulty(word) {
    const len = (word || '').length;
    if (len <= 5) return { label: 'Easy', class: 'badge-success' };
    if (len <= 8) return { label: 'Medium', class: 'badge-warning' };
    return { label: 'Hard', class: 'badge-error' };
}

// ==========================================================================
// 8. API Data Loading & Lessons Initialization
// ==========================================================================

const manageSpinner = (show) => {
    const spinner = document.getElementById('spinner');
    const wordContainer = document.getElementById('word-container');
    if (!spinner || !wordContainer) return;

    if (show) {
        spinner.classList.remove('hidden');
        wordContainer.classList.add('hidden');
    } else {
        spinner.classList.add('hidden');
        wordContainer.classList.remove('hidden');
    }
};

const removeActiveClass = () => {
    document.querySelectorAll('.lesson-btn').forEach(btn => btn.classList.remove('btn-active'));
};

const loadLessons = async () => {
    let levelsData = null;
    try {
        const res = await fetch(`${API_BASE}/levels/all`);
        const json = await res.json();
        if (json && Array.isArray(json.data) && json.data.length > 0) {
            levelsData = json.data;
        }
    } catch (error) {
        console.warn('Levels API offline or unreachable, switching to built-in dataset:', error);
    }

    // Fail-safe offline/API downtime fallback
    if (!levelsData || levelsData.length === 0) {
        levelsData = (typeof DEFAULT_LEVELS !== 'undefined') ? DEFAULT_LEVELS : [];
    }

    displayLessons(levelsData);

    // Pre-fetch all words in background to enable lightning-fast search & games
    fetchAllWordsInMemory();

    // Automatically load Lesson 1 immediately so cards are visible right away
    loadLevelWord(1);
};

const displayLessons = (lessons) => {
    const container = document.getElementById('level-container');
    if (!container) return;
    container.innerHTML = '';

    // "All Words" button
    const allBtn = document.createElement('button');
    allBtn.id = 'lesson-all';
    allBtn.className = 'btn btn-sm btn-outline btn-primary lesson-btn gap-1.5 rounded-xl';
    allBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> All Words`;
    allBtn.onclick = () => loadAllWords();
    container.appendChild(allBtn);

    // Individual lesson buttons
    lessons.forEach(lesson => {
        const btn = document.createElement('button');
        btn.id = `lesson-${lesson.level_no}`;
        btn.className = 'btn btn-sm btn-outline btn-primary lesson-btn gap-1.5 rounded-xl';
        btn.innerHTML = `<i class="fa-solid fa-book"></i> Lesson-${lesson.level_no}`;
        btn.onclick = () => loadLevelWord(lesson.level_no);
        container.appendChild(btn);
    });
};

const fetchAllWordsInMemory = async () => {
    try {
        const res = await fetch(`${API_BASE}/words/all`);
        const json = await res.json();
        if (json && Array.isArray(json.data) && json.data.length > 0) {
            state.allWords = json.data;
        }
    } catch (e) {
        console.warn('Memory word cache failed, relying on built-in dataset:', e);
    } finally {
        if (!state.allWords || state.allWords.length === 0) {
            state.allWords = (typeof DEFAULT_VOCABULARY !== 'undefined') ? [...DEFAULT_VOCABULARY] : [];
        }
        initWordOfTheDay();
    }
};

const loadLevelWord = async (levelNo) => {
    if (state.isFetching) return;
    state.isFetching = true;
    state.activeLessonId = levelNo;
    manageSpinner(true);

    let words = [];
    try {
        const res = await fetch(`${API_BASE}/level/${levelNo}`);
        const json = await res.json();
        if (json && Array.isArray(json.data) && json.data.length > 0) {
            words = json.data;
        }
    } catch (error) {
        console.warn(`Level ${levelNo} API failed, falling back to built-in dataset:`, error);
    }

    // Fail-safe offline/local fallback
    if (!words || words.length === 0) {
        const pool = (typeof DEFAULT_VOCABULARY !== 'undefined' && DEFAULT_VOCABULARY.length > 0)
            ? DEFAULT_VOCABULARY
            : state.allWords;
        words = pool.filter(w => Number(w.level_no) === Number(levelNo));
    }

    removeActiveClass();
    const activeBtn = document.getElementById(`lesson-${levelNo}`);
    if (activeBtn) activeBtn.classList.add('btn-active');

    state.currentWords = words;
    renderWordsList(`Lesson ${levelNo}`);
    updateDailyGoalProgress(1);
    state.isFetching = false;
};

const loadAllWords = async () => {
    if (state.isFetching) return;
    state.isFetching = true;
    state.activeLessonId = 'all';
    manageSpinner(true);

    try {
        if (state.allWords.length === 0) {
            const res = await fetch(`${API_BASE}/words/all`);
            const json = await res.json();
            if (json && Array.isArray(json.data) && json.data.length > 0) {
                state.allWords = json.data;
            }
        }
    } catch (error) {
        console.warn('All words API failed, using built-in dataset:', error);
    }

    if (!state.allWords || state.allWords.length === 0) {
        state.allWords = (typeof DEFAULT_VOCABULARY !== 'undefined') ? [...DEFAULT_VOCABULARY] : [];
    }

    removeActiveClass();
    const allBtn = document.getElementById('lesson-all');
    if (allBtn) allBtn.classList.add('btn-active');

    state.currentWords = [...state.allWords];
    renderWordsList('All Lessons');
    state.isFetching = false;
};

// ==========================================================================
// 9. Vocabulary List Rendering (Grid vs List Layout)
// ==========================================================================

function getProcessedWords() {
    let list = [...state.currentWords];

    // Filter
    if (state.filterMode === 'easy') {
        list = list.filter(w => (w.word || '').length <= 5);
    } else if (state.filterMode === 'medium') {
        list = list.filter(w => (w.word || '').length >= 6 && (w.word || '').length <= 8);
    } else if (state.filterMode === 'hard') {
        list = list.filter(w => (w.word || '').length >= 9);
    } else if (state.filterMode === 'bookmarked') {
        list = list.filter(w => state.bookmarks.includes(w.id));
    } else if (state.filterMode === 'mastered') {
        list = list.filter(w => state.mastered.includes(w.id));
    }

    // Sort
    if (state.sortMode === 'az') {
        list.sort((a, b) => (a.word || '').localeCompare(b.word || ''));
    } else if (state.sortMode === 'za') {
        list.sort((a, b) => (b.word || '').localeCompare(a.word || ''));
    } else if (state.sortMode === 'shortest') {
        list.sort((a, b) => (a.word || '').length - (b.word || '').length);
    } else if (state.sortMode === 'longest') {
        list.sort((a, b) => (b.word || '').length - (a.word || '').length);
    }

    return list;
}

function renderWordsList(contextTitle = '') {
    const container = document.getElementById('word-container');
    if (!container) return;
    container.innerHTML = '';

    const words = getProcessedWords();

    if (words.length === 0) {
        container.innerHTML = `
            <div class="font-bangla bg-base-100 rounded-2xl col-span-full shadow-sm text-center py-12 px-6 space-y-3 border border-base-300">
                <img class="mx-auto w-16 h-16 opacity-80" src="./assets/alert-error.png" alt="No words found">
                <h3 class="font-bold text-xl text-base-content">কোনো শব্দ পাওয়া যায়নি</h3>
                <p class="text-sm text-base-content/70">অন্য কোনো লেসন নির্বাচন করুন অথবা ফিল্টার পরিবর্তন করুন।</p>
            </div>
        `;
        manageSpinner(false);
        return;
    }

    // Top Summary Header Bar
    const headerBar = document.createElement('div');
    headerBar.className = 'col-span-full flex flex-wrap justify-between items-center gap-2 pb-2';
    headerBar.innerHTML = `
        <span class="text-xs sm:text-sm font-bold text-base-content/70 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-primary"></i> ${contextTitle ? `${contextTitle} • ` : ''}${words.length} Words Shown
        </span>
        <div class="flex items-center gap-2 text-xs">
            <button onclick="exportCurrentWordList()" class="btn btn-xs btn-ghost gap-1" title="Download words as text file">
                <i class="fa-solid fa-file-export"></i> Export List
            </button>
            <span class="text-base-content/50">Click "Listen" to hear sound</span>
        </div>
    `;
    container.appendChild(headerBar);

    if (state.viewLayout === 'list') {
        // Compact Table/List View
        container.className = 'bg-base-200/50 p-4 sm:p-6 rounded-3xl min-h-[300px] flex flex-col gap-2';
        words.forEach(word => {
            const isBookmarked = state.bookmarks.includes(word.id);
            const isMastered = state.mastered.includes(word.id);
            const diff = estimateDifficulty(word.word);

            const row = document.createElement('div');
            row.className = `word-card flex flex-wrap items-center justify-between p-3.5 rounded-xl border border-base-300 gap-3 ${isMastered ? 'mastered' : ''}`;
            row.innerHTML = `
                <div class="flex items-center gap-3">
                    <button onclick="toggleBookmark(${word.id})" class="btn btn-xs btn-circle btn-ghost" title="Bookmark">
                        <i class="${isBookmarked ? 'fa-solid text-warning' : 'fa-regular text-base-content/40'} fa-star"></i>
                    </button>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-base text-base-content">${word.word}</span>
                            <span class="text-xs font-mono text-base-content/50">${word.pronunciation ? `/${word.pronunciation}/` : ''}</span>
                            <span class="badge badge-xs ${diff.class}">${diff.label}</span>
                        </div>
                        <p class="text-sm font-bangla text-base-content/80 mt-0.5">${word.meaning || ''}</p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <button onclick="loadWordDetail(${word.id})" class="btn btn-xs btn-outline btn-primary rounded-lg">Details</button>
                    <button onclick="pronounceWord('${word.word}')" class="btn btn-xs btn-primary text-white rounded-lg gap-1">
                        <i class="fa-solid fa-volume-high"></i> Listen
                    </button>
                </div>
            `;
            container.appendChild(row);
        });
    } else {
        // Grid View (Default)
        container.className = 'bg-base-200/50 p-4 sm:p-6 lg:p-8 rounded-3xl min-h-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5';
        words.forEach(word => {
            const isBookmarked = state.bookmarks.includes(word.id);
            const isMastered = state.mastered.includes(word.id);
            const diff = estimateDifficulty(word.word);
            const syllables = getSyllableBreakdown(word.word);

            const card = document.createElement('article');
            card.className = `word-card p-5 rounded-2xl border border-base-300 flex flex-col justify-between ${isMastered ? 'mastered' : ''}`;
            card.innerHTML = `
                <div>
                    <div class="flex items-start justify-between gap-2 mb-1.5">
                        <div class="flex items-center gap-2">
                            <h3 class="text-2xl font-extrabold text-base-content tracking-tight">${word.word}</h3>
                            <span class="badge badge-xs ${diff.class}">${diff.label}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <button onclick="toggleBookmark(${word.id})" class="btn btn-xs btn-circle btn-ghost" title="Star word">
                                <i class="${isBookmarked ? 'fa-solid text-warning' : 'fa-regular text-base-content/40'} fa-star text-sm"></i>
                            </button>
                            <button onclick="toggleMastered(${word.id})" class="btn btn-xs btn-circle btn-ghost" title="Mark as Mastered">
                                <i class="${isMastered ? 'fa-solid text-success' : 'fa-regular text-base-content/40'} fa-circle-check text-sm"></i>
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 text-xs font-mono text-base-content/60 mb-2">
                        <span>${word.pronunciation ? `/${word.pronunciation}/` : ''}</span>
                        <span class="text-base-content/30">•</span>
                        <span class="text-[11px] text-indigo-500 font-semibold tracking-wide">${syllables}</span>
                    </div>

                    <div class="py-2 bg-base-200/40 p-3 rounded-xl mb-3 border border-base-200">
                        <p class="text-[10px] uppercase font-bold tracking-wider text-primary mb-0.5">Meaning (অর্থ)</p>
                        <p class="text-base font-semibold font-bangla text-base-content">${word.meaning || 'N/A'}</p>
                    </div>
                </div>

                <div class="flex items-center justify-between pt-3 border-t border-base-200">
                    <button onclick="loadWordDetail(${word.id})" class="btn btn-xs btn-outline btn-primary gap-1.5 rounded-lg px-3">
                        <i class="fa-solid fa-circle-info"></i> Details
                    </button>
                    <button onclick="pronounceWord('${word.word}')" class="btn btn-xs btn-primary text-white gap-1.5 rounded-lg px-3 shadow-sm">
                        <i class="fa-solid fa-volume-high"></i> Listen
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    manageSpinner(false);
}

// ==========================================================================
// 10. Bookmarks, Mastery & Personal Notes Storage
// ==========================================================================

function toggleBookmark(id) {
    const idx = state.bookmarks.indexOf(id);
    if (idx > -1) {
        state.bookmarks.splice(idx, 1);
        showToast('Removed from Bookmarks', 'info');
    } else {
        state.bookmarks.push(id);
        playAudioSfx('click');
        showToast('Added to Bookmarks ⭐', 'success');
        addXP(5);
    }
    localStorage.setItem('ej_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkBadge();
    renderWordsList(state.activeLessonId ? `Lesson ${state.activeLessonId}` : 'Browse');
}

function toggleMastered(id) {
    const idx = state.mastered.indexOf(id);
    if (idx > -1) {
        state.mastered.splice(idx, 1);
        showToast('Removed from Mastered list', 'info');
    } else {
        state.mastered.push(id);
        playAudioSfx('correct');
        showToast('Word Mastered! ✅ (+15 XP)', 'success');
        addXP(15);
        updateDailyGoalProgress(1);
    }
    localStorage.setItem('ej_mastered', JSON.stringify(state.mastered));
    renderWordsList(state.activeLessonId ? `Lesson ${state.activeLessonId}` : 'Browse');
}

function updateBookmarkBadge() {
    const badge = document.getElementById('bookmark-badge-count');
    if (badge) badge.innerText = state.bookmarks.length.toString();
}

function filterBookmarks() {
    setFilterMode('bookmarked');
    if (!state.currentWords.length && state.allWords.length) {
        state.currentWords = [...state.allWords];
    }
    switchAppMode('browse');
    renderWordsList('Bookmarked Words');
    showToast(`Showing ${state.bookmarks.length} bookmarked words`, 'info');
}

function exportVocabularyBookmarks() {
    const bookmarkedWords = state.allWords.filter(w => state.bookmarks.includes(w.id));
    if (!bookmarkedWords.length) {
        alert('You do not have any bookmarked words to export yet. Click the star icon on any word to bookmark it!');
        return;
    }
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(bookmarkedWords, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'english_janala_bookmarks.json');
    dlAnchor.click();
    showToast('Bookmarks exported successfully!', 'success');
}

function exportCurrentWordList() {
    const words = getProcessedWords();
    const textLines = words.map(w => `${w.word} [/${w.pronunciation}/] = ${w.meaning}`).join('\n');
    const blob = new Blob([textLines], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', url);
    dlAnchor.setAttribute('download', 'vocabulary_list.txt');
    dlAnchor.click();
    showToast('Vocabulary list exported as text file!', 'success');
}

function resetLearningProgress() {
    if (confirm('Are you sure you want to reset all bookmarks, mastered words, notes, and XP? This action cannot be undone.')) {
        state.bookmarks = [];
        state.mastered = [];
        state.notes = {};
        state.xp = 0;
        localStorage.removeItem('ej_bookmarks');
        localStorage.removeItem('ej_mastered');
        localStorage.removeItem('ej_notes');
        localStorage.removeItem('ej_xp');
        updateBookmarkBadge();
        addXP(0);
        renderWordsList('Browse');
        showToast('All learning progress reset.', 'info');
    }
}

// ==========================================================================
// 11. Modal Logic & Word Details
// ==========================================================================

const loadWordDetail = async (id) => {
    let word = null;
    try {
        const res = await fetch(`${API_BASE}/word/${id}`);
        const json = await res.json();
        if (json && json.data && json.data.word) {
            word = json.data;
        }
    } catch (e) {
        console.warn(`Word detail API fetch error for id ${id}:`, e);
    }

    // Fail-safe local lookup if API is offline or returns error
    if (!word) {
        const pool = (state.allWords && state.allWords.length > 0)
            ? state.allWords
            : ((typeof DEFAULT_VOCABULARY !== 'undefined') ? DEFAULT_VOCABULARY : []);
        word = pool.find(w => String(w.id) === String(id));
    }

    if (word) {
        state.activeModalWord = word;
        displayWordDetails(word);
    } else {
        showToast('Word details unavailable.', 'warning');
    }
};

const displayWordDetails = (word) => {
    const detailsBox = document.getElementById('details-container');
    if (!detailsBox) return;

    const syllables = getSyllableBreakdown(word.word);
    const isBookmarked = state.bookmarks.includes(word.id);
    const userNote = state.notes[word.id] || '';

    // Update bookmark icon in modal header
    const starBtn = document.getElementById('modal-star-btn');
    if (starBtn) {
        starBtn.innerHTML = `<i class="${isBookmarked ? 'fa-solid text-warning' : 'fa-regular text-white'} fa-star text-base"></i>`;
        starBtn.onclick = () => {
            toggleBookmark(word.id);
            displayWordDetails(word);
        };
    }

    // Set note input
    const noteInput = document.getElementById('word-note-input');
    if (noteInput) noteInput.value = userNote;

    detailsBox.innerHTML = `
        <div class="flex items-start justify-between border-b border-base-200 pb-3">
            <div>
                <h2 class="text-3xl font-extrabold text-base-content tracking-tight">${word.word}</h2>
                <div class="flex items-center gap-2 text-xs font-mono text-base-content/60 mt-0.5">
                    <span>${word.pronunciation ? `/${word.pronunciation}/` : ''}</span>
                    <span>•</span>
                    <span class="text-indigo-500 font-bold uppercase tracking-wider">${syllables}</span>
                </div>
            </div>
            <button onclick="pronounceWord('${word.word}')" class="btn btn-sm btn-circle btn-primary text-white" title="Pronounce word">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>

        <div class="space-y-3">
            <div>
                <h4 class="text-xs uppercase font-bold text-primary tracking-wider mb-1">Bengali Meaning (বাংলা অর্থ)</h4>
                <p class="text-xl font-bold font-bangla text-base-content bg-base-200/50 p-3 rounded-2xl border border-base-300">
                    ${word.meaning || 'N/A'}
                </p>
            </div>

            <div>
                <h4 class="text-xs uppercase font-bold text-primary tracking-wider mb-1">Example Sentence</h4>
                <p class="text-sm italic text-base-content/80 bg-base-200/50 p-3 rounded-2xl border border-base-300">
                    "${word.sentence || 'No example available.'}"
                </p>
            </div>

            <div>
                <h4 class="text-xs uppercase font-bold text-primary tracking-wider mb-1">Synonyms (সমার্থক শব্দ)</h4>
                <div class="flex flex-wrap gap-1">
                    ${(word.synonyms && word.synonyms.length) 
                        ? word.synonyms.map(s => `<span class="synonym-tag" onclick="quickSearchWord('${s}')">${s}</span>`).join('') 
                        : '<span class="text-xs text-base-content/50 italic">No synonyms available</span>'}
                </div>
            </div>
        </div>
    `;

    document.getElementById('word_modal').showModal();
    addXP(3);
};

function saveWordPersonalNote() {
    if (!state.activeModalWord) return;
    const input = document.getElementById('word-note-input');
    if (!input) return;

    const val = input.value.trim();
    if (val) {
        state.notes[state.activeModalWord.id] = val;
        showToast('Personal note saved!', 'success');
    } else {
        delete state.notes[state.activeModalWord.id];
        showToast('Note removed.', 'info');
    }
    localStorage.setItem('ej_notes', JSON.stringify(state.notes));
}

function copyCurrentWordToClipboard() {
    if (!state.activeModalWord) return;
    const w = state.activeModalWord;
    const text = `${w.word} [/${w.pronunciation}/]\nMeaning: ${w.meaning}\nExample: "${w.sentence}"\nLearned via English Janala`;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! 📋', 'success');
    });
}

// ==========================================================================
// 12. Mode Switcher (Browse, Flashcards, Quiz, Spelling, Memory)
// ==========================================================================

function switchAppMode(mode) {
    state.activeMode = mode;
    playAudioSfx('flip');

    // Hide all viewports
    document.getElementById('flashcards-arena')?.classList.add('hidden');
    document.getElementById('quiz-arena')?.classList.add('hidden');
    document.getElementById('spelling-arena')?.classList.add('hidden');
    document.getElementById('memory-arena')?.classList.add('hidden');
    document.getElementById('vocabulary-section')?.classList.add('hidden');

    // Update floating dock active state
    document.querySelectorAll('.dock-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`dock-btn-${mode}`)?.classList.add('active');

    if (mode === 'flashcards') {
        const el = document.getElementById('flashcards-arena');
        el?.classList.remove('hidden');
        startFlashcards();
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else if (mode === 'quiz') {
        const el = document.getElementById('quiz-arena');
        el?.classList.remove('hidden');
        startQuiz();
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else if (mode === 'spelling') {
        const el = document.getElementById('spelling-arena');
        el?.classList.remove('hidden');
        startSpelling();
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else if (mode === 'memory') {
        const el = document.getElementById('memory-arena');
        el?.classList.remove('hidden');
        initMemoryGame();
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else {
        const el = document.getElementById('vocabulary-section');
        el?.classList.remove('hidden');
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
}

// ==========================================================================
// 13. 3D Flashcards Mode Implementation
// ==========================================================================

async function getActiveWordPool() {
    if (state.currentWords.length > 0) return state.currentWords;
    if (state.allWords.length > 0) return state.allWords;
    if (typeof DEFAULT_VOCABULARY !== 'undefined' && DEFAULT_VOCABULARY.length > 0) {
        state.allWords = [...DEFAULT_VOCABULARY];
        state.currentWords = [...state.allWords];
        return state.allWords;
    }
    try {
        const res = await fetch(`${API_BASE}/words/all`);
        const json = await res.json();
        if (json && Array.isArray(json.data) && json.data.length > 0) {
            state.allWords = json.data;
            state.currentWords = [...state.allWords];
            return state.allWords;
        }
    } catch (e) {
        console.warn('Word pool fetch failed:', e);
    }
    return [];
}

async function startFlashcards() {
    const pool = await getActiveWordPool();
    if (!pool.length) {
        showToast('Please check your internet connection!', 'warning');
        return;
    }
    state.flashcards.list = [...pool];
    state.flashcards.index = 0;
    state.flashcards.flipped = false;
    renderCurrentFlashcard();
}

function flipFlashcard() {
    state.flashcards.flipped = !state.flashcards.flipped;
    playAudioSfx('flip');
    const cardEl = document.getElementById('flashcard-element');
    if (cardEl) {
        cardEl.classList.toggle('flipped', state.flashcards.flipped);
    }
}

function renderCurrentFlashcard() {
    const list = state.flashcards.list;
    const idx = state.flashcards.index;
    const word = list[idx];
    if (!word) return;

    state.flashcards.flipped = false;
    const cardEl = document.getElementById('flashcard-element');
    if (cardEl) cardEl.classList.remove('flipped');

    // Counter
    document.getElementById('fc-progress-counter').innerText = `Card ${idx + 1} of ${list.length}`;
    document.getElementById('fc-front-tag').innerText = `Word #${idx + 1}`;

    // Front content
    document.getElementById('fc-front-word').innerText = word.word || '';
    document.getElementById('fc-front-pronunciation').innerText = word.pronunciation ? `/${word.pronunciation}/` : '';
    document.getElementById('fc-syllables').innerText = getSyllableBreakdown(word.word);

    // Back content
    document.getElementById('fc-back-meaning').innerText = word.meaning || '';
    document.getElementById('fc-back-sentence').innerText = word.sentence || 'No example sentence.';

    const synonymsBox = document.getElementById('fc-back-synonyms');
    if (synonymsBox) {
        synonymsBox.innerHTML = (word.synonyms && word.synonyms.length)
            ? word.synonyms.map(s => `<span class="badge badge-sm badge-outline">${s}</span>`).join(' ')
            : '';
    }

    const isMastered = state.mastered.includes(word.id);
    document.getElementById('fc-back-status').innerText = isMastered ? 'Status: Mastered ✅' : 'Status: Learning 📖';
}

function nextFlashcard() {
    if (state.flashcards.index < state.flashcards.list.length - 1) {
        state.flashcards.index++;
    } else {
        state.flashcards.index = 0; // Wrap around
    }
    renderCurrentFlashcard();
}

function prevFlashcard() {
    if (state.flashcards.index > 0) {
        state.flashcards.index--;
    } else {
        state.flashcards.index = state.flashcards.list.length - 1;
    }
    renderCurrentFlashcard();
}

function shuffleFlashcards() {
    for (let i = state.flashcards.list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.flashcards.list[i], state.flashcards.list[j]] = [state.flashcards.list[j], state.flashcards.list[i]];
    }
    state.flashcards.index = 0;
    renderCurrentFlashcard();
    showToast('Flashcards shuffled! 🔀', 'info');
}

function pronounceCurrentFlashcard() {
    const word = state.flashcards.list[state.flashcards.index];
    if (word) pronounceWord(word.word);
}

function markFlashcardMastery(isKnown) {
    const word = state.flashcards.list[state.flashcards.index];
    if (!word) return;

    if (isKnown) {
        toggleMastered(word.id);
    } else {
        showToast('Marked for review 📝', 'info');
    }
    nextFlashcard();
}

// ==========================================================================
// 14. Quiz Arena Implementation
// ==========================================================================

async function startQuiz() {
    const pool = await getActiveWordPool();
    if (pool.length < 4) {
        showToast('Need at least 4 words to start a quiz!', 'warning');
        return;
    }

    // Generate 10 randomized quiz questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));

    state.quiz.questions = selected.map(target => {
        // Pick 3 wrong options
        const distractors = pool.filter(w => w.id !== target.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.meaning);

        const options = [...distractors, target.meaning].sort(() => 0.5 - Math.random());
        return {
            word: target.word,
            correct: target.meaning,
            options: options,
            id: target.id
        };
    });

    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;

    document.getElementById('quiz-question-box')?.classList.remove('hidden');
    document.getElementById('quiz-summary-box')?.classList.add('hidden');
    renderCurrentQuizQuestion();
}

function renderCurrentQuizQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q) return;

    state.quiz.answered = false;
    document.getElementById('quiz-question-badge').innerText = `Question ${state.quiz.currentIndex + 1} of ${state.quiz.questions.length}`;
    document.getElementById('quiz-score-display').innerText = `${state.quiz.score} / ${state.quiz.currentIndex}`;
    document.getElementById('quiz-question-word').innerText = q.word;

    const feedback = document.getElementById('quiz-feedback');
    if (feedback) {
        feedback.innerText = '';
        feedback.className = 'min-h-[44px] flex items-center justify-center text-sm font-semibold rounded-xl';
    }

    const container = document.getElementById('quiz-options-container');
    if (!container) return;
    container.innerHTML = '';

    q.options.forEach((optText) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline btn-lg w-full text-left justify-start font-bangla text-base rounded-2xl h-auto py-3.5 px-5';
        btn.innerText = optText;
        btn.onclick = () => handleQuizAnswer(optText, q.correct, btn);
        container.appendChild(btn);
    });
}

function handleQuizAnswer(selected, correct, clickedBtn) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;

    const feedback = document.getElementById('quiz-feedback');
    const allButtons = document.querySelectorAll('#quiz-options-container button');

    allButtons.forEach(btn => {
        if (btn.innerText === correct) {
            btn.className = 'btn btn-success text-white btn-lg w-full text-left justify-start font-bangla text-base rounded-2xl h-auto py-3.5 px-5';
        } else if (btn === clickedBtn) {
            btn.className = 'btn btn-error text-white btn-lg w-full text-left justify-start font-bangla text-base rounded-2xl h-auto py-3.5 px-5';
        }
    });

    if (selected === correct) {
        state.quiz.score++;
        playAudioSfx('correct');
        addXP(20);
        if (feedback) {
            feedback.innerText = '🎉 Correct Answer! (+20 XP)';
            feedback.className = 'min-h-[44px] flex items-center justify-center text-sm font-bold bg-success/15 text-success rounded-xl';
        }
    } else {
        playAudioSfx('wrong');
        if (feedback) {
            feedback.innerText = `❌ Incorrect. Correct was: ${correct}`;
            feedback.className = 'min-h-[44px] flex items-center justify-center text-sm font-bold bg-error/15 text-error rounded-xl';
        }
    }

    setTimeout(() => {
        if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
            state.quiz.currentIndex++;
            renderCurrentQuizQuestion();
        } else {
            finishQuiz();
        }
    }, 1500);
}

function finishQuiz() {
    document.getElementById('quiz-question-box')?.classList.add('hidden');
    document.getElementById('quiz-summary-box')?.classList.remove('hidden');

    const total = state.quiz.questions.length;
    const score = state.quiz.score;

    document.getElementById('quiz-final-score').innerText = score.toString();
    document.getElementById('quiz-total-questions').innerText = total.toString();
    document.getElementById('quiz-xp-awarded').innerText = `+${score * 20} XP Total Earned`;

    if (score === total) {
        launchConfetti(3000);
        playAudioSfx('fanfare');
        showToast('🌟 Perfect Score! You are a vocabulary master!', 'success');
    }
}

// ==========================================================================
// 15. Spelling Practice Game Implementation
// ==========================================================================

async function startSpelling() {
    const pool = await getActiveWordPool();
    if (!pool.length) {
        showToast('Please check your internet connection!', 'warning');
        return;
    }

    state.spelling.currentWord = pool[Math.floor(Math.random() * pool.length)];
    state.spelling.hintRevealed = false;

    document.getElementById('spelling-meaning-prompt').innerText = `বাংলা অর্থ: ${state.spelling.currentWord.meaning || ''}`;
    const input = document.getElementById('spelling-input');
    if (input) {
        input.value = '';
        input.focus();
    }
    const feedback = document.getElementById('spelling-feedback');
    if (feedback) {
        feedback.innerText = '';
        feedback.className = 'min-h-[40px] text-sm font-semibold flex items-center justify-center rounded-xl';
    }

    pronounceSpellingWord();
}

function pronounceSpellingWord() {
    if (state.spelling.currentWord) {
        pronounceWord(state.spelling.currentWord.word);
    }
}

function checkSpelling() {
    if (!state.spelling.currentWord) return;
    const input = document.getElementById('spelling-input');
    const typed = (input?.value || '').trim().toLowerCase();
    const target = state.spelling.currentWord.word.trim().toLowerCase();
    const feedback = document.getElementById('spelling-feedback');

    if (!typed) return;

    if (typed === target) {
        playAudioSfx('correct');
        addXP(25);
        if (feedback) {
            feedback.innerText = `🎉 Correct! Word: ${state.spelling.currentWord.word} (+25 XP)`;
            feedback.className = 'min-h-[40px] text-sm font-bold bg-success/15 text-success flex items-center justify-center rounded-xl';
        }
        setTimeout(startSpelling, 1500);
    } else {
        playAudioSfx('wrong');
        if (feedback) {
            feedback.innerText = `❌ Not quite right. Listen again or click "Hint"!`;
            feedback.className = 'min-h-[40px] text-sm font-bold bg-error/15 text-error flex items-center justify-center rounded-xl';
        }
    }
}

function revealSpellingHint() {
    if (!state.spelling.currentWord) return;
    const target = state.spelling.currentWord.word;
    const hint = target[0] + ' _ '.repeat(Math.max(1, target.length - 2)) + target[target.length - 1];
    showToast(`Hint: ${hint}`, 'info');
}

function nextSpellingWord() {
    startSpelling();
}

// ==========================================================================
// 16. Memory Matching Game Implementation
// ==========================================================================

async function initMemoryGame() {
    const pool = await getActiveWordPool();
    if (pool.length < 6) {
        showToast('Need at least 6 words to play Memory Match!', 'warning');
        return;
    }

    const picked = [...pool].sort(() => 0.5 - Math.random()).slice(0, 6);
    const tiles = [];

    picked.forEach(w => {
        tiles.push({ id: w.id, text: w.word, type: 'english' });
        tiles.push({ id: w.id, text: w.meaning, type: 'bengali' });
    });

    state.memory.cards = tiles.sort(() => 0.5 - Math.random());
    state.memory.selected = [];
    state.memory.matchedCount = 0;
    state.memory.moves = 0;
    state.memory.locked = false;

    document.getElementById('memory-moves').innerText = '0';
    document.getElementById('memory-matches').innerText = '0 / 6';

    const grid = document.getElementById('memory-grid');
    if (!grid) return;
    grid.innerHTML = '';

    state.memory.cards.forEach((card, idx) => {
        const el = document.createElement('div');
        el.className = 'memory-card bg-base-100 rounded-2xl p-3 border-2 border-base-300 shadow-sm flex items-center justify-center text-center font-bold text-sm select-none';
        el.dataset.index = idx.toString();
        el.dataset.id = card.id.toString();
        el.innerText = card.text;
        el.onclick = () => handleMemoryCardClick(idx, el);
        grid.appendChild(el);
    });
}

function handleMemoryCardClick(idx, el) {
    if (state.memory.locked) return;
    if (state.memory.selected.find(s => s.index === idx)) return;
    if (el.classList.contains('matched')) return;

    playAudioSfx('click');
    el.classList.add('selected');
    state.memory.selected.push({ index: idx, card: state.memory.cards[idx], el: el });

    if (state.memory.selected.length === 2) {
        state.memory.moves++;
        document.getElementById('memory-moves').innerText = state.memory.moves.toString();
        state.memory.locked = true;

        const [first, second] = state.memory.selected;
        if (first.card.id === second.card.id && first.card.type !== second.card.type) {
            // Match found!
            playAudioSfx('correct');
            first.el.classList.add('matched');
            second.el.classList.add('matched');
            state.memory.matchedCount++;
            document.getElementById('memory-matches').innerText = `${state.memory.matchedCount} / 6`;
            addXP(15);
            state.memory.selected = [];
            state.memory.locked = false;

            if (state.memory.matchedCount === 6) {
                launchConfetti(2500);
                playAudioSfx('fanfare');
                showToast(`🎉 Memory Match Complete in ${state.memory.moves} moves!`, 'success');
            }
        } else {
            // No match
            playAudioSfx('wrong');
            setTimeout(() => {
                first.el.classList.remove('selected');
                second.el.classList.remove('selected');
                state.memory.selected = [];
                state.memory.locked = false;
            }, 800);
        }
    }
}

// ==========================================================================
// 17. Search, Filtering & Sorting Controls
// ==========================================================================

function handleSearch() {
    const input = document.getElementById('input-search');
    const term = (input?.value || '').trim().toLowerCase();
    if (!term) return;

    // Save recent search
    if (!state.recentSearches.includes(term)) {
        state.recentSearches.unshift(term);
        state.recentSearches = state.recentSearches.slice(0, 5);
        localStorage.setItem('ej_recent_searches', JSON.stringify(state.recentSearches));
        renderRecentSearches();
    }

    manageSpinner(true);
    removeActiveClass();

    const pool = state.allWords.length ? state.allWords : state.currentWords;
    const filtered = pool.filter(w =>
        (w.word && w.word.toLowerCase().includes(term)) ||
        (w.meaning && w.meaning.toLowerCase().includes(term))
    );

    state.currentWords = filtered;
    renderWordsList(`Search: "${term}"`);
    showToast(`Found ${filtered.length} matching words`, 'info');
}

function quickSearchWord(term) {
    const input = document.getElementById('input-search');
    if (input) {
        input.value = term;
        handleSearch();
    }
    const modal = document.getElementById('word_modal');
    if (modal && modal.open) modal.close();
}

function clearSearchInput() {
    const input = document.getElementById('input-search');
    if (input) input.value = '';
    document.getElementById('clear-search-btn')?.classList.add('hidden');
    loadAllWords();
}

function renderRecentSearches() {
    const container = document.getElementById('recent-searches-container');
    const tagsBox = document.getElementById('recent-search-tags');
    if (!container || !tagsBox) return;

    if (!state.recentSearches.length) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    tagsBox.innerHTML = state.recentSearches.map(s => `
        <span onclick="quickSearchWord('${s}')" class="badge badge-sm badge-outline cursor-pointer hover:badge-primary">
            ${s}
        </span>
    `).join(' ');
}

function setSortMode(mode) {
    state.sortMode = mode;
    const labels = {
        default: 'Sort: Default',
        az: 'Sort: A - Z',
        za: 'Sort: Z - A',
        shortest: 'Sort: Shortest',
        longest: 'Sort: Longest'
    };
    document.getElementById('current-sort-label').innerText = labels[mode] || 'Sort: Default';
    renderWordsList(state.activeLessonId ? `Lesson ${state.activeLessonId}` : 'Browse');
    showToast(`Sorted by ${labels[mode]}`, 'info');
}

function setFilterMode(mode) {
    state.filterMode = mode;
    const labels = {
        all: 'Filter: All',
        easy: 'Filter: Easy',
        medium: 'Filter: Medium',
        hard: 'Filter: Hard',
        bookmarked: 'Filter: Bookmarked',
        mastered: 'Filter: Mastered'
    };
    document.getElementById('current-filter-label').innerText = labels[mode] || 'Filter: All';
    renderWordsList(state.activeLessonId ? `Lesson ${state.activeLessonId}` : 'Browse');
    showToast(`Filter applied: ${labels[mode]}`, 'info');
}

function toggleViewLayout(layout) {
    state.viewLayout = layout;
    localStorage.setItem('ej_view_layout', layout);
    document.getElementById('view-grid-btn')?.classList.toggle('btn-active', layout === 'grid');
    document.getElementById('view-list-btn')?.classList.toggle('btn-active', layout === 'list');
    renderWordsList(state.activeLessonId ? `Lesson ${state.activeLessonId}` : 'Browse');
}

// ==========================================================================
// 18. Word of the Day Logic
// ==========================================================================

function initWordOfTheDay() {
    if (!state.allWords.length) return;
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const w = state.allWords[dayOfYear % state.allWords.length];
    setWotdDisplay(w);
}

function randomizeWordOfTheDay() {
    if (!state.allWords.length) return;
    const w = state.allWords[Math.floor(Math.random() * state.allWords.length)];
    setWotdDisplay(w);
    playAudioSfx('flip');
}

function setWotdDisplay(word) {
    if (!word) return;
    document.getElementById('wotd-word').innerText = word.word || '';
    document.getElementById('wotd-pronunciation').innerText = word.pronunciation ? `/${word.pronunciation}/` : '';
    document.getElementById('wotd-meaning').innerText = word.meaning || '';

    const starBtn = document.getElementById('wotd-star-btn');
    if (starBtn) {
        const isStar = state.bookmarks.includes(word.id);
        starBtn.innerHTML = `<i class="${isStar ? 'fa-solid text-warning' : 'fa-regular'} fa-star text-base"></i>`;
    }
}

function toggleWotdBookmark() {
    const wordText = document.getElementById('wotd-word').innerText;
    const found = state.allWords.find(w => w.word === wordText);
    if (found) {
        toggleBookmark(found.id);
        setWotdDisplay(found);
    }
}

// ==========================================================================
// 19. Theme Engine & Offline Detection
// ==========================================================================

function initAppTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();
}

function toggleAppTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('ej_theme', state.theme);
    updateThemeIcon();
    showToast(`Switched to ${state.theme} mode`, 'info');
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className = state.theme === 'dark' ? 'fa-solid fa-sun text-base text-amber-400' : 'fa-solid fa-moon text-base';
    }
}

// Online / Offline Listeners
window.addEventListener('online', () => {
    document.getElementById('offline-banner')?.classList.add('hidden');
    showToast('Internet reconnected! 🌐', 'success');
});
window.addEventListener('offline', () => {
    document.getElementById('offline-banner')?.classList.remove('hidden');
    showToast('You are currently offline', 'warning');
});

// ==========================================================================
// 20. Keyboard Hotkeys & Event Listeners
// ==========================================================================

window.addEventListener('keydown', (e) => {
    // If inside an input or textarea, ignore single-letter navigation
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'Enter' && document.activeElement.id === 'input-search') {
            handleSearch();
        } else if (e.key === 'Enter' && document.activeElement.id === 'spelling-input') {
            checkSpelling();
        }
        return;
    }

    if (e.key === '/') {
        e.preventDefault();
        document.getElementById('input-search')?.focus();
    } else if (e.key === ' ' || e.code === 'Space') {
        if (state.activeMode === 'flashcards') {
            e.preventDefault();
            flipFlashcard();
        }
    } else if (e.key === 'ArrowRight' && state.activeMode === 'flashcards') {
        e.preventDefault();
        nextFlashcard();
    } else if (e.key === 'ArrowLeft' && state.activeMode === 'flashcards') {
        e.preventDefault();
        prevFlashcard();
    } else if (e.key === 't' || e.key === 'T') {
        toggleAppTheme();
    } else if (e.key === '?') {
        document.getElementById('shortcuts_modal')?.showModal();
    }
});

// Search input debounce & clear button indicator
document.getElementById('input-search')?.addEventListener('input', (e) => {
    const hasVal = e.target.value.trim().length > 0;
    document.getElementById('clear-search-btn')?.classList.toggle('hidden', !hasVal);
});

document.getElementById('btn-search')?.addEventListener('click', handleSearch);

// Back to top scroll listener
window.addEventListener('scroll', () => {
    const btn = document.getElementById('btn-back-to-top');
    if (btn) {
        btn.classList.toggle('visible', window.scrollY > 350);
    }
});

document.getElementById('btn-back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================================================
// 21. App Startup Execution
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initAppTheme();
    checkDailyStreak();
    renderDailyGoalUI();
    updateBookmarkBadge();
    addXP(0);
    renderRecentSearches();
    loadLessons();
});
