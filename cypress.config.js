const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cookunity.com',
    env: {
        authUrl: 'https://auth.cookunity.com'  
      },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    retries: 1,
    video: true,
    setupNodeEvents(on, config) {
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'CookUnity UI Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: true,
    json: true
  }
});
