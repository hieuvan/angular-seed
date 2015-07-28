'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/test/test-schema'),
      Collection = require('shared/libs/object/object-collection'),
      FormModel = require('shared/libs/form/form-model');

  var TestModel = function(data) {
    this._schema = schema;
    model.call(this, data);
  };

  TestModel.prototype = Object.create(model.prototype);

  var prototype = TestModel.prototype;

  prototype._processData = function(data) {
    data.forms = new Collection(FormModel, data.forms);

    return data;
  };

  return TestModel;
});
