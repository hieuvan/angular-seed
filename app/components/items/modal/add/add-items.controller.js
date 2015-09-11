'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'ItemService', 'ngToast',
    function($stateParams, $modalInstance, node, ItemService, ngToast) {
    var vm = this, currentItem = node.$modelValue;

    vm.foundItems;
    vm.title = currentItem.uid;

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
    vm.addItems = function() {
      var items = getSelectedItems();

      currentItem.get('items').add(items);

      vm.foundItems.substract(items);

      ngToast.success('Item added to tree.')
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
