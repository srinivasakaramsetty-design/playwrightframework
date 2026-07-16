import { test, expect } from "../fixtures/test-fixtures";
import { LoginPage } from "../pages/LoginPage";
import { ExcelReader } from "../utils/ExcelReader";


const data = ExcelReader.getLoginData();


test("Adactin Login Test", async ({ page }) => {


    const loginPage = new LoginPage(page);


    await loginPage.login(
        data[0].username,
        data[0].password
    );


    await loginPage.verifyLoginSuccess();

    await expect(loginPage.usernameShow)
    .toBeVisible();

    await expect(loginPage.usernameShow)
    .toHaveValue(`Hello ${data[0].username}!`);

     await loginPage.verifyLoggedInUsername(
     data[0].username
);


});