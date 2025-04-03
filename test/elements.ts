export async function clickElement(selector: string) {
    const el = await browser.$(selector);
    await browser.waitUntil(() => el.isClickable());
    await el.click();
    // using pause to make sure it has enough time to load
    await browser.pause(1000);
}

export async function verifyUrl(url: string) {
    expect(await browser.getUrl()).toContain(url);
}

export async function goToTab(tab: string, url: string, dropdown?: string) {
    if (dropdown) clickElement(dropdown);
    await clickElement(tab);
    await verifyUrl(url);
}
export async function goToNewTab(tab: string, url: string) {
    await clickElement(tab);
    // We need to switch to news tab before reading url
    await browser.switchWindow(url);
    await verifyUrl(url);
}

export async function getElement(selector: string) {
    const el = await browser.$(selector);
    await browser.waitUntil(() => el.isDisplayed());
    return el;
}

export async function addValue(input: string, text: string) {
    await clickElement(input);
    const usernameInput = await getElement(input);
    await usernameInput.addValue(text);
}