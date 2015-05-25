var app = require('koa')();

var router = require('koa-router')();
app.use(require('./shared/middleware/measured')());
app.use(require('koa-bodyparser')());
app.use(require('koa-validator')());
app.use(require('koa-static')('./client/.build'));
app.use(router.middleware());

require('require-all')({
  dirname: __dirname + '/controller'
  , filter: /(.+\-controller)\.js$/
  , resolve: require('./shared/controller-resolver')(router)
});


module.exports = app;
