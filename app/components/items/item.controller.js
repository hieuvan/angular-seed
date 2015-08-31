'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams', 'items.config',
    function(form, $modal, $stateParams, itemConfig) {
    var vm = this;

    vm.debug = false;

    vm.form = form;
    vm.items = form.get('items');

    vm.item_renderer = 'components/items/items_renderer.html';

    vm.treeOptions = {
      accept: function(sourceNodeScope, destNodeScope, destIndex) {
        var containers = ['folder', 'cluster'];

        var destType = destNodeScope.$element.attr('data-type');

        return _.contains(containers, destType);
      }
    };

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

    vm.getIcon = function(item) {
      return itemConfig.attributes[item.type].icon;
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById('tree-root')).scope();
    };

  }];
});
