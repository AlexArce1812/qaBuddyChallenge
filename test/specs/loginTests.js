
import LoginPage from '../pages/loginPage'
import NotePage from '../pages/notePage'
import * as constants from '../utils/constants'


describe ('Login Test Suite', () => {

    beforeEach(() => {
        LoginPage.open()
        LoginPage.clickLoginLink();
      })

    it('Successful login',  () => {
        LoginPage.login(constants.EMAIL, constants.PASSWORD);
        expect(NotePage.menu_toggle).toBeDisplayed();  
        NotePage.logout()
    });

    it('login with wrong credentials', () => {
        LoginPage.login(constants.WRONGEMAIL,constants.WRONGPASSWORD);
        expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('login with empty email', () => {
         LoginPage.login(constants.EMPTY,constants.WRONGPASSWORD);
         expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('login with empty password', () => {
         LoginPage.login(constants.EMAIL,constants.EMPTY);
        expect(LoginPage.errorMessage).toBeDisplayed();
    });
});