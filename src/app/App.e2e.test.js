import puppeteer from 'puppeteer';

describe('App end-to-end tests', () => {
  let browser, page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['-–no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1024,
        height: 768,
      },
      userAgent: '',
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.App__Nav');
  });

  afterEach(() => browser.close());

  it('displays nav items', async () => {
    const html = await page.$eval('.App__NavItem--Active', e => e.innerHTML);
    expect(html).toBe('Home');
  }, 16000);

  it('goes to about page', async () => {
    const aboutPageLink = await page.$('.App__NavItem:nth-child(2)');
    aboutPageLink.click();
    await page.waitForSelector('.AboutView');
    const html = await page.$eval('h1', e => e.innerHTML);
    expect(html).toBe('About');
  }, 16000);
});
