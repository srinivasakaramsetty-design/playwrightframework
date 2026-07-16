# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Hotel Test
- Location: tests\search.spec.ts:10:5

# Error details

```
Test timeout of 10000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 10000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - 'row "AdactIn Group Adactin Group: Hotel Reservation System" [ref=e4]':
        - cell "AdactIn Group" [ref=e5]:
          - img "AdactIn Group" [ref=e6]
        - 'cell "Adactin Group: Hotel Reservation System" [ref=e7]':
          - 'img "Adactin Group: Hotel Reservation System" [ref=e8]'
      - row [ref=e9]:
        - cell [ref=e10]
  - table [ref=e11]:
    - rowgroup [ref=e12]:
      - row "Welcome to Adactin Group of Hotels Hello Username! Search Hotel | Booked Itinerary | Change Password | Logout Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!" [ref=e13]:
        - cell "Welcome to Adactin Group of Hotels" [ref=e14]
        - cell "Hello Username! Search Hotel | Booked Itinerary | Change Password | Logout" [ref=e15]:
          - text: Hello Username!
          - link "Search Hotel" [ref=e16] [cursor=pointer]:
            - /url: SearchHotel.php
          - text: "|"
          - link "Booked Itinerary" [ref=e17] [cursor=pointer]:
            - /url: BookedItinerary.php
          - text: "|"
          - link "Change Password" [ref=e18] [cursor=pointer]:
            - /url: ChangePassword.php
          - text: "|"
          - link "Logout" [ref=e19] [cursor=pointer]:
            - /url: Logout.php
        - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!" [ref=e20]:
          - table [ref=e21]:
            - rowgroup [ref=e22]:
              - row "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS." [ref=e23]:
                - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS." [ref=e24]:
                  - heading "Adactin Hotel Mobile App" [level=4] [ref=e25]
                  - link "DOWNLOAD" [ref=e26] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                  - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
              - row "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more." [ref=e27]:
                - cell "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more." [ref=e28]:
                  - heading "HotelApp Web Services" [level=4] [ref=e29]
                  - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                  - link "Click" [ref=e30] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                  - text: to know more.
              - row "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!" [ref=e31]:
                - cell "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!" [ref=e32]:
                  - heading "Sample TestCases" [level=4] [ref=e33]
                  - link "DOWNLOAD" [ref=e34] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                  - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
              - row "Known Defects DOWNLOAD list of known defects for this application." [ref=e35]:
                - cell "Known Defects DOWNLOAD list of known defects for this application." [ref=e36]:
                  - heading "Known Defects" [level=4] [ref=e37]
                  - link "DOWNLOAD" [ref=e38] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                  - text: list of known defects for this application.
              - row "Book on Automation" [ref=e39]:
                - cell "Book on Automation" [ref=e40]:
                  - heading "Book on Automation" [level=4] [ref=e41]
                  - iframe [ref=e42]:
                    
              - row "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!" [ref=e43]:
                - cell "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!" [ref=e44]:
                  - heading "About Adactin" [level=4] [ref=e45]
                  - text: Get solutions for all your testing needs. Visit
                  - link "www.adactin.com" [ref=e46] [cursor=pointer]:
                    - /url: http://www.adactin.com
                  - text: today!
      - row "Select Hotel Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Creek Sydney 1 Rooms 16/07/2026 17/07/2026 1 Days Standard AUD $ 125 AUD $ 135 Continue Cancel" [ref=e47]:
        - cell "Select Hotel Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Creek Sydney 1 Rooms 16/07/2026 17/07/2026 1 Days Standard AUD $ 125 AUD $ 135 Continue Cancel" [ref=e48]:
          - table [ref=e50]:
            - rowgroup [ref=e51]:
              - row "Select Hotel" [ref=e52]:
                - cell "Select Hotel" [ref=e53]
              - row "Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Creek Sydney 1 Rooms 16/07/2026 17/07/2026 1 Days Standard AUD $ 125 AUD $ 135" [ref=e54]:
                - cell "Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Creek Sydney 1 Rooms 16/07/2026 17/07/2026 1 Days Standard AUD $ 125 AUD $ 135" [ref=e55]:
                  - table [ref=e56]:
                    - rowgroup [ref=e57]:
                      - row "Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST)" [ref=e58]:
                        - cell "Select" [ref=e59]:
                          - strong [ref=e60]: Select
                        - cell "Hotel Name" [ref=e61]:
                          - strong [ref=e62]: Hotel Name
                        - cell "Location" [ref=e63]:
                          - strong [ref=e64]: Location
                        - cell "Rooms" [ref=e65]:
                          - strong [ref=e66]: Rooms
                        - cell "Arrival Date" [ref=e67]:
                          - strong [ref=e68]: Arrival Date
                        - cell "Departure Date" [ref=e69]:
                          - strong [ref=e70]: Departure Date
                        - cell "No. of Days" [ref=e71]:
                          - strong [ref=e72]: No. of Days
                        - cell "Rooms Type" [ref=e73]:
                          - strong [ref=e74]: Rooms Type
                        - cell "Price per Night" [ref=e75]:
                          - strong [ref=e76]: Price per Night
                        - cell "Total Price (excl. GST)" [ref=e77]:
                          - strong [ref=e78]: Total Price (excl. GST)
                      - row "Hotel Creek Sydney 1 Rooms 16/07/2026 17/07/2026 1 Days Standard AUD $ 125 AUD $ 135" [ref=e79]:
                        - cell [ref=e80]:
                          - radio [ref=e81]
                        - cell "Hotel Creek" [ref=e82]:
                          - textbox [ref=e83]: Hotel Creek
                        - cell "Sydney" [ref=e84]:
                          - textbox [ref=e85]: Sydney
                        - cell "1 Rooms" [ref=e86]:
                          - textbox [ref=e87]: 1 Rooms
                        - cell "16/07/2026" [ref=e88]:
                          - textbox [ref=e89]: 16/07/2026
                        - cell "17/07/2026" [ref=e90]:
                          - textbox [ref=e91]: 17/07/2026
                        - cell "1 Days" [ref=e92]:
                          - textbox [ref=e93]: 1 Days
                        - cell "Standard" [ref=e94]:
                          - textbox [ref=e95]: Standard
                        - cell "AUD $ 125" [ref=e96]:
                          - textbox [ref=e97]: AUD $ 125
                        - cell "AUD $ 135" [ref=e98]:
                          - textbox [ref=e99]: AUD $ 135
              - row "Continue Cancel" [ref=e100]:
                - cell "Continue Cancel" [ref=e101]:
                  - button "Continue" [ref=e102]
                  - button "Cancel" [ref=e103]
  - table [ref=e104]:
    - rowgroup [ref=e105]:
      - row [ref=e106]:
        - cell [ref=e107]
      - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd." [ref=e108]:
        - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd." [ref=e109]:
          - text: © 2026 -
          - link "Adactin.com" [ref=e110] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import { test } from "../fixtures/test-fixtures";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { ExcelReader } from "../utils/ExcelReader";
  4  | import { SearchHotelPage } from "../pages/SearchHotelPage";
  5  | 
  6  | 
  7  | const data = ExcelReader.getLoginData();
  8  | 
  9  | 
  10 | test("Search Hotel Test", async ({ page }) => {
  11 | 
  12 |     const loginPage = new LoginPage(page);
  13 | 
  14 | 
  15 | 
  16 |     const searchHotelPage = new SearchHotelPage(page);
  17 | 
  18 | 
  19 |     // Open Application
  20 | 
  21 |     await page.goto("https://adactinhotelapp.com");
  22 | 
  23 | 
  24 |     // Login
  25 | 
  26 |     await loginPage.login(
  27 |         data[0].username,
  28 |         data[0].password
  29 |     );
  30 | 
  31 | 
  32 |     await loginPage.verifyLoginSuccess();
  33 | 
  34 | 
  35 |     await loginPage.verifyLoggedInUsername(
  36 |         data[0].username
  37 |     );
  38 | 
  39 | 
  40 |     // Search Hotel Details
  41 | 
  42 |     await searchHotelPage.selectLocation("Sydney");
  43 | 
  44 | 
  45 |     await searchHotelPage.selectHotel("Hotel Creek");
  46 | 
  47 | 
  48 |     await searchHotelPage.selectRoomType("Standard");
  49 | 
  50 | 
  51 |     await searchHotelPage.selectNumberOfRooms("1");
  52 | 
  53 | 
  54 |     await searchHotelPage.enterCheckInDate(
  55 |         "16/07/2026"
  56 |     );
  57 | 
  58 | 
  59 |     await searchHotelPage.enterCheckOutDate(
  60 |         "17/07/2026"
  61 |     );
  62 | 
  63 | 
  64 |     await searchHotelPage.selectAdults("1");
  65 | 
  66 | 
  67 |     await searchHotelPage.selectChildren("0");
  68 | 
  69 | 
  70 |     // Click Search Button
  71 | 
  72 |     await searchHotelPage.clickSearchHotel();
  73 | 
> 74 |     await page.waitForTimeout(5000);
     |                ^ Error: page.waitForTimeout: Test timeout of 10000ms exceeded.
  75 | 
  76 | 
  77 |     // Verify Select Hotel Page
  78 | 
  79 |     await searchHotelPage.verifySelectHotelPage();
  80 | 
  81 | 
  82 | });
```