// @ts-check
import {test,expect} from '@playwright/test'

test('registration', async({page}) =>{
  await page.goto('https://www.hamptonscientific.com/')
  await page.locator("(//button[@class='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-9 px-4 py-2 border-[#006332] text-[#006332] hover:bg-[#006332] hover:text-white transition-all duration-300'])[1]").click()
  await expect(page.locator("a[class='text-[#006332] hover:underline']")).toBeVisible();
  await page.locator("a[class='text-[#006332] hover:underline']").click();
  await expect(page.locator("h1[class='text-4xl md:text-5xl font-bold text-gray-900 mb-3']")).toBeVisible();
  await page.fill("#firstName", "Ekira");
  await page.fill("#lastName","Muriithi");
  await page.fill("#email","*********@gmail.com");
  await page.fill("#phone","+254000000000")
  await page.fill("#password","*******")
  await page.fill("#confirmPassword","******")
  await page.fill("#facilityName","testfacilityname")
  await page.fill("#facilityType","Clinic")
  await page.fill("#address","N/A")
  await page.fill("#city", "Nairobi")
  await page.click("//button[normalize-space()='Create Account']");
})
