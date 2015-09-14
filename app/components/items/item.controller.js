'use strict';

define(function(require) {
  return ['form', '$modal', '$stateParams', '$uiTree',
    function(form, $modal, $stateParams, $uiTree) {
    var vm = this;

    vm.form = form;
    vm.items = form.get('items');

    /**
     *  Tempate path for tree nodes
     */
    vm.item_renderer = 'components/items/items_renderer.html';

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
      var modalInstance = modal(scope, {
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

    vm.config = function(scope) {
      var item = scope.$modelValue;
      var config = item.getConfig().getAll()[0];

      console.log(config.getIcon());
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
      vm.items.push({
        type: 'folder',
        uid: 'New Folder'
      });
    };

    vm.preview = function() {
      console.log('previewing');
    };

    vm.save = function() {
      console.log('saving');
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
