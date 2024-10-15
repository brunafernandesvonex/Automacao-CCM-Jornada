const elemento = require("./elementos.js").ELEMENTOS;

//----------------------------------------AÇÕES----------------------------------------// 

export function acessarJornada() {
    cy.contains('Jornada').should('be.visible').click();
}

export function verJornada() {
    cy.contains('Ver jornada').click({ force: true });
}

export function validarInformacoesDaJornadaReceberLigacaoFluxoBasico() {
    cy.get(elemento.pesquisar).should('be.visible').click({ force: true }).type('[NÃO CANCELAR] Teste automatizado 03').wait(1000);
    cy.get(elemento.verJornada).should('be.visible').should('not.be.disabled').click();
    cy.wait(3000);
    cy.get(elemento.nomeDaJornada).should('have.value', '[NÃO CANCELAR] Teste automatizado 03');
    cy.get(elemento.receberMensagemGatilho).should('be.visible').should('not.be.disabled');
    cy.get(elemento.fluxoDaJonada, { timeout: 10000 }).should('be.visible');
    cy.get(elemento.botaoVoltarMenu).should('be.visible').click();
    cy.get(elemento.pesquisar).should('be.visible').click({force: true}).type('[NÃO CANCELAR] Teste automatizado 03');
}

export function clicarNoBotaoAcionarJornada() {
    cy.wait(3000)
    cy.get(elemento.acionarJornada).should('be.visible').should('not.be.disabled').click();
} 

//export function validarInformacoesDaJornadaReceberLigacaoFluxoEscolherOpcao() {
//    cy.get(elemento.pesquisar).should('be.visible').click({ force: true }).type('[NÃO CANCELAR] Teste automatizado 04').wait(1000);
//    cy.get(elemento.verJornada).should('be.visible').should('not.be.disabled').click();
//    cy.wait(3000);
//    cy.get(elemento.nomeDaJornada).should('have.value', '[NÃO CANCELAR] Teste automatizado 02');
//    cy.get(elemento.receberMensagemGatilho).should('be.visible').should('not.be.disabled');
//    cy.get(elemento.selecioneProduto).should('be.visible').should('not.be.disabled');
//    cy.get(elemento.fluxoDaJonada, { timeout: 10000 }).should('be.visible');
//  cy.get(elemento.botaoVoltarMenu).should('be.visible').click();
//    cy.get(elemento.pesquisar).should('be.visible').click({force: true}).type('[NÃO CANCELAR] Teste automatizado 04');
//}