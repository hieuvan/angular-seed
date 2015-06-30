'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', function($stateParams, ProjectsService) {
    var vm = this;

    ProjectsService.getProject($stateParams.id).then(function(project) {
      vm.tests = project.tests;
    });

    vm.addTestToProject = function() {
      var formdata = { name: vm.testName };

      ProjectsService.addTestToProject($stateParams.id, formdata).then(function(test) {
        vm.tests.push(test);
      });
    };

    vm.filterTests = function(test) {
      var searchString = test.name;

      return (!vm.testQuery || searchString.toLowerCase().indexOf(vm.testQuery.toLowerCase()) > -1);
    }

  }];
});
