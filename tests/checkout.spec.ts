import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { credentials } from '../utils/credentials';

test('Login, add to cart and checkout', async ({ page }) => {
  const productName = 'Jersey Cotton Striped Polo Shirt';
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);
  await loginPage.expectLoggedIn();

  await productPage.openCategory('Apparel & accessories');
  await productPage.openProduct(productName);
  await productPage.addToCart();

  await cartPage.expectItem(productName);
  await cartPage.checkout();

  await checkoutPage.confirmOrder();
  await checkoutPage.expectOrderPlaced();
});
