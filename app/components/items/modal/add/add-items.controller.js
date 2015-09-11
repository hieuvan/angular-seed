'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'ItemService', 'ngToast',
    function($stateParams, $modalInstance, node, ItemService, ngToast) {
    var vm = this, currentNode = node.$modelValue;

    vm.foundItems;
    vm.title = currentNode.uid;

    /**
     * Search items with entered keyword
     *
     * @return {undefined}
     */
    vm.searchItem = function() {
      var formData = {
        query: vm.itemQuery,
        title: $stateParams.title
      };

      ItemService.searchItem(formData).then(function(items) {
        vm.foundItems = items;
      });
    };

    /**
     * close the modal window
     *
     * @return {undefined}
     */
    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    /**
     * Add items to the tree
     *
     * @return {undefined}
     */
    var addItems = function() {
      var items = getSelectedItems();
      console.log(items);
      // _.each(items.flatten(), function(item) {
      //   !item.hasOwnProperty('items') && (item.items = []);

      //   currentNode.items.push(item);
      // });

      // vm.foundItems.substract(items);

      // ngToast.success('Item added to tree.')
    };

    /**
     * get selected items in the modal
     *
     * @return {undefined}
     */
    var getSelectedItems = function() {
      return _.where(vm.foundItems.getAll(), {selected: true});
    };
  }];
});
