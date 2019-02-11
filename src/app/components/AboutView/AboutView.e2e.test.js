import puppeteer from 'puppeteer';

describe('AboutView end-to-end tests', () => {
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
  });

  afterEach(() => browser.close());

  describe('API Request Success', () => {
    beforeEach(async () => {
      await page.goto('http://localhost:3000/about');
      await page.waitForSelector('.AboutView');
    });

    it('displays h1 text', async () => {
      const html = await page.$eval('h1', e => e.innerHTML);
      expect(html).toBe('About');
    }, 16000);

    it('displays loading Message', async () => {
      await page.waitForSelector('.LoadingMessage');
      const message = await page.$eval('.LoadingMessage', e => e.innerHTML);
      expect(message).toBe('Loading…');
    }, 16000);

    it('displays contributors', async () => {
      await page.waitForSelector('.ContributorList');
      const contributors = await page.$$('.ContributorList__Item');
      expect(contributors.length).toBe(1);
    }, 16000);
  });

  describe('API Request Error', () => {
    beforeEach(async () => {
      await page.setRequestInterception(true);
      page.on('request', request => {
        if (
          request.url() ===
          'https://api.github.com/repos/edoparearyee/react-notes/contributors'
        ) {
          request.respond({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Some error' }),
          });
        } else request.continue();
      });
      await page.goto('http://localhost:3000/about');
      await page.waitForSelector('.AboutView');
    });

    it('displays error Message', async () => {
      await page.waitForSelector('.ErrorMessage');
      const message = await page.$eval('.ErrorMessage', e => e.innerHTML);
      expect(message).toBe('Error! Failed to fetch');
    }, 16000);
  });
});
