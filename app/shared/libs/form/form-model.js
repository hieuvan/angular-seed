'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model');

  var FormModel = function(data) {

    model.call(this, data);
  };

  FormModel.prototype = Object.create(model.prototype);

  var prototype = FormModel.prototype;

  return FormModel;
});
