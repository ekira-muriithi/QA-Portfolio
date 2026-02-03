import {test, expect} from '@playwright/test';

test("login", async({page})=>{
    await page.goto('https://nexuraafrica.shop/login');
    //await expect(page).toHaveTitle();
    await page.locator("(//input[@id='email'])[1]").fill("murugiekra1@gmail.com");
    await page.locator("(//input[@id='password'])[1]").fill("Murugi1999!");
    await page.locator("(//input[@name='remember'])[1]").click();
    await page.locator("(//button[normalize-space()='Log In'])[1]").click();
//verify successfull redirection to the lamding page after loggin in
    await expect((page.locator("(//*[name()='svg'][@id='sunIcon'])[1]"))).toBeVisible();
    await page.click("(//*[name()='svg'][@id='sunIcon'])[1]");
    page.close();
});