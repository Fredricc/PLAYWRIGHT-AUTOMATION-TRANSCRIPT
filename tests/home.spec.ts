import { test, expect } from '@playwright/test';


test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
    //open URL
    await page.goto('https://www.google.com/');
    
    //verify title
    await expect(page).toHaveTitle('Google');
    
    })
    
})
