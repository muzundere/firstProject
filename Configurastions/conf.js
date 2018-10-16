// An example configuration file
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/screenshots'
   }).getJasmine2Reporter());
   jasmine.getEnv().addReporter(new SpecReporter({
    displayFailuresSummary: true,
    displayFailuredSpec: true,
    displaySuiteNumber: true,
    displaySpecDuration: true
  }));
    return browser.executeScript("alert('Test');").then(function () {
      return browser.switchTo().alert().accept();
    });
  },
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../Tests/firstTests.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
