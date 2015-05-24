module.exports = [{

  name: 'main',
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
}];