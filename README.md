# qaBuddyChallenge
QA Buddy Challenge

# The proyect needs the secrets below:
- EMAIL
- PASSWORD
- SAUCE_ACCESS_KEY
- SAUCE_USERNAME

# Setup
- Clone the repository
- Execute npm install

# Run Login Tests & Task Test
- Execute: ``` npm run test ```

# Allure Reporter
- Once our frontend finish, use the following command: ```allure generate ./allure-results && allure open```

# Headless Execution
- For using headless browser (Chrome) in this project we need to configure the `wdio.config.js` file with the next setup

```
      capabilities: [{maxInstances: 5,
        browserName: 'chrome',
       'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
         args: ['--headless', '--disable-gpu'],
        }
     }],
services : [chromedriver],
```

# CI

- It runs in GitHub Actions once we do a ```commit``` & ```push```to our branch.

# Cloud Cross Platform/Browser Provider
- It runs on SauceLabs, please ensure to have proper credentials set in the secrets in order to use it.

# INFO.

This framework uses an .env file to read the test data you need to create an .env file and fill it with your data, you can find a .env-info as an example. Please add secrets to avoid use sensitive information as public like passwords or tokens.
