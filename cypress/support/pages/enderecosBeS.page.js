/// <reference types ="cypress"/>

class enderecoPage {

    get #botaoEditarBA() { return cy.get(':nth-child(1) > .title > .edit')}

    get #nomeBA() { return cy.get('#billing_first_name') }
    get #sobrenomeBA() { return cy.get('#billing_last_name') }
    get #empresaBA() { return cy.get('#billing_company') }
    get #paisBA() { return cy.get('#select2-billing_country-container') }
    get #enderecoRuaBA() { return cy.get('#billing_address_1') }
    get #enderecoOpcionalBA() { return cy.get('#billing_address_2') }
    get #cidadeBA() { return cy.get('#billing_city')}
    get #estadoBA() { return cy.get('#select2-billing_state-container') }
    get #CEPBA() { return cy.get('#billing_postcode') }
    get #celularBA() { return cy.get('#billing_phone') }
    get #emailBA() { return cy.get('#billing_email') }

    get #botaoEditarSA() { return cy.get(':nth-child(2) > .title > .edit')}

    get #nomeSA() { return cy.get('#shipping_first_name') }
    get #sobrenomeSA() { return cy.get('#shipping_last_name') }
    get #empresaSA() { return cy.get('#shipping_last_name') }
    get #paisSA() { return cy.get('#select2-shipping_country-container') }
    get #enderecoRuaSA() { return cy.get('#shipping_address_1') }
    get #enderecoOpcionalSA() { return cy.get('#shipping_address_2') }
    get #cidadeSA() { return cy.get('#shipping_city') }
    get #estadoSA() { return cy.get('#select2-shipping_state-container') }
    get #CEPSA() { return cy.get('#shipping_postcode') }


    get #botaoSalvar() { return cy.get('.button') }



    editarBillingAddress(nome, sobrenome, empresa, pais, enderecoRua, enderecoOpcional, cidade, estado, CEP, celular, email) {
        this.#botaoEditarBA.click()

        this.#nomeBA.clear().type(nome)
        this.#sobrenomeBA.clear().type(sobrenome)
        this.#empresaBA.clear().type(empresa)

        this.#paisBA.type(pais +'{enter}')
        this.#enderecoRuaBA.clear().type(enderecoRua)
        this.#enderecoOpcionalBA.clear().type(enderecoOpcional)
        this.#cidadeBA.clear().type(cidade)
        this.#estadoBA.type(estado +'{enter}')
        this.#CEPBA.clear().type(CEP)

        this.#celularBA.clear().type(celular)
        this.#emailBA.clear().type(email)

        this.#botaoSalvar.click()
    }

    editarShippingAddress(nome, sobrenome, empresa, pais, enderecoRua,enderecoOpcional, cidade, estado, CEP) {
        this.#botaoEditarSA.click()

        this.#nomeSA.clear().type(nome)
        this.#sobrenomeSA.clear().type(sobrenome)
        this.#empresaSA.clear().type(empresa)

        this.#paisSA.type(pais +'{enter}')
        this.#enderecoRuaSA.clear().type(enderecoRua)
        this.#enderecoOpcionalSA.clear().type(enderecoOpcional)
        this.#cidadeSA.clear().type(cidade)
        this.#estadoSA.type(estado +'{enter}')
        this.#CEPSA.clear().type(CEP)

        this.#botaoSalvar.click()
    }

    editarInvalidoBA(nome, sobrenome, empresa, pais, enderecoOpcional, cidade, estado, celular, email) {
        this.#botaoEditarBA.click()

        this.#nomeBA.clear().type(nome)
        this.#sobrenomeBA.clear().type(sobrenome)
        this.#empresaBA.clear().type(empresa)

        this.#paisBA.type(pais +'{enter}')
        this.#enderecoRuaBA.clear()
        this.#enderecoOpcionalBA.clear().type(enderecoOpcional)
        this.#cidadeBA.clear().type(cidade)
        this.#estadoBA.type(estado +'{enter}')
        this.#CEPBA.clear()

        this.#celularBA.clear().type(celular)
        this.#emailBA.clear().type(email)

        this.#botaoSalvar.click()
    }

    editarInvalidoSA(sobrenome, empresa, pais, enderecoRua,enderecoOpcional, cidade, estado,) {
        this.#botaoEditarSA.click()

        this.#nomeSA.clear()
        this.#sobrenomeSA.clear().type(sobrenome)
        this.#empresaSA.clear().type(empresa)

        this.#paisSA.type(pais +'{enter}')
        this.#enderecoRuaSA.clear().type(enderecoRua)
        this.#enderecoOpcionalSA.clear().type(enderecoOpcional)
        this.#cidadeSA.clear().type(cidade)
        this.#estadoSA.type(estado +'{enter}')
        this.#CEPSA.clear()

        this.#botaoSalvar.click()
    }

}

module.exports = new enderecoPage();