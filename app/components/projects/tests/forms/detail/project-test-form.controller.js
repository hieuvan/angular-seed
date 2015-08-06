'use strict';

define(function(require) {

  return ['form', '$modal', '$stateParams', 'ProjectsService', function(form, $modal, $stateParams, ProjectsService) {
    var vm = this;

    vm.form = form;
    vm.items = form.get('items');

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
      vm.addItemModal(scope);
    };

    vm.toggle = function(scope) {
      scope.toggle();
    };

    vm.remove = function(scope) {
      var items = pluckItems(scope.$modelValue, 'id'),
          projectId = $stateParams.projectId,
          formId = $stateParams.formId,
          testId = $stateParams.testId;


      ProjectsService
        .removeFormItem(projectId, formId, testId, items)
        .then(function(items) {
          scope.remove();
        });
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

    /**
     * Pluck deeply nested keys value from node.items
     *
     * @param node Haystack
     * @param string key Object key to pluck
     *
     * @returns array
     */
    var pluckItems = function(node, key) {
      var result = [];

      result.push(node[key]);

      if (_.isUndefined(node.items)) return result;

      _.each(node.items, function(item) {
        result.push(item[key]);

        var children = pluckItems(item, key);

        if (!_.isEmpty(children)) {
          result = _.union(result, children);
        }
      });

      return result;
    };

  }];
});
