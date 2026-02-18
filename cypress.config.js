const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hyitm4',
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
    },
    defaultCommandTimeout: 4000,
    //baseUrl: "https://react-redux.realworld.io/"
  },
});
