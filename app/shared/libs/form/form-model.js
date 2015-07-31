'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      ItemsCollection = require('shared/libs/item/item-collection'),
      schema = require('shared/libs/form/form-schema');

  var FormModel = function(data, includes) {
    this._schema = schema;

    model.call(this, data, includes);
  };

  FormModel.prototype = Object.create(model.prototype);

  var prototype = FormModel.prototype;

  return FormModel;
});
