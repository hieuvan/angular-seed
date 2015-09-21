'use strict';

define(function() {
  return ['node', '$modalInstance', 'ngToast', 'ToastService',
    function(node, $modalInstance, ngToast, ToastService) {

    var vm = this,
        currentNode = node.$modelValue;

    vm.title = currentNode.uid;

    vm.removeItems = function() {
      node.remove();

      ngToast.danger(ToastService.removeItem);

      vm.cancel();
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }];
});
