var app = require('koa')();

var routes = require('koa-router')();
app.use(require('./middleware/measured')());
app.use(require('koa-bodyparser')());
app.use(require('koa-validator')());
app.use(require('koa-static')('./client/.build'));
app.use(routes.middleware());


require('require-all')({
  dirname: __dirname + '/controller'
  , filter: /(.+Controller)\.js$/
  , resolve: function (controller) {
    controller({
      routing: routes,
      validate: require('./middleware/validate')
    });
  }
});


module.exports = app;
