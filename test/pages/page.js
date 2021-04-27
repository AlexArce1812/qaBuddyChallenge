
import wdio from '../../wdio.conf'

export default class Page{

    open(){
        return browser.url(wdio.config.baseUrl);
    }

}
