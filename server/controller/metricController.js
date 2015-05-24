var Immutable = require('immutable');

module.exports = [{

  name: 'metrics',
  path: '/metrics',
  methods: ['get'],
  handler: function *() {
    this.body = Immutable
      .Map()
      .merge(this.metrics.http.toJSON())
      .merge(this.metrics.app.toJSON());
  }
}];