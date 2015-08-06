'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree');

  var ProjectsController = require('components/projects/list/projects.controller'),
      ProjectController = require('components/projects/detail/projects.controller'),
      ProjectTestsController = require('components/projects/tests/projects-tests.controller'),
      ProjectTestController = require('components/projects/tests/detail/projects-tests.controller'),
      ProjectTestFormController = require('components/projects/tests/forms/detail/projects-tests-forms.controller'),
      ProjectUsersController = require('components/projects/users/projects-users.controller'),
      ProjectCreateController = require('components/projects/create/projects-create.controller'),
      ProjectsService = require('components/projects/projects.service'),
      ProjectTestFormService = require('components/projects/tests/forms/projects-tests-forms.service'),
      AddItemsController = require('components/projects/tests/forms/detail/modal/add-items.controller'),
      RemoveItemsController = require('components/projects/tests/forms/detail/modal/remove-items.controller');

  return angular.module('app.projects', ['ui.tree'])

  .service('ProjectsService', ProjectsService)
  .service('ProjectTestFormService', ProjectTestFormService)

  .controller('ProjectController', ProjectController)
  .controller('ProjectsController', ProjectsController)
  .controller('ProjectTestsController', ProjectTestsController)
  .controller('ProjectUsersController', ProjectUsersController)
  .controller('ProjectCreateController', ProjectCreateController)
  .controller('ProjectTestController', ProjectTestController)
  .controller('ProjectTestFormController', ProjectTestFormController)
  .controller('AddItemsController', AddItemsController)
  .controller('RemoveItemsController', RemoveItemsController);

});
