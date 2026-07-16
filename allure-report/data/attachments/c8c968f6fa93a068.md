# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Adactin Login Test
- Location: tests\example.spec.ts:9:5

# Error details

```
Test timeout of 10000ms exceeded.
```

```
Error: locator.click: Test timeout of 10000ms exceeded.
Call log:
  - waiting for locator('#login123')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
      - 'row "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android. Existing User Login - Build 1 Username srinivas1234 Password DFD5F1 Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com" [ref=e13]':
        - cell "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android." [ref=e14]:
          - paragraph [ref=e15]: Adactin Launches The Adactin Hotel App!
          - table [ref=e16]:
            - rowgroup [ref=e17]:
              - row "Hotel Image 3" [ref=e18]:
                - cell "Hotel Image 3" [ref=e19]:
                  - img "Hotel Image 3" [ref=e20]
              - row "The best Free learning platform for Software Testing Now available to download for free on IOS and Android." [ref=e21]:
                - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android." [ref=e22]:
                  - text: The best Free learning platform for Software Testing
                  - text: Now available to download for free on IOS and Android.
          - table [ref=e23]:
            - rowgroup [ref=e24]:
              - row [ref=e25]:
                - cell [ref=e26]:
                  - link [ref=e27] [cursor=pointer]:
                    - /url: https://testflight.apple.com/join/Ai3nVPMD
                    - img [ref=e28]
                - cell [ref=e29]:
                  - link [ref=e30] [cursor=pointer]:
                    - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
                    - img [ref=e31]
        - 'cell "Existing User Login - Build 1 Username srinivas1234 Password DFD5F1 Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com" [ref=e32]':
          - table [ref=e34]:
            - rowgroup [ref=e35]:
              - row "Existing User Login - Build 1" [ref=e36]:
                - cell "Existing User Login - Build 1" [ref=e37]
              - row "Username srinivas1234" [ref=e38]:
                - cell "Username" [ref=e39]
                - cell "srinivas1234" [ref=e40]:
                  - textbox [ref=e41]: srinivas1234
              - row "Password DFD5F1" [ref=e42]:
                - cell "Password" [ref=e43]
                - cell "DFD5F1" [ref=e44]:
                  - textbox [active] [ref=e45]: DFD5F1
              - row "Forgot Password?" [ref=e46]:
                - cell [ref=e47]
                - cell "Forgot Password?" [ref=e48]:
                  - link "Forgot Password?" [ref=e50] [cursor=pointer]:
                    - /url: ForgotPassword.php
              - row [ref=e51]:
                - cell [ref=e52]
                - cell [ref=e53]
              - row "Login" [ref=e54]:
                - cell [ref=e55]
                - cell "Login" [ref=e56]:
                  - button "Login" [ref=e57]
              - row "New User Register Here" [ref=e58]:
                - cell "New User Register Here" [ref=e59]:
                  - link "New User Register Here" [ref=e60] [cursor=pointer]:
                    - /url: Register.php
          - table [ref=e61]:
            - rowgroup [ref=e62]:
              - row "Important Note:" [ref=e63]:
                - cell "Important Note:" [ref=e64]
              - 'row "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2" [ref=e65]':
                - 'cell "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2" [ref=e66]':
                  - text: "Hotel Application has 2 builds:"
                  - list [ref=e67]:
                    - listitem [ref=e68]:
                      - strong [ref=e69]: Build 1
                      - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                    - listitem [ref=e70]:
                      - strong [ref=e71]: Build 2
                      - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                      - link "Go to Build 2" [ref=e72] [cursor=pointer]:
                        - /url: ../HotelAppBuild2
                        - strong [ref=e73]: Go to Build 2
              - 'row "For any queries/issues please email: info@adactin.com" [ref=e74]':
                - 'cell "For any queries/issues please email: info@adactin.com" [ref=e75]':
                  - text: "For any queries/issues please email:"
                  - link "info@adactin.com" [ref=e76] [cursor=pointer]:
                    - /url: mailto:info@adactin.com
  - table [ref=e77]:
    - rowgroup [ref=e78]:
      - row [ref=e79]:
        - cell [ref=e80]
      - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd." [ref=e81]:
        - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd." [ref=e82]:
          - text: © 2026 -
          - link "Adactin.com" [ref=e83] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | 
  4  | export class LoginPage {
  5  | 
  6  | 
  7  |     readonly page: Page;
  8  | 
  9  |     readonly username: Locator;
  10 |     readonly password: Locator;
  11 |     readonly loginButton: Locator;
  12 | 
  13 | 
  14 |     constructor(page: Page) {
  15 | 
  16 |         this.page = page;
  17 | 
  18 |         this.username = page.locator("#username");
  19 | 
  20 |         this.password = page.locator("#password");
  21 | 
  22 |         this.loginButton = page.locator("#login123");
  23 | 
  24 |     }
  25 | 
  26 | 
  27 |     async enterUsername(username: string) {
  28 | 
  29 |         await this.username.fill(username);
  30 | 
  31 |     }
  32 | 
  33 | 
  34 |     async enterPassword(password: string) {
  35 | 
  36 |         await this.password.fill(password);
  37 | 
  38 |     }
  39 | 
  40 | 
  41 |     async clickLogin() {
  42 | 
> 43 |         await this.loginButton.click();
     |                                ^ Error: locator.click: Test timeout of 10000ms exceeded.
  44 | 
  45 |     }
  46 | 
  47 | 
  48 |     async login(username: string, password: string) {
  49 | 
  50 |         await this.enterUsername(username);
  51 | 
  52 |         await this.enterPassword(password);
  53 | 
  54 |         await this.clickLogin();
  55 | 
  56 |     }
  57 | 
  58 | 
  59 |     async verifyLoginSuccess() {
  60 | 
  61 |         await expect(this.page)
  62 |             .toHaveURL(/SearchHotel/);
  63 | 
  64 |     }
  65 | 
  66 | }
```