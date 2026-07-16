import { Page, Locator, expect } from "@playwright/test";

export class SearchHotelPage {

    readonly page: Page;

    readonly location: Locator;
    readonly hotels: Locator;
    readonly roomType: Locator;
    readonly numberOfRooms: Locator;
    readonly checkInDate: Locator;
    readonly checkOutDate: Locator;
    readonly adultsPerRoom: Locator;
    readonly childrenPerRoom: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.location = page.locator("#location");
        this.hotels = page.locator("#hotels");
        this.roomType = page.locator("#room_type");
        this.numberOfRooms = page.locator("#room_nos");
        this.checkInDate = page.locator("#datepick_in");
        this.checkOutDate = page.locator("#datepick_out");
        this.adultsPerRoom = page.locator("#adult_room");
        this.childrenPerRoom = page.locator("#child_room");
        this.searchButton = page.locator("#Submit");
    }

    async selectLocation(location: string) {
        await this.location.selectOption(location);
    }

    async selectHotel(hotel: string) {
        await this.hotels.selectOption(hotel);
    }

    async selectRoomType(roomType: string) {
        await this.roomType.selectOption(roomType);
    }

    async selectNumberOfRooms(rooms: string) {
        await this.numberOfRooms.selectOption(rooms);
    }

    async enterCheckInDate(date: string) {
        await this.checkInDate.fill(date);
    }

    async enterCheckOutDate(date: string) {
        await this.checkOutDate.fill(date);
    }

    async selectAdults(adults: string) {
        await this.adultsPerRoom.selectOption(adults);
    }

    async selectChildren(children: string) {
        await this.childrenPerRoom.selectOption(children);
    }

    async clickSearchHotel() {

        
       
            this.searchButton.click()
        

    }

    async verifySelectHotelPage() {

        await expect(this.page)
            .toHaveURL(/SelectHotel\.php/);

    }

}