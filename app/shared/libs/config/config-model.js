'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
    schema = require('shared/libs/config/config-schema');

  var Config = function(data) {
    data = data || {
      type: 'config',
      icon: 'wrench'
    };

    this._schema = schema;

    model.call(this, data);
  };

  Config.prototype = Object.create(model.prototype);

  var prototype = Config.prototype;

  /**
   * Get icon for the config
   *
   * @return {string}
   */
  prototype.getIcon = function() {
    return this.get('icon');
  };

  /**
   * Get configuration type
   *
   * @return {string}
   */
  prototype.getType = function() {
    return this.get('type');
  };

  /**
   * Flat representation of Object
   *
   * @overrides
   * @return {string}
   */
  prototype.flatten = function() {
    return this.getType();
  };

  return Config;
});
