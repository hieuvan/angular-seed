'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'test', function($stateParams, ProjectsService, test) {
    var vm = this;

    vm.test = test;

    vm.addFormToTest = function() {
      var formdata = { name: vm.formName };

      ProjectsService.addFormToTest($stateParams.id, $stateParams.testId, formdata).then(function(form) {
        vm.test.forms.push(form);
      });
    };

    vm.filterForms = function(form) {
      var searchString = form.name;

      return (!vm.formQuery || searchString.toLowerCase().indexOf(vm.formQuery.toLowerCase()) > -1);
    }

  }];
});
