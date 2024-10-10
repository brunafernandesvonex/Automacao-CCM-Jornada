const elemento = require("./Elementos.js").ELEMENTOS;

//----------------------------------------AÇÕES----------------------------------------// 

export function fazerLoginAmbiente() {
    cy.visit('https://ngx-ccm-hom.web.app/');
    cy.get(elemento.email).type("bruna.fernandes@vonex.com.br");
    cy.get(elemento.senha).type("Sione212704@");
    cy.get(elemento.botaoEntrar).should("be.visible").click();
}
