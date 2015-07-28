'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'test', function($stateParams, ProjectsService, test) {
    var vm = this;

    vm.test = test;
    console.log(test);

    vm.addFormToTest = function() {
      var formdata = { name: vm.formName };

      ProjectsService.addFormToTest($stateParams.id, $stateParams.testId, formdata).then(function(form) {
        vm.test.forms.push(form);
      });
    };

  }];
});
