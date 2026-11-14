import{test,expect} from '@playwright/test';
import { ProductPage } from '../PageObjects/ProductPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';
import { LoginPage } from '../PageObjects/LoginPage';
import { productsToCart } from '../test-data/products';
import { CartPage } from '../PageObjects/CartPage';
import { CheckoutPage } from '../PageObjects/CheckoutPage';
import { CheckoutOverviewPage } from '../PageObjects/CheckoutOverviewPage';
import { checkoutData } from '../test-data/checkoutdata';

test.describe('product page validation',()=>{
 let productPage;
 let cartPage;
 let checkoutPage;
 let checkoutOverviewPage;
test.beforeEach(async({page})=>{
const loginPage=new LoginPage(page);
productPage=new ProductPage(page);
cartPage=new CartPage(page);
checkoutPage=new CheckoutPage(page);
checkoutOverviewPage=new CheckoutOverviewPage(page);

await page.goto(BASE_URL);
await loginPage.login(USERNAME,PASSWORD);
await loginPage.clickonloginbtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await productPage.addfirstprodcttocart();
await productPage.clickoncartlink();
await cartPage.checkoutdetails();
await checkoutPage.fillcheckoutdetails(checkoutData.fname,checkoutData.lname,checkoutData.pno);
await checkoutPage.checkoutcontinuebtn();

})

test('validate the checkout overview page',async({page})=>{

await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

const elements=await checkoutOverviewPage.getcheckoutoverviewdetails();
await expect(elements.checkoutoverviewtitle).toBeVisible();
await expect(elements.itemtotal).toBeVisible();
await expect(elements.tax).toBeVisible();
await expect(elements.total).toBeVisible();



})
test('validate cancel button',async({page})=>{

await checkoutOverviewPage.checkoutoverviewcanelbtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');





})
test('validate the finish button',async({page})=>{
await checkoutOverviewPage.checkoutoverviewFinishbtn();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');




})

test('validate the checkoutoverview page products details',async({page})=>{


    await checkoutOverviewPage.getoverviewproductdetails();
})






















})

