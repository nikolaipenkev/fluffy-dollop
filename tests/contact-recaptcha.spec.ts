import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/HeaderPage';
import { ContactPage } from '../pages/ContactPage';

test.describe('Contact form submission without reCAPTCHA', () => {
    test('Shows an error when reCAPTCHA is not checked', async ({ page }) => {
        const header = new HeaderPage(page);
        await header.goToHome();
        await header.goToContact();
        await expect(page).toHaveURL(/contact/i);

        const contact = new ContactPage(page);
        await expect(contact.name).toBeVisible();
        await expect(contact.email).toBeVisible();
        await expect(contact.message).toBeVisible();
        await contact.expectRecaptchaPresent();

        await contact.fillForm({
            name: 'Иван Иванов',
            email: 'ivan.ivanov@example.com',
            message:'reCAPTCHA validation msg'
        });

        await contact.submit();
        await contact.expectRecaptchaError();
    });
});