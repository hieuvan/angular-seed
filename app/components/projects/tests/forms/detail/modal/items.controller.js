'use strict';

define(function(require) {

  return ['$stateParams', '$modalInstance', 'itemCollection', 'ProjectsService', function($stateParams, $modalInstance, itemCollection, ProjectsService) {
    var vm = this;

    //vm.form = form;
console.log(itemCollection);
    vm.itemSearchResults = false;
    //vm.selectedItems = [];

    vm.searchItem = function() {
      var formData = { query: vm.itemQuery };

      ProjectsService.searchItem(formData).then(function(items) {
        vm.searchItems = items.getAll();
        vm.itemSearchResults = true;
      });
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.addItems = function () {
      var selectedItems = _.where(vm.searchItems, {selected: true});

      var formData = { items: _.map(selectedItems, function(item) { return item.get('id'); }) };

      ProjectsService.addItemToForm($stateParams.id, $stateParams.testId, $stateParams.formId, formData).then(function(items) {
        console.log(items);
        //var itemCollection = form.get('items');
        itemCollection.add(items.getAll());
        //console.log(itemCollection);
        //vm.items.add(items);
      });
    };

  }];
});
