'use strict';

define(function(require) {
  return ['$modalInstance', 'node',
    function($modalInstance, node) {
      var vm = this;

      vm.cancel = function() {
        $modalInstance.close();
      };

    }];
});
