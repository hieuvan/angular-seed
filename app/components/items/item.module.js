'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree');

  var ItemController = require('components/items/item.controller'),
      ItemService = require('components/items/item.service'),
      AddItemsController = require('components/items/modal/add-items.controller'),
      RemoveItemsController = require('components/items/modal/remove-items.controller');

  return angular.module('app.items', ['ui.tree'])

  .service('ItemService', ItemService)

  .controller('ItemController', ItemController)
  .controller('AddItemsController', AddItemsController)
  .controller('RemoveItemsController', RemoveItemsController);

});
