module.exports = function (f) {
  return function *(next) {
    yield f;
    if (this.haveValidationError()) {
      this.body = this.validationErrors();
    } else {
      yield next
    }
  };
};
