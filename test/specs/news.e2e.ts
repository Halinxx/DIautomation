import { browser } from "@wdio/globals";
import { clickElement, verifyUrl, addValue } from "../elements";

// NEWS PAGE ELEMENTS
const NEWS_LINK = '[href="https://di.launchnotes.io/"]';
const SUBSCRIBE_BUTTON = '[class*="subscribe-button"]';
const EMAIL_INPUT = '[id="subscriber_email"]';

// NEWS PAGE CHECKS
const NEWS_URL = 'product-news.di.no';
const EMAIL = 'email@email.com';


describe("Home page", () => {
    it("should open all subpages from home page", async () => {

        await clickElement(NEWS_LINK);
        // We need to switch to news tab before reading url
        await browser.switchWindow(NEWS_URL);
        await verifyUrl(NEWS_URL);
        await clickElement(SUBSCRIBE_BUTTON);
        await addValue(EMAIL_INPUT, EMAIL);

    });
});
