import { expect, Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    readonly checkoutButton = () => this.page.getByTestId('checkout');

    async verifyProducts(...products: string[]) {

        for (const product of products) {
            await expect(this.page.getByText(product)).toBeVisible();
        }
    }

    async checkout() {
        await this.checkoutButton().click();
    }
}