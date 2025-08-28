import { Page, expect } from '@playwright/test';

export class AboutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateTeamAndConsulting() {
    const content = (await this.page.locator('main, body').first().innerText()).toLowerCase();
    expect.soft(content).toContain('team');
    expect.soft(content).toContain('consulting');
    }
}