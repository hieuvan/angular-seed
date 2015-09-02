'use strict';

define(function(require) {
  return [function() {

    this.$get = ['$item', function($item) {
      return {
        config: {

          accept: function(sourceNodeScope, destNodeScope, destIndex) {

            var destType = destNodeScope.$element.attr('data-node-type');

            return $item.isContainer(destType);
          }

        }
      };
    }];
  }];
});
