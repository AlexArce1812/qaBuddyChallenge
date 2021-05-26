
import LoginPage from '../pages/loginPage'
import NotePage from '../pages/notePage'
import * as constants from '../utils/constants'
import allureReporter from '@wdio/allure-reporter'

describe ('Login Test Suite', () => {

    beforeEach(() => {
        LoginPage.open()
      })

    it('login with wrong credentials', () => {
        allureReporter.addFeature('Login with Wrong Credentials')    
        LoginPage.login(constants.WRONGEMAIL,constants.WRONGPASSWORD);
        expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('login with empty email', () => {
        allureReporter.addFeature('Login with Empty Email')    
         LoginPage.login(constants.EMPTY,constants.WRONGPASSWORD);
         expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('login with empty password', () => {
        allureReporter.addFeature('Login With Empty Password')    
         LoginPage.login(constants.EMAIL,constants.EMPTY);
        expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('Successful login',  () => {
        allureReporter.addFeature('Login Successful')    
        LoginPage.login(constants.EMAIL, constants.PASSWORD);
        browser.pause(3000)
        if (NotePage.isTimezoneAlertDisplayed()) {
           NotePage.clickTimezoneBtn()
         }
        expect(NotePage.menu_toggle).toBeDisplayed(); 
    });
});