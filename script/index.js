/**
 * ================================================
 * English Janala — Application Logic
 * ================================================
 *
 * Handles API interactions, dynamic UI rendering,
 * word search, text-to-speech pronunciation, and modals.
 *
 * @author Atahar Shihab
 * @see https://github.com/Atahar-Shihab/English-Janala
 * ================================================
 */

// State guard to prevent spamming button clicks
let isFetching = false;

// Base API URL
const API_BASE = 'https://openapi.programming-hero.com/api';

/**
 * Creates HTML elements for word synonyms
 * @param {string[]} synonyms
 * @returns {string} HTML string
 */
const createSynonymElements = (synonyms) => {
    if (!synonyms || synonyms.length === 0) {
        return '<span class="text-xs text-base-content/50 italic">No synonyms available</span>';
    }
    return synonyms
        .map((item) => `<span class="synonym-tag">${item}</span>`)
        .join(' ');
};

/**
 * Pronounces a word using the Web Speech API
 * @param {string} word - English word to speak
 */
function pronounceWord(word) {
    if (!word) return;
    window.speechSynthesis.cancel(); // Stop any currently playing audio
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
}

/**
 * Toggles the loading spinner visibility
 * @param {boolean} show
 */
const manageSpinner = (show) => {
    const spinner = document.getElementById('spinner');
    const wordContainer = document.getElementById('word-container');

    if (show) {
        spinner.classList.remove('hidden');
        wordContainer.classList.add('hidden');
    } else {
        spinner.classList.add('hidden');
        wordContainer.classList.remove('hidden');
    }
};

/**
 * Removes active styling from all lesson buttons
 */
const removeActiveClass = () => {
    const lessonBtns = document.querySelectorAll('.lesson-btn');
    lessonBtns.forEach((btn) => btn.classList.remove('btn-active'));
};

/**
 * Fetches all available lessons from the API
 */
const loadLessons = async () => {
    try {
        const res = await fetch(`${API_BASE}/levels/all`);
        const data = await res.json();
        displayLessons(data.data);
    } catch (error) {
        console.error('Failed to load lessons:', error);
        const levelContainer = document.getElementById('level-container');
        levelContainer.innerHTML = `
            <div class="text-center text-error py-4">
                <i class="fa-solid fa-circle-exclamation text-2xl mb-1"></i>
                <p class="text-sm font-semibold">Failed to load lessons. Please check your internet connection.</p>
            </div>
        `;
    }
};

/**
 * Displays lesson buttons dynamically
 * @param {Object[]} lessons
 */
const displayLessons = (lessons) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    // "All Words" button for comprehensive practice
    const allBtnDiv = document.createElement('div');
    allBtnDiv.innerHTML = `
        <button
            id="lesson-all"
            onclick="loadAllWords()"
            class="btn btn-sm btn-outline btn-primary lesson-btn gap-2 rounded-xl"
        >
            <i class="fa-solid fa-layer-group"></i> All Words
        </button>
    `;
    levelContainer.appendChild(allBtnDiv);

    // Individual lesson buttons
    for (const lesson of lessons) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button
                id="lesson-${lesson.level_no}"
                onclick="loadLevelWord(${lesson.level_no})"
                class="btn btn-sm btn-outline btn-primary lesson-btn gap-2 rounded-xl"
            >
                <i class="fa-solid fa-book"></i> Lesson-${lesson.level_no}
            </button>
        `;
        levelContainer.appendChild(btnDiv);
    }
};

/**
 * Loads vocabulary words for a specific lesson
 * @param {number} id - Lesson ID
 */
const loadLevelWord = async (id) => {
    if (isFetching) return;
    isFetching = true;

    manageSpinner(true);

    try {
        const res = await fetch(`${API_BASE}/level/${id}`);
        const data = await res.json();

        removeActiveClass();
        const activeBtn = document.getElementById(`lesson-${id}`);
        if (activeBtn) {
            activeBtn.classList.add('btn-active');
        }

        displayLevelWord(data.data, `Lesson ${id}`);
    } catch (error) {
        console.error(`Failed to load words for lesson ${id}:`, error);
        manageSpinner(false);
        const wordContainer = document.getElementById('word-container');
        wordContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <i class="fa-solid fa-circle-exclamation text-error text-3xl mb-2"></i>
                <p class="text-error font-medium">Failed to load words for Lesson ${id}. Please try again.</p>
            </div>
        `;
    } finally {
        isFetching = false;
    }
};

