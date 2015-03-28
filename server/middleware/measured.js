var metrics = require('measured');

module.exports = function measured() {
  var http = new metrics.Collection('http');
  var app = new metrics.Collection('app');
  return function*(next) {
    this.metrics = {
      http: http,
      app: app
    };
    http.meter('requests_per_seconds').mark();
    yield next;
  };
};
