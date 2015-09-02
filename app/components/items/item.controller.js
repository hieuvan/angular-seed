'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams', '$item', '$uiTree',
    function(form, $modal, $stateParams, $item, $uiTree) {
    var vm = this;

    vm.debug = false;

    vm.form = form;
    vm.items = form.get('items');

    vm.item_renderer = 'components/items/items_renderer.html';

    /**
     * Options for UI tree
     */
    vm.treeOptions = $uiTree.config;

    /**
     * Options for each item types
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
     * Toggle collapse of a node
     *
     * @param scope
     * @return {void}
     */
    vm.toggle = function(scope) {
      scope.toggle();
    };

    /**
     * Collapse all nodes
     *
     * @return {undefined}
     */
    vm.collapseAll = function() {
      getRootNodesScope().collapseAll();
    };

    /**
     * Expand all nodes
     *
     * @return {void}
     */
    vm.expandAll = function() {
      getRootNodesScope().expandAll();
    };

    vm.options = function() {
      console.log('setting options');
    };

    vm.preview = function() {
      console.log('previewing');
    };

    vm.save = function() {
      console.log('saving');
    };

    /**
     * Number of all child nodes in a node
     *
     * @param scope
     * @return {integer}
     */
    vm.itemCount = function(scope) {
      return scope.allChildNodesCount();
    };

    /**
     * Get the root node scope
     *
     * @return {scope}
     */
    var getRootNodesScope = function() {
      return angular.element(document.getElementById('tree-root')).scope();
    };

  }];
});