/**
 * Loads all words across all lessons
 */
const loadAllWords = async () => {
    if (isFetching) return;
    isFetching = true;

    manageSpinner(true);

    try {
        const res = await fetch(`${API_BASE}/words/all`);
        const data = await res.json();

        removeActiveClass();
        const allBtn = document.getElementById('lesson-all');
        if (allBtn) {
            allBtn.classList.add('btn-active');
        }

        displayLevelWord(data.data, 'All Lessons');
    } catch (error) {
        console.error('Failed to load all words:', error);
        manageSpinner(false);
    } finally {
        isFetching = false;
    }
};

/**
 * Renders vocabulary cards into the word container
 * @param {Object[]} words - Words array
 * @param {string} sourceName - Optional context title
 */
const displayLevelWord = (words, sourceName = '') => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    // Handle empty word list
    if (!words || words.length === 0) {
        wordContainer.innerHTML = `
            <div class="font-bangla bg-base-100 rounded-2xl col-span-full shadow-sm text-center py-12 px-6 space-y-4 border border-base-300">
                <img class="mx-auto w-16 h-16 opacity-80" src="./assets/alert-error.png" alt="No words found">
                <p class="font-semibold text-lg text-base-content/70">
                    এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
                </p>
                <h3 class="font-bold text-2xl text-base-content">নেক্সট Lesson এ যান</h3>
            </div>
        `;
        manageSpinner(false);
        return;
    }

    // Top status indicator badge
    const countDiv = document.createElement('div');
    countDiv.classList.add('col-span-full', 'flex', 'justify-between', 'items-center', 'mb-2');
    countDiv.innerHTML = `
        <span class="text-sm font-semibold text-base-content/70 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-primary"></i> ${sourceName ? `${sourceName} • ` : ''}${words.length} Words Found
        </span>
        <span class="text-xs text-base-content/50">Click "Listen" to hear pronunciation</span>
    `;
    wordContainer.appendChild(countDiv);

    // Render individual word cards
    words.forEach((word) => {
        const card = document.createElement('article');
        card.classList.add('word-card', 'bg-base-100', 'rounded-2xl', 'p-6', 'shadow-sm', 'border', 'border-base-300', 'flex', 'flex-col', 'justify-between');

        card.innerHTML = `
            <div>
                <div class="flex items-start justify-between gap-2 mb-2">
                    <h3 class="text-2xl font-bold text-base-content tracking-tight">
                        ${word.word || 'N/A'}
                    </h3>
                    <span class="badge badge-sm badge-ghost text-xs text-base-content/60 font-mono">
                        ${word.pronunciation ? `/${word.pronunciation}/` : ''}
                    </span>
                </div>

                <div class="py-2">
                    <p class="text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                        Meaning (অর্থ)
                    </p>
                    <p class="text-lg font-medium font-bangla text-base-content/90">
                        ${word.meaning || 'কোনো অর্থ পাওয়া যায়নি'}
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-between pt-4 mt-4 border-t border-base-200">
                <button
                    onclick="loadWordDetail(${word.id})"
                    class="btn btn-sm btn-outline btn-primary gap-1.5 rounded-lg"
                    title="View details"
                    aria-label="View word details"
                >
                    <i class="fa-solid fa-circle-info"></i> Details
                </button>
                <button
                    class="btn btn-sm btn-primary text-white gap-1.5 rounded-lg shadow-sm"
                    onclick="pronounceWord('${word.word}')"
                    title="Hear pronunciation"
                    aria-label="Pronounce word"
                >
                    <i class="fa-solid fa-volume-high"></i> Listen
                </button>
            </div>
        `;

        wordContainer.appendChild(card);
    });

    manageSpinner(false);
};

