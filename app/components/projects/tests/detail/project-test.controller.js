'use strict';

define(function(require) {

  return ['$stateParams', 'ProjectsService', 'test', function($stateParams, ProjectsService, test) {
    var vm = this;

    vm.test = test;

    vm.forms = test.get('forms').getAll();

    vm.addFormToTest = function() {
      var formdata = { name: vm.formName };

      ProjectsService.addFormToTest($stateParams.id, $stateParams.testId, formdata).then(function(form) {
        //vm.forms.push(form);
      });
    };

  }];
});
