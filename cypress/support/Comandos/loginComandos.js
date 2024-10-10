const loginAcoes = require("../Ações/Login/loginAcoes.js");
import { fazerLoginAmbiente } from '../Ações/Login/loginAcoes.js';

//----------------------------------------COMANDOS----------------------------------------//

Cypress.Commands.add('fazerLoginAmbiente', fazerLoginAmbiente);
