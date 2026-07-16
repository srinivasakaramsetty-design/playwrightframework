import { test } from "../fixtures/test-fixtures";
import { LoginPage } from "../pages/LoginPage";
import { ExcelReader } from "../utils/ExcelReader";
import { SearchHotelPage } from "../pages/SearchHotelPage";


const data = ExcelReader.getLoginData();


test("Search Hotel Test", async ({ page }) => {


    const loginPage = new LoginPage(page);

    const searchHotelPage = new SearchHotelPage(page);


    // Open Application

    await page.goto("https://adactinhotelapp.com");


    // Login

    await loginPage.login(
        data[0].username,
        data[0].password
    );


    await loginPage.verifyLoginSuccess();


    await loginPage.verifyLoggedInUsername(
        data[0].username
    );


    // Search Hotel Details

    await searchHotelPage.selectLocation("Sydney");


    await searchHotelPage.selectHotel("Hotel Creek");


    await searchHotelPage.selectRoomType("Standard");


    await searchHotelPage.selectNumberOfRooms("1");


    await searchHotelPage.enterCheckInDate(
        "16/07/2026"
    );


    await searchHotelPage.enterCheckOutDate(
        "17/07/2026"
    );


    await searchHotelPage.selectAdults("1");


    await searchHotelPage.selectChildren("0");


    // Click Search Button

    await searchHotelPage.clickSearchHotel();


    // Verify Select Hotel Page

    await searchHotelPage.verifySelectHotelPage();


});