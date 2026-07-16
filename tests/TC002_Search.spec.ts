import { test } from "../fixtures/test-fixtures";
import { LoginPage } from "../pages/LoginPage";
import { ExcelReader } from "../utils/ExcelReader";
import { SearchHotelPage } from "../pages/SearchHotelPage";
import { logger } from "../utils/Logger";


const data = ExcelReader.getLoginData();


test("Search Hotel Test", async ({ page }) => {

  logger.info("Application opened");
    const loginPage = new LoginPage(page);
   

    const searchHotelPage = new SearchHotelPage(page);


    // Open Application



    // Login

    await loginPage.login(
        data[0].username,
        data[0].password
    );

     logger.info("Application login successfull");


    await loginPage.verifyLoginSuccess();


    logger.info("verify username");
    await loginPage.verifyLoggedInUsername(
        data[0].username
    );

    
    logger.info("verify search hotel page ... ");

  

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

      logger.info("Hotel search completed");

    await searchHotelPage.verifySelectHotelPage();

    logger.info("hotel select page is dsiplayed ... ")


});