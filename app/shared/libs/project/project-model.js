'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      TestCollection = require('shared/libs/test/test-collection'),
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

    return project;
  };

  return ProjectModel;
});
