import { test as base, expect } from "@playwright/test";
import { ConfigReader } from "../utils/ConfigReader";
import * as allure from "allure-js-commons";
import { ScreenshotUtils } from "../utils/ScreenshotUtils";
import { logger } from "../utils/Logger";


export const test = base.extend({

    page: async ({ page }, use, testInfo) => {


        logger.info(
            "========== Test Started =========="
        );

        logger.info(
            "Test Name : " + testInfo.title
        );


        // Open URL before every test
        await page.goto(
            ConfigReader.getUrl()
        );


        logger.info(
            "Application URL opened"
        );


        // Set timeout
        page.setDefaultTimeout(
            ConfigReader.getExplicitWait()
        );


        try {


            // Execute test
            await use(page);


            logger.info(
                "Test Passed : " + testInfo.title
            );


        } catch(error) {


            logger.error(
                "Test Failed : " + testInfo.title
            );


            throw error;


        }
        finally {


            if (testInfo.status !== testInfo.expectedStatus) {


                try {


                    const screenshot =
                        await ScreenshotUtils.capture(page);



                    await allure.attachment(
                        "Failure Screenshot",
                        screenshot,
                        {
                            contentType:"image/png"
                        }
                    );


                    logger.info(
                        "Failure screenshot attached"
                    );


                } catch(error) {


                    logger.error(
                        "Unable to capture screenshot : " + error
                    );


                }

            }


            logger.info(
                "========== Test Completed =========="
            );

        }

    }

});


export { expect };