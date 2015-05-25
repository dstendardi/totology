var Immutable = require('immutable');

/**
 * Metrics
 *
 * @type {{path: string, methods: string[], handler: Function}}
 */
module.exports['metrics'] = {
  path: '/metrics',
  methods: ['get'],
  handler: function *() {
    this.body = Immutable
      .Map()
      .merge(this.metrics.http.toJSON())
      .merge(this.metrics.app.toJSON());
  }
};