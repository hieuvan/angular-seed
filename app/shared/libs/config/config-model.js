'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
    schema = require('shared/libs/item/item-schema');

  var Config = function(data) {
    this.icon = 'wrench';

    model.call(this, data);
  };

  Config.prototype = Object.create(model.prototype);

  var prototype = Config.prototype;

  return Config;
});
