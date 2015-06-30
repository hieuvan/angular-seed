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

      $state.current.data.displayName = project.name;

      vm.project = project;
      vm.exports = [];
      vm.users = [];
    });

    vm.addUserToProject = function() {
      var formdata = { email: vm.email };

      ProjectsService.addUserToProject($stateParams.id, formdata).then(function(user) {
        vm.assignUserSuccess = true;
        vm.users.push(user);
        vm.email = '';
      });
    };

    vm.addTestToProject = function() {
      var formdata = { name: vm.testName };

      ProjectsService.addTestToProject($stateParams.id, formdata).then(function(test) {
        vm.tests.push(test);
      });
    };

    vm.close = function() {
      vm.assignUserSuccess = false;
    };
  }];
});
