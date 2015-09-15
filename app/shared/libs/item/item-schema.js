'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var _properties = [
    { key: 'id', type: 'int' },
    { key: 'title', type: 'string' },
    { key: 'type', type: 'string', required: false },
    { key: 'uid', type: 'string' },
    { key: 'unit_title', type: 'string', required: false },
    { key: 'unit_uid', type: 'string', required: false },
    { key: 'config', type: 'array', required: false },
    { key: 'items', type: 'array', required: false }
  ];

  var ItemSchema = function() {
    this._className = 'ItemModel';
    this._properties = _properties;

    schema.call(this);
  };

  ItemSchema.prototype = Object.create(schema.prototype);

  return new ItemSchema();

});
