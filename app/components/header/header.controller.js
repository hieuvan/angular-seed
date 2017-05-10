'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.loggedInUser = $Auth.isAuthenticated();
    vm.logout = function() {
      $Auth.logout().then(function(val) {
        if (val) {
          $state.go('login');
        }
      });
    };
  }];
});
