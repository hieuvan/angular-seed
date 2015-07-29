'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'test', 'FormCollection', function($stateParams, ProjectsService, test, FormCollection) {
    var vm = this;

    vm.test = test;

    vm.forms = test.get('forms').getAll();
    console.log(test);
    console.log(vm.forms);
    vm.addFormToTest = function() {
      var formdata = { name: vm.formName };

      ProjectsService.addFormToTest($stateParams.id, $stateParams.testId, formdata).then(function(form) {
        vm.forms.add(form);
        vm.addFormSuccess = true;
        vm.formName = '';
      }, function(error) {
        vm.addFormError = true;
        vm.error = error;
      });
    };

  }];
});
