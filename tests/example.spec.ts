import { test, expect, Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

let page: Page;
const url = process.env.ITTI_URI as string;
const userName = process.env.ITTI_USERNAME as string;
const passWord = process.env.ITTI_PASSWORD  as string;

test.describe('ITTI PJT', () => {

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(url);
    await page.getByLabel('Username').fill(userName);
    await page.getByLabel('Password').fill(passWord);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('test #1', async () => {
    console.log('This is test#1: ');
    console.log(url);
    await page.goto(url);
    await page.locator('input[type="text"][maxlength="3"][name="clientCode"]').fill('701');
    await page.locator('input[type="text"][maxlength="6"][name="clientCode"]').fill('120289');
    //await page.screenshot({ path: 'ss1.png', fullPage: true });
    await page.screenshot({ path: 'screenshot.png' });
    //await page.getByText('クリア').click();
    await page.getByRole('button', { name: 'クリア' }).click();
    await page.locator('input[type="text"][maxlength="3"][name="clientCode"]').fill('701');
    await page.locator('input[type="text"][maxlength="6"][name="clientCode"]').fill('120289');
    await page.getByText('検 索').click();
    await page.getByText('９９９８５５ ９９９８５５').click();
    await page.getByRole('button', { name: '戻る' }).click();
    await page.getByText(
      '９９９８５５ ９９９８５５').click();
    //await page.getByRole('columnheader', { name: '行を選択 すべて選択' }).locator('span').nth(2).click();
    await page.getByRole('gridcell', { name: '項目を選択 1' }).locator('span').nth(1).click();
    //await page.getByRole('gridcell', { name: '項目を選択 2' }).locator('span').nth(1).click();
    await page.getByRole('button', { name: '次へ進む' }).click();
    await page.locator('label').filter({ hasText: 'SBI 証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'マネックス証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'カブドットコム証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: '松井証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: '野村證券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: '大和証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'SMBC 日興証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: '三菱 UFJ モルガンスタンレー証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'みずほ証券' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'その他の証券会社' }).locator('span').first().click();
    await page.getByRole('button', { name: '証券会社検索' }).click();
    await page.locator('input[type="text"][name="compName"]').fill('HSBC');
    await page.getByRole('button', { name: '検 索' }).click();
    await page.getByRole('button', { name: 'HSBC証券' }).click();
    await page.locator('input[type="text"][placeholder="部支店名"]').nth(1).fill('test1234');
    await page.locator('input[type="text"][placeholder="コード"]').nth(1).fill('701');
    await page.getByRole('combobox', { name: '*' }).click();
    await page.getByText('秋田県').click();
    await page.locator('input[type="text"][name="City"][placeholder="例)港区南青山2-6-21"]').nth(1).fill('madz2-6-21');
    await page.locator('input[type="text"][placeholder="例) 1234567"]').nth(1).fill('1234567')
    await page.getByRole('button', { name: '入力内容の確認へ進む' }).click();
    await page.getByRole('button', { name: '戻る' }).click();
    await page.getByRole('button', { name: '戻る' }).click();
    await page.getByRole('button', { name: '戻る' }).click();
    await page.getByRole('button', { name: '戻る' }).click();
    await page.getByRole('button', { name: '戻る' }).click();
    //await page.locator('#brandBand_1').getByText('クリア').click();
    //await page.locator('#brandBand_1').getByRole('button', { name: 'クリア' }).click();
    await page.getByRole('button', { name: 'クリア' }).click();
    await page.pause();
  })
});