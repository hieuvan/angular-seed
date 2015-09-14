'use strict';

define(function(require) {
  var config = require('shared/libs/config/config-model');

  var data = {
    type: 'timer',
    icon: 'clock-o'
  };

  var Timer = function() {
    config.call(this, data);
  };

  Timer.prototype = Object.create(config.prototype);

  return Timer;
});
