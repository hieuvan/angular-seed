'use strict';

define(function(require) {

  return ['$state', '$stateParams', 'ProjectsService',
  function($state, $stateParams, ProjectsService) {
    var vm = this;

    vm.tabs = [
      { heading: 'Tests', route: 'root.projectTests.list' },
      { heading: 'Users', route: 'root.projectUsers.list' },
    ];

    vm.tables = {
      exports: ['Date', 'Form', 'User', 'Notes'] ,
      tests: ['#', 'Name', 'Last Updated', 'Updated by', 'Version']
    };

    ProjectsService.getProject($stateParams.id).then(function(project) {
      vm.project = project;

      vm.exports = [];
      vm.users = [];
    });

    vm.close = function() {
      vm.assignUserSuccess = false;
    };
  }];
});
