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
      ProjectsService = require('components/projects/projects.service'),
      ProjectCollection = require('shared/libs/project/project-collection'),
      ItemsController = require('components/projects/tests/forms/detail/modal/items.controller'),
      FormModel = require('shared/libs/form/form-model'),
      FormCollection = require('shared/libs/form/form-collection'),
      TestModel = require('shared/libs/test/test-model'),
      UserModel = require('shared/libs/user/user-model'),
      UserCollection = require('shared/libs/user/user-collection'),
      ItemModel = require('shared/libs/item/item-model'),
      ItemCollection = require('shared/libs/item/item-collection'),
      ProjectModel = require('shared/libs/project/project-model');

  return angular.module('app.projects', ['ui.tree'])

  .service('ProjectsService', ProjectsService)

  .factory('TestModel', function() { return TestModel; })
  .factory('FormModel', function() { return FormModel; })
  .factory('FormCollection', function() { return FormCollection; })
  .factory('ProjectModel', function() { return ProjectModel; })
  .factory('ProjectCollection', function() { return ProjectCollection; })
  .factory('UserModel', function() { return UserModel; })
  .factory('UserCollection', function() { return UserCollection; })
  .factory('ItemModel', function() { return ItemModel; })
  .factory('ItemCollection', function() { return ItemCollection; })

  .controller('ProjectController', ProjectController)
  .controller('ProjectsController', ProjectsController)
  .controller('ProjectTestsController', ProjectTestsController)
  .controller('ProjectUsersController', ProjectUsersController)
  .controller('ProjectCreateController', ProjectCreateController)
  .controller('ProjectTestController', ProjectTestController)
  .controller('ProjectTestFormController', ProjectTestFormController)
  .controller('ItemsController', ItemsController);

});
