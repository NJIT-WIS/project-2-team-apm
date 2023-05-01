import { test, expect } from '@playwright/test';

const baseUrl = "https://njit-wis.github.io/project-2-team-apm/";

const getPages = (dir) => {
  const files = fs.readdirSync(dir);
  return files.map(file => {
    const fileContent = fs.readFileSync(path.join(dir, file), 'utf8');
    const match = fileContent.match(/(?<=^title:\s+).+/m);
    return { url: `/${path.basename(file, '.md')}`, title: match ? match[0] : '' };
  });
};

pages.forEach(({ url, title }) => {
  test(`Social media cards check for ${title} page`, async ({ page }) => {
    await page.goto(`${baseUrl}${url}`);

    // Test for Twitter card
    const twitterCard = await page.$('meta[name="twitter:card"]');
    expect(twitterCard).not.toBeNull();
    expect(await twitterCard.getAttribute('content')).not.toBe('');

    // Test for OpenGraph card
    const openGraphCard = await page.$('meta[property="og:type"]');
    expect(openGraphCard).not.toBeNull();
    expect(await openGraphCard.getAttribute('content')).not.toBe('');
  });
});
