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
  test(`SEO check for ${title} page - Title and Meta Description`, async ({ page }) => {
    await page.goto(`${baseUrl}${url}`);

    // Test the page's title
    const pageTitle = await page.title();
    expect(pageTitle).not.toBeNull();
    expect(pageTitle).not.toBe('');

    // Test the page's meta description
    const metaDescription = await page.$eval('meta[name="description"]', element => element.content);
    expect(metaDescription).not.toBeNull();
    expect(metaDescription).not.toBe('');
  });
});
