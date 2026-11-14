import { expect } from '@playwright/test';
export class ProductPage{
constructor(page){
this.page=page;
this.title=page.locator('.title');
this.Openmenu=page.locator('#react-burger-menu-btn');
this.aboutlink=page.locator('#about_sidebar_link');
this.logout=page.locator('#logout_sidebar_link');
this.productname=page.locator('.inventory_item_name');
this.productdescription=page.locator('.inventory_item_desc');
this.productprice=page.locator('.inventory_item_price');
this.addtocart=page.locator('.btn.btn_primary.btn_small.btn_inventory');
this.filerdropdown=page.locator('.product_sort_container');
this.filterNameAtoZ=page.locator('//option[@value="az"]');
this.filterNameZtoA=page.locator('//option[@value="za"]');
this.filterpriceLowtHigh=page.locator('//option[@value="lohi"]');
this.filterpriceHightoLow=page.locator('//option[@value="hilo"]');
this.cartlink=page.locator('.shopping_cart_link');


}
async productpagetitle(){

  return this.title;
}

async logoutlink(){
await this.Openmenu.waitFor({ state: 'visible' });
  await this.Openmenu.click();
await this.logout.waitFor({ state: 'visible' });

    await this.logout.click();
    
    
    
}
async aboutdetails(){
await this.Openmenu.waitFor({ state: 'visible' });
  await this.Openmenu.click();

   await this.aboutlink.waitFor({ state: 'visible' });  
    await this.aboutlink.click();
    
}
async validateallproductdetails(){
const name=await this.productname.allTextContents();
const description=await this.productdescription.allTextContents();
const price=await this.productprice.allTextContents();
const buttoncount=await this.addtocart.count();


}
async addfirstprodcttocart(){

 const firstButton = this.addtocart.first();

    await firstButton.click();

    await expect(this.page.locator('.shopping_cart_badge'))
        .toHaveText('1');

   // await expect(firstButton).toHaveText('Remove');


}
async allproducttothecart(){


while (await this.addtocart.count() > 0) {
       await this.addtocart.first().click();

}


  /* const totalbuttons=await this.addtocart;
  const count= await totalbuttons.count();
  
console.log("total counts",count);

  for(let i=0;i<count;i++){

    await totalbuttons.nth(i).first().click();
  }*/



}
async addspecificproductTocart(productname){

/*const addproducts=await this.productname;
const count =await addproducts.count();
for(let i=0;i<count;i++){
const name=await this.addproducts.nth(i).textContent();
if(name && productname.includes(name.trim())){
await this.addtocart.nth(i).click();
await this.page.waitForTimeout(3000);
 }
}


for (const name of productname) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: name })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }*/
for (const name of productname) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: name })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }












}

async filerByNameAtoZ(){
await this.filerdropdown.selectOption( "az");

}

async filterByNameZtoA(){
await this.filerdropdown.selectOption( "za");
}

async filterByPricelowtohigh(){

  await this.filerdropdown.selectOption("lohi");
}

async filterByPricehightolow(){
await this.filerdropdown.selectOption("hilo");

}

async getProductNames(){

  return await this.productname.allTextContents();
}

async getproductprice(){

  const prices= await this.productprice.allTextContents();

return prices.map(price=>parseFloat(price.replace('$','')));
}

async clickoncartlink(){

await this.cartlink.first().click();


}
async getFirstProductDetails(){
const name=await this.productname.first().textContent();
const description=await this.productdescription.first().textContent();
const price=await this.productprice.first().textContent();
return{

name:name?.trim(),
description:description?.trim(),
price:price?.trim()

}



}

async getAllProductDetails(){

const allNames=await this.productname.allTextContents();
const allDescription=await this.productdescription.allTextContents();
const allPrice=await this.productprice.allTextContents();

const allproducts=allNames.map((_,i)=>({
name:allNames[i].trim(),
description:allDescription[i].trim(),
price:allPrice[i].trim()

}))
return allproducts;



}
async getSpecificProductDetails(productname){
const allNames=await this.productname.allTextContents();
const allDescription=await this.productdescription.allTextContents();
const allPrice=await this.productprice.allTextContents();

const allproducts=allNames.map((_,i)=>({
name:allNames[i].trim(),
description:allDescription[i].trim(),
price:allPrice[i].trim()

}))
return allproducts.filter(p=> productname.includes(p.name));

}








}