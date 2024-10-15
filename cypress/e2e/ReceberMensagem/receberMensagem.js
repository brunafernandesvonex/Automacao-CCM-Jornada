
import { ELEMENTOS as elemento } from '../../support/Acoes/receberMensagem/elementos.js';

require("../../support/Comandos/loginComandos.js");
require("../../support/Comandos/receberMensagemComandos.js");

describe('Validar fluxo de Receber Mensagem da automação da Jornada', () => {
    
    it("Validar fluxo básico de receber mensagem da Jornada com sucesso", () => {
        cy.fazerLogin();
        cy.acessarJornada();
        cy.verJornada();
        cy.validarInformacoesDaJornadaReceberMensagemFluxoBasico();
        cy.clicarNoBotaoAcionarJornada();
    });

    it.only("Validar fluxo de receber mensagem da Jornada para escolher opções com sucesso", () => {
        cy.fazerLogin();
        cy.acessarJornada();
        cy.verJornada();
        cy.validarInformacoesDaJornadaReceberMensagemFluxoEscolherOpcao();
        cy.clicarNoBotaoAcionarJornada();

    });
});