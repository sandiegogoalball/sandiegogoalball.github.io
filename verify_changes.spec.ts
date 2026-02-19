import { test, expect } from '@playwright/test';

test('verify header compaction and dropdown behavior', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  // 1. Check header height (Compactness)
  const header = page.locator('header');
  const box = await header.boundingBox();
  console.log(`Header height: ${box.height}px`);
  await page.screenshot({ path: 'final_desktop_header.png' });

  // 2. Test Dropdown (Accessibility & Click-based)
  // Click About dropdown
  const aboutBtn = page.locator('nav button:has-text("About")');
  await aboutBtn.click();

  // Verify dropdown is visible
  const dropdownContent = page.locator('.dropdown-content').first();
  await expect(dropdownContent).toBeVisible();
  await page.screenshot({ path: 'final_dropdown_open.png' });

  // Click away to close
  await page.mouse.click(10, 300); // Click on hero section
  await expect(dropdownContent).not.toBeVisible();

  // 3. Test Skip Link visibility on focus
  await page.keyboard.press('Tab');
  const skipLink = page.locator('.skip-link');
  await expect(skipLink).toBeFocused();
  await page.screenshot({ path: 'final_skip_link_focused.png' });
});
