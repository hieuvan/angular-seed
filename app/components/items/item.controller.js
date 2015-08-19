'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams',
    function(form, $modal, $stateParams) {

    var vm = this;

    vm.debug = false;

    vm.form = form;
    vm.items = form.get('items');

    vm.item_renderer = 'components/items/items_renderer.html';

    vm.addItemModal = function(scope) {
      var modal = $modal.open({
        templateUrl: 'components/items/modal/add-items.html',
        controller: 'AddItemsController as vm',
        resolve: {
          node: function() { return scope; },
          tree: function() { return vm.items; }
        }
      });
    };

    vm.newSubItem = function(scope) {
      vm.addItemModal(scope);
    };

    vm.toggle = function(scope) {
      scope.toggle();
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

    var getRootNodesScope = function() {
      return angular.element(document.getElementById('tree-root')).scope();
    };

  }];
});
