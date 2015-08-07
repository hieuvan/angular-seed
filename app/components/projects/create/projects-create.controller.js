'use strict';

define(function(require) {
  return ['ProjectsService', '$state', function(ProjectsService, $state) {
    var vm = this;

    vm.createProject = function() {
      var formdata = {
        name: vm.projectName,
        itrackReference: vm.itrackReference
      };

      ProjectsService.createProject(formdata).then(successFn, errorFn);
    };

    var successFn = function(project) {
      $state.go('root.projects.detail', {id: project.id});
    };

    var errorFn = function(error) {
      vm.errors = error.errors;
    };
  }];
});
