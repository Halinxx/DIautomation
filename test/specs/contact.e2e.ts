import { goToTab, addValue } from "../elements";

// CONTACT PAGE ELEMENTS
const CONTACT_LINK = '[href="/contact"]';
const NAME_INPUT = '[id="name"]';
const EMAIL_INPUT = '[id="email"]';
const COMPANY_INPUT = '[id="Company-name"]';
const MESSAGE_INPUT = '[id="field"]';

// CONTACT PAGE CHECKS
const CONTACT_URL = '/contact';
const NAME = 'name';
const EMAIL = 'email@email.com';
const COMPANY = 'company';
const MESSAGE = 'message';

describe("Contact", () => {
  it("should fill contact form", async () => {

    await goToTab(CONTACT_LINK, CONTACT_URL);
    await addValue(NAME_INPUT, NAME);
    await addValue(EMAIL_INPUT, EMAIL);
    await addValue(COMPANY_INPUT, COMPANY);
    await addValue(MESSAGE_INPUT, MESSAGE);
    
  });
});
