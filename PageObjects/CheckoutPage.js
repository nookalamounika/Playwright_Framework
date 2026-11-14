export class CheckoutPage{
constructor(page){

this.page=page;

this.pageinfo=page.locator('.title');
this.cancelbtn=page.locator('#cancel');
this.continuebtn=page.locator('#continue');
this.firstname=page.locator('#first-name');
this.lastname=page.locator('#last-name');
this.pincode=page.locator('#postal-code');
this.errormessage=page.locator('.error-message-container.error');
}

async titleofthepage(){

return await this.pageinfo;


}
async checkoutcontinuebtn(){

    await this.continuebtn.click();
}

async checkoutcancelbtn(){

    await this.cancelbtn.click();
}
async fillcheckoutdetails(fname,lname,pno){

await this.firstname.fill(fname);
await this.lastname.fill(lname);
await this.pincode.fill(pno);



}


async geterrormessage(){


    return await this.errormessage.textContent();
}






























































}