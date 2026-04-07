import {test, expect} from '@playwright/test';

test('login', async({page}) => {
    const url = 'https://www.hamptonscientific.com/';
    await page.goto(url);
    await expect(page.locator("//button[normalize-space()='Login']")).toBeVisible();
    await page.click("//button[normalize-space()='Login']");
    await page.fill("#email","*******@gmail.com");
    await page.fill("#password","********");
    await page.click("//button[normalize-space()='Sign In']");
    await expect(page.locator("//button[normalize-space()='My Profile']")).toBeVisible();
});
