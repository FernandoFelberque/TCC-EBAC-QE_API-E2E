/// <reference types ="cypress"/>

class loginPage {

get #email(){ return cy.get('#username') }
get #senha(){ return cy.get('#password') }
get #botaoEntrar(){ return  cy.get('.woocommerce-form > .button') }

login(email, senha){
    this.#email.type(email)
    this.#senha.type(senha)
    this.#botaoEntrar.click()
}
    
}

module.exports = new loginPage();