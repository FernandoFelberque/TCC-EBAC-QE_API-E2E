/// <reference types ="cypress"/>

const logar = require('../../../fixtures/usuarioAtivo.json')
const editarInfos = require('../../../fixtures/enderecos.json')
const  enderecoPage  = require('../../../support/pages/enderecosBeS.page')


describe('Funcionalidade da página Endereços', () => {

    beforeEach(() => {
        cy.login(logar[1].usuario, logar[1].senha)
        cy.visit('/minha-conta/edit-address/')
    });

    it('Deve ser possível editar todos os dados em Billing Address', () => {

        enderecoPage.editarBillingAddress(
            editarInfos[0].nome,
            editarInfos[0].sobrenome,
            editarInfos[0].empresa,
            editarInfos[0].pais,
            editarInfos[0].enderecoRua,
            editarInfos[0].enderecoOpcional,
            editarInfos[0].cidade,
            editarInfos[0].estado,
            editarInfos[0].CEP,
            editarInfos[0].celular,
            editarInfos[0].email,
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve ser possível editar todos os dados em Shipping Address', () => {
        enderecoPage.editarShippingAddress(
            editarInfos[1].nome,
            editarInfos[1].sobrenome,
            editarInfos[1].empresa,
            editarInfos[1].pais,
            editarInfos[1].enderecoRua,
            editarInfos[1].enderecoOpcional,
            editarInfos[1].cidade,
            editarInfos[1].estado,
            editarInfos[1].CEP 
        )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Não deve ser possível salvar mudanças com campos obrigatórios vazios em Billing Address', () => {
        enderecoPage.editarInvalidoBA(
            editarInfos[2].nome,
            editarInfos[2].sobrenome,
            editarInfos[2].empresa,
            editarInfos[2].pais,
            editarInfos[2].enderecoOpcional,
            editarInfos[2].cidade,
            editarInfos[2].estado,
            editarInfos[2].celular,
            editarInfos[2].email,
        )

        cy.get('.woocommerce-error').should('exist')

    });

    it('Não deve ser possível salvar mudanças com campos obrigatórios vazios em Shipping Address', () => {
        enderecoPage.editarInvalidoSA(
            editarInfos[1].sobrenome,
            editarInfos[1].empresa,
            editarInfos[1].pais,
            editarInfos[1].enderecoRua,
            editarInfos[1].enderecoOpcional,
            editarInfos[1].cidade,
            editarInfos[1].estado,
             
        )

        cy.get('.woocommerce-error').should('exist')

    });

});