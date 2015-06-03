'use strict';

define(function(require) {
  return ['AuthService', '$state', '$stateParams', '$scope',
  function(AuthService, $state, $stateParams, $scope) {
    var vm = this;

    vm.loggedOut = $stateParams.loggedout;
    vm.loginError = false;

    vm.login = function() {
      var formdata = {
        email: vm.username,
        password: vm.password
      };

      AuthService.authenticate(formdata).then(function(response) {
        if (response) {
          vm.loginError = false;
          AuthService.login(response);
          $state.go('projects.list');
        } else {
          vm.loginError = true;
        }
      });
    };

    vm.close = function() {
      vm.loggedOut = false;
    };

    vm.logout = function() {
      AuthService.logout();
      $state.go('login', {loggedout: true});
    };
  }];
});
