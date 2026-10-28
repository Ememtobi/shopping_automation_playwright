import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly confirmOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('.maintext');
    this.confirmOrderButton = page.getByRole('button', { name: /Confirm Order/ });
  }

  async confirmOrder() {
    await expect(this.heading).toContainText('Checkout Confirmation');
    await this.confirmOrderButton.click();
  }

  async expectOrderPlaced() {
    await expect(this.heading).toContainText('Your Order Has Been Processed');
  }
}
