'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree-decorator');

  var ItemController = require('components/items/item.controller'),
      ItemService = require('components/items/item.service'),
      AddItemsController = require('components/items/modal/add-items.controller'),
      RemoveItemsController = require('components/items/modal/remove-items.controller');

  return angular.module('app.items', ['ui.tree.decorated'])

  .service('ItemService', ItemService)

  .controller('ItemController', ItemController)
  .controller('AddItemsController', AddItemsController)
  .controller('RemoveItemsController', RemoveItemsController)

  .constant('icons', {
     'Complex Multiple Choice': 'map-marker',
     'Multiple Choice': 'list',
     'folder': 'book',
     'items': 'pencil',
     'cluster': 'folder-open'
    }
  );
});
