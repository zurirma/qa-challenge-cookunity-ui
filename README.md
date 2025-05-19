# CookUnity QA Challenge – Frontend Automation

This repository contains the **Frontend test automation** for CookUnity's signup workflow, developed with Cypress using best practices such as:

- Page Object Model (POM)
- Custom commands
- Separation of test data
- Visual HTML report generation and video related.

---

## How to set up and run the project locally

1. Clone the repository
git clone https://github.com/zurirma/qa-challenge-cookunity-ui.git
cd qa-challenge-cookunity-ui
2. Install dependencies
npm install
3. Run the test and generate the HTML report
npm run report


## Repo structure:

e2e/ keeps the spec file clean and readable.

fixtures/ allows separation of test data (email, password, etc.) from logic.

reports/ holds the self-contained Mochawesome report for easy sharing.

screenshots/ supports debugging in case of test failures.

support/pages/ uses Page Object Model to encapsulate element selectors and actions per page.

commands.js contains custom commands like assertUrlContains() to improve readability.

utils.js helps centralize functions such as generating random emails.

## Retry logic
Test retries are enabled globally in cypress.config.js:

This ensures tests are retried once if they fail due to transient issues (e.g., animations or network delays).

## Reporting
HTML reports are generated using Mochawesome. There is also a video regarding the run.


## Notes
The test flow accounts for dynamic content and transitions (e.g., cy.origin, cy.waitUntil, cy.intercept).

Cypress best practices were followed to ensure maintainability, such as proper selector strategies, retries, and cleanup (clearCookies, clearLocalStorage).
