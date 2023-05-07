import { test, expect, devices } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'allow cookies' }).click();
  await page.locator('svg').filter({ hasText: 'Menu Open' }).click();
  await page.getByRole('link', { name: 'Download our repository' }).click();
  await page.getByRole('list').filter({ hasText: 'Open Visual Studio Code. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac) to open the ' }).getByRole('link', { name: 'https://github.com/NJIT-WIS/project-2-team-apm' }).click();
});
