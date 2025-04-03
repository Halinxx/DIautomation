import { expect, browser, $ } from '@wdio/globals'
import { clickElement, verifyUrl, goToTab } from '../elements'
const HOME_PAGE_LINK = '[href="/"]'
const BUSINESS_AREAS_DROPDOWN = 'div[id="w-dropdown-toggle-0"]'
const SOLUTIONS_DROPDOWN = 'div[id="w-dropdown-toggle-1"]'
const ABOUT_DI_LINK = '[href="/about"]'
const NEWS_LINK = '[href="https://di.launchnotes.io/"]'
const CAREERS_LINK = '[href="/careers"]'
const PARCEL_LOGISITCS_LINK = '[href="/parcel-logistics"]'
const PRINT_MEDIA_LOGISTICS_LINK = '[href="/print-media-logistics"]'
const DIS_EXEC_LINK = '[href="/distribution-execution"]'
const DIS_PLAN_LINK = '[href="/distribution-planning"]'
const LOGIN_LINK = '[class*="is--login"]'
const CONTACT_LINK = '[href="/contact"]'

const HOME_URL = '/'
const PARCEL_LOGISITCS_URL = '/parcel-logistics'
const PRINT_MEDIA_LOGISTICS_URL = '/print-media-logistics'
const ABOUT_US_URL = '/about'
const DIS_EXEC_URL = '/distribution-execution'
const DIS_PLAN_URL = '/distribution-planning'
const CAREERS_URL = '/careers'
const NEWS_URL= 'product-news.di.no'
const LOGIN_URL = 'app.di.no/app/api/login'
const CONTACT_URL = '/contact'




describe('Home page', () => {
    it('should open all subpages from home page', async () => {
        await browser.url('www.di.no')

        await goToTab(PARCEL_LOGISITCS_LINK, PARCEL_LOGISITCS_URL,BUSINESS_AREAS_DROPDOWN)

        await goToTab(HOME_PAGE_LINK, HOME_URL)

        await goToTab(PRINT_MEDIA_LOGISTICS_LINK, PRINT_MEDIA_LOGISTICS_URL,BUSINESS_AREAS_DROPDOWN)

        await goToTab(HOME_PAGE_LINK, HOME_URL)

        await goToTab(DIS_EXEC_LINK, DIS_EXEC_URL, SOLUTIONS_DROPDOWN)

        await goToTab(HOME_PAGE_LINK, HOME_URL)

        await goToTab(DIS_PLAN_LINK, DIS_PLAN_URL, SOLUTIONS_DROPDOWN)

        await goToTab(HOME_PAGE_LINK, HOME_URL)

        await goToTab(ABOUT_DI_LINK, ABOUT_US_URL)

        await goToTab(HOME_PAGE_LINK, HOME_URL)

        await goToTab(CAREERS_LINK, CAREERS_URL)

        await goToTab(HOME_PAGE_LINK, HOME_URL)

        // We need to switch to news tab before reading url
        await clickElement(NEWS_LINK)
        await browser.switchWindow(NEWS_URL)
        await verifyUrl(NEWS_URL)
        await browser.closeWindow()

        await browser.switchWindow(HOME_URL)
        await verifyUrl(HOME_URL)

        // We need to switch to login tab before reading url
        await clickElement(LOGIN_LINK)
        await browser.switchWindow(LOGIN_URL)
        await verifyUrl(LOGIN_URL)
        await browser.closeWindow()

        await browser.switchWindow(HOME_URL)
        await verifyUrl(HOME_URL)

        await goToTab(CONTACT_LINK, CONTACT_URL)

})
})

