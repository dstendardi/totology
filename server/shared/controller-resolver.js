var assert = require('assert');
var validate = require('./middleware/validate');
var Immutable = require('immutable');

module.exports = function(router) {

  return function (routes) {

    Immutable.Map(routes)
      .forEach(function(options, name) {

      assert(name, "name is required");
      assert(options.path, "path is required");
      assert(options.methods, "methods is required");
      assert(options.handler, "handler is required");

      var args = [name, options.path, options.methods];

      if (options.validate) {
        args.push(validate(options.validate));
      }

      args.push(options.handler);

      router.register.apply(router, args);
    });
  }
};