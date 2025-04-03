import { expect, browser, $ } from '@wdio/globals'
import { clickElement, verifyUrl } from '../elements'
const HOME_PAGE_LINK = '[href="/"]'
const BUSINESS_AREAS_DROPDOWN = 'div[id="w-dropdown-toggle-0"]'
const SOLUTIONS_DROPDOWN = 'div[id="w-dropdown-toggle-1"]'
const ABOUT_DI_LINK = '[href="/about"]'
const NEWS_LINK = '[href="https://di.launchnotes.io/"]'
const CAREERS_LINK = '[href="/careers"]'
const PARCEL_LOGISITCS_LINK = '[href="/parcel-logistics"]'
const PRINT_MEDIA_LOGISTICS_LINK = '[href="/print-media-logistics"]'

const HOME_URL = '/'
const PARCEL_LOGISITCS_URL = '/parcel-logistics'
const PRINT_MEDIA_LOGISTICS_URL = '/print-media-logistics'
const ABOUT_US_URL = '/about'



describe('Home page', () => {
    it('should open all subpages from home page', async () => {
        await browser.url('www.di.no')
        await clickElement(BUSINESS_AREAS_DROPDOWN)
        await clickElement(PARCEL_LOGISITCS_LINK)
        await verifyUrl(PARCEL_LOGISITCS_URL)
        await clickElement(HOME_PAGE_LINK)
        await verifyUrl(HOME_URL)
        await clickElement(BUSINESS_AREAS_DROPDOWN)
        await clickElement(PRINT_MEDIA_LOGISTICS_LINK)
        await verifyUrl(PRINT_MEDIA_LOGISTICS_URL)
        await clickElement(HOME_PAGE_LINK)
        await verifyUrl(HOME_URL)
        await clickElement(ABOUT_DI_LINK)
        await verifyUrl(ABOUT_US_URL)
        await clickElement(HOME_PAGE_LINK)
        await verifyUrl(HOME_URL)
})
})

