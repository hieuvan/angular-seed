'use strict';

define(function(require) {
  require('angular');

  var ProjectsController = require('components/projects/list/projects.controller'),
      ProjectController = require('components/projects/detail/project.controller'),
      ProjectTestsController = require('components/projects/tests/project-tests.controller'),
      ProjectUsersController = require('components/projects/users/project-users.controller'),
      ProjectCreateController = require('components/projects/create/project-create.controller'),
      ProjectsService = require('components/projects/projects.service');

  return angular.module('app.projects', [])

  .service('ProjectsService', ProjectsService)

  .controller('ProjectController', ProjectController)
  .controller('ProjectsController', ProjectsController)
  .controller('ProjectTestsController', ProjectTestsController)
  .controller('ProjectUsersController', ProjectUsersController)
  .controller('ProjectCreateController', ProjectCreateController);

});
