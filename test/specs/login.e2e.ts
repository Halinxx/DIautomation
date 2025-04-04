import { expect } from "@wdio/globals";
import { clickElement, verifyUrl, addValue, getElement, goToNewTab } from "../elements";

// LOGIN PAGE ELEMENTS
const LOGIN_LINK = '[class*="is--login"]';
const USERNAME_INPUT = '[id="username"]';
const PASSWORD_INPUT = '[id="password"]';
const LOGIN_BUTTON = '[name="login"]';
const LOGIN_ERROR_TEXT = '[class="login-error"]';
const FORGOTTEN_PASS_LINK = '[href="/auth/static/password/"]';
const CANCEL_BUTTON = '[href="/app"]';

// LOGIN PAGE CHECKS
const LOGIN_URL = 'app.di.no/app/api/login';
const FORGOTTEN_PASS_URL = 'app.di.no/auth/static/password/reset';


describe("Login", () => {
   beforeEach(async () => {
      await goToNewTab(LOGIN_LINK, LOGIN_URL)
    })
  it("should show error when login and password are incorrect", async () => {

    await addValue(USERNAME_INPUT, process.env.USERNAME);
    await addValue(PASSWORD_INPUT, process.env.PASSWORD);

    await clickElement(LOGIN_BUTTON);

    const loginErrorText = await getElement(LOGIN_ERROR_TEXT);
    expect(loginErrorText).toBeDisplayed();

  });
  it("should open forgotten password page and cancel", async () => {

    await clickElement(FORGOTTEN_PASS_LINK);
    await verifyUrl(FORGOTTEN_PASS_URL);

    await clickElement(CANCEL_BUTTON);
    await verifyUrl(LOGIN_URL);
    
  });
});
