'use strict';

define(function(require) {
  return ['$modalInstance', 'node', '$scope', 'tabData',
    function($modalInstance, node, $scope, tabData) {
      var vm = this, currentNode = node.$modelValue;

      vm.title = currentNode.uid;

      vm.tabs = tabData;

      /**
       * close the modal
       *
       * @return {undefined}
       */
      vm.cancel = function() {
        $modalInstance.close();
      };
    }];
});
