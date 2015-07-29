'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var _properties = [
    { key: 'id', type: 'int' },
    { key: 'name', type: 'string' },
    { key: 'project_id', type: 'string' },
    { key: 'forms', type: 'array', required: false }
  ];

  var TestSchema = function() {
    this._className = 'TestModel';
    this._properties = _properties;

    schema.call(this);
  };

  TestSchema.prototype = Object.create(schema.prototype);

  return new TestSchema;
});
