<div align="center">
  <img src="./assets/logo.png" alt="English Janala Logo" width="160" />
  
  # English Janala — The Ultimate Vocabulary Suite

  *Open the window to mastering English vocabulary with 3D flashcards, quizzes, spelling tests, and audio pronunciation.*

  [![GitHub stars](https://img.shields.io/github/stars/Atahar-Shihab/English-Janala?style=for-the-badge&color=yellow)](https://github.com/Atahar-Shihab/English-Janala/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/Atahar-Shihab/English-Janala?style=for-the-badge&color=orange)](https://github.com/Atahar-Shihab/English-Janala/network/members)
  [![GitHub license](https://img.shields.io/github/license/Atahar-Shihab/English-Janala?style=for-the-badge&color=blue)](https://github.com/Atahar-Shihab/English-Janala/blob/main/LICENSE)
  [![GitHub release](https://img.shields.io/badge/release-v2.0.0-indigo?style=for-the-badge)](https://github.com/Atahar-Shihab/English-Janala/releases)
  [![GitHub repo size](https://img.shields.io/github/repo-size/Atahar-Shihab/English-Janala?style=for-the-badge&color=ff69b4)](https://github.com/Atahar-Shihab/English-Janala)

  [**🚀 Live Application: atahar-shihab.github.io/English-Janala**](https://atahar-shihab.github.io/English-Janala/)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [60+ Interactive Features](#-60-interactive-features)
- [Learning Modes](#-learning-modes)
- [Built With](#-built-with)
- [Getting Started](#-getting-started)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Project Architecture](#-project-architecture)
- [API Reference](#-api-reference)
- [Professional GitHub Workflow & Achievements](#-professional-github-workflow--achievements)
- [Contributing](#-contributing)
- [Changelog](#-changelog)
- [License & Acknowledgements](#-license--acknowledgements)

---

## 📖 About the Project

**English Janala** (বাংলা: *ইংরেজি জানালা* — "The Window to English") is an interactive, gamified vocabulary learning suite crafted specifically for **Bengali-speaking learners**. 

Traditional rote memorization frequently falls short because words lack auditory cues, phonetic breakdown, context sentences, and spaced retention practice. English Janala bridges this gap by delivering **170+ structured vocabulary words across 7 progressive lessons** complemented with:

1. **Native Text-to-Speech audio pronunciations** with adjustable playback rates (0.65x slow, 0.85x normal, 1.0x fast) and accent switches (US / UK).
2. **Bengali phonetic approximations** (e.g. `/ইগার/`, `/সিনসিয়ার/`) plus syllable breakdowns (`ea • ger`).
3. **Four immersive learning modes**: Interactive 3D Flashcards, Multiple-Choice Quiz Arena, Spelling & Typing Test, and Memory Tile Matching.
4. **Motivational study tracking**: Daily consecutive streaks, configurable daily goals, personal bookmarks, custom mnemonics/notes, and an XP leveling system.

---

## ✨ 60+ Interactive Features

### 🃏 1. Interactive Learning Modes & Games
1. **3D Interactive Flashcards:** Realistic CSS 3D flip card effect showing English word on the front, Bengali meaning and example on the back.
2. **Flashcard Keyboard Navigation:** Flip with `Space`, navigate next/prev with `Arrow` keys.
3. **Flashcard Mastery Toggles:** Mark cards as *Known* (adds to Mastered) or *Review* with a single click.
4. **Dynamic Card Shuffling:** Randomize flashcard deck order anytime.
5. **Multiple-Choice Quiz Arena:** 10-question adaptive quiz generated dynamically from lessons.
6. **Real-time Quiz Feedback:** Instant visual indicators and synthesized audio feedback for correct and wrong answers.
7. **Comprehensive Quiz Scorecards:** End-of-quiz breakdown with percentage scores, review list, and XP bonus.
8. **Spelling & Typing Practice Game:** Listen to audio prompts and Bengali meanings, then type the exact spelling.
9. **Interactive Spelling Hint Revealer:** Reveals first and last letters with placeholders on demand.
10. **Memory Word-Match Game:** Interactive 12-tile grid to match English vocabulary with corresponding Bengali definitions.

### 🔊 2. Audio, Pronunciation & Web Audio API
11. **Native Text-to-Speech (TTS):** Crystal-clear speech output powered by the browser Web Speech API.
12. **Accent Dialect Selector:** Switch between **US English (en-US)** and **UK English (en-GB)**.
13. **Audio Playback Speed Slider:** Toggle between Slow (0.65x for beginners), Normal (0.85x), and Fast (1.0x).
14. **Audio Pronunciation Repeater:** Configurable automatic playback loops (1x, 2x, or 3x repetitions).
15. **Synthesized Audio Sound Effects:** Zero external audio files! Melodic chimes, gentle thuds, and fanfare generated via pure **Web Audio API**.
16. **Audio Sound Effects Mute Toggle:** Easily enable or disable sound effects in settings.
17. **Bengali Phonetic Pronunciation Guide:** Accurate Bengali transliteration on every card and modal.

### 🎮 3. Gamification, Streaks & Progress
18. **Daily Study Streak Flame:** Consecutive day tracker stored in `localStorage` with motivational flame indicator.
19. **XP & Leveling System:** Earn XP points for learning words (+5 XP), bookmarking (+5 XP), mastering (+15 XP), and completing quizzes (+20 XP).
20. **Configurable Daily Study Goal:** Set your daily word target (e.g., 5, 10, 20 words/day) with instant progress bar.
21. **Active Session Study Timer:** Tracks active learning minutes and seconds during your current session.
22. **Canvas Particle Confetti Celebrations:** Zero-dependency confetti particle explosions upon quiz completion and milestone goals.
23. **Word Mastery Badges:** Mark words as *Mastered* to see verified checkmarks and track overall acquisition.

### ⭐ 4. Bookmarks, Notes & Customization
24. **One-Click Word Bookmarking:** Star any word to save it into your personal review collection.
25. **Bookmark Filter & Counter Badge:** Live count of saved words with one-click filtering.
26. **Personal Study Notes (Mnemonics):** Add your own study notes and memory tricks directly inside any word modal.
27. **JSON Bookmarks Exporter:** Export your saved vocabulary list for Anki or offline study.
28. **Plain Text Word List Exporter:** Download any active lesson as a structured `.txt` list.
29. **Print / PDF Study Sheet Formatter:** Clean `@media print` styling for printing clean vocabulary cheat sheets.
30. **Reset Study Progress Safely:** Option to reset learning statistics with confirmation safeguards.

### 🔍 5. Search, Filter & Sorters
31. **Bilingual Real-Time Search:** Search seamlessly by English spelling OR Bengali meaning text.
32. **Search Term Highlighting:** Matched keywords clearly highlighted in search results.
33. **Recent Search History:** Tag pills showing your last 5 searched words for instant re-queries.
34. **Alphabetical Sorting (A to Z & Z to A):** Reorder words alphabetically on demand.
35. **Difficulty / Length Sorting:** Sort by word length from shortest to longest.
36. **Difficulty Level Badges:** Automatically categorized into **Easy** (≤5 letters), **Medium** (6-8 letters), and **Hard** (9+ letters).
37. **Grid View vs Compact List View:** Switch between responsive 3-column cards and space-efficient table rows.
38. **"All Words" Master View:** Access all 170+ words across lessons in a single view.
39. **Syllable Breakdown Display:** Visual breakdown (e.g., `ea • ger`, `se • ren • dip • i • ty`) aiding Bengali learners.

### 🎨 6. UI, Themes & Accessibility
40. **Dark Mode / Light Mode Theme Engine:** Modern palette supporting manual toggle and OS `prefers-color-scheme`.
41. **Floating Learning Navigation Dock:** Quick-access floating pill for fast switching between Browse, Flashcards, Quiz, Spelling, and Match.
42. **Back-to-Top Floating Button:** Smooth scroll with appearance threshold.
43. **Modern Glassmorphism Aesthetic:** Translucent backdrop blur panels with frosted border effects.
44. **Interactive Toast Notifications:** Non-intrusive floating feedback for actions like copying, bookmarking, and exporting.
45. **Copy Word to Clipboard:** Formatted summary of word, phonetic, and example copied in one click.
46. **Web Share API Support:** Share word cards directly to social channels or WhatsApp.
47. **Word of the Day (WOTD):** Dynamic featured word of the day with randomized discovery button.
48. **Interactive Accordion FAQ:** Bilingual FAQ with expand/collapse animations.
49. **Offline Network Detection Banner:** Automatic warning banner when internet drops and resumes.
50. **Progressive Web App (PWA) Manifest:** `manifest.json` enabling installation on mobile and desktop devices.
51. **Full Keyboard Hotkeys:** Control navigation, search focus, theme toggles, and modal closures with your keyboard.
52. **Keyboard Cheatsheet Modal:** Accessible via `?` key or navigation bar button.
53. **Font Awesome 6.6.0 Integration:** Vector icons for all controls.
54. **Custom WebKit Scrollbar:** Cohesive scrollbars matching current theme.
55. **Double-Click Request Guard:** Prevents duplicate network requests during API fetches.
56. **Graceful Error Banners:** Friendly messages on missing network data or failed queries.
57. **Tailwind CSS v4 & DaisyUI 5:** Modern utility-first CSS styling without unlayered cascade conflicts.
58. **Responsive Mobile-First Architecture:** Tested from 320px mobile screens to 4K ultra-wide displays.
59. **Clean Semantic HTML5 Markup:** Accessible `<main>`, `<nav>`, `<article>`, and `<dialog>` tags.
60. **Zero-Dependency Lightweight Build:** Fast client-side performance without bulky npm build tools.

---

## 💻 Built With

| Layer | Technologies |
| :--- | :--- |
| **Markup & Structure** | Semantic HTML5, PWA Web Manifest |
| **Styling & UI** | Tailwind CSS v4, DaisyUI 5, Custom CSS3 Variables |
| **Typography & Icons** | Google Fonts (Poppins, Hind Siliguri), Font Awesome 6.6.0 |
| **Scripting & Logic** | Modern JavaScript (ES6+), Web Speech API, Web Audio API |
| **CI / CD & Automation** | GitHub Actions, GitHub Pages, Issue & PR Templates |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :---: | :--- |
| <kbd>/</kbd> | Focus Search Bar |
| <kbd>Space</kbd> | Flip 3D Flashcard / Listen Pronunciation |
| <kbd>→</kbd> | Next Flashcard |
| <kbd>←</kbd> | Previous Flashcard |
| <kbd>t</kbd> | Toggle Dark / Light Mode |
| <kbd>?</kbd> | Open Keyboard Shortcuts Cheatsheet |
| <kbd>Esc</kbd> | Close Any Open Modal Dialog |

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari)
- Internet connection (for initial vocabulary API loading)

### Local Setup
```bash
# 1. Clone the repository
git clone https://github.com/Atahar-Shihab/English-Janala.git

# 2. Navigate into the directory
cd English-Janala

# 3. Open in browser (or use VS Code Live Server)
# Windows:
start index.html
# macOS:
open index.html
# Linux:
xdg-open index.html
```

---

## 📂 Project Architecture

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml          # Structured bug report template
│   │   ├── feature_request.yml     # Feature proposal template
│   │   └── config.yml              # Issue template configuration
│   ├── workflows/
│   │   └── deploy.yml              # CI/CD GitHub Pages deployment workflow
│   └── PULL_REQUEST_TEMPLATE.md    # Pull request review template
├── assets/                         # Graphic assets and icons
│   ├── logo.png                    # Brand logo
│   ├── hero-student.png            # Hero section illustration
│   └── *.png                       # Thumbnails and icons
├── script/
│   └── index.js                    # Application logic engine & audio synthesizer
├── style/
│   └── style.css                   # Custom styles, 3D cards, themes & animations
├── CHANGELOG.md                    # Keep-a-Changelog version history
├── CODE_OF_CONDUCT.md              # Contributor Covenant v2.1
├── CONTRIBUTING.md                 # Contribution and conventional commit guidelines
├── index.html                      # Semantic single-page web app
├── LICENSE                         # MIT License
├── manifest.json                   # Progressive Web App manifest
└── README.md                       # Documentation & feature showcase
```

---

## 📡 API Reference

Powered by the Programming Hero English Vocabulary OpenAPI:

| Purpose | Method | Endpoint |
| :--- | :---: | :--- |
| **All Levels** | `GET` | `https://openapi.programming-hero.com/api/levels/all` |
| **Words in Level** | `GET` | `https://openapi.programming-hero.com/api/level/{id}` |
| **Word Details** | `GET` | `https://openapi.programming-hero.com/api/word/{id}` |
| **All Words** | `GET` | `https://openapi.programming-hero.com/api/words/all` |

---

## 🏆 Professional GitHub Workflow & Achievements

To maximize your GitHub profile engagement and unlock official **GitHub Achievements** (such as **Pull Shark**, **Pair Extraordinaire**, etc.):

1. **Feature Branching:** We created and developed this update on `feature/v2-ultimate-learning-suite`.
2. **Pull Requests:** Open a Pull Request from `feature/v2-ultimate-learning-suite` into `main` using GitHub's web interface.
3. **Merge Pull Request:** Merging this PR will trigger the **Pull Shark** achievement!
4. **Co-authored Commits:** Commits include co-authorship metadata for pair programming recognition.
5. **Issue & PR Templates:** Pre-configured in `.github/` to welcome open-source collaborators.

---

## 🤝 Contributing

Contributions are welcomed! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for full guidelines.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes using Conventional Commits (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

Designed and developed with ❤️ by **[Atahar Shihab](https://github.com/Atahar-Shihab)**.
