import { ELEMENTOS as elemento } from '../../support/Ações/Login/Elementos';

require("../../support/Comandos/loginComandos.js");
const element = require("../../support/Ações/Login/Elementos.js");

describe('Login Test', () => {
    it("Deve fazer o login no ambiente com sucesso", () => {
        cy.fazerLoginAmbiente();
        cy.get(elemento.dashboard).should('be.visible');
    });
});