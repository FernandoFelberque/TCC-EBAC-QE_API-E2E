/// <reference types ="cypress"/>

const cupom = require('../../fixtures/cupom.json')

describe('Funcionalidade da API para buscar Coupons', () => {


    it('Deve buscar a lista de coupon com GET sem parâmetros', () => {
    
       cy.request({
        method: "GET",
        url: "wp-json/wc/v3/coupons",
        auth:{
            user:"admin_ebac",
            pass:"@admin!&b@c!2022"
        }

       }).should((response) => {
        expect(response.status).equal(200) 
        expect(response.body).to.have.length.greaterThan(0)
       })
    });

    it('Deve buscar coupons com GET parâmetro search', () => {

        cy.request({
            method: "GET",
            url: "wp-json/wc/v3/coupons?context=view&search="+ cupom[0].code,
            auth:{
                user:"admin_ebac",
                pass:"@admin!&b@c!2022"
            }
    
           }).should((response) => {
            expect(response.status).equal(200) 
            expect(response.body[0].code).equal("10contao")
           })
        
    });

    it('Deve buscar coupons com GET{ID}', () => {
        cy.request({
            method: "GET",
            url: "wp-json/wc/v3/coupons/"+ cupom[0].id,
            auth:{
                user:"admin_ebac",
                pass:"@admin!&b@c!2022"
            },
            
    
           }).should((response) => {
            expect(response.status).equal(200) 
            expect(response.body.id).equal(5655)
           })
        
    });


});