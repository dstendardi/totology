var assert   = require('assert');
var validate = require('./middleware/validate');

module.exports = function(router) {

  return function (routes) {

    routes.forEach(function(route) {

      assert(route.name, "name is required");
      assert(route.path, "path is required");
      assert(route.methods, "methods is required");
      assert(route.handler, "handler is required");

      var args = [route.name, route.path, route.methods];

      if (route.validate) {
        args.push(validate(route.validate));
      }

      args.push(route.handler);

      router.register.apply(router, args);
    });
  }
};