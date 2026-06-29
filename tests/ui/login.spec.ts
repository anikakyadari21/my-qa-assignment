import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test.describe('Login Tests', () => {

    test('Standard user should login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await loginPage.verifyLoginSuccess();
    });

    test('Locked user should see error message', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );

        await loginPage.verifyError(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });

});