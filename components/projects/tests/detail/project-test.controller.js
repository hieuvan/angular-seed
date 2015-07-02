'use strict';

define(function(require) {

  return ['test', function(test) {
    var vm = this;

    vm.test = test;

    vm.filterForms = function(form) {
      var searchString = form.name;

      return (!vm.formQuery || searchString.toLowerCase().indexOf(vm.formQuery.toLowerCase()) > -1);
    }
  }];
});
