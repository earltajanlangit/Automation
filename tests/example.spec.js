const { test, expect } = require('@playwright/test');

let page;
const path = require('path');

test.describe('TOB PJT', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB001');
    await page.getByLabel('Username').fill('ts-ahmad.dinar@rakuten-sec.co.jp.240904');
    await page.getByLabel('Password').fill('Madz925***SE!');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  // test('ITS-A11-001(TEST_1-9)', async () => {
  //   await page.getByRole('link', { name: 'TOB001:銘柄登録' }).click();
  //   await page.locator('#input-90').click();
  //   await page.locator('#input-90').fill('8411');
  //   await page.getByLabel('Branch Code').selectOption('702');
  //   await page.locator('#input-93').fill('223300');
  //   await page.locator('#input-94').fill('総合テストシナリオ1買付者名');
  //   await page.locator('#input-95').fill('総合テストシナリオ1買付代理人名');
  //   await page.getByLabel('purchaserPlankbn').selectOption('3');
  //   await page.locator('#input-148').fill('総合テストシナリオ1買付後の予定(コメント)');
  //   await page.locator('#input-96').fill('20231204');
  //   await page.locator('#input-98').fill('20240116');
  //   await page.locator('#input-104').fill('20240117');
  //   await page.locator('#input-106').fill('20240118');
  //   await page.locator('#input-108').fill('20240125');
  //   await page.locator('#input-110').fill('12345600');
  //   await page.locator('#input-112').fill('10000');
  //   await page.getByText('買付予定数/上限: 株なし').click();
  //   await page.locator('#input-113').fill('100000');
  //   await page.locator('#input-115').fill('1000');
  //   await page.locator('label').filter({ hasText: '法人' }).locator('span').first().click();
  //   await page.getByText('IFA').click();
  //   await page.getByText('申込対象者: ネットIFA法人').click();
  //   await page.getByText('確認').click();
  //   await page.getByText('登録').click();
  //   await page.getByText("登録しました。", { exact: true }).click();
  // });

  test('ITS-A11-001(TEST_10-32)', async () => {
    console.log('This is test#1: ');
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.getByRole('link', { name: 'TOB003:取扱銘柄一覧' }).click();
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
    await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
    await page.locator('a').filter({ hasText: /^書面アップロード$/ }).click();
    await page.getByRole('button', { name: '説明書 アップロード' }).click();
    const filePath = path.resolve(__dirname, 'test.pdf');
    const fileInput = page.getByRole('textbox', { name: '（ファイル指定） ファイルの選択 ファイルをアップロード' });
    await fileInput.setInputFiles(filePath);
    await page.getByRole('button', { name: '完了' }).click();
  });
  // test('ITS-A11-001(TEST_33-42)', async () => {
   
  // });
});
