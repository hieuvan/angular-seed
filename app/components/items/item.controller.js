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

        var destType = destNodeScope.$element.attr('data-node-type');

        return vm.isContainer(destType);
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

    /**
     * Get glyphicon class
     *
     * @param item
     * @return string icon
     */
    vm.getIcon = function(item) {
      return itemConfig.attributes[item.type].icon;
    };

    vm.isContainer = function(nodeType) {
      return _.contains(itemConfig.containers, nodeType);
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById('tree-root')).scope();
    };

  }];
});
