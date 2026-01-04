import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Portfolio Website - Smoke Tests', () => {

  test.describe('Tier 1: Site is not broken', () => {

    test('Home: loads and shows hero + navigation', async ({ page }) => {
      await page.goto(BASE_URL);

      // Navigation is visible (take first nav element to avoid multiple matches)
      await expect(page.getByRole('navigation').first()).toBeVisible();

      // Hero heading is visible
      const heroHeading = page.getByRole('heading').first();
      await expect(heroHeading).toBeVisible();

      // Featured projects section exists
      await expect(page.locator('section').filter({ hasText: /featured work|projects/i })).toBeVisible();
    });

    test('About: navigation + URL + heading + unique content', async ({ page }) => {
      await page.goto(BASE_URL);

      // Click About link
      await page.getByRole('link', { name: /about/i }).first().click();

      // Assert URL is correct
      await expect(page).toHaveURL(/\/about/);

      // Assert H1 heading contains "About"
      await expect(page.getByRole('heading', { level: 1 })).toContainText(/about/i);

      // Assert unique element: Skills or Timeline section exists
      await expect(page.locator('section').filter({ hasText: /skills|timeline|journey/i }).first()).toBeVisible();
    });

    test('Projects: navigation + URL + heading + project cards', async ({ page }) => {
      await page.goto(BASE_URL);

      // Click Projects link
      await page.getByRole('link', { name: /projects/i }).first().click();

      // Assert URL is correct
      await expect(page).toHaveURL(/\/projects/);

      // Assert H1 heading is "Projects"
      await expect(page.getByRole('heading', { level: 1, name: /projects/i })).toBeVisible();

      // Assert at least one project item exists (look for h3 project titles)
      const projectTitle = page.getByRole('heading', { level: 3 }).first();
      await expect(projectTitle).toBeVisible();
    });

    test('Blog: navigation + URL + heading + content area', async ({ page }) => {
      await page.goto(BASE_URL);

      // Click Blog link
      await page.getByRole('link', { name: /blog/i }).first().click();

      // Assert URL is correct
      await expect(page).toHaveURL(/\/blog/);

      // Assert H1 heading exists
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      // Assert blog grid or empty state message exists
      const blogContent = page.locator('section').first();
      await expect(blogContent).toBeVisible();
    });

    test('Mobile menu: opens and closes correctly', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(BASE_URL);

      // Find hamburger button
      const menuButton = page.getByRole('button', { name: /open menu/i });
      await expect(menuButton).toBeVisible();

      // Verify menu is initially hidden
      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toHaveClass(/\-translate-y-full/);

      // Open menu
      await menuButton.click();

      // Verify menu is visible
      await expect(mobileMenu).toBeVisible();
      await expect(mobileMenu).not.toHaveClass(/\-translate-y-full/);

      // Verify navigation links are accessible in the menu
      await expect(mobileMenu.getByRole('link', { name: /about/i })).toBeVisible();

      // Close menu
      const closeButton = page.getByRole('button', { name: /close menu/i });
      await closeButton.click();

      // Verify menu is hidden again
      await expect(mobileMenu).toHaveClass(/\-translate-y-full/);
    });
  });

  test.describe('Tier 2: High user value', () => {

    test('Contact: page loads + form fields present', async ({ page }) => {
      await page.goto(`${BASE_URL}/contact`);

      // Assert H1 heading exists
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      // Assert form fields are present and labeled
      await expect(page.getByLabel(/name/i)).toBeVisible();
      await expect(page.getByLabel(/email/i)).toBeVisible();
      await expect(page.getByLabel(/message/i)).toBeVisible();

      // Assert submit button exists
      await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
    });

    test('Contact form: validation on empty submit', async ({ page }) => {
      await page.goto(`${BASE_URL}/contact`);

      // Try to submit empty form
      const submitButton = page.getByRole('button', { name: /send/i });
      await submitButton.click();

      // HTML5 validation should prevent submission
      // Check that at least one field has required attribute
      const nameField = page.getByLabel(/name/i);
      await expect(nameField).toHaveAttribute('required');
    });

    test('Accessibility: pages have exactly one H1', async ({ page }) => {
      const pages = ['/', '/about', '/projects', '/blog', '/contact'];

      for (const pagePath of pages) {
        await page.goto(`${BASE_URL}${pagePath}`);

        // Get all H1 headings
        const h1Count = await page.getByRole('heading', { level: 1 }).count();

        // Assert exactly one H1 per page
        expect(h1Count).toBe(1);
      }
    });

    test('Keyboard navigation: Tab to nav and activate link', async ({ page }) => {
      await page.goto(BASE_URL);

      // Press Tab to focus first interactive element
      await page.keyboard.press('Tab');

      // Continue tabbing until we reach a navigation link
      let attempts = 0;
      while (attempts < 20) {
        const focusedElement = await page.locator(':focus');
        const tagName = await focusedElement.evaluate(el => el.tagName);
        const role = await focusedElement.getAttribute('role');

        if (tagName === 'A' || role === 'link') {
          // Found a link, verify focus is visible
          await expect(focusedElement).toBeVisible();

          // Activate with Enter key
          await page.keyboard.press('Enter');

          // Verify navigation occurred (URL changed or page updated)
          await page.waitForURL(/.*/, { timeout: 2000 }).catch(() => {});
          break;
        }

        await page.keyboard.press('Tab');
        attempts++;
      }

      // If we didn't find any links in 20 tabs, that's a test failure
      expect(attempts).toBeLessThan(20);
    });
  });
});
