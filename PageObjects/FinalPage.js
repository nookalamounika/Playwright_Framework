export class FinalPage{
constructor(page){

this.page=page;
this.title=page.locator('.title');
this.successmessage=page.locator('.complete-header');
this.successmsgdescription=page.locator('.complete-text');
this.backhomelink=page.locator('#back-to-products');
this.generatepdforderlink=page.locator('#generate-pdf-order');


}

async getTitle(){
return await this.title;

}

async getsuccessmsgdetails(){
return{
successmessage:this.successmessage,
 successmsgdescription:this.successmsgdescription,


};
}

async clickonbackhomebtn(){


    await this.backhomelink.click();

    

}

async clickonegeneratepdf(){

    await this.generatepdforderlink.click();
}




































}

