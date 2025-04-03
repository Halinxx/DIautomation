# DIautomation

### Requirements
* Node 18.0.0+ 

To run tests you should follow:
1. Clone repo
2. Run `npm install`
3. Create `.env` file in root folder and add


      #.env file
    	USERNAME=username1
      PASSWORD=password
      baseUrl=www.di.no
		
4.Make sure you have at least one of the browsers listed in `wdio.conf.ts` and uncomment desired enviroments (safari and/or chrome recommended) 

```
    capabilities: [
        {
            browserName: 'chrome'
        }, 
        // {
        //     browserName: 'firefox'
        // }, 
        {
            browserName: 'safari'
        }
        // {
        //     browserName: 'MicrosoftEdge'
        // }
        ],
```
5.Run` npx wdio run ./wdio.conf.js `

6.Run `allure generate allure-results --clean  && allure open` to see results

### Current test suit:
- home.e2e.ts
  - open all links from the top navigation
- login.e2e.ts
  - login with incorrect data
  - open "Forgotten/expired password?" page and go back
- contact.e2e.ts
  - fill the contact form
- news.e2e.ts
  - add email to email input in the subscribe dialog

### To do:
- home.e2e.ts
  - open **all links** from the home page
  - use [Visual Testing](https://webdriver.io/docs/visual-testing#what-can-it-do) to do snapshot testing
- login.e2e.ts
  - login with correct data
  - login with expired user (?)
  - follow "Forgotten/expired password?" (depends on the email sending solution)
- contact.e2e.ts
  - fill the contact form and send an email (depends on dev/stage solutions)
- news.e2e.ts
  - subscribe to news
