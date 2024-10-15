//import { ELEMENTOS as elemento } from '../../support/Acoes/receberLigacao/elementos.js';

require("../../support/Comandos/loginComandos.js");
require("../../support/Comandos/receberLigacaoComandos.js");

describe('Validar fluxo de Receber ligação da automação da Jornada', () => {
    
    it("Validar fluxo básico de receber ligação da Jornada com sucesso", () => {
        cy.fazerLogin();
        cy.acessarJornada();
        cy.verJornada();
        cy.validarInformacoesDaJornadaReceberLigacaoFluxoBasico();
        cy.clicarNoBotaoAcionarJornada();
    });
    
    it("Validar fluxo básico de receber ligação da Jornada da IA de confirmação", () => {
        cy.fazerLogin();
        cy.acessarJornada();
        cy.verJornada();
        cy.validarInformacoesDaJornadaReceberLigacaoFluxoBasicoIAdeConfirmacao();
        cy.clicarNoBotaoAcionarJornada();
    });

    it("Validar fluxo básico de receber ligação da Jornada da IA de classificação", () => {
        cy.fazerLogin();
        cy.acessarJornada();
        cy.verJornada();
        cy.validarInformacoesDaJornadaReceberLigacaoFluxoBasicoIAdeClassificacao();
        cy.clicarNoBotaoAcionarJornada();
    });
   
});