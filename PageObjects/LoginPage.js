import { expect } from '@playwright/test';
export class LoginPage{
constructor(page){

    this.page=page;
this.uname=page.locator('#user-name');
this.pass=page.locator('#password');
this.loginbtn=page.locator('#login-button');
}

async login(username,password){
    await this.uname.fill(username);
    await this.pass.fill(password);
   
    //await this.loginbtn.waitFor({ state: 'visible' });  
   // await this.loginbtn.click();
    //await expect(this.page).toHaveURL(/inventory\.html/);
}
async clickonloginbtn(){
   
     
     this.loginbtn.click();
   
   
    
   
   //await this.loginbtn.click();
}




}