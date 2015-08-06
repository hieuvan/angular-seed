'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'tree', 'ProjectTestFormService', 'ngToast',
    function($stateParams, $modalInstance, node, tree, ProjectTestFormService, ngToast) {
    var vm = this;

    vm.itemSearchResults = false;
    vm.foundItems;

    vm.searchItem = function() {
      var formData = {
        query: vm.itemQuery,
        formId: $stateParams.formId
      };

      ProjectTestFormService.searchItem(formData).then(function(items) {
        vm.foundItems = items;
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.addItems = function () {

      ProjectTestFormService
        .addItemToForm($stateParams.formId, getFormData())
        .then(updateTree);
    };

    var updateTree = function(items) {
      _.each(items.flatten(), function(item) {
        (!item.hasOwnProperty('items')) && (item.items = []);

        _.isUndefined(node) ? tree.push(item) : node.$modelValue.items.push(item);
      });

      vm.foundItems.substract(items);

      ngToast.success('Item added to tree.')
    };

    var getFormData = function() {
      var formdata = {};

      _.each(getSelectedItems(), function(item, index) {
        formdata[item.get('id')] = {
          parent_item_id: getParentId(),
          position: getPosition(index)
        };
      });

      return formdata;
    };

    var getSelectedItems = function() {
      return _.where(vm.foundItems.getAll(), {selected: true});
    };

    var getParentId = function() {
      return _.isUndefined(node) ? 0 : node.$modelValue.id;
    };

    var getPosition = function(index) {
      return _.isUndefined(node) ? 0 : node.depth() + index;
    };

  }];
});
