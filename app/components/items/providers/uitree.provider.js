'use strict';

define(function(require) {
  return [function() {
    var self = this;

    self.config = {};

    self.debug = false;

    self.rootElementId = 'tree-root';

    this.$get = [function() {
      if (typeof self.config.accept !== 'function') {
        self.config.accept = function(sourceNodeScope, destNodeScope) {
          var item = destNodeScope.$nodeScope.$modelValue;

          return item.isContainer();
        };
      }

      /**
       * Get the root node scope
       *
       * @return {scope}
       */
      var getRootNodesScope = function() {
        return angular.element(document.getElementById(self.rootElementId)).scope();
      };

      return {
        config: self.config,
        debug: self.debug,

        /**
         * Toggle collapse of a node
         *
         * @param scope
         * @return {void}
         */
        toggle: function(scope) {
          scope.toggle();
        },

        /**
         * Collapse all nodes
         *
         * @return {undefined}
         */
        collapseAll: function() {
          getRootNodesScope().collapseAll();
        },

        /**
         * Expand all nodes
         *
         * @return {void}
         */
        expandAll: function() {
          getRootNodesScope().expandAll();
        },

        /**
         * Number of all child nodes in a node
         *
         * @param scope
         * @return {integer}
         */
        itemCount: function(scope) {
          return scope.allChildNodesCount();
        }
      };
    }];
  }];
});
