'use strict';

define(function(require) {
  var configs = {
    timer: require('shared/libs/config/types/timer'),
    calculator: require('shared/libs/config/types/calculator')
  };

  var ConfigFactory = function() {},

  prototype = ConfigFactory.prototype;

  /**
   * Get the configuration Object
   *
   * @param type
   * @return {object} Config Object
   */
  prototype.get = function(type) {
    return new configs[type]();
  };

  return new ConfigFactory();
});
