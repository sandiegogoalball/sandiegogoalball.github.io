import { test, expect } from '@playwright/test';

test('check header height on different viewports', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  const viewports = [
    { width: 1280, height: 800 },
    { width: 1024, height: 768 },
    { width: 800, height: 600 },
    { width: 375, height: 667 },
  ];

  for (const vp of viewports) {
    await page.setViewportSize(vp);
    await page.waitForTimeout(500);
    const header = await page.locator('header');
    const box = await header.boundingBox();
    console.log(`Viewport ${vp.width}x${vp.height}: Header height = ${box.height}px (${(box.height / vp.height * 100).toFixed(1)}%)`);
    await page.screenshot({ path: `header_${vp.width}.png` });
  }
});
