import { test, expect } from '@playwright/test';

test('Bookshelf has three headers', async ({ page }) => {
  await page.goto('');

  //assert bookshelf options are visible
  expect(page.getByRole('heading', {level: 1, name: 'MyReads'})).toBeVisible();
  expect(page.getByRole('heading', { name: 'Currently Reading' })).toBeVisible();
  expect(page.getByRole('heading', { name: 'Want to Read' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Read', exact: true })).toBeVisible();
});