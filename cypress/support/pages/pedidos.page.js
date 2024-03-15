/// <reference types ="cypress"/>

export const pedidosPage = {

    listaPedidos (){
        return cy.get('[class="woocommerce-orders-table__row woocommerce-orders-table__row--status-processing order"]')
    },

    visualizar(){
        cy.get(':nth-child(1) > .woocommerce-orders-table__cell-order-actions > .woocommerce-button').click()
    },

   

    
}