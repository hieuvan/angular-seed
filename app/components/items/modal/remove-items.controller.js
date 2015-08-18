'use strict';

define(function() {
  return ['node', '$modalInstance', '$stateParams', 'ProjectTestFormService', 'ngToast',
    function(node, $modalInstance, $stateParams, ProjectTestFormService, ngToast) {

    var vm = this,
        currentNode = node.$modelValue;

    vm.name = currentNode.uid;

    vm.multipleItems = !_.isEmpty(currentNode.items);

    vm.removeItems = function() {
      var items = pluckItems(currentNode, 'id'),
          projectId = $stateParams.projectId,
          formId = $stateParams.formId,
          testId = $stateParams.testId;

      vm.cancel();

      ProjectTestFormService
        .removeFormItem(projectId, formId, testId, items)
        .then(function(items) {
          node.remove();

          ngToast.danger('Item removed from tree.')
        });

    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
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
