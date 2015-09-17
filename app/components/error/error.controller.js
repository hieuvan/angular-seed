'use strict';

define(function() {
  return ['$state', '$stateParams', function($state, $stateParams) {
    var vm = this, error = $stateParams.error;

    if (!error) {
      return $state.go('root.items.detail');
    }

    vm.code = error.status;

    vm.message = 'Sorry - Page not found!';

    vm.description = 'The page you are looking for was moved, removed, renamed or might never existed.';

    vm.title = '2';

    vm.showFooter = function() {
      return true;
    };
  }];
});
