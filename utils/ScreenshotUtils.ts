import { Page } from "@playwright/test";

export class ScreenshotUtils {

    static async capture(page: Page) {
        return await page.screenshot({
            path: `screenshots/failure-${Date.now()}.png`,
            fullPage: true
        });
    }

}