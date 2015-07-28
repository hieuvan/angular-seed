'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var _properties = [
    { key: 'id', type: 'int', required: true },
    { key: 'name', type: 'string', required: true }
  ];

  var FormSchema = function() {
    this._className = 'FormModel';
    this._properties = _properties;

    schema.call(this);
  };

  FormSchema.prototype = Object.create(schema.prototype);

  return new FormSchema;
});
