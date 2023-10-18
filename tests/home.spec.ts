import { test, expect } from '@playwright/test';


test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
    //open URL
    await page.goto('https://www.google.com/');
    
    //verify title
    await expect(page).toHaveTitle('Google');   

    })  
})

test.describe('Get Started', () => {
    test('Click get started button using text selector', async ({ page }) => {
        //open URL
        await page.goto('https://playwright.dev/');

        //Click the button 
        await page.locator('text=Get started').click();


        //verify url has docs/intro 
        await expect(page).toHaveURL('https://playwright.dev/docs/intro');
        
    })

    test('Verify heading text is visible using text selector', async ({ page }) => {
        //open URL
        await page.goto('https://playwright.dev/');

        //find the text locator
        const headingText = await page.locator('text= Playwright enables reliable end-to-end testing for modern web apps.');


        //verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })
})

