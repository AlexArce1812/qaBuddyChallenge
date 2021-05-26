import Page from './page'


class NotePage extends Page{

    get menu_toggle(){return $('.left_menu_toggle')}
    get newTaskBtn(){return $('.plus_add_button')}
    get inputNewTask(){return $('.public-DraftEditor-content')}
    get addBtn(){return $('.ist_button_red')}
    get settingsBtn(){return $('.settings_btn')}
    get logOutBtn(){return $$('.user_menu_label')[8]}
    get changeTimezoneBtn () { return $('.close') }

    createNewTask(taskName){
        this.newTaskBtn.click();
        browser.pause(1000)
        this.inputNewTask.setValue(taskName);
        browser.pause(1000)
        this.addBtn.click();
    }

    createTasks( numberOfTasks){
        for (let i = 1; i <= numberOfTasks; i++) {
            browser.pause(1000)
            this.inputNewTask.setValue("taskName" + i);
            browser.pause(1000)
            this.addBtn.click();
        }
     }

     getTaskByName(taskName){
        return browser.$('//div[contains(text(),"'+taskName+'")]')
     }

      clickTimezoneBtn () {
        this.changeTimezoneBtn.click()
      }
    
      isTimezoneAlertDisplayed () {
        return this.changeTimezoneBtn.isDisplayed()
      }

}

export default new NotePage();