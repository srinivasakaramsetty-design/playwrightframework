import { Page, Locator, expect } from "@playwright/test";

export class SelectHotelPage {

    readonly page: Page;

    readonly hotelRadioButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.hotelRadioButton = page.locator("#radiobutton_0");

        this.continueButton = page.locator("#continue");

    }

    async selectHotel() {

        await this.hotelRadioButton.check();

    }

    async clickContinue() {

        await Promise.all([
            this.page.waitForURL(/BookHotel/),
            this.continueButton.click()
        ]);

    }

    async verifyBookHotelPage() {

        await expect(this.page)
            .toHaveURL(/BookHotel/);

    }

}