import { test, expect } from "../fixtures/test-fixtures";
import { LoginPage } from "../pages/LoginPage";
import { ExcelReader } from "../utils/ExcelReader";
import { logger } from "../utils/Logger";


const data = ExcelReader.getLoginData();


test("Adactin Login Test", async ({ page }) => {

    logger.info("===== Test Started =====");

    const loginPage = new LoginPage(page);

      logger.info("Application opened");


    await loginPage.login(
        data[0].username,
        data[0].password
    );

     logger.info("Login completed successfully");


    await loginPage.verifyLoginSuccess();

    await expect(loginPage.usernameShow)
    .toBeVisible();

    await expect(loginPage.usernameShow)
    .toHaveValue(`Hello ${data[0].username}!`);

     await loginPage.verifyLoggedInUsername(
     data[0].username
);


});