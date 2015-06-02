'use strict';

define(function(require) {
  return ['ProjectsService', function(ProjectsService) {
    var vm = this;

    vm.projectName = 'some project';
    vm.itrackReference = '1238';

    vm.createProject = function() {
      var formdata = {
        name: vm.projectName,
        itrackReference: vm.itrackReference
      };

      ProjectsService.createProject(formdata).then(function(project) {
        console.log(project);
      });
    };
  }];
});
