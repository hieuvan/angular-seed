'use strict';

define(function(require) {

  return ['$state', 'project', 'ProjectsService',
  function($state, project, ProjectsService) {
    var vm = this;

    vm.project = project;

    // update the bread crumb
    $state.current.data.displayName = project.name;

    vm.tests = project.tests;
    vm.exports = [];
    vm.users = [];
    //vm.email = [];

    vm.tables = {
      exports: ['Date', 'Form', 'User', 'Notes'] ,
      tests: ['#', 'Name', 'Last Updated', 'Updated by', 'Version']
    };
   /* vm.addEmail = function() {
        vm.email = email;
    };*/

    vm.addUserToProject = function() {
      var formdata = {
        email: vm.email
      };

      ProjectsService.addUserToProject(project.id, formdata).then(function() {

      });
    };

    vm.addTestToProject = function() {
      var formdata = {
        name: vm.testName
      };

      ProjectsService.addTestToProject(project.id, formdata).then(function() {

      });
    };

    vm.getProjectUsers = function() {
      ProjectsService.getProjectUsers(project.id).then(function(project) {
        vm.users = project.users;
      });
    };
  }];
});
