var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router');
var validator = require('koa-validator');
var bodyParser = require('koa-bodyparser');
var measured = require('./middleware/measured');
var validate = require('./middleware/validate');
var Immutable = require('immutable');
var app = koa();
var routes = router();

routes.post('/', validate(function *() {
    this.checkBody('name').len(2, 2);
  }),  function *() {
    this.metrics.app.meter('hello').mark();
    this.body = {"hello": this.request.body.name};
});

routes.get('/metrics', function *() {
  this.body = Immutable
    .Map()
    .merge(this.metrics.http.toJSON())
    .merge(this.metrics.app.toJSON());
});

app.use(validator());
app.use(measured());
app.use(bodyParser());
app.use(routes.middleware());
app.use(serve("./client/.build"));

module.exports = app
