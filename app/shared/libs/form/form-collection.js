'use strict';

define(function(require) {
  var FormModel = require('shared/libs/form/form-model'),
      collection = require('shared/libs/object/object-collection');

  var FormCollection = function(data) {
    this._className = 'FormCollection';

    collection.call(this, FormModel, data);
  };

  FormCollection.prototype = Object.create(collection.prototype);

  var prototype = FormCollection.prototype;

  return FormCollection;
});
