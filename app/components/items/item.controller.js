'use strict';

define(function(require) {

  var _ = require('underscore');

  return ['form', '$modal', '$stateParams', '$uiTree', 'ItemModel', 'ItemService', 'ngToast', 'ToastService',
    function(form, $modal, $stateParams, $uiTree, ItemModel, ItemService, ngToast, ToastService) {
    var vm = this;

    vm.form = form;
    vm.items = form.get('items');

    /**
     *  Tempate path for tree nodes
     */
    vm.itemRenderer = 'components/items/items_renderer.html';

    /**
     * UI tree provider
     */
    vm.$uiTree = $uiTree;

    /**
     * Display modal to insert a child node
     *
     * @param scope
     * @return {void}
     */
    vm.newSubItem = function(scope) {
      modal(scope, {
        templateUrl: 'add/add-items.html',
        controller: 'AddItemsController as vm',
      });
    };

    /**
     * Display modal to remove a node
     *
     * @param scope
     * @return {void}
     */
    vm.remove = function(scope) {
      modal(scope, {
        templateUrl: 'remove/remove-items.html',
        controller: 'RemoveItemsController as vm',
      });
    };

    /**
     * Display modal for item configuration
     *
     * @param scope
     * @return {void}
     */
    vm.configure = function(scope) {
      modal(scope, {
        templateUrl: 'configure/configure-items.html',
        controller: 'ConfigureItemsController as vm',
      });
    };

    /**
     * Add empty container item in tree
     *
     * @return {void}
     */
    vm.addFolder = function() {
      var item = {
        title: 'New Folder',
        type: 'folder'
      };

      var newFolder = new ItemModel(item, { items: ItemModel });

      vm.items.add(newFolder);

      ngToast.success(ToastService.newFolder);
    };

    vm.preview = function() {
      console.log('previewing');
    };

    /**
     * Save the form items
     *
     * @return {undefined}
     */
    vm.save = function() {
      var title = $stateParams.title,
          data = vm.items.flatten();

      ItemService.save(title, data).then(function() {
        ngToast.success(ToastService.save);
      }, function() {
        ngToast.danger(ToastService.saveError);
      });

    };

    /**
     * Display a modal
     *
     * @param scope
     * @param config
     * @return {undefined}
     */
    var modal = function(scope, config) {
      config.templateUrl = 'components/items/modal/' + config.templateUrl;

      return $modal.open(_.extend({
        resolve: {
          node: function() { return scope; }
        }
      }, config));
    };

  }];
});
