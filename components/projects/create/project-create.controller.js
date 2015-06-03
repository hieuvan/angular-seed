'use strict';

define(function(require) {
  return ['ProjectsService', '$state', function(ProjectsService, $state) {
    var vm = this;

    vm.projectName = 'some project';
    vm.itrackReference = '1238';

    vm.createProject = function() {
      var formdata = {
        name: vm.projectName,
        itrackReference: vm.itrackReference
      };

      ProjectsService.createProject(formdata).then(function(project) {
        if (_.isObject(project)) {
          var id = project.id;
          $state.go('projects.detail', {id: project.id});
        } else {
          // TODO: show error message
        }
      });
    };:
  }];
});
