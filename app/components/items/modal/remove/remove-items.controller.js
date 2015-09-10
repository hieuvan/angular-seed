'use strict';

define(function() {
  return ['node', '$modalInstance', '$stateParams', 'ItemService', 'ngToast',
    function(node, $modalInstance, $stateParams, ItemService, ngToast) {

    var vm = this,
        currentNode = node.$modelValue;

    vm.title = currentNode.uid;

    vm.multipleItems = !_.isEmpty(currentNode.items);

    vm.removeItems = function() {
      // @TODO: update this to use the function in the directive
      // at the moment there is none, but add a new one
      var items = pluckItems(currentNode, 'id');

      vm.cancel();

      ItemService.removeFormItem(items, $stateParams.title)
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
