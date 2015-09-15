'use strict';

define(function(require) {
  var factory = require('shared/libs/object/object-factory');

  var ConfigFactory = function() {
    this.classes = {
      timer: require('shared/libs/config/types/timer'),
      calculator: require('shared/libs/config/types/calculator')
    };

    factory.call(this);
  };

  ConfigFactory.prototype = Object.create(factory.prototype);

  return new ConfigFactory();
});
