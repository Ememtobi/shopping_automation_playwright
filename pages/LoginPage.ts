import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginNameInput = page.locator('#loginFrm_loginname');
    this.passwordInput = page.locator('#loginFrm_password');
    this.loginButton = page.getByRole('button', { name: /Login/ });
  }

  async goto() {
    await this.page.goto('/index.php?rt=account/login');
  }

  async login(username: string, password: string) {
    await this.loginNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoggedIn() {
    await expect(this.page.locator('.maintext')).toContainText('My Account');
  }
}
