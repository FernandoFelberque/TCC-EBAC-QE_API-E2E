import { $ } from '@wdio/globals'
import Page from './page.js';

class CatalagoPage extends Page {


    async catalogoName(tabName) {
        return await $(`//android.widget.TextView[@text=${tabName}]`)
    }

    async catalogoList() {
        return await $(`//android.widget.ScrollView/android.view.ViewGroup`)
    }

    async catalogoProduct(id) {
        (await $(`~${id}`)).click()
    }
    async catalogoDetails(producName) {
        return await $(`//android.widget.TextView[@text=${producName}]`)
    }
}

export default new CatalagoPage();
