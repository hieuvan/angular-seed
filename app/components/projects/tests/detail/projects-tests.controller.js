'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'test', function($stateParams, ProjectsService, test) {
    var vm = this;

    vm.test = test;

    var formCollection = test.get('forms');

    vm.forms = formCollection.getAll();

    vm.addFormToTest = function() {
      var formdata = { name: vm.formName };

      ProjectsService.addFormToTest($stateParams.projectId, $stateParams.testId, formdata)
        .then(addFormToTestSuccess, addFormToTestError);
    };

    var addFormToTestSuccess = function(form) {
      formCollection.add(form);

      vm.addFormSuccess = true;
      vm.formName = '';
    };

    var addFormToTestError = function(error) {
      vm.addFormError = true;
      vm.error = error.errors.name;
    };
  }];
});
