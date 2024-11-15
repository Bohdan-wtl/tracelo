import test from '../lambdatest-setup';// Импортируем нашу обертку для тестов
import { faker } from '@faker-js/faker';

const links = [
  "https://stage.tracelo.com/en?c=aed",
  "https://stage.tracelo.com/en?c=amd",
  "https://stage.tracelo.com/en?c=aud",
  "https://stage.tracelo.com/en?c=azn",
  "https://stage.tracelo.com/en?c=bbd",
  "https://stage.tracelo.com/en?c=bgn",
  "https://stage.tracelo.com/en?c=bnd",
  "https://stage.tracelo.com/en?c=brl",
  "https://stage.tracelo.com/en?c=bsd",
  "https://stage.tracelo.com/en?c=bwp",
  "https://stage.tracelo.com/en?c=cad",
  "https://stage.tracelo.com/en?c=chf",
  "https://stage.tracelo.com/en?c=clp",
  "https://stage.tracelo.com/en?c=cop",
  "https://stage.tracelo.com/en?c=cve",
  "https://stage.tracelo.com/en?c=czk",
  "https://stage.tracelo.com/en?c=dkk",
  "https://stage.tracelo.com/en?c=egp",
  "https://stage.tracelo.com/en?c=eur",
  "https://stage.tracelo.com/en?c=fjd",
  "https://stage.tracelo.com/en?c=gbp",
  "https://stage.tracelo.com/en?c=gel",
  "https://stage.tracelo.com/en?c=gtq",
  "https://stage.tracelo.com/en?c=gyd",
  "https://stage.tracelo.com/en?c=huf",
  "https://stage.tracelo.com/en?c=ils",
  "https://stage.tracelo.com/en?c=isk",
  "https://stage.tracelo.com/en?c=jpy",
  "https://stage.tracelo.com/en?c=krw",
  "https://stage.tracelo.com/en?c=lkr",
  "https://stage.tracelo.com/en?c=mad",
  "https://stage.tracelo.com/en?c=mxn",
  "https://stage.tracelo.com/en?c=myr",
  "https://stage.tracelo.com/en?c=nad",
  "https://stage.tracelo.com/en?c=nok",
  "https://stage.tracelo.com/en?c=pab",
  "https://stage.tracelo.com/en?c=pen",
  "https://stage.tracelo.com/en?c=pkr",
  "https://stage.tracelo.com/en?c=pln",
  "https://stage.tracelo.com/en?c=qar",
  "https://stage.tracelo.com/en?c=ron",
  "https://stage.tracelo.com/en?c=sar",
  "https://stage.tracelo.com/en?c=scr",
  "https://stage.tracelo.com/en?c=sek",
  "https://stage.tracelo.com/en?c=sgd",
  "https://stage.tracelo.com/en?c=szl",
  "https://stage.tracelo.com/en?c=thb",
  "https://stage.tracelo.com/en?c=try",
  "https://stage.tracelo.com/en?c=ttd",
  "https://stage.tracelo.com/en?c=uah",
  "https://stage.tracelo.com/en?c=usd",
  "https://stage.tracelo.com/en?c=uyu",
  "https://stage.tracelo.com/en?c=xcd",
  "https://stage.tracelo.com/en?c=zar",
  "https://stage.tracelo.com/en?c=all",
  "https://stage.tracelo.com/en?c=dzd",
  "https://stage.tracelo.com/en?c=aoa",
  "https://stage.tracelo.com/en?c=bdt",
  "https://stage.tracelo.com/en?c=byn",
  "https://stage.tracelo.com/en?c=bob",
  "https://stage.tracelo.com/en?c=bam",
  "https://stage.tracelo.com/en?c=cny",
  "https://stage.tracelo.com/en?c=crc",
  "https://stage.tracelo.com/en?c=dop",
  "https://stage.tracelo.com/en?c=hkd",
  "https://stage.tracelo.com/en?c=inr",
  "https://stage.tracelo.com/en?c=idr",
  "https://stage.tracelo.com/en?c=kzt",
  "https://stage.tracelo.com/en?c=mdl",
  "https://stage.tracelo.com/en?c=ngn",
  "https://stage.tracelo.com/en?c=php",
  "https://stage.tracelo.com/en?c=rsd",
  "https://stage.tracelo.com/en?c=twd",
  "https://stage.tracelo.com/en?c=vnd"
]

