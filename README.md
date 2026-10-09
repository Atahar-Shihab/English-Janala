<div align="center">
  <img src="./assets/logo.png" alt="English Janala Logo" width="200" />
  
  # English Janala
  
  *Open the window to mastering English vocabulary.*
  
  [![GitHub stars](https://img.shields.io/github/stars/Atahar-Shihab/English-Janala?style=for-the-badge&color=yellow)](https://github.com/Atahar-Shihab/English-Janala/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/Atahar-Shihab/English-Janala?style=for-the-badge&color=orange)](https://github.com/Atahar-Shihab/English-Janala/network/members)
  [![GitHub license](https://img.shields.io/github/license/Atahar-Shihab/English-Janala?style=for-the-badge&color=blue)](https://github.com/Atahar-Shihab/English-Janala/blob/main/LICENSE)
  [![GitHub last commit](https://img.shields.io/github/last-commit/Atahar-Shihab/English-Janala?style=for-the-badge&color=success)](https://github.com/Atahar-Shihab/English-Janala/commits/main)
  [![GitHub repo size](https://img.shields.io/github/repo-size/Atahar-Shihab/English-Janala?style=for-the-badge&color=ff69b4)](https://github.com/Atahar-Shihab/English-Janala)

</div>

---

## 📸 Banner & Live Demo

<!-- Add a screenshot of the live app here -->

[**View Live Demo**](https://atahar-shihab.github.io/English-Janala/) *(Placeholder link)*

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Built With](#-built-with)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Color Reference](#-color-reference)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

---

## 📖 About the Project

**English Janala** is an interactive and beautifully designed web application tailored to help users expand and master their English vocabulary. The name "Janala" means "window" in Bengali, symbolizing how this application opens a new window of opportunities by breaking language barriers. It offers a structured approach to learning, dividing words into accessible, bite-sized lessons.

Primarily built with **Bengali-speaking learners** in mind, the platform provides meaningful examples and clear pronunciations, bridging the gap between memorization and practical usage. Many learners struggle with vocabulary retention because they lack context and proper auditory guidance. English Janala solves this by offering an immersive environment where users can read, see examples, and hear how words are naturally spoken.

The user interface emphasizes focus and engagement. By utilizing modern web design principles like glassmorphism and smooth animations, learners are provided a distraction-free and aesthetically pleasing environment. The application dynamically fetches data, ensuring a fast, lightweight, and scalable experience.

Whether you are a student preparing for competitive exams, a professional aiming to improve communication skills, or simply an enthusiast, English Janala provides the necessary tools to grow your lexicon effectively and enjoyably.

---

## ✨ Key Features

- 🔍 **Smart Search Functionality:** Quickly find specific words across lessons with real-time filtering.
- 🗣️ **Text-to-Speech Pronunciation:** Listen to the accurate pronunciation of any word with a single click.
- 📱 **Fully Responsive Design:** Seamless experience across desktop, tablet, and mobile devices.
- 🎨 **Modern Glassmorphism UI:** Beautiful frosted-glass effects that create a premium feel.
- 💫 **Smooth Animations:** Delightful transitions and micro-interactions that enhance the UX.
- 🌟 **Word of the Day:** Discover a new featured word every day to keep your learning consistent.
- ⬆️ **Back to Top Button:** Easily navigate long lists of vocabulary cards.
- 📖 **Detailed Word Cards:** Explore definitions, synonyms, and practical examples in context.
- 🔄 **Dynamic Content Loading:** Instantly fetches lessons and vocabulary from external APIs.
- ⚠️ **Graceful Fallbacks:** Friendly empty states and loading spinners for a polished experience.

---

## 💻 Built With

This project relies on modern web technologies and libraries to deliver a blazing-fast user experience:

| Technology | Badge |
| :--- | :--- |
| **HTML5** | ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) |
| **CSS3** | ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) |
| **JavaScript** | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) |
| **Tailwind CSS** | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **DaisyUI** | ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) |
| **Font Awesome**| ![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

You don't need much to run this project since it consists of static files.
- A modern web browser (Chrome, Firefox, Edge, Safari)
- An active internet connection (to fetch API data and external CDNs)
- *(Optional)* [Visual Studio Code](https://code.visualstudio.com/) with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for the best development experience.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Atahar-Shihab/English-Janala.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd English-Janala
   ```

3. **Run the application**
   - Simply double-click `index.html` to open it in your browser.
   - **OR** (Recommended) Right-click `index.html` in VS Code and select **"Open with Live Server"**.

### Usage

1. **Select a Lesson:** Upon loading, the home page will display available lesson levels. Click on any lesson button to load its vocabulary.
2. **Browse Cards:** Scroll through the grid of vocabulary cards for the selected lesson.
3. **View Details:** Click the "Details" button on any card to open a modal containing meanings, synonyms, and example sentences.
4. **Listen to Pronunciation:** Inside the details modal, click the speaker icon to hear the word pronounced aloud using the browser's Text-to-Speech API.
5. **Search Words:** Use the search bar at the top to quickly filter and find specific words within the loaded lesson.

---

## 📂 Project Structure

```text
English-Janala/
├── 📁 assets/                 # Static assets like images and branding
│   └── 🖼️ logo.png            # Main application logo
├── 📁 script/                 # JavaScript files for logic and API integration
│   └── 📄 index.js            # Core application logic, DOM manipulation, fetching
├── 📁 style/                  # CSS stylesheets
│   └── 📄 style.css           # Custom CSS overrides and utility classes
├── 📄 index.html              # Main HTML entry point containing the UI structure
└── 📄 tailwind.config.js      # Tailwind CSS configuration and theme settings
```

---

## 🔌 API Reference

The application integrates with the Programming Hero English vocabulary API.

| Purpose | Endpoint | Method |
| :--- | :--- | :---: |
| **Get all lessons** | `https://openapi.programming-hero.com/api/levels/all` | `GET` |
| **Get words for a lesson** | `https://openapi.programming-hero.com/api/level/{id}` | `GET` |
| **Get details for a word** | `https://openapi.programming-hero.com/api/word/{id}` | `GET` |
| **Get all words** | `https://openapi.programming-hero.com/api/words/all` | `GET` |

*Note: Replace `{id}` with the respective lesson or word ID.*

#### Request Example (Fetch all lessons):
```javascript
fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Response Example (Get details for a word):
```json
{
  "status": true,
  "data": {
    "id": 5,
    "word": "Diligent",
    "meaning": "পরিশ্রমী",
    "pronunciation": "dil-i-juhnt",
    "synonyms": ["hardworking", "industrious", "assiduous"],
    "example": "He was a diligent student, always completing his assignments on time."
  }
}
```

---

## 🎨 Color Reference

| Color Name | Hex Code | Preview | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | `#3B82F6` | ![#3B82F6](https://via.placeholder.com/15/3B82F6/000000?text=+) | Primary brand color, main buttons |
| **Purple Gradient** | `#8B5CF6` | ![#8B5CF6](https://via.placeholder.com/15/8B5CF6/000000?text=+) | Background gradients, accents |
| **Sky Accent** | `#0EA5E9` | ![#0EA5E9](https://via.placeholder.com/15/0EA5E9/000000?text=+) | Secondary accents, hover states |
| **Dark Text** | `#1F2937` | ![#1F2937](https://via.placeholder.com/15/1F2937/000000?text=+) | Primary headings and text |
| **Light Background** | `#F3F4F6` | ![#F3F4F6](https://via.placeholder.com/15/F3F4F6/000000?text=+) | App background, card backgrounds |

---

## 🗺️ Roadmap

We are constantly looking to improve English Janala. Here is what's done and what's coming next:

- [x] Responsive design for all devices
- [x] Smart search functionality
- [x] Text-to-speech pronunciation
- [x] Detailed word modal views
- [ ] Implement Dark Mode toggle
- [ ] Add a "Quiz Mode" to test vocabulary retention
- [ ] User accounts and authentication
- [ ] Progress tracking and learning streaks
- [ ] Ability to bookmark/save difficult words
- [ ] Offline support via Service Workers (PWA)

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code adheres to the existing style and includes appropriate comments.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information. This project is intended for educational use.

---

## 🙏 Acknowledgements

- [Programming Hero](https://www.programming-hero.com/) for providing the incredible vocabulary API.
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) for the styling framework.
- [FontAwesome](https://fontawesome.com/) for the beautiful icons.
- All the open-source contributors whose tools made this project possible.

---

## 📫 Contact

**Atahar Shihab**

- GitHub: [@Atahar-Shihab](https://github.com/Atahar-Shihab)
- Project Link: [https://github.com/Atahar-Shihab/English-Janala](https://github.com/Atahar-Shihab/English-Janala)

---
<div align="center">
  <i>Built with ❤️ for better learning.</i>
</div>
