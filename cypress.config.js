const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000  // Increase to 120 seconds
  },
})
