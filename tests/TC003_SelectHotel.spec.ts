import { test } from "../fixtures/test-fixtures";
import { LoginPage } from "../pages/LoginPage";
import { ExcelReader } from "../utils/ExcelReader";
import { SearchHotelPage } from "../pages/SearchHotelPage";
import { SelectHotelPage } from "../pages/SelectHotelPage";
import { logger } from "../utils/Logger";

const data = ExcelReader.getLoginData();


test("Search Hotel Test", async ({ page }) => {


    logger.info("==== Select Hotel Test =======");
    const loginPage = new LoginPage(page);

    const searchHotelPage = new SearchHotelPage(page);


    // Open Application


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

    // select hotel

    const selectHotelPage = new SelectHotelPage(page);

    // Select first hotel
   await selectHotelPage.selectHotel();

// Click Continue
   await selectHotelPage.clickContinue();

   logger.info("Click on continue button");

// Verify Book Hotel page
   await selectHotelPage.verifyBookHotelPage();

   logger.info("verify book hotel page");


});