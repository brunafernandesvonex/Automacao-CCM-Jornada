const elemento = require("./elementos.js").ELEMENTOS;

//----------------------------------------AÇÕES----------------------------------------// 

export function fazerLogin() {
    cy.visit('https://ngx-ccm-hom.web.app/');
    cy.get(elemento.email).type("bruna.fernandes@vonex.com.br");
    cy.get(elemento.senha).type("Sione212704@");
    cy.get(elemento.checkboxLembrarSenha).should('not.be.disabled').click({ force: true });
    cy.get(elemento.botaoEntrar).should("be.visible").click();
    cy.get(elemento.dashboard).should('be.visible');
}
