'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var _properties = [
    { key: 'icon', type: 'string' },
    { key: 'type', type: 'string' }
  ];

  var ConfigSchema = function() {
    this._className = 'ConfigModel';
    this._properties = _properties;

    schema.call(this);
  };

  ConfigSchema.prototype = Object.create(schema.prototype);

  return new ConfigSchema();
});
