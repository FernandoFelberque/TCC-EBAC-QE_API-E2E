/// <reference types ="cypress"/>

export const pedidosPage = {

    listaPedidos (){
        return cy.get('.woocommerce-MyAccount-content')
    },

    visualizar(){
        cy.get(':nth-child(1) > .woocommerce-orders-table__cell-order-actions > .woocommerce-button').click()
    },

   

    
}