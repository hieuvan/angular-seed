'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'project', function($stateParams, ProjectsService, project) {
    var vm = this;

    ProjectsService.getProjectTest($stateParams.id, $stateParams.testId).then(function(test) {
    console.log(test);
      vm.test = test;
    });

    vm.filterForms = function(form) {
      var searchString = form.name;

      return (!vm.formQuery || searchString.toLowerCase().indexOf(vm.formQuery.toLowerCase()) > -1);
    }
  }];
});
