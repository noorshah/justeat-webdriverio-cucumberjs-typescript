var reporter = require('cucumber-html-reporter');
var options = {
    theme: 'bootstrap',
    jsonDir: 'jsonReports/',
    output: 'htmlReports/cucumber_report.html',
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
    }
};

reporter.generate(options);