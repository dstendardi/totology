

var myStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^I am on "\/"$/, function (arg1, callback) {
    this.browser.url('http://google.com')
      .setValue('*[name="q"]','webdriverio')
      .click('*[name="btnG"]')
      .pause(1000)
      .getTitle(function(err,title) {
        console.log(title);
      })
      .end();
  });
};
module.exports = myStepDefinitionsWrapper;