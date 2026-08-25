import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('E2E Clicks Flow', async ({ page }) => {
  await page.goto('/')

  await page.locator('#increment').click()
  await page.locator('#increment').click()
  await page.locator('#increment').click()

  const text = page.locator('#count')

  await expect(text).toHaveText('3')
})
