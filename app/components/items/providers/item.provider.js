'use strict';

define(function() {

  var containers = ['folder', 'cluster'];

  var attributes = {
    'Complex Multiple Choice': {
     icon: 'book'
    },
   'Multiple Choice': {
     icon: 'list'
   },
   'folder': {
     icon: 'folder-open'
   },
   'items': {
     icon: 'pencil'
   },
   'cluster': {
     icon: 'folder-close'
   }
  };

  return [function() {
    var self = this;

    self.containers = containers;
    self.attributes = attributes;

    this.$get = function() {
      return {

        /**
         * Check if node is a container
         *
         * @param nodeType
         * @return {boolean}
         */
        isContainer: function(nodeType) {
          return _.contains(self.containers, nodeType);
        },

        /**
         * Get glyphicon class
         *
         * @param item
         * @return string icon
         */
        icon: function(type) {
          return self.attributes[type].icon;
        }
      };
    };
  }];
});
