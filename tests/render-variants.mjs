import { chromium } from "playwright";

async function renderVariant(id, config) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const firstPhoto = page.locator('button[aria-label^="Visualizar ampliação da foto"]').first();
  await firstPhoto.scrollIntoViewIfNeeded();
  await firstPhoto.click();

  const dialog = page.locator('div[role="dialog"]').filter({ hasText: "Aconchego em Família" });
  await dialog.waitFor({ state: "visible", timeout: 3000 });

  await page.evaluate((cfg) => {
    const dialogBox = document.querySelector('div[role="dialog"] .relative.max-w-4xl');
    if (!dialogBox) return;
    const photoContainer = dialogBox.children[1]; // wait, children[0] is dismiss, children[1] is photo, children[2] is info
    const infoCol = dialogBox.children[2];

    dialogBox.style.backgroundColor = cfg.cardBg;
    dialogBox.style.borderColor = cfg.borderColor;
    if (infoCol) infoCol.style.backgroundColor = cfg.cardBg;

    const heading = dialogBox.querySelector('h1, [role="heading"]');
    if (heading) heading.style.color = cfg.titleColor;

    const badge = infoCol?.querySelector('span');
    if (badge) badge.style.color = cfg.accentColor;

    const dividers = dialogBox.querySelectorAll('.border-t');
    dividers.forEach(d => d.style.borderColor = cfg.borderColor);

    const spans = infoCol?.querySelectorAll('.space-y-4 span');
    spans?.forEach(s => {
      if (s.classList.contains('font-medium')) {
        s.style.color = cfg.valueColor;
      } else {
        s.style.color = cfg.labelColor;
      }
    });

    const closeBtn = dialogBox.querySelector('button[aria-label="Fechar ampliação"]');
    if (closeBtn) {
      closeBtn.style.backgroundColor = cfg.closeBg;
      closeBtn.style.color = cfg.closeColor;
    }
  }, config);

  await page.screenshot({ path: `tests/variant-${id}.png` });
  console.log(`Saved tests/variant-${id}.png`);
  await browser.close();
}

async function run() {
  // Variant 1: Light editorial warm café-com-leite / sand brown (airy, zero darkness, perfectly harmonious with the site)
  await renderVariant("1-light-sand-editorial", {
    cardBg: "#F3EDE6",
    borderColor: "#E3D6C8",
    titleColor: "#1C1816",
    accentColor: "#B86B4B",
    labelColor: "#82756B",
    valueColor: "#1C1816",
    closeBg: "#E3D6C8",
    closeColor: "#1C1816",
  });

  // Variant 2: Soft warm avelã / camel (medium-light warm brown)
  await renderVariant("2-warm-avela", {
    cardBg: "#D8C7B5",
    borderColor: "#C5B29D",
    titleColor: "#1F1713",
    accentColor: "#8C4729",
    labelColor: "#615043",
    valueColor: "#1F1713",
    closeBg: "#C5B29D",
    closeColor: "#1F1713",
  });

  // Variant 3: Warm toffee / marrom cacau suave (medium-dark warm brown, noticeably lighter than pitch black)
  await renderVariant("3-warm-cacau", {
    cardBg: "#3D2C24",
    borderColor: "#574136",
    titleColor: "#FAF8F5",
    accentColor: "#D48C6F",
    labelColor: "#B8A79B",
    valueColor: "#FAF8F5",
    closeBg: "#4F3A30",
    closeColor: "#FAF8F5",
  });

  // Variant 4: Warm mocca / marrom claro terroso
  await renderVariant("4-warm-mocca", {
    cardBg: "#543E33",
    borderColor: "#6E5446",
    titleColor: "#FAF8F5",
    accentColor: "#F7EFE9",
    labelColor: "#D0C0B5",
    valueColor: "#FAF8F5",
    closeBg: "#6E5446",
    closeColor: "#FAF8F5",
  });
}

run().catch(console.error);

