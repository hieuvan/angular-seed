'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService',
  function($stateParams, ProjectsService) {
    var vm = this;

    ProjectsService.getProjectUsers($stateParams.id).then(function(project) {
      vm.users = project.users;
    });

    vm.filterUsers = function(user) {
      var searchString = user.email + ' ' + user.given_name + ' ' + user.family_name;

      return (!vm.query || searchString.toLowerCase().indexOf(vm.query.toLowerCase()) > -1);
    }

  }];
});
