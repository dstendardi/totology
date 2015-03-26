
var webdriverio = require('webdriverio');
var WorldConstructor = function WorldConstructor(callback) {

  var browser = webdriverio
    .remote({
      desiredCapabilities: {
        browserName: 'chrome'
      },
      host: 'selenium',
      port: 4444
    })
    .init();

  var world = {
    browser: browser
  };

  callback(world);
};
exports.World = WorldConstructor;