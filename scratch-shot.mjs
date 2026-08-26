import { chromium } from 'playwright';

const url = process.argv[2] || 'http://127.0.0.1:3000';
const outDir = process.argv[3] || '.';
const name = process.argv[4] || 'full';
const width = Number(process.argv[5] || 1440);

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'] });
const page = await browser.newPage({ viewport: { width, height: 900 } });

page.on('pageerror', (err) => console.log('[pageerror]', String(err)));

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForSelector('h1', { timeout: 30000 });
await page.waitForTimeout(1000);

await page.addStyleTag({ content: `*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }` });
await page.waitForTimeout(300);

await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
console.log('done');
await browser.close();
