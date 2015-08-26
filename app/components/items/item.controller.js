'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams',
    function(form, $modal, $stateParams) {

    var vm = this;

    vm.debug = false;

    vm.form = form;
    vm.items = form.get('items');

    vm.item_renderer = 'components/items/items_renderer.html';

    vm.checkboxes = {};

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

    vm.itemCount = function(scope) {
      return scope.allChildNodesCount();
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById('tree-root')).scope();
    };

  }];
});
