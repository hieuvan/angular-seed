'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.loggedInUser = $Auth.isAuthenticated();
    vm.logout = function() {
      $Auth.logout().then(function(val) {

      });
      $Auth.removeToken();
      $state.go('root.login', {}, { reload: true });
    };
  }];
});
