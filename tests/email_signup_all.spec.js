import { test, expect } from '@playwright/test';

test('Successful email submission', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('tester@gmail.com');
  await page.getByLabel('I agree to receive marketing communications from your company and that I have read the Privacy Policy').click();
  await page.getByRole('button', { name: 'Subscribe' }).click();

  // Check confirmation page URL
  const confirmationUrl = 'https://njit.us21.list-manage.com/subscribe/post?u=7d11727fe19a05ff0c992a7d8&amp;id=ee9ffaca2f&amp;f_id=0037ade1f0&EMAIL=tester@gmail.com';
  expect(page.url()).toBe(confirmationUrl);
});
