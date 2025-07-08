import { test, expect } from '@playwright/test';

test('Can navigate to search from main page', async ({ page }) => {
  await page.goto('');

  //assert bookshelf search works/is visible
  await page.goto('http://localhost:3001/');
  await page.getByRole('link', { name: 'Add a book' }).click();
  await page.getByRole('textbox', { name: 'Search by title, author, or' }).click();
  await page.getByRole('textbox', { name: 'Search by title, author, or' }).fill('artificial');
  await page.getByRole('textbox', { name: 'Search by title, author, or' }).press('Enter');
  await page.locator('.book-cover').first().click();
  await expect(page.locator('.book-cover').first()).toBeVisible();
});