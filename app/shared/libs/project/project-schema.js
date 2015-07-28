'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var _properties = [
    { key: 'id', type: 'int' },
    { key: 'itrack_reference', type: 'string' },
    { key: 'name', type: 'string' }
  ];

  var ProjectSchema = function() {
    this._className = 'ProjectModel';
    this._properties = _properties;

    schema.call(this);
  };

  ProjectSchema.prototype = Object.create(schema.prototype);

  return new ProjectSchema;

});
