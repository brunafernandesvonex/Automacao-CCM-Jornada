import { fazerLogin } from '../Acoes/login/loginAcoes.js';
const acoesReceberLigacao = require('../Acoes/receberLigacao/receberLigacaoAcoes.js')

//----------------------------------------COMANDOS----------------------------------------//

Cypress.Commands.add('fazerLoginAmbiente', fazerLogin);

Cypress.Commands.add("acessarJornada", () => {
    acoesReceberLigacao.acessarJornada(); 
});

Cypress.Commands.add('verJornada', () => {
    acoesReceberLigacao.verJornada(); 
});

Cypress.Commands.add('validarInformacoesDaJornadaReceberLigacaoFluxoBasico', () => {
    acoesReceberLigacao.validarInformacoesDaJornadaReceberLigacaoFluxoBasico(); 
});

Cypress.Commands.add('clicarNoBotaoAcionarJornada', () => {
    acoesReceberLigacao.clicarNoBotaoAcionarJornada(); 
});

Cypress.Commands.add('validarInformacoesDaJornadaReceberLigacaoFluxoBasicoIAdeConfirmacao', () => {
    acoesReceberLigacao.validarInformacoesDaJornadaReceberLigacaoFluxoBasicoIAdeConfirmacao(); 
});

Cypress.Commands.add('validarInformacoesDaJornadaReceberLigacaoFluxoBasicoIAdeClassificacao', () => {
    acoesReceberLigacao.validarInformacoesDaJornadaReceberLigacaoFluxoBasicoIAdeClassificacao(); 
});