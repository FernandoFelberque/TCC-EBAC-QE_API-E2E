
const loginPage = require('../support/pages/login.page')

Cypress.Commands.add('login', (usuario, senha) => { 
    cy.visit('minha-conta')
   loginPage.login(usuario,senha)
 })
