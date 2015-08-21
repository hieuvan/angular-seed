'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'ItemService', 'ngToast',
    function($stateParams, $modalInstance, node, ItemService, ngToast) {
    var vm = this;

    vm.itemSearchResults = false;
    vm.foundItems;

    vm.searchItem = function() {
      var formData = { query: vm.itemQuery };

      ItemService.searchItem(formData).then(function(items) {
        vm.foundItems = items;
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.addItems = function () {

      ItemService
        .addItemToForm(getFormData())
        .then(updateTree);
    };

    var updateTree = function(items) {
      _.each(items.flatten(), function(item) {
        !item.hasOwnProperty('items') && (item.items = []);

        node.$modelValue.items.push(item);
      });

      vm.foundItems.substract(items);

      ngToast.success('Item added to tree.')
    };

    var getFormData = function() {
      var formdata = {};

      _.each(getSelectedItems(), function(item, index) {
        formdata[item.get('id')] = {
          parent_item_id: node.$modelValue.id,
          position: node.depth() + index
        };
      });

      return formdata;
    };

    var getSelectedItems = function() {
      return _.where(vm.foundItems.getAll(), {selected: true});
    };

  }];
});
