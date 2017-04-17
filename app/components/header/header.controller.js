'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.loggedInUser = $Auth.isAuthenticated();
    vm.logout = function() {
      var isLoggedOut = $Auth.logout();
      if (isLoggedOut) {
        $state.go('login');
      }
    };
  }];
});
