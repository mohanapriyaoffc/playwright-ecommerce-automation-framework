import { test } from '@playwright/test'
import loginData from '../test-data/loginData.json'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'

test.describe('E-Commerce Automation Flow', () => {

for(const data of loginData){

test(`E-commerce flow for ${data.username}`, async ({ page }) => {

const login = new LoginPage(page)
const inventory = new InventoryPage(page)

await login.navigate()

await login.login(data.username,data.password)

await inventory.addProduct()

await inventory.openCart()

await inventory.verifyProductInCart()

await inventory.clickCheckout()

})

}

})