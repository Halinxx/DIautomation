import { expect, browser, $ } from '@wdio/globals'
import { clickElement, verifyUrl, goToTab, getElement, addValue } from '../elements'

const CONTACT_LINK = '[href="/contact"]'
const NAME_INPUT = '[id="name"]'
const EMAIL_INPUT = '[id="email"]'
const COMPANY_INPUT = '[id="Company-name"]'
const MESSAGE_INPUT = '[id="field"]'

const CONTACT_URL = '/contact'
const NAME = "name"
const EMAIL = "email@email.com"
const COMPANY = "company"
const MESSAGE = "message"





describe('Contact', () => {
    it('should fill contact form', async () => {
        await browser.url('www.di.no')

        await goToTab(CONTACT_LINK, CONTACT_URL)
                await addValue(NAME_INPUT, NAME)
                await addValue(EMAIL_INPUT, EMAIL)
                await addValue(COMPANY_INPUT, COMPANY)
                await addValue(MESSAGE_INPUT, MESSAGE)
        
})
})

