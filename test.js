const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    defaultViewport: null,
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: '/Users/hamasakitaishi/puppeteer-test/images/example.png' }); // パスの指定

  await browser.close();
})();
