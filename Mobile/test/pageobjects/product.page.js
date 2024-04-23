import { $ } from '@wdio/globals'


class ProductPage extends Page {

    async produtoName(name) {
        return $(`new UiSelector().text("${name}")`)
    }

}

export default new ProductPage();
