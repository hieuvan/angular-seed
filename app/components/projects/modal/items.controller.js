'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'ProjectsService', function($stateParams, $modalInstance, ProjectsService) {
    var vm = this;

    //vm.form = form;

    vm.itemSearchResults = false;
    //vm.selectedItems = [];

    vm.searchItem = function() {
      var formData = { query: vm.itemQuery };

      ProjectsService.searchItem(formData).then(function(items) {
        vm.searchItems = items;
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.addItems = function () {
      var selectedItems = _.where(vm.searchItems, {selected: true});
      var formData = { items: _.pluck(selectedItems, 'id') };
      var form = ProjectsService.getProjectTestForm($stateParams.id, $stateParams.testId, $stateParams.formId);

      ProjectsService.addItemToForm($stateParams.id, $stateParams.testId, $stateParams.formId, formData).then(function(items) {
        form.items.push(items);
      });
    };

  }];
});
