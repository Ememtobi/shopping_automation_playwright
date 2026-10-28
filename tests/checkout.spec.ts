import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Login, add to cart and checkout', async ({ page }) => {
  const productName = 'Jersey Cotton Striped Polo Shirt';
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
  await loginPage.expectLoggedIn();

  await productPage.openCategory('Apparel & accessories');
  await productPage.openProduct(productName);
  await productPage.addToCart();

  await cartPage.expectItem(productName);
  await cartPage.checkout();

  await checkoutPage.confirmOrder();
  await checkoutPage.expectOrderPlaced();
});
