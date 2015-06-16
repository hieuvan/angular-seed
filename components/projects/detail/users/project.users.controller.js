'use strict';

define(function(require) {

  return ['$state', 'project', 'ProjectsService',
  function($state, project, ProjectsService) {
    var vm = this;

    vm.project = project;

    vm.users = project.users;

    vm.getProjectUsers = function() {
      console.log('called');
    };
  }];
});
