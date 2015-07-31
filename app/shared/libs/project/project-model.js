'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/project/project-schema');

  var ProjectModel = function(data, includes) {
    this._schema = schema;

    model.call(this, data, includes);
  };

  ProjectModel.prototype = Object.create(model.prototype);

  var prototype = ProjectModel.prototype;

  return ProjectModel;
});
