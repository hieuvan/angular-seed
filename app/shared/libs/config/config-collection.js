'use strict';

define(function(require) {

  var collection = require('shared/libs/object/object-collection'),
      model = require('shared/libs/config/config-model');

  var ConfigCollection = function(data) {
    this._className = 'ConfigCollection';

    collection.call(this, model, data);
  };

  ConfigCollection.prototype = Object.create(collection.prototype);

  return ConfigCollection;
});
