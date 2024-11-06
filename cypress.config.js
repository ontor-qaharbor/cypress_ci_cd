const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',  // Sets the e2e folder as the test location
    baseUrl: 'https://www.saucedemo.com', // Optional: default base URL
  },
})
