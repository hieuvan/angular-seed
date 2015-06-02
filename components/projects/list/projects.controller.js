'use strict';

define(function(require) {

  return ['ProjectsService', function(ProjectsService) {
    var vm = this;

    ProjectsService.getProjects().then(function(projects) {
     vm.projects = projects;
    });
  }];
});
