# Testing MyReads with Playwright

MyReads is a personal book tracking application built with React that allows you to organize your books into different reading categories and search for new books to add to your collection.

This readme covers Playwright implementation for end-to-end testing with the ultimate goal: to ensure MyReads application quality.

- [Testing MyReads with Playwright](#testing-myreads-with-playwright)
  - [📁 Playwright Structure](#-playwright-structure)
  - [🚀 Getting Started/Using Playwright](#-getting-startedusing-playwright)
  - [⚙️ Configuration](#️-configuration)
  - [🧪 Test Coverage](#-test-coverage)
  - [🛠️ Tips](#️-tips)

## 📁 Playwright Structure

```
playwright/
├── playwright-report/      # Failed reports for playwright end-to-end tests
├── tests/                  # End-to-end tests
├── package.json            # Playwright-specific package folder
└── playwright.config       # Playwright-specific configuration options
```

---
---

## 🚀 Getting Started/Using Playwright

1. Install Dependencies
Navigate to the playwright/ directory and install the required packages:
    `cd playwright`

2. Run Tests
To execute all tests, ensure the application - localhost:3001 - is running:

    `cd ..`

    `npm run start`

3. Then run tests:

    `cd playwright/`

    `npm run test`

    *To run a specific test file:*

    `npx playwright test [name-of-test.spec.ts]`

## ⚙️ Configuration

The `playwright.config.ts` file defines global settings such as:

- Default test directory
- Timeout settings
- Browser options (Chromium, Firefox, WebKit)
- Base URL for the app under test
- You can customize this file to suit your local or CI environment.

## 🧪 Test Coverage

**book-search.spec.ts**: Validates the search functionality, including typing queries, and adding a book to "reading" shelf.
**bookshelf.spec.ts**: Ensures main bookshelf dashboard loads and contains proper "shelves" and title headings.

## 🛠️ Tips

Use --debug to run tests in headed mode for easier debugging.
Use --project=chromium (or firefox, webkit) to test in specific browsers.

Check out <https://playwright.dev/docs/> for more information on Playwright.
