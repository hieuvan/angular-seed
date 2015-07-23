'use strict';

define(function(require) {

  return ['$state', '$stateParams', 'project',
  function($state, $stateParams, project) {
    var vm = this;

    vm.tabs = [
      { heading: 'Tests', route: 'root.projectTests.list' },
      { heading: 'Users', route: 'root.projectUsers.list' },
    ];

    vm.tables = {
      exports: ['Date', 'Form', 'User', 'Notes'] ,
      tests: ['#', 'Name', 'Last Updated', 'Updated by', 'Version']
    };

    vm.project = project;

    vm.close = function() {
      vm.assignUserSuccess = false;
    };
  }];
});
