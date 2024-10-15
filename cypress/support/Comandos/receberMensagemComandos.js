import { fazerLogin } from '../Acoes/login/loginAcoes.js';
const acoesReceberMensagem = require('../Acoes/receberMensagem/receberMensagemAcoes.js')

//----------------------------------------COMANDOS----------------------------------------//

Cypress.Commands.add('fazerLoginAmbiente', fazerLogin);

Cypress.Commands.add("acessarJornada", () => {
    acoesReceberMensagem.acessarJornada(); 
});

Cypress.Commands.add('verJornada', () => {
    acoesReceberMensagem.verJornada(); 
});

Cypress.Commands.add('validarInformacoesDaJornadaReceberMensagemFluxoBasico', () => {
    acoesReceberMensagem.validarInformacoesDaJornadaReceberMensagemFluxoBasico(); 
});

Cypress.Commands.add('voltarParaMenuPrincipalDaJornada', () => {
    acoesReceberMensagem.voltarParaMenuPrincipalDaJornada(); 
});

Cypress.Commands.add('clicarNoBotaoAcionarJornada', () => {
    acoesReceberMensagem.clicarNoBotaoAcionarJornada(); 
});

Cypress.Commands.add('validarInformacoesDaJornadaReceberMensagemFluxoEscolherOpcao', () => {
    acoesReceberMensagem.validarInformacoesDaJornadaReceberMensagemFluxoEscolherOpcao(); 
});