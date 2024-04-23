import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import catalagoPage from '../pageobjects/catalago.page.js'
import produtosId from '../../fixtures/produtos.json'
import productPage from '../pageobjects/product.page.js'

describe('Acesso à página de Produto pelo catálogo', () => {


    it('catálogo deve conter informações do Produto ', async () => {
        await homePage.startCatalog()
        expect((await catalagoPage.catalogoDetails(produtosId[0].name)).isDisplayed()).toBeTruthy()
    })

    it('catálogo deve direcionar à página do Produto ', async () => {
        await homePage.startCatalog()
        await catalagoPage.catalogoProduct(produtosId[0].id)
        expect(await productPage.produtoName(produtosId[0].name)).toBe(produtosId[0].name)
    })

})

