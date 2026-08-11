import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function generateOGImage() {
  const url = 'https://the-global-grid.vercel.app';
  const outputPath = path.join(__dirname, '..', 'public', 'og.png');
  const tempPath = path.join(__dirname, '..', 'public', 'og-temp.png');

  console.log(`Generating static OG image from ${url}...`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true, // "new" is no longer needed in recent versions, use true
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait 3 seconds for fonts/animations to settle
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await page.screenshot({ path: tempPath });

    if (fs.existsSync(tempPath)) {
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
      fs.renameSync(tempPath, outputPath);
      console.log(`✅ Successfully generated OG image at ${outputPath}`);
    }
  } catch (error) {
    console.warn(`⚠️ Failed to generate static OG image: ${(error as Error).message}`);
    console.warn('⚠️ Keeping the last-known og.png so build does not fail.');
    if (fs.existsSync(tempPath)) {
      try {
        fs.unlinkSync(tempPath);
      } catch {
        // intentionally empty
      }
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

generateOGImage();
