'use strict';

define(function(require) {
  return ['AuthService', '$state', '$stateParams', '$scope',
  function(AuthService, $state, $stateParams, $scope) {
    var vm = this;

    vm.loggedOut = $stateParams.loggedout;

    vm.login = function() {
      var formdata = {
        email: vm.username,
        password: vm.password
      };

      AuthService.authenticate(formdata).then(function(response) {
        if (response) {
          AuthService.login(response);
          $state.go('projects.list');
        } else {
          //console.log(response);
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
