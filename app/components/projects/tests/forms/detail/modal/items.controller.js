'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'node', 'tree', 'ProjectsService',
    function($stateParams, $modalInstance, node, tree, ProjectsService) {

    var vm = this;

    vm.itemSearchResults = false;
    vm.foundItems = [];

    vm.searchItem = function() {
      var formData = { query: vm.itemQuery };

      ProjectsService.searchItem(formData).then(function(items) {
        vm.foundItems = items.getAll();
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
      if (_.isUndefined(node)) {
        _.each(items.flatten(), function(item) {
          tree.push(item);
        });

        return;
      }
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
      return _.where(vm.foundItems, {selected: true});
    };

    var getParentId = function() {
      return _.isUndefined(node) ? 0 : node.$modalValue.id;
    };

    var getPosition = function(index) {
      return _.isUndefined(node) ? 0 : node.depth() + index;
    };

  }];
});
