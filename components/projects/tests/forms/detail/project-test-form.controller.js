'use strict';

define(function(require) {

  return ['test', 'form', '$modal', function(test, form, $modal) {
    var vm = this;

    vm.form = form;

    vm.addItemShow = function() {
      var modal = $modal.open({
        templateUrl: 'components/projects/modal/add-item.html',
        controller: 'ItemsController as vm'
      });
    };
    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

    vm.toggle = function(scope) {
      scope.toggle();
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
