'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree-decorator');

  var ItemController = require('components/items/item.controller'),
      ItemService = require('components/items/item.service'),
      AddItemsController = require('components/items/modal/add-items.controller'),
      RemoveItemsController = require('components/items/modal/remove-items.controller'),
      ConfigureItemsController = require('components/items/modal/configure-items.controller'),
      UiTreeProvider = require('components/items/providers/uitree.provider'),
      ItemProvider = require('components/items/providers/item.provider');

  return angular.module('app.items', ['ui.tree.decorated'])

  .service('ItemService', ItemService)

  .controller('ItemController', ItemController)
  .controller('AddItemsController', AddItemsController)
  .controller('RemoveItemsController', RemoveItemsController)
  .controller('ConfigureItemsController', ConfigureItemsController)

  .config(['$uiTreeProvider', function($uiTreeProvider) {
    //$uiTreeProvider.debug = true;
  }])

  .provider('$uiTree', UiTreeProvider)
  .provider('$item', ItemProvider);
});
