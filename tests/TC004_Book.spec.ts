import { test } from "../fixtures/test-fixtures";
import { LoginPage } from "../pages/LoginPage";
import { ExcelReader } from "../utils/ExcelReader";
import { SearchHotelPage } from "../pages/SearchHotelPage";
import { SelectHotelPage } from "../pages/SelectHotelPage";
import { bookpage } from "../pages/bookpage";


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




    // Select Hotel Page

    const selectHotelPage = new SelectHotelPage(page);



    await selectHotelPage.selectHotel();



    await selectHotelPage.clickContinue();



    await selectHotelPage.verifyBookHotelPage();


  // Book Hotel Page

const bookHotelPage = new bookpage(page);


await bookHotelPage.enterFirstName(
    "Srinivas"
);


await bookHotelPage.enterLastName(
    "Akaramsetty"
);


await bookHotelPage.enterAddress(
    "Hyderabad"
);


await bookHotelPage.enterCreditCardNumber(
    "1234567890123456"
);


await bookHotelPage.selectCreditCardType(
    "Master Card"
);


await bookHotelPage.selectExpiryMonth(
    "December"
);


await bookHotelPage.selectExpiryYear(
    "2027"
);


await bookHotelPage.enterCVV(
    "123"
);


// Click Book Now

await bookHotelPage.clickBookNow();


// Verify Booking Confirmation

await bookHotelPage.verifyBookingSuccess();


});