'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService',
  function($stateParams, ProjectsService) {
    var vm = this;

    var userCollection = {};

    ProjectsService.getProjectUsers($stateParams.projectId).then(function(project) {
      userCollection = project.get('users');
      vm.users = userCollection.getAll();
    });

    vm.addUserToProject = function() {
      var formdata = { email: vm.email };

      ProjectsService.addUserToProject($stateParams.id, formdata).then(function(user) {
        vm.assignUserSuccess = true;
        userCollection.add(user);
        vm.email = '';
      }, function(error) {
        vm.assignUserError = true;
        vm.error = error.message;
      });
    };
  }];
});
