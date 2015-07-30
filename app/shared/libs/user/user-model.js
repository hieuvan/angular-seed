'use strict';

define(function(require) {
  // TODO: replace object collection with project collection
  var ObjectModel = require('shared/libs/object/object-model'),
      ProjectCollection = require('shared/libs/project/project-collection'),
      schema = require('shared/libs/user/user-schema');

  var UserModel = function(data) {
    this._schema = schema;
    ObjectModel.call(this, data);
  };

  UserModel.prototype = Object.create(ObjectModel.prototype);

  var prototype = UserModel.prototype;

  prototype._processData = function(user) {
    if (!_.isUndefined(user.projects)) {
      user.projects = new ProjectCollection(user.projects);
    }

    return user;
  };

  return UserModel;
});
