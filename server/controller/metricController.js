module.exports = function ($) {

  var Immutable = require('immutable');

  $.routing.get('metrics', '/metrics'
    , function *() {
      this.body = Immutable
        .Map()
        .merge(this.metrics.http.toJSON())
        .merge(this.metrics.app.toJSON());
    });
};