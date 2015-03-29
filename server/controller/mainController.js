module.exports = function ($) {

  $.routing.post('main', '/'
    , $.validate(function *() {
      this.checkBody('name').len(2, 2);
    })
    , function *() {
      this.metrics.app.meter('hello').mark();
      this.body = {
        'hello': this.request.body.name
      };
    });

};