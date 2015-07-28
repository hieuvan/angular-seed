'use strict';

define(function(require) {

  return ['form', '$modal', function(form, $modal) {
    var vm = this;

    vm.form = form;

    vm.items = form.get('items').getAll();

    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

    vm.newSubItem = function(scope) {
      console.log(scope);
      $modal.open({
        templateUrl: 'components/projects/modal/add-item.html',
        controller: 'ItemsController as vm',
        resolve: {
          test: 'test'
        }
      });
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
