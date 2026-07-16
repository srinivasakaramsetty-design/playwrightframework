import { Page, Locator, expect } from "@playwright/test";


export class bookpage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly creditCardNumber: Locator;
    readonly creditCardType: Locator;
    readonly expiryMonth: Locator;
    readonly expiryYear: Locator;
    readonly cvvNumber: Locator;
    readonly bookNowButton: Locator;
    readonly orderNo: Locator;
   


    constructor(page: Page) {

        this.page = page;


        this.firstName = page.locator("#first_name");

        this.lastName = page.locator("#last_name");

        this.address = page.locator("#address");


        this.creditCardNumber = page.locator("#cc_num");

        this.creditCardType = page.locator("#cc_type");

        this.expiryMonth = page.locator("#cc_exp_month");

        this.expiryYear = page.locator("#cc_exp_year");

        this.cvvNumber = page.locator("#cc_cvv");


        this.bookNowButton = page.locator("#book_now");


        // Booking confirmation page locator
        this.orderNo = page.locator("#order_no");


    }



    async enterFirstName(firstname:string){

        await this.firstName.fill(firstname);

    }


    async enterLastName(lastname:string){

        await this.lastName.fill(lastname);

    }


    async enterAddress(address:string){

        await this.address.fill(address);

    }


    async enterCreditCardNumber(card:string){

        await this.creditCardNumber.fill(card);

    }


    async selectCreditCardType(type:string){

        await this.creditCardType.selectOption({
            label:type
        });

    }


    async selectExpiryMonth(month:string){

        await this.expiryMonth.selectOption({
            label:month
        });

    }


    async selectExpiryYear(year:string){

        await this.expiryYear.selectOption({
            label:year
        });

    }


    async enterCVV(cvv:string){

        await this.cvvNumber.fill(cvv);

    }


    async clickBookNow(){

        await this.bookNowButton.click();

    }


    async verifyBookingSuccess(){

        await expect(this.orderNo)
            .toBeVisible({
                timeout:30000
            });

        console.log("Booking completed successfully");

    }

   

}