'use strict';

define(function(require) {
  var ObjectSchema = require('shared/libs/object/object-schema');
  var _properties = [
    { key: 'username', type: 'string' },
    { key: 'email', type: 'string' },
    { key: 'family_name', type: 'string' },
    { key: 'given_name', type: 'string' },
    { key: 'name', type: 'string' }
  ];

  var UserSchema = function() {
    this._className = 'UserModel';
    this._properties = _properties;

    ObjectSchema.call(this);
  };

  UserSchema.prototype = Object.create(ObjectSchema.prototype);

  return new UserSchema;
});
