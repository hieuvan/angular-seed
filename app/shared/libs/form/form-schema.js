'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var _properties = [
    { key: 'id', type: 'int' },
    { key: 'name', type: 'string' },
    { key: 'test_id', type: 'string' },
    { key: 'items', type: 'array', required: false }
  ];

  var FormSchema = function() {
    this._className = 'FormModel';
    this._properties = _properties;

    schema.call(this);
  };

  FormSchema.prototype = Object.create(schema.prototype);

  return new FormSchema;
});
