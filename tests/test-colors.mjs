import { chromium } from "playwright";

async function testColor(colorName, bgClass, textClass, borderClass, subTextClass) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const firstPhoto = page.locator('button[aria-label^="Visualizar ampliação da foto"]').first();
  await firstPhoto.scrollIntoViewIfNeeded();
  await firstPhoto.click();

  const dialog = page.locator('div[role="dialog"]').filter({ hasText: "Aconchego em Família" });
  await dialog.waitFor({ state: "visible", timeout: 3000 });

  await page.evaluate(({ bgStyle, textStyle, borderStyle, subStyle }) => {
    const dialogBox = document.querySelector('div[role="dialog"] .relative.max-w-4xl');
    if (!dialogBox) return;
    const infoCol = dialogBox.children[1];
    dialogBox.style.backgroundColor = bgStyle;
    if (infoCol) infoCol.style.backgroundColor = bgStyle;
    dialogBox.style.borderColor = borderStyle;

    const heading = dialogBox.querySelector('h1, [role="heading"]');
    if (heading) heading.style.color = textStyle;

    const desc = dialogBox.querySelector('[id*="description"]') || infoCol?.querySelector('.space-y-4');
    if (desc) {
      desc.style.borderColor = borderStyle;
      desc.querySelectorAll('span.font-medium').forEach(s => s.style.color = textStyle);
      desc.querySelectorAll('span:not(.font-medium)').forEach(s => s.style.color = subStyle);
    }
  }, { bgStyle: bgClass, textStyle: textClass, borderStyle: borderClass, subStyle: subTextClass });

  await page.screenshot({ path: `tests/modal-color-${colorName}.png` });
  console.log(`Saved screenshot tests/modal-color-${colorName}.png`);

  await browser.close();
}

async function run() {
  await testColor("light-warm-sand", "#F5EFEB", "#1C1816", "#E3D7CB", "#7D6F64");
  await testColor("soft-avela", "#EADECF", "#241B16", "#CEBFAF", "#6E5B4F");
  await testColor("medium-brown", "#4A3930", "#FAF8F5", "#634E42", "#C7B7AC");
}

run().catch(console.error);
