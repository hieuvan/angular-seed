'use strict';

define(function() {
  return ['node', '$modalInstance', 'ngToast',
    function(node, $modalInstance, ngToast) {

    var vm = this,
        currentNode = node.$modelValue;

    vm.title = currentNode.uid;

    vm.removeItems = function() {
      node.remove();

      ngToast.danger('Item removed from tree.')

      vm.cancel();
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }];
});
