import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test('Check if cookies are denied', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();

  // Navigate to the website
  await page.goto('https://njit-wis.github.io/project-2-team-apm/');

  // Wait for the page to finish loading
  await page.waitForLoadState('networkidle');

  // Add a delay before checking for the cookie banner
  await page.waitForTimeout(1000);

  // Click the accept button
    await page.getByRole('button', { name: 'deny cookies' }).click();

  // Check if cookies were accepted
  const cookies = await context.cookies();
  const cookieConsent = cookies.find(cookie => cookie.name === 'cookieconsent_status');
  expect(cookieConsent).toBeDefined();
  expect(cookieConsent.value).toBe('deny');

  await browser.close();
});
