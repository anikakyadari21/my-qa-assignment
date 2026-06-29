import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { users } from '../../test-data/users';

test('Add two products to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await productsPage.addProduct('Sauce Labs Backpack');
    await productsPage.addProduct('Sauce Labs Bike Light');

    await productsPage.verifyCartCount('2');

    await productsPage.openCart();

    await cartPage.verifyProducts(
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light'
    );
});