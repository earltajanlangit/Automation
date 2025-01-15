const { test, expect } = require('@playwright/test');

let page;
const path = require('path');
const filePath1 = path.resolve(__dirname, 'C:\\Users\\sts-earl.tajanlangit\\playwright\\tests\\test.pdf');
const filePath2 = path.resolve(__dirname, 'C:\\Users\\sts-earl.tajanlangit\\playwright\tests\\test1.pdf');
const filePath3 = path.resolve(__dirname, 'C:\\Users\\sts-earl.tajanlangit\\playwright\\tests\\updatePrice.pdf');
const filePath4 = path.resolve(__dirname, 'C:\\Users\\sts-earl.tajanlangit\\playwright\\tests\\updatePrice.pdf');
test.describe('TOB PJT', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB001');
    await page.getByLabel('Username').fill('ts-ahmad.dinar@rakuten-sec.co.jp.240904');
    await page.getByLabel('Password').fill('Madz925***SE!');
    const button = await page.locator('input[name="Login"][type="submit"]');
    await button.click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('ITS-A11-001(TEST_1-9)', async () => {
    await page.getByRole('link', { name: 'TOB001:銘柄登録' }).click();
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8698');
    await page.getByLabel('Branch Code').selectOption('702');
    await page.locator('input[type="text"][maxlength="6"][name="clientCd"]').fill('223300');
    await page.locator('input[type="text"][maxlength="30"][name="purchaserName"]').fill('総合テストシナリオ1買付者名');
    await page.locator('input[type="text"][maxlength="30"][name="purchaserAgentName"]').fill('総合テストシナリオ1買付代理人名');
    await page.getByLabel('purchaserPlankbn').selectOption('3');
    await page.locator('input[type="text"][maxlength="30"][name="buyPred"]').fill('総合テストシナリオ1買付後の予定(コメント)');
    await page.locator('input[type="text"][maxlength="8"][name="ofrTermDateFrom"]').fill('20231204');
    await page.locator('input[type="text"][maxlength="8"][name="ofrTermDateTo"]').fill('20240116');
    await page.locator('input[type="text"][maxlength="8"][name="tradeDay"]').fill('20240117');
    await page.locator('input[type="text"][maxlength="8"][name="tradeProcessDay"]').fill('20240118');
    await page.locator('input[type="text"][maxlength="8"][name="payStartDay"]').fill('20240125');
    await page.locator('input[type="text"][maxlength="10"][name="ofrPrice"]').fill('12345600');
    await page.locator('input[type="text"][maxlength="15"][name="purchaseCount"]').fill('10000');
    await page.locator('input[type="text"][maxlength="15"][name="maxPurchaseCount"]').fill('100000');
    await page.locator('input[type="text"][maxlength="15"][name="minPurchaseCount"]').fill('1000');
    await page.locator('label').filter({ hasText: '法人' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'IFA' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'ネット' }).locator('span').first().click();
    await page.getByText('確 認').click();
    await page.getByText('登 録').click();
    await page.getByText("登録しました。", { exact: true }).click();
  });

  test('ITS-A11-001(TEST_10-32)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.getByRole('link', { name: 'TOB003:取扱銘柄一覧' }).click();
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
    await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
    await page.locator('a').filter({ hasText: /^書面アップロード$/ }).click();
    await page.getByRole('button', { name: '説明書 アップロード' }).click();
    await page.getByRole('textbox', { name: '（ファイル指定） ファイルの選択 ファイルをアップロード' }).setInputFiles([filePath1]);
    await page.getByRole('button', { name: '完了' }).click();
    await page.getByRole('button', { name: 'アップロード確認' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByText('アップロードが完了しました。', { exact: true }).click();
  });
  test('ITS-A11-001(TEST_33-42)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.getByRole('link', { name: 'TOB003:取扱銘柄一覧' }).click();
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
    await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
    await page.locator('a').filter({ hasText: /^書面アップロード$/ }).click();
    await page.getByRole('button', { name: 'アップロード取消' }).first().click();
    await page.getByRole('row', { name: '項目を選択 1' }).locator('span').nth(1).click();
    await page.getByRole('button', { name: '説明書取消' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByText('アップロードを取消しました。', { exact: true }).click();
  });

  test('ITS-A11-001(TEST_43-44)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB004');
    await page.locator('input[type="text"][maxlength="4"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"]').fill('0');
    await page.getByText('検 索').click();
    await page.getByText('説明書 アップロード').click();
    await page.getByRole('textbox', { name: '（ファイル指定） ファイルの選択 ファイルをアップロード' }).setInputFiles([filePath2]);
    await page.getByRole('button', { name: '完了' }).click();
    await page.getByRole('button', { name: 'アップロード確認' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByText('アップロードが完了しました。', { exact: true }).click();
  });
  test('ITS-A11-001(TEST_45-51)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
    await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
    await page.locator('a').filter({ hasText: '銘柄訂正' }).click();
    await page.locator('input[type="text"][maxlength="10"][name="ofrPrice_Correction"]').fill('123454');
    await page.getByRole('button', { name: '確 認' }).click();
    await page.getByRole('button', { name: '訂正' }).click();
    await page.getByText('アクションを表示', { exact: true }).click();
  });
  test('ITS-A11-001(TEST_51-70)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB004');
    await page.locator('input[type="text"][maxlength="4"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"]').fill('0');
    await page.getByText('検 索').click();
    const selectElement = await page.locator('select:has(option:text("価格と期間"))');
    await selectElement.selectOption({ label: '価格と期間' });
    await page.getByText('説明書 アップロード').click();
    await page.getByRole('textbox', { name: '（ファイル指定） ファイルの選択 ファイルをアップロード' }).setInputFiles([filePath3]);
    await page.getByRole('button', { name: '完了' }).click();
    await page.getByRole('button', { name: 'アップロード確認' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByText('アップロードが完了しました。', { exact: true }).click();
  });
  test('ITS-A11-001(TEST_71-75)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
    await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
    await page.locator('a').filter({ hasText: '銘柄訂正' }).click();
    await page.locator('input[type="text"][maxlength="30"][name="purchaserName"]').fill('総合テストシナリオ2買付者名');
    await page.getByRole('button', { name: '確 認' }).click();
    await page.getByRole('button', { name: '訂正' }).click();
    await page.getByText('アクションを表示', { exact: true }).click();
  });
    test('ITS-A11-001(TEST_76-80)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB004');
    await page.locator('input[type="text"][maxlength="4"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"]').fill('0');
    await page.getByText('検 索').click();
    const selectElement = await page.locator('select:has(option:text("その他"))');
    await selectElement.selectOption({ label: 'その他' });
    await page.getByText('説明書 アップロード').click();
    await page.getByRole('textbox', { name: '（ファイル指定） ファイルの選択 ファイルをアップロード' }).setInputFiles([filePath1]);
    await page.getByRole('button', { name: '完了' }).click();
    await page.getByRole('button', { name: 'アップロード確認' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByText('アップロードが完了しました。', { exact: true }).click()
  });
   test('ITS-A11-001(TEST_81)', async () => {
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
  });
  test('ITS-A11-001(TEST_82)', async () => {
  });
  test('ITS-A11-001(TEST_83)', async () => {
  }); 
  test('ITS-A11-001(TEST_84-91)', async () => { 
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
    await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
    await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
    await page.getByText('検 索').click();
    await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
    await page.locator('a').filter({ hasText: '銘柄訂正' }).click();
    const selectElement = await page.locator('select:has(option:text("702"))');
    await selectElement.selectOption({ label: '702' });
    await page.getByRole('button', { name: '確 認' }).click();
    await page.getByRole('button', { name: '訂正' }).click();
    await page.getByText('アクションを表示', { exact: true }).click();
  }); 
  test('ITS-A11-001(TEST_92-101)', async () => { 
    await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB004');
      await page.locator('input[type="text"][maxlength="4"]').fill('8699');
      await page.locator('input[type="text"][maxlength="2"]').fill('0');
      await page.getByText('検 索').click();
      const selectElement = await page.locator('select:has(option:text("期間"))');
      await selectElement.selectOption({ label: '期間' });
      await page.getByText('説明書 アップロード').click();
      await page.getByRole('textbox', { name: '（ファイル指定） ファイルの選択 ファイルをアップロード' }).setInputFiles([filePath3]);
      await page.getByRole('button', { name: '完了' }).click();
      await page.getByRole('button', { name: 'アップロード確認' }).click();
      await page.getByRole('button', { name: 'OK' }).click();
      await page.getByText('アップロードが完了しました。', { exact: true }).click()
      // update the filepath4 test
  }); 
  test('ITS-A11-001(TEST_102)', async () => {
      await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
      await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('8699');
      await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
      await page.getByText('検 索').click();
    });

  test('ITS-A11-001(TEST_103)', async () => {
  }); 
  test('ITS-A11-001(TEST_104-108)', async () => {
      await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
      await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('5101');
      await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
      await page.getByText('検 索').click();
      await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
      await page.locator('a').filter({ hasText: '銘柄訂正' }).click();
      await page.getByText('該当銘柄はすでに撤回されています。', { exact: true }).click();
      // skip this 1 because of status = 2
  });   
   test('ITS-A11-001(TEST_109-114)', async () => {
      await page.goto('https://rakuten-sec-cs--240904.sandbox.lightning.force.com/lightning/n/TOB003');
      await page.locator('input[type="text"][maxlength="4"][name="dscrCd"]').fill('5101');
      await page.locator('input[type="text"][maxlength="2"][name="dscrSubCd"]').fill('0');
      await page.getByText('検 索').click();
      await page.locator('button').filter({ hasText: 'アクションを表示' }).click();
      await page.locator('a').filter({ hasText: '銘柄訂正' }).click();
      await page.getByText('該当銘柄はすでに撤回されています。', { exact: true }).click();
      // skip this 1 because of status = 2
  });   
  test('ITS-A11-001(TEST_115-122)', async () => {
       
    });   
  test('ITS-A11-001(TEST_123-128)', async () => {
       
    });
  test('ITS-A11-001(TEST_129-148)', async () => {
       
    });  
  
  

});
