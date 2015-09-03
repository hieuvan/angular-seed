'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams', '$item', '$uiTree',
    function(form, $modal, $stateParams, $item, $uiTree) {
    var vm = this;

    vm.form = form;
    vm.items = form.get('items');

    /**
     *  Tempate path for tree nodes
     */
    vm.item_renderer = 'components/items/items_renderer.html';

    /**
     * UI tree provider
     */
    vm.$uiTree = $uiTree;

    /**
     * Item provider
     */
    vm.$item = $item;

    /**
     * Display modal to insert a child node
     *
     * @param scope
     * @return {void}
     */
    vm.newSubItem = function(scope) {
      $modal.open({
        templateUrl: 'components/items/modal/add-items.html',
        controller: 'AddItemsController as vm',
        resolve: {
          node: function() { return scope; },
        }
      });
    };

    /**
     * Display modal to remove a node
     *
     * @param scope
     * @return {void}
     */
    vm.remove = function(scope) {

      $modal.open({
        templateUrl: 'components/items/modal/remove-items.html',
        controller: 'RemoveItemsController as vm',
        resolve: {
          node: function() { return scope; }
        }
      });
    };

    /**
     * Display modal for item configuration
     *
     * @param scope
     * @return {void}
     */
    vm.configure = function(scope) {
      $modal.open({
        templateUrl: 'components/items/modal/remove-items.html',
        controller: 'RemoveItemsController as vm',
        resolve: {
          node: function() { return scope; }
        }
      });
    };

    /**
     * Add empty container item in tree
     *
     * @return {void}
     */
    vm.addFolder = function() {
      vm.items.push({
        type: 'folder',
        uid: 'New Folder'
      });
    };

    vm.preview = function() {
      console.log('previewing');
    };

    vm.save = function() {
      console.log('saving');
    };

  }];
});
