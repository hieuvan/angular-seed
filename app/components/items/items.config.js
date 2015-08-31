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

  return {
    attributes: attributes,
    containers: containers
  };

});
