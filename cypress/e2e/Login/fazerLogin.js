require("../../support/Comandos/loginComandos.js");

describe('Login', () => {
    it("Deve fazer o login no ambiente com sucesso", () => {
        cy.fazerLogin();
    });
});