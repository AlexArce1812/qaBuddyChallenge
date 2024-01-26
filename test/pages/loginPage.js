import Page from './page';

class LoginPage extends Page {
    get logInBtn() { return $('a[href="/users/showlogin"]').first(); }
    get inputEmail() { return $('#element-0'); }
    get inputPassword() { return $('#element-3'); }
    get submitBtn() { return $('button.F9gvIPl'); }
    get errorMessage1() { return $('div.a83bd4e0'); }
    get errorMessage2() { return $('#element-2'); }
    get errorMessage3() { return $('#element-5'); }

    login(user_email, password) {
        this.inputEmail.setValue(user_email);
        this.inputPassword.setValue(password);
        this.submitBtn.click();
    }

    async clickLoginLink() {
        await this.logInBtn.click();
    }

    open() {
        return super.open();
    }
}

export default new LoginPage();
