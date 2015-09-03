'use strict';

define(function(require) {
  return ['$modalInstance', 'node',
    function($modalInstance, node) {
      var vm = this, currentNode = node.$modelValue;

      vm.title = currentNode.uid;

      vm.cancel = function() {
        $modalInstance.close();
      };

    }];
});
