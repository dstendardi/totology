var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-joi-router');
var bodyParser = require('koa-bodyparser');
var measured = require('./middleware/measured');
var Immutable = require('immutable');
var app = koa();
var routes = router();

routes.get('/', function *() {
  this.metrics.app.meter('hello').mark();
  this.body = {"hello": "world"};
});

routes.get('/metrics', function *() {
  this.body = Immutable
    .Map()
    .merge(this.metrics.http.toJSON())
    .merge(this.metrics.app.toJSON());
});

app.use(measured());
app.use(bodyParser());
app.use(routes.middleware());
app.use(serve("./client/.build"));

module.exports = app
