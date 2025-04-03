import { browser } from "@wdio/globals";
import { goToTab, goToNewTab } from "../elements";

// HOME PAGE ELEMENTS
const HOME_PAGE_LINK = '[href="/"]';
const BUSINESS_AREAS_DROPDOWN = 'div[id="w-dropdown-toggle-0"]';
const SOLUTIONS_DROPDOWN = 'div[id="w-dropdown-toggle-1"]';
const ABOUT_DI_LINK = '[href="/about"]';
const NEWS_LINK = '[href="https://di.launchnotes.io/"]';
const CAREERS_LINK = '[href="/careers"]';
const PARCEL_LOGISTICS_LINK = '[href="/parcel-logistics"]';
const PRINT_MEDIA_LOGISTICS_LINK = '[href="/print-media-logistics"]';
const DIS_EXEC_LINK = '[href="/distribution-execution"]';
const DIS_PLAN_LINK = '[href="/distribution-planning"]';
const LOGIN_LINK = '[class*="is--login"]';
const CONTACT_LINK = '[href="/contact"]';

// HOME PAGE CHECKS
const HOME_URL = '/';
const PARCEL_LOGISTICS_URL = '/parcel-logistics';
const PRINT_MEDIA_LOGISTICS_URL = '/print-media-logistics';
const ABOUT_US_URL = '/about';
const DIS_EXEC_URL = '/distribution-execution';
const DIS_PLAN_URL = '/distribution-planning';
const CAREERS_URL = '/careers';
const NEWS_URL = 'product-news.di.no';
const LOGIN_URL = 'app.di.no/app/api/login';
const CONTACT_URL = '/contact';

describe("Home page", () => {
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(process.env.baseUrl);
    })
    describe("should open all subpages from home page", () => {
        beforeEach(async () => {
            await goToTab(HOME_PAGE_LINK, HOME_URL);
        });
        it("should open parcel logistics", async () => {
            await goToTab(PARCEL_LOGISTICS_LINK, PARCEL_LOGISTICS_URL, BUSINESS_AREAS_DROPDOWN);
        });
        it("should open print media logistics", async () => {
            await goToTab(PRINT_MEDIA_LOGISTICS_LINK, PRINT_MEDIA_LOGISTICS_URL, BUSINESS_AREAS_DROPDOWN);
        });
        it("should open distribution execution", async () => {
            await goToTab(DIS_EXEC_LINK, DIS_EXEC_URL, SOLUTIONS_DROPDOWN);
        });
        it("should open distribution planning", async () => {
            await goToTab(DIS_PLAN_LINK, DIS_PLAN_URL, SOLUTIONS_DROPDOWN);
        });
        it("should open about us", async () => {
            await goToTab(ABOUT_DI_LINK, ABOUT_US_URL);
        });
        it("should open careers", async () => {
            await goToTab(CAREERS_LINK, CAREERS_URL);
        });
        it("should open news", async () => {
            await goToNewTab(NEWS_LINK, NEWS_URL)
            await browser.closeWindow();
        });
        it("should open login", async () => {
            await goToNewTab(LOGIN_LINK, LOGIN_URL)
            await browser.closeWindow();
        });
        it("should open contact", async () => {
            await goToTab(CONTACT_LINK, CONTACT_URL);
        });
    });
});
