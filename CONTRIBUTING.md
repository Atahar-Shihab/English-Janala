# Contributing to English-Janala

Thank you for your interest in contributing to **English-Janala**! 🎉 We welcome contributions from developers, educators, and language enthusiasts of all backgrounds and experience levels.

This guide outlines the guidelines and workflow for contributing to the repository.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure you treat everyone in the community with respect and kindness.

---

## How Can I Contribute?

### 1. Reporting Bugs

If you find a bug or unexpected behavior:
1. Check the [GitHub Issues](https://github.com/Atahar-Shihab/English-Janala/issues) tab to see if the issue has already been reported.
2. If not, open a new issue using a descriptive title.
3. Provide clear information to help us reproduce the issue:
   - Steps to reproduce
   - Expected behavior vs. actual behavior
   - Screenshots or video recordings if applicable
   - Your browser name, version, and operating system

### 2. Suggesting Enhancements & Features

Feature ideas are always welcome!
1. Check existing issues and discussions to avoid duplicates.
2. Open a new issue with a label/tag like `enhancement` or `feature request`.
3. Clearly explain:
   - What problem this feature solves
   - How it should look or function
   - Why it would benefit learners using English-Janala

### 3. Submitting Pull Requests (PRs)

Follow this step-by-step workflow to contribute code:

1. **Fork the Repository**
   - Click the **Fork** button at the top-right of the [English-Janala repository](https://github.com/Atahar-Shihab/English-Janala).

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/<your-username>/English-Janala.git
   cd English-Janala
   ```

3. **Create a Feature Branch**
   - Use a clear and descriptive branch name:
   ```bash
   git checkout -b feature/interactive-quiz
   # or
   git checkout -b fix/navbar-mobile-toggle
   ```

4. **Make Your Changes**
   - Write clean, understandable, and modular code.
   - Adhere to the code style guidelines below.

5. **Test Thoroughly**
   - Verify responsiveness across mobile, tablet, and desktop viewports.
   - Test audio playback, modal behavior, search/filter functionality, and edge cases.
   - Ensure the browser console has no errors or unhandled warnings.

6. **Commit Your Changes**
   - Follow our [Commit Message Conventions](#commit-message-conventions).

7. **Push to Your Fork**
   ```bash
   git push origin <your-branch-name>
   ```

8. **Open a Pull Request**
   - Navigate to the original repository on GitHub and click **Compare & pull request**.
   - Provide a clear title and description explaining the changes and linking to any relevant issue (e.g., `Closes #12`).

---

## Code Style Guidelines

To keep the codebase maintainable and uniform, please follow these conventions:

- **HTML & Semantic Structure**:
  - Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
  - Maintain accessibility standards (valid `aria-*` attributes, descriptive `alt` texts for images, keyboard-navigable elements).

- **CSS & Tailwind CSS**:
  - Prefer Tailwind CSS utility classes and DaisyUI components over custom ad-hoc CSS rules.
  - Follow existing color schemes, spacing, and typography scales.
  - Keep styling consistent with responsive utilities (`sm:`, `md:`, `lg:`, `xl:`).

- **JavaScript**:
  - Write modern, clean JavaScript (ES6+ syntax: `const`/`let`, arrow functions, template literals, async/await).
  - Use meaningful, descriptive function and variable names in camelCase.
  - Add concise comments explaining non-trivial logic.
  - Handle potential errors gracefully (e.g., API requests, Web Speech API fallback).

---

## Commit Message Conventions

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<optional scope>): <description>
```

### Allowed Types:
- `feat`: A new feature or functionality (e.g., `feat: add word pronunciation audio button`)
- `fix`: A bug fix (e.g., `fix: correct active category tab highlight on reload`)
- `docs`: Documentation-only changes (e.g., `docs: update setup guide in README`)
- `style`: Changes that do not affect the meaning of the code (formatting, white-space, semicolon fixes)
- `refactor`: A code change that neither fixes a bug nor adds a feature (e.g., `refactor: extract modal logic into separate module`)
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Maintenance tasks, dependencies updates, tooling configuration

### Example Commit Messages:
```bash
git commit -m "feat(vocab): add speech synthesis for lesson vocabulary"
git commit -m "fix(ui): adjust card grid padding on small mobile screens"
git commit -m "docs(contributing): clarify pull request checklist"
```

---

## Questions or Need Help?

Feel free to open an issue or reach out to the project maintainer, **[Atahar Shihab](https://github.com/Atahar-Shihab)**. Happy coding! 🚀
