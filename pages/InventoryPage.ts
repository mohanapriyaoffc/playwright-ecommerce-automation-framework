import { Page, expect } from '@playwright/test'

export class InventoryPage {

constructor(private page: Page){}

addBackpack = '#add-to-cart-sauce-labs-backpack'
cartButton = '.shopping_cart_link'
cartItem = '.inventory_item_name'
checkoutButton = '#checkout'

async addProduct(){

await this.page.click(this.addBackpack)

}

async openCart(){

await this.page.click(this.cartButton)

}

async verifyProductInCart(){

await expect(this.page.locator(this.cartItem)).toContainText('Sauce Labs Backpack')

}

async clickCheckout(){

await this.page.click(this.checkoutButton)

}

}