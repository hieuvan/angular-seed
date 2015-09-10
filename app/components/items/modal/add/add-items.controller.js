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
     * add selected items in the tree
     *
     * @return {undefined}
     */
    vm.addItems = function () {

      ItemService
        .addItemToForm(getFormData(), $stateParams.title)
        .then(updateTree);
    };

    /**
     * Update tree with the new items
     *
     * @param items
     * @return {undefined}
     */
    var updateTree = function(items) {
      _.each(items.flatten(), function(item) {
        !item.hasOwnProperty('items') && (item.items = []);

        currentNode.items.push(item);
      });

      vm.foundItems.substract(items);

      ngToast.success('Item added to tree.')
    };

    /**
     * get data from the add item form
     *
     * @return {undefined}
     */
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
