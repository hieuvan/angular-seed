'use strict';

define(function(require) {
  return ['ProjectsService', '$state', function(ProjectsService, $state) {
    var vm = this;

    vm.createProject = function() {
      var formdata = {
        name: vm.projectName,
        itrackReference: vm.itrackReference
      };

      ProjectsService.createProject(formdata).then(function(project) {
        vm.createProjectError = false;
        $state.go('root.projects.detail', {id: project.id});
        }, function(error) {
          vm.createProjectError = true;
          vm.error = error.message;
      });
    };
  }];
});
