'use strict';

define(function() {
  return ['$state', 'config', 'ErrorService', function($state, config, ErrorService) {
    var vm = this, error = ErrorService.error();

    vm.siteTitle = config.siteTitle;

    /**
     * Redirect back to homepage
     * Users probably might have visited this page directly
     */
    if (!error) {
      return $state.go('root.home');
    }

    vm.code = error.code;

    vm.message = error.message;

    vm.description = error.description;
  }];
});
