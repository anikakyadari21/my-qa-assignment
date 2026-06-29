import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    readonly firstName = () => this.page.getByTestId('firstName');
    readonly lastName = () => this.page.getByTestId('lastName');
    readonly postalCode = () => this.page.getByTestId('postalCode');

    readonly continueButton = () => this.page.getByTestId('continue');
    readonly finishButton = () => this.page.getByTestId('finish');

    async fillCheckoutInfo(first: string, last: string, zip: string) {

        await this.firstName().fill(first);
        await this.lastName().fill(last);
        await this.postalCode().fill(zip);

        await this.continueButton().click();
    }

    async finishOrder() {
        await this.finishButton().click();
    }
}