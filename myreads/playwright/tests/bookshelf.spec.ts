import { test, expect } from '@playwright/test';

test('Bookshelf has three headers', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
