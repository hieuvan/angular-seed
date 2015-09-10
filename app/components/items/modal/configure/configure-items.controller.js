'use strict';

define(function(require) {
  return ['$modalInstance', 'node', '$scope',
    function($modalInstance, node, $scope) {
      var vm = this, currentNode = node.$modelValue;

      vm.title = currentNode.uid;

      vm.tabs = {
        display: {
          form: {},
          schema: {
            type: "object",
            properties: {
              name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
              title: {
                type: "string",
                enum: ['dr','jr','sir','mrs','mr','NaN','dj']
              }
            }
          }
        },
        navigation: {

        },
        language: {

        },
      };

      vm.model = {};

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
