/**
 * Main route
 *
 * @type {{path: string, methods: string[], validate: Function, handler: Function}}
 */
module.exports['main'] = {
  path: '/',
  methods: ['post'],
  validate: function *() {
    this.checkBody('name').len(2, 2);
  },
  handler: function *() {
    this.metrics.app.meter('hello').mark();
    this.body = {
      'hello': this.request.body.name
    };
  }
};