import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://njit-wis.github.io/project-2-team-apm/';
const contentDir = path.join(process.cwd(), 'content');

const getPages = (dir) => {
  const files = fs.readdirSync(dir);
  return files.map(file => {
    const fileContent = fs.readFileSync(path.join(dir, file), 'utf8');
    const match = fileContent.match(/(?<=^title:\s+).+/m);
    return { url: `/${path.basename(file, '.md')}`, title: match ? match[0] : '' };
  });
};

const pages = getPages(contentDir);

pages.forEach(({ url, title }) => {
  test(`SEO check for ${title} page`, async ({ page }) => {
    await page.goto(`${baseUrl}${url}`);

    // Test the page's title
    const pageTitle = await page.title();
    expect(pageTitle).not.toBeNull();
    expect(pageTitle).not.toBe('');

    // Test the page's meta description
    const metaDescription = await page.$eval('meta[name="description"]', element => element.content);
    expect(metaDescription).not.toBeNull();
    expect(metaDescription).not.toBe('');

    // Test the page's images
    const images = await page.$$('img');
    for (const image of images) {
      const alt = await image.getAttribute('alt');
      expect(alt).not.toBeNull();
      expect(alt).not.toBe('');
    }

    // Test the page's links
    const urls = await page.$$eval('a', links => links.map(link => link.href));
    for (const url of urls) {
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      expect(response.ok()).toBe(true);
    }

    // Test the page's headings
    const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', elements => elements.map(h => parseInt(h.tagName.charAt(1))));
    let previous = headings[0];
    for (let i = 1; i < headings.length; i++) {
      const current = headings[i];
      expect(current).toBeLessThan(previous + 2);
      previous = current;
    }

    // Test the page's content structure
    const paragraphs = await page.$$eval('p', elements => elements.map(p => p.textContent.trim()));
    const bulletPoints = await page.$$eval('li', elements => elements.map(li => li.textContent.trim()));
    expect(paragraphs.length).toBeGreaterThan(0);
    expect(bulletPoints.length).toBeGreaterThan(0);

    // Test the page's URL structure
    expect(url).toMatch(/^[a-z0-9-]+$/i);
    expect(url).not.toMatch(/[^a-z0-9-]+/i);

    // Test the page's load time
    const performanceTiming = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.timing)));
    const pageLoadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;
    expect(pageLoadTime).toBeLessThan(5000);

    // Test the page's mobile-friendliness
    const mobileViewport = { width: 375, height: 667 };
    await page.setViewportSize(mobileViewport);
    const pageWidth = await page.evaluate(() => window.innerWidth);
    expect(pageWidth).toBeLessThanOrEqual(mobileViewport.width);

    // Test the page's content uniqueness
    const pageContent = await page.content();
    const uniqueContent = new Set(pageContent.split(' '));
    expect(uniqueContent.size).toBeGreaterThan(50);
  });
});
