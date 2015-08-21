'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams',
    function(form, $modal, $stateParams) {

    var vm = this;

    vm.debug = false;

    vm.form = form;
    vm.items = form.get('items');

    vm.item_renderer = 'components/items/items_renderer.html';

    vm.newSubItem = function(scope) {
      $modal.open({
        templateUrl: 'components/items/modal/add-items.html',
        controller: 'AddItemsController as vm',
        resolve: {
          node: function() { return scope; },
        }
      });
    };

    vm.remove = function(scope) {

      $modal.open({
        templateUrl: 'components/items/modal/remove-items.html',
        controller: 'RemoveItemsController as vm',
        resolve: {
          node: function() { return scope; }
        }
      });
    };

    vm.toggle = function(scope) {
      scope.toggle();
    };

    vm.collapseAll = function() {
      getRootNodesScope().collapseAll();
    };

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
     * recursively count number of items
     *
     * @param array items
     * @return int number of items
     */
    vm.itemCount = function(items) {
      var count = 0;

      if (!items.length) return count;

      count += items.length;

      _.each(items, function(item) {
        item.items && (count += vm.itemCount(item.items));
      });

      return count;
    };
    var getRootNodesScope = function() {
      return angular.element(document.getElementById('tree-root')).scope();
    };

  }];
});
