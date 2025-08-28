import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/HeaderPage';
import { ContactPage } from '../pages/ContactPage';

test.describe('Contanct page form & elements' , () => {
    test('form fields and reCAPTCHA present', async ({ page }) => {
        const header = new HeaderPage(page);
        await header.goToHome();
        await header.goToContact();
        await expect(page).toHaveURL(/contact/i)

        const contact = new ContactPage(page);
        await expect(contact.email).toBeVisible();
        await expect(contact.message).toBeVisible();
        await expect(contact.sendBtn).toBeVisible();
        await expect(contact.recaptchaFrame).toBeVisible();
    });
});