const cards = {
  us: { number: "4242424242424242", exp_date: "11/30", cvc: "111" },
  br: { number: "4000000760000022", exp_date: "11/30", cvc: "111" },
  ca: { number: "4000001240000000", exp_date: "11/30", cvc: "111" },
  cl: { number: "4000001520000001", exp_date: "11/30", cvc: "111" },
  co: { number: "4000001720000003", exp_date: "11/30", cvc: "111" },
  cr: { number: "4000001820000005", exp_date: "11/30", cvc: "111" },
  ec: { number: "4000002120000006", exp_date: "11/30", cvc: "111" },
  mx: { number: "4000004840000001", exp_date: "11/30", cvc: "111" },
  mx_carnet: { number: "5062210020000009", exp_date: "11/30", cvc: "111" },
  pa: { number: "4000005920000000", exp_date: "11/30", cvc: "111" },
  py: { number: "4000006020000066", exp_date: "11/30", cvc: "111" },
  pe: { number: "4000640040000068", exp_date: "11/30", cvc: "111" },
  uy: { number: "4000858000000003", exp_date: "11/30", cvc: "111" },
  ae_visa: { number: "4000078400000001", exp_date: "11/30", cvc: "111" },
  ae_mastercard: { number: "5200078400000022", exp_date: "11/30", cvc: "111" },
  at: { number: "4000000440000088", exp_date: "11/30", cvc: "111" },
  be: { number: "4000055600000004", exp_date: "11/30", cvc: "111" },
  bg: { number: "4000011200000001", exp_date: "11/30", cvc: "111" },
  by: { number: "4000011200000005", exp_date: "11/30", cvc: "111" },
  hr: { number: "4000001910000009", exp_date: "11/30", cvc: "111" },
  cy: { number: "4000019600000008", exp_date: "11/30", cvc: "111" },
  cz: { number: "4000022300000002", exp_date: "11/30", cvc: "111" },
  dk: { number: "4000022800000001", exp_date: "11/30", cvc: "111" },
  ee: { number: "4000023300000009", exp_date: "11/30", cvc: "111" },
  fi: { number: "4000024600000001", exp_date: "11/30", cvc: "111" },
  fr: { number: "4000025500000003", exp_date: "11/30", cvc: "111" },
  de: { number: "4000027600000016", exp_date: "11/30", cvc: "111" },
  gi: { number: "4000029200000005", exp_date: "11/30", cvc: "111" },
  gr: { number: "4000033200000030", exp_date: "11/30", cvc: "111" },
  hu: { number: "4000034800000005", exp_date: "11/30", cvc: "111" },
  ie: { number: "4000037200000005", exp_date: "11/30", cvc: "111" },
  it: { number: "4000038000000008", exp_date: "11/30", cvc: "111" },
  lv: { number: "4000042800000005", exp_date: "11/30", cvc: "111" },
  li: { number: "4000043000000004", exp_date: "11/30", cvc: "111" },
  lt: { number: "4000044400000009", exp_date: "11/30", cvc: "111" },
  lu: { number: "4000044400000006", exp_date: "11/30", cvc: "111" },
  mt: { number: "4000047000000007", exp_date: "11/30", cvc: "111" },
  nl: { number: "4000052800000002", exp_date: "11/30", cvc: "111" },
  no: { number: "4000057800000007", exp_date: "11/30", cvc: "111" },
  pl: { number: "4000061600000005", exp_date: "11/30", cvc: "111" },
  pt: { number: "4000062600000007", exp_date: "11/30", cvc: "111" },
  ro: { number: "4000064200000001", exp_date: "11/30", cvc: "111" },
  sa: { number: "4000068300000007", exp_date: "11/30", cvc: "111" },
  si: { number: "4000070750000006", exp_date: "11/30", cvc: "111" },
  sk: { number: "4000070730000001", exp_date: "11/30", cvc: "111" },
  es: { number: "4000072740000007", exp_date: "11/30", cvc: "111" },
  se: { number: "4000075200000008", exp_date: "11/30", cvc: "111" },
  ch: { number: "4000075600000009", exp_date: "11/30", cvc: "111" },
  gb_visa: { number: "4000082600000000", exp_date: "11/30", cvc: "111" },
  gb_visa_debit: { number: "4000058260000005", exp_date: "11/30", cvc: "111" },
  gb_mastercard: { number: "5555558265554449", exp_date: "11/30", cvc: "111" },
  au: { number: "4000000360000006", exp_date: "11/30", cvc: "111" },
  cn: { number: "4000001520000002", exp_date: "11/30", cvc: "111" },
  hk: { number: "4000034400000004", exp_date: "11/30", cvc: "111" },
  in: { number: "4000035600000008", exp_date: "11/30", cvc: "111" },
  jp_visa: { number: "4000039200000003", exp_date: "11/30", cvc: "111" },
  jp_jcb: { number: "3530111333000000", exp_date: "11/30", cvc: "111" },
  my: { number: "4000045800000002", exp_date: "11/30", cvc: "111" },
  sg: { number: "4000070200000003", exp_date: "11/30", cvc: "111" },
  tw: { number: "4000015800000008", exp_date: "11/30", cvc: "111" },
  th_credit: { number: "4000074600000003", exp_date: "11/30", cvc: "111" },
  th_debit: { number: "4000057600000008", exp_date: "11/30", cvc: "111" }
};

test.describe('Stripe Payment Test', () => {
  for (const link of links) {
    for (const [countryCode, card] of Object.entries(cards)) {
      test(`Payment test for link: ${link} with card for country: ${countryCode}`, async ({ page }) => {
        let fake_email = "test-wtl-" + faker.internet.email();
        await page.goto(link);
        let now = new Date();
        await page.locator("input[id='phone_input']").fill("800917-7013")
        await page.locator("button[type='submit']").click()
        await page.locator("//input[@id='input']").fill(fake_email)
        await page.locator("(//button[text()='Continue'])[2]").click();
        await page.locator("//form[@id='payment-form']//iframe").contentFrame().getByPlaceholder('1234 1234 1234').fill(card.number);
        await page.locator("//form[@id='payment-form']//iframe").contentFrame().getByPlaceholder('MM / YY').fill(card.exp_date);
        await page.locator("//form[@id='payment-form']//iframe").contentFrame().getByPlaceholder('CVC').fill(card.cvc);
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.locator("//input[@name='first_name']").fill(faker.person.firstName())
        await page.locator("//input[@name='last_name']").fill(faker.person.lastName())
        await page.locator("//input[@name='address']").fill(faker.internet.username())
        await page.locator("//input[@name='city']").fill(faker.location.city())
        await page.locator("//input[@name='zipcode']").fill(faker.location.zipCode())
        await page.locator("//button[text()='Save']").click()
        console.log(`Transaction passed for ${link} with card ending in ${card} using email ${fake_email}`);

      });
    }
  }
});
