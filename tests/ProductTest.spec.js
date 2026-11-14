import{test,expect} from '@playwright/test';
import { ProductPage } from '../PageObjects/ProductPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';
import { LoginPage } from '../PageObjects/LoginPage';
import { productsToCart } from '../test-data/products';

test.describe('product page validation',()=>{
 let productPage;
test.beforeEach(async({page})=>{
const loginPage=new LoginPage(page);
productPage=new ProductPage(page);

await page.goto(BASE_URL);
await loginPage.login(USERNAME,PASSWORD);
await loginPage.clickonloginbtn();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')


});

test('validate the productpage title',async({page})=>{
const title=await productPage.productpagetitle();
await expect(title).toBeVisible();
await expect(title).toHaveText('Products');


})

test('validate the logout link',async({page})=>{


await productPage.logoutlink();
//await productPage.aboutdetails();


})

test('validate about link',async({page})=>{

await productPage.aboutdetails();

})
test('validate the product details',async({page})=>{

await productPage.validateallproductdetails();
await productPage.addfirstprodcttocart();
await productPage.allproducttothecart();

})

test('validate the specificproduct',async({page})=>{

await productPage.addspecificproductTocart(productsToCart);


})

test('filter by name A to Z ',async({page})=>{

await productPage.filerByNameAtoZ();
const names=await productPage.getProductNames();
const sorted=[...names].sort();
expect(names).toEqual(sorted);
})
test('filter by name Z to A ',async({page})=>{

await productPage.filterByNameZtoA();
const names=await productPage.getProductNames();
const sorted=[...names].sort().reverse();
expect(names).toEqual(sorted);
})
test('filter by price low to high ',async({page})=>{

await productPage.filterByPricelowtohigh();
const prices=await productPage.getproductprice();
const sortedprice=[...prices].sort((a,b)=>a-b)
expect(prices).toEqual(sortedprice);
})
test('filter by price high to low ',async({page})=>{
await productPage.filterByPricehightolow();
const prices=await productPage.getproductprice();
const sortedprice=[...prices].sort((a,b)=>b-a)
expect(prices).toEqual(sortedprice);

})



});