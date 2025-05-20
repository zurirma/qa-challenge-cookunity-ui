# CookUnity QA Challenge – Frontend Automation

This repository contains the **Frontend test automation** for CookUnity's signup workflow, developed with Cypress using best practices such as:

##  Key Features

**Page Object Model (POM)** for clear separation of concerns.
**Custom Cypress Commands** for better abstraction and reusability.
**Test data separation** via fixtures.
**Robustness**: handles dynamic behavior, cross-origin navigation, and loading delays.
**Retry logic** enabled to reduce flaky test failures.
**Video-ready support** 


## How to set up and run the project locally

1. Clone the repository
git clone https://github.com/zurirma/qa-challenge-cookunity-ui.git
cd qa-challenge-cookunity-ui
2. Install dependencies
npm install
3. Run the test headlessly
npx cypress run or (with cypress ui): npx cypress open

NOTE:  there's already a run test video available on "videos" section.


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
There's a video section to show the test runs.


## Notes
The test handles dynamic elements using cy.waitUntil, cy.intercept, and cy.origin.

Cookies and local storage are cleared before each test to ensure independence.

Selector strategies rely on data-testid for resilience to UI changes.

Edge cases such as reusing the same email for signup are handled gracefully.
