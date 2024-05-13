/// <reference types ="cypress"/>

const logar = require('../../../fixtures/usuarioAtivo.json')
const editarInfos = require('../../../fixtures/enderecos.json')
const enderecoPage = require('../../../support/pages/enderecosBeS.page')
const usuario = require('../../../fixtures/usuarioAtivo.json')
const detalhesContaPage = require('../../../support/pages/detalhesConta.page')

describe('Funcionalidade da página Detalhes da Conta', () => {

    beforeEach(() => {
        cy.login(logar[2].usuario, logar[2].senha)
        cy.visit('/minha-conta/edit-account/')
    });

    it('Deve Alterar dados de nomes com sucesso', () => {

        detalhesContaPage.editarNomes(
            editarInfos[0].nome,
            editarInfos[0].sobrenome,
            editarInfos[0].empresa,
        )

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve Alterar a senha do usuario com sucesso', () => {

        detalhesContaPage.alterarSenha(
            usuario[2].senha,
            usuario[2].novaSenha,
            usuario[2].novaSenha,
        )

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        cy.login(logar[2].usuario, logar[2].senha)
        cy.get('.woocommerce-MyAccount-content').should('exist')

    });

    it('Deve Alterar o email do usuario com sucesso', () => {
        detalhesContaPage.alterarEmail(
            usuario[2].usuario,
        )
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});
