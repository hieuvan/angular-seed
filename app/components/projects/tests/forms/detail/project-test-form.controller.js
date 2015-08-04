'use strict';

define(function(require) {

  return ['form', '$modal', function(form, $modal) {
    var vm = this;

    vm.form = form;
    vm.items = form.get('items');
    // vm.items = [{
    //   'uid': 'tree1 - item1',
    //   'items': [
    //     {uid: 'test', items: []},
    //     {uid: 'tests 2', items: []}
    //   ]
    // }, {
    //   'uid': 'tree1 - item2',
    //   'items': []
    // }, {
    //   'uid': 'tree1 - item3',
    //   'items': []
    // }, {
    //   'uid': 'tree1 - item4',
    //   'items': []
    // }];

    vm.item_renderer = 'components/projects/tests/forms/detail/items_renderer.html';

    vm.addItemModal = function(scope) {
      var modal = $modal.open({
        templateUrl: 'components/projects/tests/forms/detail/modal/add-item.html',
        controller: 'ItemsController as vm',
        resolve: {
          node: function() { return scope; },
          tree: function() { return vm.items; }
        }
      });
    };

    vm.newSubItem = function(scope) {
      console.log(scope);
      vm.addItemModal(scope);
    };

    vm.toggle = function(scope) {
      scope.toggle();
    };

    vm.remove = function(scope) {
      scope.remove();
    };

    vm.collapseAll = function() {
      getRootNodesScope().collapseAll();
    };

    vm.expandAll = function() {
      getRootNodesScope().expandAll();
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

  }];
});
