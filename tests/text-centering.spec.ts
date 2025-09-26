import { test, expect } from '@playwright/test';

/**
 * Verifies that constrained-width text blocks remain centered on desktop by requiring
 * both a max-width utility and mx-auto on key pages/sections.
 */

test.describe('Uniform text centering across pages (desktop)', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
  });

  test('Home hero: subtitle centered with max-w-2xl mx-auto', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const subtitle = page.locator('p.max-w-2xl.mx-auto');
    await expect(subtitle).toHaveCount(1);
  });

  const services = [
    '/services/platrerie-placo',
    '/services/electricite-plomberie',
    '/services/isolation-interieure',
    "/services/maconnerie-legere",
    '/services/peinture-finitions',
    '/services/pose-de-sol',
  ];

  for (const path of services) {
    test(`Service page centered paragraph: ${path}`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('domcontentloaded');
      // main descriptive paragraph
      const para = page.locator('section.text-center p.max-w-4xl.mx-auto');
      await expect(para).toHaveCount(1);
    });
  }

  test('About page: key paragraphs centered', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('domcontentloaded');
    const centeredParas = page.locator('section.text-center p.max-w-4xl.mx-auto');
    await expect(centeredParas.count()).resolves.toBeGreaterThanOrEqual(1);
  });

  test('Realisations page: intro and before/after container centered', async ({ page }) => {
    await page.goto('/realisations');
    await page.waitForLoadState('domcontentloaded');
    const intro = page.locator('p.max-w-4xl.mx-auto');
    await expect(intro).toHaveCount(1);
    const beforeAfter = page.locator('div.max-w-4xl.mx-auto');
    await expect(beforeAfter).toHaveCount(1);
  });

  test('Blog page: header intro and newsletter CTA centered', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('domcontentloaded');
    const headerIntro = page.locator('header p.max-w-4xl.mx-auto');
    await expect(headerIntro).toHaveCount(1);
    const ctaPara = page.locator('section.text-center p.max-w-lg.mx-auto');
    await expect(ctaPara).toHaveCount(1);
    const ctaRow = page.locator('section.text-center div.max-w-lg.mx-auto');
    await expect(ctaRow).toHaveCount(1);
  });

  test('Contact page: FAQ container centered', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('domcontentloaded');
    const faq = page.locator('#faq div.max-w-4xl.mx-auto');
    await expect(faq).toHaveCount(1);
  });
});