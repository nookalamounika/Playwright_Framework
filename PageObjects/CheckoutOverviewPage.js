export class CheckoutOverviewPage{

constructor(page){

this.page=page;
this.checkoutoverviewtitle=page.locator('.title');
this.productname=page.locator('.inventory_item_name');
this.productdescription=page.locator('.inventory_item_desc');
this.productprice=page.locator('.inventory_item_price');
this.clickoncancelbtn=page.locator('#cancel');
this.clickonfinishbtn=page.locator('#finish');
this.itemtotal=page.locator('.summary_subtotal_label');
this.tax=page.locator('.summary_tax_label');
this.total=page.locator('.summary_total_label');


    }

async getcheckoutoverviewdetails(){

    return {
        checkoutoverviewtitle: this.checkoutoverviewtitle,
        itemtotal: this.itemtotal,
        tax: this.tax,
        total: this.total
    };






//return await this.checkoutoverviewtitle.textContent();

//return await this.itemtotal.textContent();
//return await this.tax.textContent();
//return await this.total.textContent();

}

async getoverviewproductdetails(){
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
async checkoutoverviewcanelbtn(){

    await this.clickoncancelbtn.click();


    
}

async checkoutoverviewFinishbtn(){
await this.clickonfinishbtn.click();

}



























}