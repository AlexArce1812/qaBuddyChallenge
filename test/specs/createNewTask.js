
import LoginPage from '../pages/loginPage'
import NotePage from '../pages/notePage'
import * as constants from '../utils/constants'


describe ('Task Creation', () => {

    beforeEach(()=>{
        LoginPage.open();
        LoginPage.clickLoginLink()
        LoginPage.login(constants.EMAIL, constants.PASSWORD);
    })

    it('create 1 task', () => {      
        let taskName=constants.TASKNAME+new Date().getMilliseconds();
        NotePage.createNewTask(taskName);
        expect(NotePage.getTaskByName(taskName)).toHaveText(taskName);
        NotePage.logout()
    });

    it('create 10 task', () => {
        NotePage.createTasks(10);
        for(let i=1;i<10;i++){
           expect(NotePage.getTaskByName("taskName "+i)).toHaveText("taskName "+i)
        }

    });

});