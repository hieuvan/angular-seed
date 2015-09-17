'use strict';

define(function() {
  return [function() {
    var vm = this;

    vm.code = '404';

    vm.message = 'Sorry - Page not found!';

    vm.description = 'The page you are looking for was moved, removed, renamed or might never existed.';

    vm.title = '2';

    vm.showFooter = function() {
      return true;
    };
  }];
});
