import Page from './page'


class NotePage extends Page{

    get menu_toggle(){return $('.left_menu_toggle')}
    get newTaskBtn(){return $('.plus_add_button')}
    get inputNewTask(){return $('.public-DraftEditor-content')}
    get submitBtn(){return $('.ist_button')}
    get settingsBtn(){return $('.settings_btn')}
    get logOutBtn(){return $$('.user_menu_label')[8]}

    createNewTask(taskName){
        this.newTaskBtn.click();
        this.inputNewTask.setValue(taskName);
        this.submitBtn.click();
    }

    createTasks(numberOfTasks){
        this.newTaskBtn.click()
        for (let i = 1; i <= numberOfTasks; i++) {
            browser.pause(1000)
            this.inputNewTask.setValue("taskName " + i)
            this.submitBtn.click()
        }
        browser.refresh()
     }

     getTaskByName(taskName){
        return browser.$('//div[contains(text(),"'+taskName+'")]')
     }

     logout(){
        this.settingsBtn.click()
        this.logOutBtn.click()
    } 


}

export default new NotePage();