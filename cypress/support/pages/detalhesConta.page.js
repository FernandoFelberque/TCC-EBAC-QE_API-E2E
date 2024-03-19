/// <reference types ="cypress"/>

class detalhesContaPage {

    get #nome(){ return cy.get('#account_first_name') }
    get #sobrenome(){ return cy.get('#account_last_name') }
    get #empresa(){ return  cy.get('#account_display_name') }

    get #email(){ return  cy.get('#account_email') }

    get #senhaAtual(){ return  cy.get('#password_current') }
    get #novaSenha(){ return  cy.get('#password_1') }
    get #confirmarNovaSenha(){ return  cy.get('#password_2') }

    get #botaoSalvar(){ return cy.get('.woocommerce-Button') }
    
    editarNomes(nome, sobrenome, empresa){
        this.#nome.clear().type(nome)
        this.#sobrenome.clear().type(sobrenome)
        this.#empresa.clear().type(empresa)

        this.#botaoSalvar.click()
    }

    alterarEmail(email){
        this.#email.clear().type(email)
        
        this.#botaoSalvar.click()
    }

    alterarSenha(senhaAtual, senhaNova, senhaNovaConfirmar){
        this.#senhaAtual.clear().type(senhaAtual)
        this.#novaSenha.clear().type(senhaNova)
        this.#confirmarNovaSenha.clear().type(senhaNovaConfirmar)

        this.#botaoSalvar.click()

    }

        
    }
    
    module.exports = new detalhesContaPage();