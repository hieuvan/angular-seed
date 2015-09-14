'use strict';

define(function(require) {

  var collection = require('shared/libs/object/object-collection'),
      model = require('shared/libs/config/config-model');

  var ConfigCollection = function(data) {
    collection.call(this, model, data);
  };

  ConfigCollection.prototype = Object.create(collection.prototype);

  var prototype = ConfigCollection.prototype;

  return ConfigCollection;
});
