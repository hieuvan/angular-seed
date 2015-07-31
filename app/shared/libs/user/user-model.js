'use strict';

define(function(require) {
  var ObjectModel = require('shared/libs/object/object-model'),
      schema = require('shared/libs/user/user-schema');

  var UserModel = function(data, includes) {
    this._schema = schema;
    ObjectModel.call(this, data, includes);
  };

  UserModel.prototype = Object.create(ObjectModel.prototype);

  var prototype = UserModel.prototype;

  return UserModel;
});
