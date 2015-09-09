'use strict';

define(function(require) {
  return ['$modalInstance', 'node', '$scope',
    function($modalInstance, node, $scope) {
      var vm = this, currentNode = node.$modelValue;

      vm.title = currentNode.uid;

      vm.tabs = {
        Display: [

        ],
        Naviagtion: [

        ],
        Language: [

        ],
      };

      vm.schema = {
        type: "object",
        properties: {
          name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
          title: {
            type: "string",
            enum: ['dr','jr','sir','mrs','mr','NaN','dj']
          }
        }
      };

      vm.model = {};

      vm.cancel = function() {
        $modalInstance.close();
      };
    }];
});
