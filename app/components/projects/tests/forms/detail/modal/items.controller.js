'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'itemCollection', 'ProjectsService', function($stateParams, $modalInstance, itemCollection, ProjectsService) {
    var vm = this;

    vm.itemSearchResults = false;

    var parentId = 1;

    vm.searchItem = function() {
      var formData = { query: vm.itemQuery };

      ProjectsService.searchItem(formData).then(function(items) {
        vm.searchItems = items.getAll();
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.addItems = function () {

      var formData = { items: getFormData() };

      ProjectsService.addItemToForm($stateParams.id, $stateParams.testId, $stateParams.formId, formData)
        .then(function(items) {
          itemCollection.add(items.getAll());
        });
    };

    var getFormData = function() {
      var formdata = {},
          selectedItems = _.where(vm.searchItems, {selected: true});

      _.each(selectedItems, function(item, index) {
        formdata[item.get('id')] = {
          parent_item_id: parentId,
          position: index + 1
        };
      });

      return formdata;
    };

  }];
});
