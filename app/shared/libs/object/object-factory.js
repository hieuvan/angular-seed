'use strict';

define(function() {
  var ObjectFactory = function() {
    this.className = 'factory';
  },

  prototype = ObjectFactory.prototype;

  /**
   * Get the configuration Object
   *
   * @param type
   * @return {object} Config Object
   */
  prototype.get = function(type) {
    return this.classes[type];
  };

  return ObjectFactory;
});
