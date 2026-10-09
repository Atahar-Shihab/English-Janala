/**
 * ================================================
 * English Janala — Application Logic
 * ================================================
 *
 * This file handles all dynamic behavior for the English Janala
 * vocabulary learning platform, including:
 * - Fetching & displaying lessons from the API
 * - Loading & rendering vocabulary cards
 * - Word detail modal with pronunciation
 * - Search functionality
 * - Back-to-top button
 * - Text-to-speech pronunciation
 *
 * @author Atahar Shihab
 * @see https://github.com/Atahar-Shihab/English-Janala
 * ================================================
 */

// ================================================
// State Guards
// ================================================

/** @type {boolean} Prevents double-clicking lesson buttons */
let isLoading = false;

// ================================================
// API Base URL
// ================================================

/** @type {string} Base URL for the Programming Hero vocabulary API */
const API_BASE = 'https://openapi.programming-hero.com/api';

// ================================================
// Utility Functions
// ================================================

/**
 * Creates HTML elements for synonym tags.
 * @param {string[]} synonyms - Array of synonym words
 * @returns {string} HTML string of synonym tag elements
 */
const createSynonymElements = (synonyms) => {
    if (!synonyms || synonyms.length === 0) {
        return '<span class="text-gray-400 italic">No synonyms available</span>';
    }
    return synonyms
        .map((item) => `<span class="synonym-tag">${item}</span>`)
        .join(' ');
};

/**
 * Pronounces a word using the Web Speech API.
 * @param {string} word - The word to pronounce
 */
function pronounceWord(word) {
    if (!word) return;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// ================================================
// Spinner Management
// ================================================

/**
 * Shows or hides the loading spinner and vocabulary container.
 * @param {boolean} show - true to show spinner, false to hide
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

// ================================================
// Lesson Loading & Display
// ================================================

/**
 * Fetches all available lessons from the API and renders them.
 * Uses async/await with error handling.
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
            <div class="text-center text-red-500 py-8">
                <i class="fa-solid fa-triangle-exclamation text-3xl mb-2"></i>
                <p class="font-semibold">Failed to load lessons. Please check your internet connection and try again.</p>
            </div>
        `;
    }
};

/**
 * Renders lesson buttons into the level container.
 * @param {Object[]} lessons - Array of lesson objects from the API
 */
const displayLessons = (lessons) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    for (const lesson of lessons) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button
                id="lesson-${lesson.level_no}"
                onclick="loadLevelWord(${lesson.level_no})"
                class="btn btn-soft btn-primary lesson-btn"
            >
                <img src="./assets/fa-book-open.png" alt="Lesson Icon" class="w-4 h-4">
                Lesson-${lesson.level_no}
            </button>
        `;
        levelContainer.appendChild(btnDiv);
    }
};

// ================================================
// Active Lesson Management
// ================================================

/**
 * Removes the active styling from all lesson buttons.
 */
const removeActiveClass = () => {
    const lessonBtns = document.querySelectorAll('.lesson-btn');
    lessonBtns.forEach((btn) => btn.classList.remove('btn-active'));
};

// ================================================
// Level Words Loading & Display
// ================================================

/**
 * Fetches and displays vocabulary words for a specific lesson.
 * Includes a loading guard to prevent double-clicking.
 * @param {number} id - The lesson/level ID
 */
const loadLevelWord = async (id) => {
    // Guard against double-clicks
    if (isLoading) return;
    isLoading = true;

    manageSpinner(true);

    try {
        const res = await fetch(`${API_BASE}/level/${id}`);
        const data = await res.json();

        removeActiveClass();
        const clickBtn = document.getElementById(`lesson-${id}`);
        if (clickBtn) {
            clickBtn.classList.add('btn-active');
        }

        displayLevelWord(data.data);
    } catch (error) {
        console.error(`Failed to load words for lesson ${id}:`, error);
        manageSpinner(false);
        const wordContainer = document.getElementById('word-container');
        wordContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <i class="fa-solid fa-triangle-exclamation text-red-400 text-4xl mb-3"></i>
                <p class="text-red-500 font-semibold text-lg">Failed to load vocabulary. Please try again.</p>
            </div>
        `;
    } finally {
        isLoading = false;
    }
};

