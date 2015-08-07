'use strict';

define(function(require) {
  return ['ProjectsService', '$state', 'ngToast', function(ProjectsService, $state, ngToast) {
    var vm = this;

    vm.createProject = function() {
      var formdata = {
        name: vm.projectName,
        itrackReference: vm.itrackReference
      };

      ProjectsService.createProject(formdata).then(successFn, errorFn);
    };

    var successFn = function(project) {
      $state.go('root.projects.detail', {projectId: project.id});
      ngToast.success(project.name + ' was added.');
    };

    var errorFn = function(error) {
      vm.errors = error.errors;
    };
  }];
});
