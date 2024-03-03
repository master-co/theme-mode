import { test, expect } from '@playwright/experimental-ct-svelte'
import App from './App.svelte'

test('theme-mode', async ({ mount, page }) => {
    const app = await mount(App)

    // init
    await Promise.all([
        expect(app.locator('#value')).toHaveText('light'),
        expect(app.locator('#preference')).toHaveText('system'),
        expect(await page.locator('html').getAttribute('class')).toBe('light')
    ])

    // change preference
    await app.locator('select').selectOption('dark')
    await Promise.all([
        expect(app.locator('#value')).toHaveText('dark'),
        expect(app.locator('#preference')).toHaveText('dark'),
        expect(await page.evaluate(() => localStorage.getItem('theme-preference'))).toBe('dark'),
        expect(await page.locator('html').getAttribute('class')).toBe('dark')
    ])
})
