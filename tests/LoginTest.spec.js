import{test,expect} from '@playwright/test';
import{LoginPage} from '../PageObjects/LoginPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';

test('login to valid credentials',async({page})=>{
const loginPage=new LoginPage(page);

await page.goto(BASE_URL);

await loginPage.login(USERNAME,PASSWORD);
await loginPage.clickonloginbtn();

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');





})