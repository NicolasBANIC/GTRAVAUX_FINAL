import { test, expect } from '@playwright/test';

type ServiceTestConfig = {
  slug: string;
  heading: string;
  ctaLabel: string;
};

const servicePages: ServiceTestConfig[] = [
  {
    slug: 'demolition',
    heading: 'Démolition contrôlée',
    ctaLabel: 'Planifier un curage',
  },
  {
    slug: 'sanitaires',
    heading: 'Installations sanitaires complètes',
    ctaLabel: 'Planifier un projet sanitaire',
  },
];

test.describe('Pages services - contenus essentiels', () => {
  for (const { slug, heading, ctaLabel } of servicePages) {
    test.describe(`/services/${slug}`, () => {
      test('affiche un hero avec le bon titre', async ({ page }) => {
        await page.goto(`/services/${slug}`);
        await page.waitForLoadState('domcontentloaded');

        const heroSection = page.locator('section').first();
        await expect(heroSection, `Le hero doit être présent sur /services/${slug}`).toBeVisible();

        const heroTitle = heroSection.locator('h1');
        await expect(heroTitle).toHaveText(heading);
      });

      test('affiche le CTA principal accessible', async ({ page }) => {
        await page.goto(`/services/${slug}`);
        await page.waitForLoadState('domcontentloaded');

        const ctaLink = page.getByRole('link', { name: ctaLabel, exact: true });
        await expect(ctaLink).toBeVisible();
        await expect(ctaLink).toHaveAttribute('href', '/contact');
      });
    });
  }
});