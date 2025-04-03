import { expect, browser, $ } from '@wdio/globals'
import { clickElement, verifyUrl, goToTab, getElement } from '../elements'

const LOGIN_LINK = '[class*="is--login"]'
const USERNAME_INPUT = '[id="username"]'
const PASSWORD_INPUT = '[id="password"]'
const LOGIN_BUTTON = '[name="login"]'
const LOGIN_ERROR_TEXT = '[class="login-error"]'
const FORGOTTEN_PASS_LINK = '[href="/auth/static/password/"]'
const CANCEL_BUTTON = '[href="/app"]'

const LOGIN_URL = 'app.di.no/app/api/login'
const FORGOTTEN_PASS_URL = 'app.di.no/auth/static/password/reset'
// It is better to store user data in env file and to not add it to repo :)
const USERNAME = "username1"
const PASSWORD = "password1"






describe('Home page', () => {
    it('should show error when login and password are incorrect', async () => {
        await browser.url('www.di.no')

        // We need to switch to login tab before reading url
        await clickElement(LOGIN_LINK)
        await browser.switchWindow(LOGIN_URL)
        await verifyUrl(LOGIN_URL)

        await clickElement(USERNAME_INPUT);
        const usernameInput = await getElement(USERNAME_INPUT);
        usernameInput.addValue(USERNAME);
        await clickElement(PASSWORD_INPUT);
        const passwordInput = await getElement(PASSWORD_INPUT);
        passwordInput.addValue(PASSWORD);
        await clickElement(LOGIN_BUTTON);

        expect($(LOGIN_ERROR_TEXT)).toBeDisplayed();
})
it('should open forgotten password page and go back', async () => {
    await clickElement(FORGOTTEN_PASS_LINK)
    await verifyUrl(FORGOTTEN_PASS_URL)
    await clickElement(CANCEL_BUTTON)
    await verifyUrl(LOGIN_URL)
})
})

