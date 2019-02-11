import puppeteer from 'puppeteer';

describe('App end-to-end tests', () => {
  let browser, page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1024,
        height: 768,
      },
      userAgent: '',
    });
  });

  afterEach(() => browser.close());

  describe('App', () => {
    beforeEach(async () => {
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.App__Nav');
    });

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
});
