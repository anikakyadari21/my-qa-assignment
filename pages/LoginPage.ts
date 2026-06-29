import { expect, Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    readonly username = () => this.page.getByPlaceholder('Username');
    readonly password = () => this.page.getByPlaceholder('Password');
    readonly loginButton = () => this.page.getByRole('button', { name: 'Login' });
    readonly errorMessage = () => this.page.locator('[data-test="error"]');

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.username().fill(username);
        await this.password().fill(password);
        await this.loginButton().click();
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }

    async verifyError(message: string) {
        await expect(this.errorMessage()).toHaveText(message);
    }
}