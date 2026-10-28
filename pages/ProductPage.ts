import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1 .bgnone');
    this.addToCartButton = page.getByRole('link', { name: /Add to Cart/ });
  }

  async openCategory(category: string) {
    await this.page.goto('/');
    await this.page.getByRole('link', { name: category }).click();
  }

  async openProduct(name: string) {
    await this.page.locator('.fixed_wrapper .prdocutname', { hasText: name }).click();
    await expect(this.title).toHaveText(name);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
