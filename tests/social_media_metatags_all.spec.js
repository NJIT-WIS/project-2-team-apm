import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const baseUrl = "https://njit-wis.github.io/project-2-team-apm/";
const contentDir = path.join(process.cwd(), 'content');

const getPages = (dir) => {
  const files = fs.readdirSync(dir);
  return files
    .filter(file => path.extname(file) === '.md')
    .map(file => {
      const fileContent = fs.readFileSync(path.join(dir, file), 'utf8');
      const match = fileContent.match(/(?<=^title:\s+).+/m);
      return { url: `/${path.basename(file, '.md')}`, title: match ? match[0] : '' };
    });
};

const pages = getPages(contentDir);

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
