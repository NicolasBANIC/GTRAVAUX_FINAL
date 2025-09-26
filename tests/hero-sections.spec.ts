import { test, expect, type Page } from '@playwright/test';

/**
 * Test suite pour valider les corrections des sections héros (LOT 1)
 * - Page d'accueil: héros 100vh avec scroll indicator
 * - Pages secondaires: héros ~60vh avec min-height 500px, sans scroll indicator
 */
test.describe('Hero Sections - LOT 1 Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
  });

  test('Page d\'accueil - Héros pleine hauteur avec scroll indicator', async ({ page }) => {
    await page.goto('/');
    
    // Attendre le chargement de la page
    await page.waitForLoadState('domcontentloaded');
    
    // Vérifier la présence du héros
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    // Vérifier la classe de hauteur pleine écran (h-screen = 100vh)
    await expect(hero).toHaveClass(/h-screen/);
    
    // Vérifier que la hauteur du héros correspond au viewport (tolérance élargie)
    const heroBox = await hero.boundingBox();
    const viewportHeight = page.viewportSize()?.height || 800;
    
    // La hauteur du héros doit être environ égale au viewport (±100px de tolérance)
    expect(heroBox?.height).toBeGreaterThan(viewportHeight - 100);
    
    // Vérifier la présence du scroll indicator (structure selon Hero.tsx)
    const scrollIndicator = page.locator('.animate-bounce');
    await expect(scrollIndicator).toBeVisible();
    
    // Vérifier le centrage du texte
    const heroContent = hero.locator('h1').first();
    await expect(heroContent).toBeVisible();
    
    // Vérifier que le héros contient les classes de centrage
    await expect(hero).toHaveClass(/justify-center/);
    await expect(hero).toHaveClass(/items-center/);
  });

  test('Page service - Héros réduit sans scroll indicator', async ({ page }) => {
    await page.goto('/services/electricite-plomberie');
    
    // Attendre le chargement de la page
    await page.waitForLoadState('domcontentloaded');
    
    // Vérifier la présence du héros
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    // Vérifier que le héros n'a PAS la classe h-screen (utilise min-h-[500px] et h-[60vh])
    await expect(hero).not.toHaveClass(/h-screen/);
    
    // Vérifier que le héros a les classes de hauteur réduite
    await expect(hero).toHaveClass(/h-\[60vh\]/);
    await expect(hero).toHaveClass(/min-h-\[500px\]/);
    
    // Vérifier la hauteur réduite effective
    const heroBox = await hero.boundingBox();
    const viewportHeight = page.viewportSize()?.height || 800;
    
    // La hauteur doit être inférieure au viewport complet et au moins 450px
    expect(heroBox?.height).toBeLessThan(viewportHeight - 50);
    expect(heroBox?.height).toBeGreaterThan(450);
    
    // Vérifier l'ABSENCE du scroll indicator (animate-bounce)
    const scrollIndicator = page.locator('.animate-bounce');
    expect(await scrollIndicator.count()).toBe(0);
    
    // Vérifier le centrage du texte
    const heroContent = hero.locator('h1').first();
    await expect(heroContent).toBeVisible();
    
    // Vérifier que le héros contient les classes de centrage
    await expect(hero).toHaveClass(/justify-center/);
    await expect(hero).toHaveClass(/items-center/);
  });

  test('Page À propos - Héros réduit sans scroll indicator', async ({ page }) => {
    await page.goto('/about');
    
    // Attendre le chargement de la page
    await page.waitForLoadState('domcontentloaded');
    
    // Vérifier la présence du héros
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    // Vérifier que le héros n'a PAS la classe h-screen
    await expect(hero).not.toHaveClass(/h-screen/);
    
    // Vérifier que le héros a les classes de hauteur réduite
    await expect(hero).toHaveClass(/h-\[60vh\]/);
    await expect(hero).toHaveClass(/min-h-\[500px\]/);
    
    // Vérifier la hauteur réduite effective
    const heroBox = await hero.boundingBox();
    const viewportHeight = page.viewportSize()?.height || 800;
    
    // La hauteur doit être inférieure à la hauteur pleine et au moins 450px
    expect(heroBox?.height).toBeLessThan(viewportHeight - 50);
    expect(heroBox?.height).toBeGreaterThan(450);
    
    // Vérifier l'ABSENCE du scroll indicator (animate-bounce)
    const scrollIndicator = page.locator('.animate-bounce');
    expect(await scrollIndicator.count()).toBe(0);
    
    // Vérifier le centrage du texte
    const heroContent = hero.locator('h1').first();
    await expect(heroContent).toBeVisible();
  });

  test('Navigation entre pages - Comportements cohérents', async ({ page }) => {
    // Commencer par l'accueil
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    // Vérifier héros pleine hauteur
    const homeHero = page.locator('section').first();
    await expect(homeHero).toHaveClass(/h-screen/);
    
    // Naviguer vers une page service existante
    await page.goto('/services/pose-de-sol');
    await page.waitForLoadState('domcontentloaded');
    
    // Vérifier héros réduit
    const serviceHero = page.locator('section').first();
    await expect(serviceHero).not.toHaveClass(/h-screen/);
    await expect(serviceHero).toHaveClass(/h-\[60vh\]/);
    
    // Retour à l'accueil  
    await page.goto('/', { timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');
    
    // Re-vérifier héros pleine hauteur
    const homeHeroAgain = page.locator('section').first();
    await expect(homeHeroAgain).toHaveClass(/h-screen/);
  });

  test('Test responsive - Héros adaptatifs', async ({ page }) => {
    // Test sur mobile
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    // Vérifier que le héros garde sa classe h-screen même sur mobile
    const mobileHomeHero = page.locator('section').first();
    await expect(mobileHomeHero).toHaveClass(/h-screen/);
    
    // Vérifier que la hauteur correspond au viewport mobile (tolérance élargie)
    const heroBox = await mobileHomeHero.boundingBox();
    expect(heroBox?.height).toBeGreaterThan(550);
    
    // Test page service sur mobile avec URL existante
    await page.goto('/services/platrerie-placo');
    await page.waitForLoadState('domcontentloaded');
    
    const mobileServiceHero = page.locator('section').first();
    await expect(mobileServiceHero).not.toHaveClass(/h-screen/);
    await expect(mobileServiceHero).toHaveClass(/h-\[60vh\]/);
    await expect(mobileServiceHero).toHaveClass(/min-h-\[500px\]/);
    
    // Sur mobile, la min-height de 500px doit s'appliquer
    const mobileServiceBox = await mobileServiceHero.boundingBox();
    expect(mobileServiceBox?.height).toBeGreaterThan(400); // Tolérance généreuse
  });

  test('Vérification structure et contenu des héros', async ({ page }) => {
    // Page d'accueil - structure complète
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    const homeHero = page.locator('section').first();
    
    // Vérifier la structure générale du héros
    await expect(homeHero).toHaveClass(/relative/);
    await expect(homeHero).toHaveClass(/flex/);
    await expect(homeHero).toHaveClass(/h-screen/);
    
    // Vérifier la présence du contenu (container avec py-12)
    const contentContainer = homeHero.locator('.container');
    await expect(contentContainer).toBeVisible();
    
    // Page service - structure optimisée
    await page.goto('/services/maconnerie-legere');
    await page.waitForLoadState('domcontentloaded');
    
    const serviceHero = page.locator('section').first();
    
    // Vérifier la structure du héros de service
    await expect(serviceHero).toHaveClass(/relative/);
    await expect(serviceHero).toHaveClass(/flex/);
    await expect(serviceHero).toHaveClass(/h-\[60vh\]/);
    await expect(serviceHero).toHaveClass(/min-h-\[500px\]/);
    
    // Re-obtenir les classes après navigation car les éléments ont changé  
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const homeHeroFresh = page.locator('section').first();
    const homeClasses = await homeHeroFresh.getAttribute('class');
    
    await page.goto('/services/maconnerie-legere');
    await page.waitForLoadState('domcontentloaded');
    const serviceHeroFresh = page.locator('section').first();
    const serviceClasses = await serviceHeroFresh.getAttribute('class');
    
    expect(homeClasses).toContain('h-screen');
    expect(serviceClasses).toContain('h-[60vh]');
    expect(homeClasses).not.toEqual(serviceClasses);
  });
});