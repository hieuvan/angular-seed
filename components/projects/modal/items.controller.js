'use strict';

define(function(require) {

  return ['$modalInstance', 'ProjectsService', function($modalInstance, ProjectsService) {
    var vm = this;

    vm.itemSearchResults = false;

    vm.searchItem = function() {
      var formdata = { query: vm.itemQuery };

      ProjectsService.searchItem(formdata).then(function(items) {
        vm.items = items;
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }];
});
