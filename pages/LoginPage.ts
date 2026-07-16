import { Page, Locator, expect } from "@playwright/test";


export class LoginPage {


    readonly page: Page;

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly usernameShow: Locator;


    constructor(page: Page) {

        this.page = page;

        this.username = page.locator("#username");

        this.password = page.locator("#password");

        this.loginButton = page.locator("#login");

        this.usernameShow = page.locator("#username_show");

    }


    async enterUsername(username: string) {

        await this.username.fill(username);

    }


    async enterPassword(password: string) {

        await this.password.fill(password);

    }


    async clickLogin() {

        await this.loginButton.click();

    }


    async login(username: string, password: string) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();

    }


    async verifyLoginSuccess() {

        await expect(this.page)
            .toHaveURL(/SearchHotel/);

    }

async verifyLoginUser(username: string) {

    await expect(this.usernameShow)
        .toBeVisible();

    await expect(this.usernameShow)
        .toHaveValue(`Hello ${username}!`);

    const actualUsername = await this.usernameShow.inputValue();

    console.log("Logged in username : " + actualUsername);

    await expect(actualUsername)
        .toContain(username);

}

async verifyLoggedInUsername(expectedUsername: string) {

    await expect(this.usernameShow)
        .toBeVisible();


    await expect(this.usernameShow)
        .toHaveValue(`Hello ${expectedUsername}!`);


    const actualUsername = await this.usernameShow.inputValue();


    console.log("Logged in username : " + actualUsername);


    await expect(actualUsername)
        .toContain(expectedUsername);

}


}