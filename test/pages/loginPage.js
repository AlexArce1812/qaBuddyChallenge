
import Page from './page'

class LoginPage extends Page {
    get logInBtn(){return $$('a[href="/users/showlogin"]')[0]}
    get inputEmail (){return $('#email')}
    get inputPassword (){return $('#password')}
    get submitBtn  (){return $('.submit_btn')}
    get errorMessage (){return $('.cmp_warning_circle')}

      login(user_email, password){
         this.inputEmail.setValue(user_email);
         this.inputPassword.setValue(password);
         this.submitBtn.click();
    }

    async clickLoginLink(){
        await this.logInBtn.click();
    }

    open (){
        return super.open();
    }


}

export default new LoginPage();

