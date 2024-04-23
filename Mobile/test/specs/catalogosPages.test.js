import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import catalagoPage from '../pageobjects/catalago.page.js'

describe('Acesso à página dos catálogos', () => {

    it('Deve acessar e verificar listagem da página do catálogo Shoes', async () => {
        await homePage.shoesCatalog()
        expect((await catalagoPage.catalogoName('Shoes')).isDisplayed()).toBeTruthy()
        expect(await catalagoPage.catalogoList()).toExist()
    })

    it('Deve acessar e verificar listagem da página do catálogo Ebac Start Shopping', async () => {
        await homePage.startCatalog()
        expect((await catalagoPage.catalogoName('Browser')).isDisplayed()).toBeTruthy()
        expect(await catalagoPage.catalogoList()).toExist()
    })

    it('Deve acessar e verificar listagem da página do catálogo Clothes', async () => {
        await homePage.clothesCatalog()
        expect((await catalagoPage.catalogoName('Clothes')).isDisplayed()).toBeTruthy()
        expect(await catalagoPage.catalogoList()).toExist()
    })

    it('Deve acessar e verificar listagem da página do catálogo New Product', async () => {
        await homePage.seeAllCatalog('new')
        expect((await catalagoPage.catalogoName('New Product')).isDisplayed()).toBeTruthy()
        expect(await catalagoPage.catalogoList()).toExist()
    })

    it('Deve acessar e verificar listagem da página do catálogo Popular Product', async () => {
        await homePage.seeAllCatalog('popular')
        expect((await catalagoPage.catalogoName('Popular Product')).isDisplayed()).toBeTruthy()
        expect(await catalagoPage.catalogoList()).toExist()
    })


})

