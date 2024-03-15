/// <reference types ="cypress"/>

const logar = require('../../../fixtures/usuarioAtivo.json')
const { pedidosPage } = require('../../../support/pages/pedidos.page')

describe('Funcionalidade da página Meus Pedidos', () => {

    beforeEach(() => {
        cy.login(logar[0].usuario, logar[0].senha)
        cy.visit('/minha-conta/orders/')
    });

    it('Deve exibir pedidos realizados com ID', () => {
        pedidosPage.listaPedidos().each(pedido => {
            let ID = pedido.find('[data-title="Pedido"]').text()
            expect(ID).to.contain('#')
        })
    });

    it('Botão Visualizar deve carregar detalhes do pedido e endereço de entrega', () => {

        pedidosPage.visualizar()
        cy.get('.woocommerce-order-details').should('exist')
        cy.get('.woocommerce-customer-details').should('exist')

    });

});