'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/form/form-schema');

  var FormModel = function(data) {
    this._schema = schema;

    model.call(this, data);
  };

  FormModel.prototype = Object.create(model.prototype);

  var prototype = FormModel.prototype;

  return FormModel;
});
