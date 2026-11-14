import{test,expect} from '@playwright/test';
import { ProductPage } from '../PageObjects/ProductPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';
import { LoginPage } from '../PageObjects/LoginPage';
import { productsToCart } from '../test-data/products';
import { CartPage } from '../PageObjects/CartPage';
import { CheckoutPage } from '../PageObjects/CheckoutPage';
import { CheckoutOverviewPage } from '../PageObjects/CheckoutOverviewPage';
import { checkoutData } from '../test-data/checkoutdata';
import { FinalPage } from '../PageObjects/FinalPage';

test.describe('product page validation',()=>{
 let productPage;
 let cartPage;
 let checkoutPage;
 let checkoutOverviewPage;
 let finalPage;
test.beforeEach(async({page})=>{
const loginPage=new LoginPage(page);
productPage=new ProductPage(page);
cartPage=new CartPage(page);
checkoutPage=new CheckoutPage(page);
checkoutOverviewPage=new CheckoutOverviewPage(page);
finalPage=new FinalPage(page);

await page.goto(BASE_URL);
await loginPage.login(USERNAME,PASSWORD);
await loginPage.clickonloginbtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await productPage.addfirstprodcttocart();
await productPage.clickoncartlink();
await cartPage.checkoutdetails();
await checkoutPage.fillcheckoutdetails(checkoutData.fname,checkoutData.lname,checkoutData.pno);
await checkoutPage.checkoutcontinuebtn();
await checkoutOverviewPage.checkoutoverviewFinishbtn();

})

test('validate the finial page',async({page})=>{
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
const title=await finalPage.getTitle();
await expect(title).toBeVisible();
const successmsg=await finalPage.getsuccessmsgdetails();
await expect(successmsg.successmessage).toBeVisible();
await expect(successmsg.successmessage).toHaveText('Thank you for your order!');

await expect(successmsg.successmsgdescription).toBeVisible();
await expect(successmsg.successmsgdescription).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');

})

test('validate click on backhome button',async({page})=>{

await finalPage.clickonbackhomebtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');



})

test('validate generate pdf order button',async({page})=>{

await finalPage.clickonegeneratepdf();



})






















});