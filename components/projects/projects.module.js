'use strict';

define(function(require) {
  require('angular');

  var ProjectsController = require('components/projects/list/projects.controller'),
      ProjectController = require('components/projects/detail/project.controller'),
      ProjectCreateController = require('components/projects/create/project-create.controller'),
      ProjectsService = require('components/projects/projects.service'),
      RouteConfig = require('components/projects/route.config');

  return angular.module('app.projects', [])

  .config(RouteConfig)

  .service('ProjectsService', ProjectsService)

  .controller('ProjectController', ProjectController)
  .controller('ProjectsController', ProjectsController)
  .controller('ProjectCreateController', ProjectCreateController);

});
