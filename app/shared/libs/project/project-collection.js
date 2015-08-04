'use strict';

define(function(require) {
  var ProjectModel = require('shared/libs/project/project-model'),
      collection = require('shared/libs/object/object-collection');

  var ProjectCollection = function(data, includes) {
    this._className = 'ProjectCollection';

    collection.call(this, ProjectModel, data, includes);
  };

  ProjectCollection.prototype = Object.create(collection.prototype);

  var prototype = ProjectCollection.prototype;

  return ProjectCollection;
});
