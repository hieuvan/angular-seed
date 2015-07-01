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
    vm.testTab = {
      "template":"components/projects/detail/tests/project-tests.html"
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

    vm.addTestToProject = function() {
      var formdata = {
        name: vm.testName
      };

      ProjectsService.addTestToProject(project.id, formdata).then(function(test) {
        vm.addTestSuccess = true;
        vm.tests.push(test);
        vm.testName = "";
      });
    };
    // search users in project
    vm.filterUsers = function(user) {
      var searchString = user.email + ' ' + user.given_name + ' ' + user.family_name;

      if (!vm.query || searchString.toLowerCase().indexOf(vm.query.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }

    // search tests in project
    vm.filterTests = function(test) {
      var searchString = test.name;

      if (!vm.testQuery || searchString.toLowerCase().indexOf(vm.testQuery.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }

    vm.getProjectUsers = function() {
      ProjectsService.getProjectUsers(project.id).then(function(project) {
        vm.users = project.users;
      });
    };

     vm.close = function() {
      vm.assignUserSuccess = false;
    };
  }];
});
