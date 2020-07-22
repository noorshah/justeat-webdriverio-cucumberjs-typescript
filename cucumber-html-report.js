var reporter = require('cucumber-html-reporter');
var moment = require('moment');
var options = {
    theme: 'bootstrap',
    jsonDir: 'jsonReports/',
    output: `htmlReports/cucumber-report${moment().format('MMMM-Do-YYYY-h:mm:ss')}.html`,
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
    }
};

reporter.generate(options);