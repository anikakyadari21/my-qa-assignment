import { expect, Page } from '@playwright/test';

export class ProductsPage {

    constructor(private page: Page) {}

    readonly cartBadge = () => this.page.locator('.shopping_cart_badge');
    readonly cartIcon = () => this.page.getByTestId('shopping-cart-link');
    readonly sortDropdown = () => this.page.getByTestId('product-sort-container');
    readonly prices = () => this.page.locator('.inventory_item_price');

    async addProduct(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button')
            .click();
    }

    async verifyCartCount(count: string) {
        await expect(this.cartBadge()).toHaveText(count);
    }

    async openCart() {
        await this.cartIcon().click();
    }

    async sortLowToHigh() {
        await this.sortDropdown().selectOption('lohi');
    }

    async verifyLowestPriceFirst() {
        const priceTexts = await this.prices().allTextContents();

        const prices = priceTexts.map(price =>
            Number(price.replace('$', ''))
        );

        const sorted = [...prices].sort((a, b) => a - b);

        expect(prices[0]).toBe(sorted[0]);
    }
}