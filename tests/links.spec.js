import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://njit-wis.github.io/project-2-team-apm/';
const contentDir = path.join(process.cwd(), 'content');

const getFilesInDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter(file => fs.statSync(path.join(dir, file)).isFile());
};

const getPages = (dir) => {
  const files = getFilesInDirectory(dir);
  return files.map(file => {
    const fileContent = fs.readFileSync(path.join(dir, file), 'utf8');
    const match = fileContent.match(/(?<=^title:\s+).+/m);
    return { url: `/${path.basename(file, '.md')}`, title: match ? match[0] : '' };
  });
};

const pages = getPages(contentDir);

pages.forEach(({ url, title }) => {
  test(`Link check for ${title} page`, async ({ page }) => {
    await page.goto(`${baseUrl}${url}`);

    // Test the page's links
    const urls = await page.$$eval('a', links => links.map(link => link.href));
    for (const url of urls) {
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      if (!response.ok()) {
        console.error(`Error loading ${url}`);
      }
      expect(response.ok()).toBe(true);
    }
  });
});
