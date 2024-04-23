import { $ } from '@wdio/globals'


class HomePage extends Page {

    async shoesCatalog() {
        const selector = 'new UiSelector().className("android.view.ViewGroup").instance(31)'
        const button = await $(`android=${selector}`)
        await button.click()

    }

    async clothesCatalog() {
        const selector = 'new UiSelector().className("android.view.ViewGroup").instance(34)'
        const button = await $(`android=${selector}`)
        await button.click()

    }

    async startCatalog() {
        const selector = 'new UiSelector().className("android.view.ViewGroup").instance(27)'
        const button = await $(`android=${selector}`)
        await button.click()
    }

 

    async seeAllCatalog(popularProduct) {
        (await $(`id:see-all-${popularProduct}`)).click()

    }

}

export default new HomePage();
