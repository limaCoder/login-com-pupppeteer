require('dotenv').config(); 
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://unsplash.com/');

  // - Acessa a página de login
  await page.click('[href="/login"]');

  await page.type('[name="user[email]"]', process.env.UNPLASH_EMAIL);
  await page.type('#user_password', process.env.UNPLASH_PASSWORD);

  await page.click('[type="submit"]');

  await page.waitForNavigation();

  // - Aessar essa página
  await page.goto('https://unsplash.com/photos/eF_Qz5KpdL4');

  // - Like nessa foto
  await page.click('[title="Like photo"]')

  // await browser.close();
})();