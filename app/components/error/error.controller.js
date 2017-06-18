'use strict';

define(function() {
  return ['$state', 'config', 'ErrorService', '$Auth', function($state, config, ErrorService, $Auth) {
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

    vm.invalidToken = (vm.code == '401');

    vm.clearToken = function() {
      $Auth.removeToken();
      $state.go('root.login', {}, { reload: true });
    };
  }];
});
