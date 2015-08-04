'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'tree', 'ProjectsService',
    function($stateParams, $modalInstance, node, tree, ProjectsService) {
    var vm = this;

    vm.itemSearchResults = false;
    vm.foundItems;

    vm.searchItem = function() {
      var formData = {
        query: vm.itemQuery,
        formId: $stateParams.formId
      };

      ProjectsService.searchItem(formData).then(function(items) {
        vm.foundItems = items;
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.addItems = function () {

      var formData = { items: getFormData() };

      ProjectsService
        .addItemToForm($stateParams.id, $stateParams.testId, $stateParams.formId, formData)
        .then(updateTree);
    };

    var updateTree = function(items) {
      _.each(items.flatten(), function(item) {
        _.isUndefined(node) ? tree.push(item) : node.$modelValue.items.push(item);
      });

      vm.foundItems.substract(items);
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
