
const loginPage = require('../support/pages/login.page')

Cypress.Commands.add('login', (usuario, senha) => { 
    cy.visit('minha-conta')
   loginPage.login(usuario,senha)
 })

 Cypress.Commands.add('postCupom', (nome,quantidade,tipo,descricao) => { 

  cy.request({
    method: "POST",
    url: "wp-json/wc/v3/coupons",
    auth: {
        user: "admin_ebac",
        pass: "@admin!&b@c!2022"
    },

    body: {
        "code": nome,
        "amount": quantidade,
        "discount_type": tipo,
        "description": descricao
    }
}).then(response =>{
  return response.body.id
})
})


Cypress.Commands.add('deleteCupom', (ID) => { 

  cy.request({
    method: "DELETE",
    url: "wp-json/wc/v3/coupons/" + ID + "?force=true",
    auth: {
        user: "admin_ebac",
        pass: "@admin!&b@c!2022"
    },


})
})