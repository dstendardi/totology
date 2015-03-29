var webdriverio = require('webdriverio');

exports.World = function WorldConstructor(callback) {

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