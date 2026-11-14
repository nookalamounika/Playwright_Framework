import{test,expect} from '@playwright/test';
import { ProductPage } from '../PageObjects/ProductPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';
import { LoginPage } from '../PageObjects/LoginPage';
import { productsToCart } from '../test-data/products';
import { CartPage } from '../PageObjects/CartPage';
import { CheckoutPage } from '../PageObjects/CheckoutPage';
import { checkoutData} from '../test-data/checkoutdata';


test.describe('product page validation',()=>{
 let productPage;
 let cartPage;
 let checkoutPage;
test.beforeEach(async({page})=>{
const loginPage=new LoginPage(page);
productPage=new ProductPage(page);
cartPage=new CartPage(page);
checkoutPage=new CheckoutPage(page);

await page.goto(BASE_URL);
await loginPage.login(USERNAME,PASSWORD);
await loginPage.clickonloginbtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await productPage.addfirstprodcttocart();
await productPage.clickoncartlink();



})

test('validate checkout page ui elements',async({page})=>{

await cartPage.checkoutdetails();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
const title=await checkoutPage.titleofthepage();
await expect(title).toBeVisible();
await expect(title).toHaveText('Checkout: Your Information')
await checkoutPage.fillcheckoutdetails(checkoutData.fname,checkoutData.lname,checkoutData.pno);





})

test('validate cancel button functionality',async({page})=>{

await cartPage.checkoutdetails();


await checkoutPage.checkoutcancelbtn();


})

test('validate continue button functtionality',async({page})=>{


    await cartPage.checkoutdetails();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
await checkoutPage.fillcheckoutdetails(checkoutData.fname,checkoutData.lname,checkoutData.pno);
 await checkoutPage.checkoutcontinuebtn();
 await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

})


test('validate the error when clicking continue with no data',async({page})=>{
  await cartPage.checkoutdetails();
 await checkoutPage.checkoutcontinuebtn();
 const error=await checkoutPage.geterrormessage();
 await expect(error).toBe("Error: First Name is required");



})



































































})