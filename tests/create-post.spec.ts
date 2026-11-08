import { test, expect } from '@playwright/test';

test('should create a new post successfully', async ({ page }) => {
  
  await page.goto('/blog/new');

  
  await expect(page.locator('form')).toBeVisible();

  
  await page.fill('input[name="title"]', 'E2E Test Post Title');
  await page.fill('textarea[name="content"]', 'This is the content for E2E testing.');

  // اضغط زرار الـ Submit
  await page.click('button[type="submit"]');

  
  await expect(page.locator('text=E2E Test Post Title')).toBeVisible();
});