'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      TestCollection = require('shared/libs/test/test-collection'),
      UserCollection = require('shared/libs/user/user-collection'),
      schema = require('shared/libs/project/project-schema');

  var ProjectModel = function(data) {
    this._schema = schema;

    model.call(this, data);
  };

  ProjectModel.prototype = Object.create(model.prototype);

  var prototype = ProjectModel.prototype;

  prototype._processData = function(project) {
    if (!_.isUndefined(project.tests)) {
      project.tests = new TestCollection(project.tests);
    }

    if (!_.isUndefined(project.users)) {
      project.users = new UserCollection(project.users);
    }

    return project;
  };

  return ProjectModel;
});