/**
 * Loads word details from the API and opens the modal
 * @param {number} id - Word ID
 */
const loadWordDetail = async (id) => {
    try {
        const res = await fetch(`${API_BASE}/word/${id}`);
        const details = await res.json();
        displayWordDetails(details.data);
    } catch (error) {
        console.error(`Failed to load details for word ${id}:`, error);
        alert('Could not load word details. Please try again.');
    }
};

/**
 * Renders modal content for a word
 * @param {Object} word
 */
const displayWordDetails = (word) => {
    const detailsBox = document.getElementById('details-container');

    detailsBox.innerHTML = `
        <div class="pb-3 border-b border-base-200">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-extrabold text-base-content">
                    ${word.word}
                </h3>
                <button
                    onclick="pronounceWord('${word.word}')"
                    class="btn btn-sm btn-circle btn-primary text-white"
                    title="Listen to pronunciation"
                >
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <p class="text-sm text-base-content/60 font-mono mt-0.5">
                ${word.pronunciation ? `Pronunciation: /${word.pronunciation}/` : ''}
            </p>
        </div>

        <div>
            <h4 class="text-xs uppercase font-bold tracking-wider text-primary mb-1">
                <i class="fa-solid fa-language mr-1"></i> Bengali Meaning (বাংলা অর্থ)
            </h4>
            <p class="text-base font-medium font-bangla text-base-content bg-base-200/50 p-3 rounded-xl border border-base-300">
                ${word.meaning || 'কোনো অর্থ পাওয়া যায়নি'}
            </p>
        </div>

        <div>
            <h4 class="text-xs uppercase font-bold tracking-wider text-primary mb-1">
                <i class="fa-solid fa-quote-left mr-1"></i> Example Sentence
            </h4>
            <p class="text-sm italic text-base-content/80 bg-base-200/50 p-3 rounded-xl border border-base-300">
                "${word.sentence || 'No example sentence available.'}"
            </p>
        </div>

        <div>
            <h4 class="text-xs uppercase font-bold tracking-wider text-primary mb-2">
                <i class="fa-solid fa-tags mr-1"></i> Synonyms
            </h4>
            <div class="flex flex-wrap gap-1">
                ${createSynonymElements(word.synonyms)}
            </div>
        </div>
    `;

    document.getElementById('word_modal').showModal();
};

/**
 * Handles search query execution
 */
const handleSearch = async () => {
    const searchInput = document.getElementById('input-search').value.trim().toLowerCase();

    if (!searchInput) {
        alert('Please type a word to search.');
        return;
    }

    manageSpinner(true);
    removeActiveClass();

    try {
        const res = await fetch(`${API_BASE}/words/all`);
        const data = await res.json();
        const allWords = data.data || [];
        const filteredWords = allWords.filter((w) =>
            w.word && w.word.toLowerCase().includes(searchInput)
        );

        displayLevelWord(filteredWords, `Search: "${searchInput}"`);
    } catch (error) {
        console.error('Search failed:', error);
        manageSpinner(false);
        alert('Search failed. Please check your internet connection.');
    }
};

/**
 * Initializes back-to-top scroll behavior
 */
const initBackToTop = () => {
    const btn = document.getElementById('btn-back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// ================================================
// Event Listeners & Startup
// ================================================

// Search button click
document.getElementById('btn-search').addEventListener('click', handleSearch);

// Search input Enter key
document.getElementById('input-search').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
    }
});

// Setup back-to-top
initBackToTop();

// Fetch initial lessons
loadLessons();
