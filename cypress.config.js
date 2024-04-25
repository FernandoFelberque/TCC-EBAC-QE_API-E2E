const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yxp32c',
  e2e: {

    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
