'use strict';

define(function(require) {
  var config = require('shared/libs/config/config-model');

  var Calculator = function() {
    this.icon = 'calc';
  };

  Calculator.prototype = Object.create(config.prototype);

  return Calculator;
});
