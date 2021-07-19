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

  // esperando o componente renderizar em tela (também vale usar waitUntil como segundo parâmetro no goto)
  await page.waitForSelector('[name="user[email]"]');

  // adicionando delay para o site não suspeitar que seja um bot pela velocidade de digitação
  await page.type('[name="user[email]"]', process.env.UNPLASH_EMAIL, {delay: 300});
  await page.type('#user_password', process.env.UNPLASH_PASSWORD, {delay: 300});

  await page.click('[type="submit"]');

  await page.waitForNavigation();

  // - Aessar essa página
  await page.goto('https://unsplash.com/photos/eF_Qz5KpdL4');

  // - Like nessa foto
  await page.click('[title="Like photo"]')

  // await browser.close();
})();