'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
    schema = require('shared/libs/item/item-schema');

  var Config = function(type) {
    this.type = type;
    this.icon = 'wrench';
    var data = {
      type: type,
      icon: 'wrench'
    };

    model.call(this, data);
  };

  Config.prototype = Object.create(model.prototype);

  var prototype = Config.prototype;

  return Config;
});
