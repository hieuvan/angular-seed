'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree');

  var ProjectTestFormController = require('components/items/detail/projects-tests-forms.controller'),
      ProjectTestFormService = require('components/items/projects-tests-forms.service'),
      AddItemsController = require('components/items/detail/modal/add-items.controller'),
      RemoveItemsController = require('components/items/detail/modal/remove-items.controller');

  return angular.module('app.items', ['ui.tree'])

  .service('ProjectTestFormService', ProjectTestFormService)

  .controller('ProjectTestFormController', ProjectTestFormController)
  .controller('AddItemsController', AddItemsController)
  .controller('RemoveItemsController', RemoveItemsController);

});
