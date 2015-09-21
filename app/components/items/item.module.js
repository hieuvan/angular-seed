'use strict';

define(function(require) {
  require('angular');
  require('angular-ui-tree-decorator');
  require('bootstrap-decorator');
  require('schemaForm');

  var ItemController = require('components/items/item.controller'),
      ItemServiceProvider = require('components/items/providers/service.provider'),
      AddItemsController = require('components/items/modal/add/add-items.controller'),
      RemoveItemsController = require('components/items/modal/remove/remove-items.controller'),
      ConfigureItemsController = require('components/items/modal/configure/configure-items.controller'),
      UiTreeProvider = require('components/items/providers/uitree.provider');

  return angular.module('app.items', ['ui.tree.decorated', 'schemaForm'])

  .controller('ItemController', ItemController)
  .controller('AddItemsController', AddItemsController)
  .controller('RemoveItemsController', RemoveItemsController)
  .controller('ConfigureItemsController', ConfigureItemsController)

  .config(['$uiTreeProvider',
    function($uiTreeProvider) {
      //$uiTreeProvider.debug = true;
    }])

  .provider('ItemService', ItemServiceProvider)
  .provider('$uiTree', UiTreeProvider);
});
