import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/HeaderPage';
import { AboutPage } from '../pages/AboutPage';

test.describe('About Us dropdown pages', () => {
    test('Our Company contains team and consulting', async ({ page }) => {
        const header = new HeaderPage(page);
        const about = new AboutPage(page);
        await header.goToHome();
        await header.goToOurCompany();
        await expect(page).toHaveURL(/about-us/i);
        await about.validateTeamAndConsulting();
    });

    test('Core Values and Vision contains team and consulting', async ({ page }) => {
        const header = new HeaderPage(page);
        const about = new AboutPage(page);
        await header.goToHome();
        await header.goToCoreValues();
        await expect(page).toHaveURL(/values|vision/i);
        await about.validateTeamAndConsulting();
    });
});