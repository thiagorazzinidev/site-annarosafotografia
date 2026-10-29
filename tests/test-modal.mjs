import { chromium } from "playwright";
import assert from "node:assert";

async function run() {
  console.log("=== STARTING PLAYWRIGHT VERIFICATION ===");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  page.on("pageerror", (err) => {
    console.error(`[PAGE ERROR]: ${err.message}`);
    process.exit(1);
  });

  console.log("1. Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  console.log("2. Locating first photo card...");
  const firstPhoto = page.locator('button[aria-label^="Visualizar ampliação da foto"]').first();
  await firstPhoto.scrollIntoViewIfNeeded();

  console.log("3. Clicking first photo...");
  await firstPhoto.click();

  console.log("4. Verifying modal dialog is visible...");
  const dialog = page.locator('div[role="dialog"]').filter({ hasText: "Aconchego em Família" });
  await dialog.waitFor({ state: "visible", timeout: 3000 });
  const isVisibleImmediate = await dialog.isVisible();
  assert.strictEqual(isVisibleImmediate, true, "Dialog must be visible immediately");

  console.log("5. Waiting 1000ms to guarantee it DOES NOT auto-close...");
  await page.waitForTimeout(1000);
  const isVisibleAfter1s = await dialog.isVisible();
  assert.strictEqual(isVisibleAfter1s, true, "Dialog must remain open after 1s");
  console.log("   -> SUCCESS: Modal remained open!");

  console.log("6. Verifying modal content...");
  const heading = await page.locator('h1, [role="heading"]').filter({ hasText: "Aconchego em Família" }).textContent();
  console.log(`   -> Heading found: "${heading?.trim()}"`);
  assert(heading?.includes("Aconchego em Família"));

  const ctaBtn = page.locator('a:has-text("Consultar este estilo")');
  assert(await ctaBtn.isVisible(), "CTA button must be visible in modal");

  await page.screenshot({ path: "tests/modal-open-success.png" });
  console.log("   -> Screenshot saved: tests/modal-open-success.png");

  console.log("7. Testing dismiss via 'X' button...");
  const closeButton = page.locator('button[aria-label="Fechar ampliação"]');
  await closeButton.click();
  await dialog.waitFor({ state: "hidden", timeout: 2000 });
  console.log("   -> SUCCESS: Modal closed via close button!");

  console.log("8. Testing re-opening a different photo (Series #02)...");
  const secondPhoto = page.locator('button[aria-label^="Visualizar ampliação da foto"]').nth(1);
  await secondPhoto.click();
  const secondDialog = page.locator('div[role="dialog"]').filter({ hasText: "Toque & Cumplicidade" });
  await secondDialog.waitFor({ state: "visible", timeout: 3000 });
  console.log("   -> SUCCESS: Second photo modal opened!");

  console.log("9. Testing dismiss via Escape key...");
  await page.keyboard.press("Escape");
  await secondDialog.waitFor({ state: "hidden", timeout: 2000 });
  console.log("   -> SUCCESS: Modal closed via Escape key!");

  console.log("=== ALL PLAYWRIGHT TESTS PASSED CLEANLY! ===");
  await browser.close();
}

run().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
