
import LoginPage from '../pages/loginPage'
import NotePage from '../pages/notePage'
import * as constants from '../utils/constants'
import allureReporter from '@wdio/allure-reporter'

describe ('Task Creation', () => {
    before(()=>{
        LoginPage.open();
        LoginPage.login(constants.EMAIL, constants.PASSWORD);
        browser.pause(5000)
       // if (NotePage.isTimezoneAlertDisplayed()) {
         //   NotePage.clickTimezoneBtn()
         // }
    })

    it('create 1 task', () => {  
        allureReporter.addFeature('create 1 task')    
        let taskName=constants.TASKNAME+new Date().getMilliseconds();
        NotePage.createNewTask(taskName);
        expect(NotePage.getTaskByName(taskName)).toHaveText(taskName);
    });

    it('create 10 task', () => {
        allureReporter.addFeature('create 10 task')   
        NotePage.createTasks(10);
        for(let i=1;i<10;i++){
        expect(NotePage.getTaskByName("taskName" + i)).toHaveText( "taskName" + i)
        }

    });

});