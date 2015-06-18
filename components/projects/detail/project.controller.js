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
		vm.userTab = {
      "template":"components/projects/detail/users/project-users.html"
    };
    vm.tables = {
      exports: ['Date', 'Form', 'User', 'Notes'] ,
      tests: ['#', 'Name', 'Last Updated', 'Updated by', 'Version']
    };

    vm.addUserToProject = function() {
      var formdata = {
        email: vm.email
      };

      ProjectsService.addUserToProject(project.id, formdata).then(function(user) {
        vm.assignUserSuccess = true;
        vm.users.push(user);
        vm.email = "";
      });
    };

    vm.getProjectUsers = function() {
      ProjectsService.getProjectUsers(project.id).then(function(project) {
        vm.users = project.users;
      });
    };
  }];
});