/**
 * Renders vocabulary word cards into the word container.
 * Shows an empty state message if no words are available.
 * @param {Object[]} words - Array of word objects from the API
 */
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    // Handle empty vocabulary
    if (!words || words.length === 0) {
        wordContainer.innerHTML = `
            <div class="font-bangla bg-white rounded-xl col-span-full shadow-sm text-center py-10 px-5 space-y-4 card-animate">
                <img class="mx-auto w-16 h-16" src="./assets/alert-error.png" alt="No words found">
                <p class="font-semibold text-lg text-gray-500">
                    এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
                </p>
                <h2 class="font-bold text-2xl">নেক্সট Lesson এ যান</h2>
            </div>
        `;
        manageSpinner(false);
        return;
    }

    // Word count badge
    const countDiv = document.createElement('div');
    countDiv.classList.add('col-span-full', 'text-center', 'mb-2');
    countDiv.innerHTML = `
        <span class="word-count-badge">
            <i class="fa-solid fa-list-ol"></i>
            ${words.length} word${words.length !== 1 ? 's' : ''} found
        </span>
    `;
    wordContainer.appendChild(countDiv);

    // Render each word card with staggered animation
    words.forEach((word, index) => {
        const card = document.createElement('article');
        card.classList.add('word-card', 'card-animate');
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 border border-gray-100">
                <h2 class="font-bold text-2xl text-gray-800">
                    ${word.word || 'No word found'}
                </h2>
                <p class="font-semibold text-gray-500 text-sm uppercase tracking-wider">
                    Meaning / Pronunciation
                </p>
                <div class="text-xl font-medium font-bangla text-gray-700">
                    "${word.meaning || 'No meaning available'} / ${word.pronunciation || 'N/A'}"
                </div>

                <div class="flex justify-between items-center pt-2">
                    <button
                        onclick="loadWordDetail(${word.id})"
                        class="btn btn-primary btn-sm btn-hover-lift"
                        title="View details"
                        aria-label="View word details"
                    >
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                        class="btn btn-primary btn-sm btn-hover-lift"
                        onclick="pronounceWord('${word.word}')"
                        title="Hear pronunciation"
                        aria-label="Pronounce word"
                    >
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
            </div>
        `;

        wordContainer.appendChild(card);
    });

    manageSpinner(false);
};

// ================================================
// Word Detail Modal
// ================================================

/**
 * Fetches detailed information about a specific word and opens the modal.
 * @param {number} id - The word ID
 */
const loadWordDetail = async (id) => {
    try {
        const res = await fetch(`${API_BASE}/word/${id}`);
        const details = await res.json();
        displayWordDetails(details.data);
    } catch (error) {
        console.error(`Failed to load word detail for ID ${id}:`, error);
        alert('Failed to load word details. Please try again.');
    }
};

/**
 * Renders word details inside the modal and opens it.
 * @param {Object} word - The word detail object from the API
 */
const displayWordDetails = (word) => {
    const detailsBox = document.getElementById('details-container');

    detailsBox.innerHTML = `
        <div>
            <h2 class="text-2xl font-bold text-gray-800">
                ${word.word}
                <button onclick="pronounceWord('${word.word}')" class="btn btn-ghost btn-sm ml-2" title="Pronounce" aria-label="Pronounce word">
                    <i class="fa-solid fa-microphone-lines" style="color: #7249eb;"></i>
                </button>
                <span class="text-lg text-gray-500 font-normal">${word.pronunciation || ''}</span>
            </h2>
        </div>
        <div>
            <h3 class="font-bold text-gray-700">
                <i class="fa-solid fa-language text-blue-500 mr-1"></i> Meaning
            </h3>
            <p class="text-gray-600 mt-1">${word.meaning || 'No meaning available.'}</p>
        </div>
        <div>
            <h3 class="font-bold text-gray-700">
                <i class="fa-solid fa-pen-fancy text-purple-500 mr-1"></i> Example
            </h3>
            <p class="text-gray-600 mt-1 italic">"${word.sentence || 'No example available.'}"</p>
        </div>
        <div>
            <h3 class="font-bold text-gray-700 mb-2">
                <i class="fa-solid fa-tags text-green-500 mr-1"></i> Synonyms
            </h3>
            <div class="flex flex-wrap gap-1">
                ${createSynonymElements(word.synonyms)}
            </div>
        </div>
    `;

    document.getElementById('word_modal').showModal();
};

// ================================================
// Search Functionality
// ================================================

/**
 * Handles vocabulary search by filtering all words from the API.
 */
const handleSearch = async () => {
    const searchInput = document.getElementById('input-search').value.trim().toLowerCase();

    if (!searchInput) {
        alert('Please enter a word to search.');
        return;
    }

    manageSpinner(true);
    removeActiveClass();

    try {
        const res = await fetch(`${API_BASE}/words/all`);
        const data = await res.json();
        const allWords = data.data;
        const filteredWords = allWords.filter((word) =>
            word.word.toLowerCase().includes(searchInput)
        );
        displayLevelWord(filteredWords);
    } catch (error) {
        console.error('Search failed:', error);
        manageSpinner(false);
        alert('Search failed. Please check your internet connection and try again.');
    }
};

// ================================================
// Back to Top Button
// ================================================

/**
 * Initializes the back-to-top button behavior.
 * Shows the button when the user scrolls past 400px.
 */
const initBackToTop = () => {
    const btn = document.getElementById('btn-back-to-top');
    if (!btn) return;

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // Smooth scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// ================================================
// Event Listeners & Initialization
// ================================================

// Search button click
document.getElementById('btn-search').addEventListener('click', handleSearch);

// Enter key support for search input
document.getElementById('input-search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch();
    }
});

// Initialize back-to-top button
initBackToTop();

// Load lessons on page load
loadLessons();
