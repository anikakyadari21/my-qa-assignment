import { expect, Page } from '@playwright/test';

export class CheckoutCompletePage {

    constructor(private page: Page) {}

    readonly successMessage = () =>
        this.page.getByText('Thank you for your order!');

    async verifyOrderCompleted() {
        await expect(this.successMessage()).toBeVisible();
    }
}