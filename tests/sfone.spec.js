const { chromium } = require('playwright');

(async () => {
  // Launch a Chromium browser instance
  const browser = await chromium.launch();

  // Create a new browser context
  const context = await browser.newContext();

  // Create a new page in the context
  const page = await context.newPage();

  // Navigate to a website
  await page.goto('https://google.com');

  // Take a screenshot of the page and save it to disk
  await page.screenshot({ path: 'example.png' });

  // Close the browser instance
  await browser.close();
})();
