'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/test/test-schema'),
      FormCollection = require('shared/libs/form/form-collection');

  var TestModel = function(data) {
    this._schema = schema;
    model.call(this, data);
  };

  TestModel.prototype = Object.create(model.prototype);

  var prototype = TestModel.prototype;

  prototype._processData = function(test) {
    if (!_.isUndefined(test.forms)) {
      test.forms = new FormCollection(test.forms);
    }

    return test;
  };

  return TestModel;
});
