import{test,expect} from '@playwright/test';
import { ProductPage } from '../PageObjects/ProductPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';
import { LoginPage } from '../PageObjects/LoginPage';
import { productsToCart } from '../test-data/products';
import { CartPage } from '../PageObjects/CartPage';


test.describe('product page validation',()=>{
 let productPage;
 let cartPage;
test.beforeEach(async({page})=>{
const loginPage=new LoginPage(page);
productPage=new ProductPage(page);
cartPage=new CartPage(page);

//await page.route('**/*.{png,jpg,jpeg,gif,svg,woff,woff2}', route => route.abort());
  //await page.route(/backtrace\.io|fonts\.(googleapis|gstatic)\.com/, route => route.abort());

await page.goto(BASE_URL);
await loginPage.login(USERNAME,PASSWORD);
await loginPage.clickonloginbtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(productPage.productname).toHaveCount(6);
    await expect(productPage.addtocart).toHaveCount(6);


})

test('validate cart page url and UI elements',async({page})=>{
//const firstProduct=await productPage.getFirstProductDetails();
await productPage.addfirstprodcttocart();
await productPage.clickoncartlink();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
const t1= await cartPage.cartTitle;
await expect(t1).toBeVisible();
await expect(t1).toHaveText('Your Cart');
const c1=await cartPage.contineshoppinglink;
await expect(c1).toBeVisible();
const cb=await cartPage.checkoutbtn;
await expect(cb).toBeVisible();
})

test('validate continue shopping functionality',async({page})=>{

await productPage.addfirstprodcttocart();
await productPage.clickoncartlink();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await cartPage.continueshopping();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


})

test('validate single or first product to the cart page',async({page})=>{
const firstProduct=await productPage.getFirstProductDetails();
await productPage.addfirstprodcttocart();
await productPage.clickoncartlink();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
const cartProducts=await cartPage.getcartproducts();
await expect(cartProducts[0]).toEqual(firstProduct);


})

test('validate all prodcts added into cart',async({page})=>{

const allproductsDetails=await productPage.getAllProductDetails();
await productPage.allproducttothecart();
await productPage.clickoncartlink();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

const cartProducts=await cartPage.getcartproducts();
await expect(cartProducts).toEqual(allproductsDetails);

    
})

test('validate specific products add into cart',async({page})=>{

    const getspecificproductDetails=await productPage.getSpecificProductDetails(productsToCart);
await productPage.addspecificproductTocart(productsToCart);
await productPage.clickoncartlink();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
const cartProducts=await cartPage.getcartproducts();
await expect(cartProducts).toEqual(getspecificproductDetails);

})

test('validate the remove product functionality',async({page})=>{

await productPage.allproducttothecart();
await productPage.clickoncartlink();
const intialproduct=await cartPage.getcartproducts();
await expect(intialproduct.length).toBeGreaterThan(0);
await cartPage.clickonremovebtn();

const updatedcartProducts=await cartPage.getcartproducts();
await expect(updatedcartProducts.length).toBe(intialproduct.length-1);

})


































































































});