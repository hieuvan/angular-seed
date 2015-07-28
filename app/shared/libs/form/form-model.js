'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      ItemsCollection = require('shared/libs/item/item-collection'),
      schema = require('shared/libs/form/form-schema');

  var FormModel = function(data) {
    this._schema = schema;

    model.call(this, data);
  };

  FormModel.prototype = Object.create(model.prototype);

  var prototype = FormModel.prototype;

  prototype._processData = function(form) {
    if (!_.isUndefined(form.items)) {
      form.items = new ItemsCollection(form.items);
    }

    return form;
  };

  return FormModel;
});
