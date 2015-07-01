'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'project', function($stateParams, ProjectsService, project) {
    var vm = this;

    vm.tests = project.tests;

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
