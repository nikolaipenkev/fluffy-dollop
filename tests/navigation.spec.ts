import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/HeaderPage';

test.describe('Header navigation', () => {
  test('Main nav links and About Us dropdown', async ({ page }, testInfo) => {
    const header = new HeaderPage(page);
    await header.goToHome();

    await expect(header.home).toBeVisible();
    await expect(header.services).toBeVisible();
    await expect(header.contact).toBeVisible();
    await expect(header.about).toBeVisible();

    await header.goToServices();
    await expect(page).toHaveURL(/services/i);

    await header.goToContact();
    await expect(page).toHaveURL(/contact-us/i);

    await header.goToHome();
    await expect(page).toHaveURL(/\/$/);

    await header.openAboutDropdown();
    await expect(header.ourCompany).toBeVisible();
    await expect(header.coreValues).toBeVisible();
  });
});
