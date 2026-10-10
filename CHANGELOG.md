# 📜 Changelog

All notable changes to **English Janala** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-10-10 - *The Ultimate Vocabulary Suite*

### 🌟 Major Additions (60+ New Features)
- **Interactive Flashcards Mode:** 3D flip card learning system with front/back flip animations, keyboard navigation, shuffle, and mark as known/needs review.
- **Multiple-Choice Quiz Arena:** 10-question dynamic quiz generated from lessons, with optional countdown timer, scoring, and review breakdown.
- **Spelling & Typing Practice Game:** Listen to the word, check the Bengali meaning hint, and test your exact spelling with instant feedback.
- **Memory Word-Match Game:** Interactive tile matching game linking English words with their corresponding Bengali meanings.
- **Voice Pronunciation Practice:** Record your voice using the Web Speech Recognition API and compare accuracy with the target word.
- **Daily Streak Tracker:** Consecutive day study tracking with motivational streak flame and localStorage persistence.
- **Daily Learning Goal Ring:** Configurable daily target (5, 10, 15, or 20 words/day) with real-time percentage progress.
- **XP & Leveling System:** Earn XP points for learning words and completing quizzes; progress from Beginner to Vocabulary Master.
- **Favorites & Bookmarks:** Star any word to store in a dedicated Bookmarked list with badge counter.
- **Personal Notes on Words:** Write custom notes and memory mnemonics per word, saved automatically to localStorage.
- **Mark as Mastered:** Checkmark learned words to track your overall vocabulary mastery rate.
- **Dark Mode / Light Mode Theme Engine:** Modern theme switcher supporting custom palette and OS `prefers-color-scheme`.
- **Audio Speed & Accent Controls:** Change speech rate (0.6x Slow, 0.85x Normal, 1.0x Fast) and switch between US and UK accents.
- **Pronunciation Repeater (Loop 2x/3x):** Practice listening comprehension by hearing the word repeated automatically.
- **Bilingual Live Search:** Instant search filter supporting both English words and Bengali meanings with debouncing.
- **Search Keyword Highlighting:** Matched search keywords automatically highlighted in cards.
- **Recent Searches History:** Quick search tag pills for rapid access to previous searches.
- **Sorting Engine:** Sort current word list A-Z, Z-A, or by word length/difficulty.
- **Difficulty Categorization:** Badges for Easy, Medium, and Hard words.
- **Grid View vs Compact List View:** Toggle between rich responsive cards and sleek single-line table view.
- **Audio SFX Synthesis:** Pure Web Audio API chimes for correct answers, soft clicks for flips, and level fanfare (zero external audio files).
- **Celebration Confetti:** Canvas-based particle explosion on quiz completion or streak milestones.
- **Floating Learning Dock:** Quick-navigation floating bar to jump between Browse, Flashcards, Quiz, Spelling, and Bookmarks.
- **Interactive Toast Notification System:** Modern non-intrusive toasts for copy, bookmark, mode switch, and export actions.
- **Word Syllable Breakdown:** Helps Bengali speakers break down tricky words syllable-by-syllable.
- **Export & Import Vocabulary:** Export favorites to JSON/CSV for Anki import or print-friendly study sheets.
- **Print / PDF Study Sheet Layout:** Clean print CSS styles for generating offline vocabulary cheat sheets.
- **Keyboard Shortcuts (Hotkeys):** Space to listen/flip, `/` to focus search, `f` to favorite, `Esc` to close modal, `?` for cheatsheet.
- **Session Study Timer:** Unobtrusive tracker measuring active study minutes in the current session.
- **Offline Network Detection:** Live banner notification when internet connection drops and recovers.
- **PWA Web App Manifest:** Standalone web app installation support via `manifest.json`.
- **GitHub Community Standards:** Added Issue Templates, PR Template, GitHub Actions CI/CD workflow, and conventional commits.

---

## [1.1.0] - 2026-10-10
### Fixed
- Fixed unlayered `margin: 0` CSS cascade bug restoring automatic container centering (`mx-auto`).
- Fixed hero section container constraint on wide screens.
- Upgraded to Font Awesome 6.6.0 for crisp icon rendering.
- Added "All Words" viewing mode across all 7 lessons.

---

## [1.0.0] - 2026-10-09
### Initial Release
- Basic lesson browsing via Programming Hero vocabulary API.
- Word detail modal and text-to-speech pronunciation.
- Search functionality and responsive layout.
