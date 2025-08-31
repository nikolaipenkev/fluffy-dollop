import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly message: Locator;
    readonly sendBtn: Locator;
    readonly recaptchaFrame: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.getByRole('textbox', { name: 'Your Name*' }).first();
        this.email = page.getByRole('textbox', { name: 'Your Email*' }).first();
        this.message = page.getByRole('textbox', { name: 'Your Message*' }).first();
        this.sendBtn = page.getByRole('button', { name: /send/i }).first();
        this.recaptchaFrame = page.locator('iframe[title*="recaptcha" i], div.g-recaptcha iframe').first();
    }

    async fillForm(data: { name: string; email: string; message: string; }) {
        await this.name.fill(data.name);
        await this.email.fill(data.email);
        await this.message.fill(data.message);
    }

    async submit() {
        await this.sendBtn.click()
    }

    async expectRecaptchaPresent() {
        await this.recaptchaFrame.waitFor({ state: 'visible' })
    }

    async expectRecaptchaError() {
        const recaptchaError = this.page.locator('.wpcf7-not-valid-tip', { hasText: 'Please verify that you are not a robot.' });
        await expect(recaptchaError).toBeVisible({ timeout: 30000 });
    }
}