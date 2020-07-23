# justeat-webdriverio-cucumberjs-typescript
This is a test automation framework that tests the just eat website 

The framework is based on WebdriverIO, cucumberJS,Chai and the language is TypeScript

The strucure of the framework is as follows

    features/ folder has the all the cucumber feature files
    

    step-defintions/ folder has all the pertaining step definitions written in TypeScript
    

    page-pbjects/ folder has all the page objects which are basically classes representing the pages 
    of web app under test
    

    support/ folder has an environment.ts file that for now has configuration for just the base url of 
    production or any test environment but more paths or config can be added here
    
    
    jsonFolder/  folder has any .json cucumber report files generated as a result of a test suite run
    
    
    htmlReports/ folder has .html cucumber reports which are run againts the .json cucumber files generates. 
    The html files are timestamped
    
    
    screenshots/  folder has screenshots generated after any scenario that fails 
    with the scenario name and timestamped
                                      
 
 Aside from this there are three more files
 
    tsconfig.json This has all the information about typecriped files compilation into javascript
    
 
    package.json This has all the node modules dependencies listed that will be installed as a 
    results of running **npm install** as well as the scripts that have been explained above
    

    cucumber-html-reporter.js This file as the content suggests reads .json cucumber reports 
    from the fodler jsonFolder and creates the html reports

The project is based on nodeJS and has been developed against the 

    node version 12.18.2
    
In order for you to run the tests on your local machine it recommended that you first install all 
the relevant node packages with the following command
  
    npm install
    
Then in order to run the tests you can run this command 

    npm run test
    
 The above command is a combination of three commands. It first deletes any .json files that are 
 generated previously by a report run. This is because the .json cucumber files are not timestamped. 
 It then runs the webdriverIO tests against the **wdio.conf.js** file and lastly run the commands to generated the html files
 
 
 If you want to add new feature files or scenarios to existing features files there is also a command called 
 
    npm run cucumber
    
 This will generate new step definitions but it has an issue at the moment that it throws an error against 
 the step definition that has imports so it is suggested to comment the existing step definitions 
 while running this command

### HTML cucumber reports

The html reports generated at the end of each run has both screenshots as well as the url that the browser 
had at the point of failure for easy debugging

### Flaky Scenarios 

The two scenarios that have been added attempt to test the core of the customer workflow

1. The first Scenario that has been added tests the cuisine filter functionality of the website and upon
filtering it then compares if the resulting restaurants have the same cuisine

2. The second scenario checked the change location functionality of the website and checks
if you land back on home page 

In order to cater to the flakiness of both these scenarios explicit waits have been added with certain 
time limits as well as logging on why the condition wasnt met when time out period is over

 
    
    
