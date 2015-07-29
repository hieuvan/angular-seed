'use strict';

define(function(require) {
  var ObjectSchema = require('shared/libs/object/object-schema');
  var _properties = [
    { key: 'id', type: 'int' },
    { key: 'name', type: 'string' },
    { key: 'email', type: 'string', required: false },
    { key: 'given_name', type: 'string', required: false },
    { key: 'family_name', type: 'string', required: false }
  ];

  var UserSchema = function() {
    this._className = 'UserModel';
    this._properties = _properties;

    ObjectSchema.call(this);
  };

  UserSchema.prototype = Object.create(ObjectSchema.prototype);

  return new UserSchema;
});
