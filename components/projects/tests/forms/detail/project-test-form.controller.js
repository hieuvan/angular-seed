'use strict';

define(function(require) {

  return ['test', 'form', '$modal', function(test, form, $modal) {
    var vm = this;

    vm.form = form;

    vm.addItemShow = function() {
      var modal = $modal.open({
        templateUrl: 'components/projects/modal/add-item.html',
        controller: 'ItemsController as vm'
      });

      /*modal.result.then(function(selected) {
        console.log(selected);
      });*/

    };



  }];
});
