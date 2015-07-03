'use strict';

define(function(require) {

  return ['$modal', 'ProjectsService', function($modal, ProjectsService) {
    var vm = this;

    vm.itemSearchResults = false;

    vm.searchItem = function() {
      var formdata = { query: vm.itemQuery };

      ProjectsService.searchItem(formdata).then(function(items) {
        vm.items = items;
      });
    };

    vm.cancel = function () {
      $modal.dismiss('cancel');
    };

    vm.close = function() {
      vm.assignUserSuccess = false;
    };
  }];
});
