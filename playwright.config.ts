import { defineConfig } from "@playwright/test";

export default defineConfig({

    testDir: "./tests",
     fullyParallel: false,

    workers: 1,

    timeout: 20000, // Maximum time for one test

    expect: {
        timeout: 15000 // Maximum time for each expect()
    },

    use: {

        headless: false,

        screenshot: "only-on-failure",

        video: "retain-on-failure",

        trace: "retain-on-failure"

    },

    reporter: [

        ["html"],

        ["allure-playwright"]

    ]

});