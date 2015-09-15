'use strict';

define(function(require) {
  var _ = require('underscore');

  var ObjectFactory = function() {
    this.className = 'factory';
  },

  prototype = ObjectFactory.prototype;

  /**
   * Get the configuration Object
   *
   * @param {string|array} type
   * @return {object|array} Config Object
   */
  prototype.get = function(type) {
    if (typeof type === 'string') {
      return this.classes[type];
    }

    var result = [];
    if (_.isArray(type)) {
      for (var i in type) {
        var Model = this.classes[type[i]];
        result.push(new Model());
      }
    }

    return result;
  };

  return ObjectFactory;
});
