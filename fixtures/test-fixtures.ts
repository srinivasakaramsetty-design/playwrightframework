import { test as base, expect } from "@playwright/test";
import { ConfigReader } from "../utils/ConfigReader";
import * as allure from "allure-js-commons";
import { ScreenshotUtils } from "../utils/ScreenshotUtils";

export const test = base.extend({

    page: async ({ page }, use, testInfo) => {

        // Open URL before every test
        await page.goto(ConfigReader.getUrl());

        // Set timeout
        page.setDefaultTimeout(
            ConfigReader.getExplicitWait()
        );

        // Execute the test
        await use(page);

        // Attach screenshot to Allure if test fails
        if (testInfo.status !== testInfo.expectedStatus) {

            try {

                const screenshot = await ScreenshotUtils.capture(page);

                await allure.attachment(
                    "Failure Screenshot",
                    screenshot,
                    {
                        contentType: "image/png"
                    }
                );

            } catch (error) {
                console.log("Unable to capture screenshot:", error);
            }
        }
    }

});

export { expect };