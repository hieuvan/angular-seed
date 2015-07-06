'use strict';

define(function(require) {

  return ['$modal', 'ProjectsService', function($modal, ProjectsService) {
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
      $modal.dismiss('cancel');
    };

  }];
});
