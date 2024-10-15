const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ngx-ccm-hom.web.app/",
    supportFile: false,
    specPattern: [
      "cypress/e2e/Login/fazerLogin.js",
      "cypress/e2e/ReceberMensagem/receberMensagem.js",
      "cypress/e2e/ReceberLigacao/receberLigacao.js",
    ],
  },
});