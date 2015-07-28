'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree');

  var ProjectsController = require('components/projects/list/projects.controller'),
      ProjectController = require('components/projects/detail/project.controller'),
      ProjectTestsController = require('components/projects/tests/project-tests.controller'),
      ProjectTestController = require('components/projects/tests/detail/project-test.controller'),
      ProjectTestFormController = require('components/projects/tests/forms/detail/project-test-form.controller'),
      ProjectUsersController = require('components/projects/users/project-users.controller'),
      ProjectCreateController = require('components/projects/create/project-create.controller'),
      ItemsController = require('components/projects/modal/items.controller'),
      ProjectsService = require('components/projects/projects.service'),
      TestModel = require('shared/libs/test/test-model');

  return angular.module('app.projects', ['ui.tree'])

  .service('ProjectsService', ProjectsService)

  .factory('TestModel', function() { return TestModel; })

  .controller('ProjectController', ProjectController)
  .controller('ProjectsController', ProjectsController)
  .controller('ProjectTestsController', ProjectTestsController)
  .controller('ProjectUsersController', ProjectUsersController)
  .controller('ProjectCreateController', ProjectCreateController)
  .controller('ProjectTestController', ProjectTestController)
  .controller('ProjectTestFormController', ProjectTestFormController)
  .controller('ItemsController', ItemsController);

});
