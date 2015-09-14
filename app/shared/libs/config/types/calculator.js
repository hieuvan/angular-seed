'use strict';

define(function(require) {
  var config = require('shared/libs/config/config-model');

  var data = {
    type: 'calculator',
    icon: 'calculator'
  };

  var Calculator = function() {
    config.call(this, data);
  };

  Calculator.prototype = Object.create(config.prototype);

  return Calculator;
});
