
import { expect } from '@playwright/test';
export class CartPage{
    constructor(page){
this.page=page;
this.cartTitle=page.locator('.title');
this.contineshoppinglink=page.locator('#continue-shopping');
this.checkoutbtn=page.locator('#checkout');
this.cartItems = page.locator('.cart_item');
this.productname=page.locator('.cart_item .inventory_item_name');
this.productdescription=page.locator('.cart_item .inventory_item_desc');
this.productprice=page.locator('.cart_item .inventory_item_price');
this.removebtn=page.locator('#remove-sauce-labs-backpack');
 }

async continueshopping(){

await this.contineshoppinglink.click();


}

async cartpagetitle(){

return this.cartTitle;

}

async checkoutdetails(){

    await this.checkoutbtn.click();
}
async clickonremovebtn(){

await this.removebtn.first().click();

}




async getcartproducts(){
    await this.page.waitForURL('**/cart.html');
  await this.cartItems.first().waitFor({ state: 'visible' });
    
const allNames=await this.productname.allTextContents();
const allDescription=await this.productdescription.allTextContents();
const allPrices=await this.productprice.allTextContents();

const allcartProducts=allNames.map((_,i)=>
    ({
name:allNames[i].trim(),
description: allDescription[i].trim(),
price:allPrices[i].trim()
}))
return allcartProducts;

    
}

async clickoncheckoutbtn(){

    await this.checkoutbtn.click();
}


















}