# Shopping Automation

An automated end-to-end test for the practice shop [automationteststore.com](https://automationteststore.com/).

## What the test does

The test in [`tests/checkout.spec.ts`](tests/checkout.spec.ts) walks through a full purchase, the way a customer would:

1. Log in and check the "My Account" page appears.
2. Open the **Apparel & accessories** category and choose a product.
3. Add the product to the cart and check it is listed there.
4. Check out and confirm the order.
5. Check the page says **"Your Order Has Been Processed"**.

## Tools used

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | Browser automation and test runner |
| TypeScript | The language the tests are written in |
| Page Object Model | Keeps page selectors and actions in `pages/`, so the test reads like a story |
| dotenv | Optionally loads your own login details from a `.env` file |
| GitHub Actions | Runs the test automatically on every push (`.github/workflows/playwright.yml`) |

## Project layout

```
pages/    One file per page of the shop (login, product, cart, checkout)
tests/    The test itself
utils/    Login details used by the test
```

## How to run it

You need [Node.js](https://nodejs.org/) installed (the current LTS version is fine).

1. **Download the project** and open a terminal in its folder:
   ```bash
   git clone <your-repo-url>
   cd shopping_automation_playwright
   ```
2. **Install the dependencies:**
   ```bash
   npm ci
   ```
3. **Install the browser the test uses:**
   ```bash
   npx playwright install chromium
   ```
4. **Run the test:**
   ```bash
   npx playwright test
   ```
5. **View the report:**
   ```bash
   npx playwright show-report
   ```

To watch the browser while it runs, add `--headed`:

```bash
npx playwright test --headed
```

## Viewing the test report

Every run saves an HTML report in the `playwright-report/` folder.

- **Open it:** run `npx playwright show-report`. It opens in your browser, and you can stop it with `Ctrl+C` in the terminal.
- **What it shows:** whether the test passed or failed, how long it took, and each step the test performed. If the test fails, it shows the error message too.
- **On GitHub:** after each run, the Actions workflow uploads the report as an artifact named `playwright-report`. Open the run under the **Actions** tab and download it from the **Artifacts** section at the bottom. Unzip it and open `index.html`.

If the test fails, Playwright usually opens the report for you automatically.

## Login details

The test uses a **shared demo user** (`JaneUser`) on the public practice site, so there is nothing to set up. It works straight after you clone the project.

If you would rather use your own account, a sample is provided:

1. Copy `.env.example` to `.env`.
2. Put your own username and password in it:
   ```
   USER_NAME=your-username
   PASSWORD=your-password
   ```
3. Run the test as usual. Your `.env` file replaces the shared user, and it is never committed to git.

## Good to know

- The shared demo user is used by everyone, so two people running the test at the same time can get in each other's way. Use your own account in `.env` if that happens.
- Each run places a real order on the practice site. The orders can't be deleted, but they do no harm.
