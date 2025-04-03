export async function openUrl(path: string) {
    await browser.url(`'www.di.no/${path}'`)
}

export async function clickElement(element: string) {
    const el = await $(element)
    await browser.waitUntil(() => el.isClickable())
    await el.click()
    // using pause to make sure it has enough time to load
    await browser.pause(1000)
}

export async function verifyUrl(url: string) {
    expect(await browser.getUrl()).toContain(url)
}