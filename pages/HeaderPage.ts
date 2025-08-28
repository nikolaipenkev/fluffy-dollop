import { Page, Locator, expect } from '@playwright/test';

export class HeaderPage {
    readonly page: Page;
    readonly home: Locator;
    readonly services: Locator;
    readonly contact: Locator;
    readonly about: Locator;
    readonly ourCompany: Locator;
    readonly coreValues: Locator;

    constructor(page: Page) {
        this.page = page;
        this.home = page.getByRole('link', { name: /^home$/i }).first();
        this.services = page.getByRole('link', { name: /services/i }).first();
        this.contact = page.getByRole('link', { name: /contact/i }).first();
        this.about = page.locator('#menu-item-5815').getByText('About us').first();
        this.ourCompany = page.getByRole('link', { name: 'Our Company' }).first();
        this.coreValues = page.getByRole('link', { name: 'Core Values and Vision' }).first();
    }

    async goToHome() {
        await this.page.goto('/', { timeout: 10000 });
    }

    async openAboutDropdown() {
        await this.about.hover({ force: true });
        await this.ourCompany.waitFor({ state: 'visible' });
        await this.coreValues.waitFor({ state: 'visible' });
    }

    async goToServices() {
        await this.services.click();
    }

    async goToContact() {
        await this.contact.click();
    }

    async goToOurCompany() {
        await this.openAboutDropdown();
        await this.ourCompany.waitFor({ state: 'visible' });
        await this.ourCompany.waitFor({ state: 'attached' });
        await this.ourCompany.click({ force: true });
    }

    async goToCoreValues() {
        await this.openAboutDropdown();
        await this.coreValues.click({ force: true });
    }
}