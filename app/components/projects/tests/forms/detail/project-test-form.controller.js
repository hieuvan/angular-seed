'use strict';

define(function(require) {

  return ['form', '$modal', function(form, $modal) {
    var vm = this,
      itemCollection = form.get('items');

    vm.form = form;
    vm.items = itemCollection.getAll();

    vm.addItemModal = function() {
      var modal = $modal.open({
        templateUrl: 'components/projects/tests/forms/detail/modal/add-item.html',
        controller: 'ItemsController as vm',
        resolve: {
          itemCollection: function() {
            return itemCollection;
          }
        }
      });
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

    vm.newSubItem = function(scope) {
      vm.addItemModal();
    };

    vm.toggle = function(scope) {
      scope.toggle();
    };

    vm.remove = function(scope) {
      scope.remove();
    };

    vm.collapseAll = function() {
      var scope = getRootNodesScope();
      scope.collapseAll();
    };

    vm.expandAll = function() {
      var scope = getRootNodesScope();
      scope.expandAll();
    };
  }];
});
