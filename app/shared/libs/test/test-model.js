'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/test/test-schema'),
      FormModel = require('shared/libs/form/form-model');

  var TestModel = function(data) {
    this._schema = schema;

    model.call(this, data);
  };

  TestModel.prototype = Object.create(model.prototype);

  var prototype = TestModel.prototype;

  prototype._processData = function(data) {
    var forms = [];
    _.each(data.forms, function(form) {
      forms.push(new FormModel(form));
    });

    data.forms = forms;

    return data;
  };

  return TestModel;
});
