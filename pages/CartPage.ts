import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly items: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('.maintext');
    this.items = page.locator('.product-list');
    this.checkoutButton = page.locator('#cart_checkout2');
  }

  async expectItem(name: string) {
    await expect(this.heading).toContainText('Shopping Cart');
    await expect(this.items).toContainText(name);
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
