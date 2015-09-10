'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'ItemService', 'ngToast',
    function($stateParams, $modalInstance, node, ItemService, ngToast) {
    var vm = this, currentNode = node.$modelValue;

    vm.itemSearchResults = false;
    vm.foundItems;

    vm.title = currentNode.uid;

    vm.searchItem = function() {
      var formData = {
        query: vm.itemQuery,
        title: $stateParams.title
      };

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
        .addItemToForm(getFormData(), $stateParams.title)
        .then(updateTree);
    };

    var updateTree = function(items) {
      _.each(items.flatten(), function(item) {
        !item.hasOwnProperty('items') && (item.items = []);

        currentNode.items.push(item);
      });

      vm.foundItems.substract(items);

      ngToast.success('Item added to tree.')
    };

    var getFormData = function() {
      var formdata = {};

      _.each(getSelectedItems(), function(item, index) {
        formdata[item.get('id')] = {
          parent_item_id: currentNode.id,
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
