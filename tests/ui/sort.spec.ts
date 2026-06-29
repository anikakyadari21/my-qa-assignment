import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';
import { users } from '../../test-data/users';

test('Complete checkout flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const completePage = new CheckoutCompletePage(page);

    await loginPage.navigate();

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await productsPage.addProduct('Sauce Labs Backpack');
    await productsPage.addProduct('Sauce Labs Bike Light');

    await productsPage.openCart();

    await cartPage.checkout();

    await checkoutPage.fillCheckoutInfo(
        'John',
        'Doe',
        '500001'
    );

    await checkoutPage.finishOrder();

    await completePage.verifyOrderCompleted();
});