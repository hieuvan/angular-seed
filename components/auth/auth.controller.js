'use strict';

define(function(require) {
  return ['AuthService', '$state', '$stateParams', '$scope',
  function(AuthService, $state, $stateParams, $scope) {
    var vm = this;

    vm.loggedOut = $stateParams.loggedout;

    vm.username = 'subash.adhikari@acer.edu.au';
    vm.password = 'Evildead2';

    vm.login = function() {
      var formdata = {
        email: vm.username,
        password: vm.password
      };

      AuthService.login(formdata).then(function(user) {
          vm.loginError = false;
          $state.go('root.projects.list');
      }, function(error) {
        vm.loginError = true;
        vm.error = error.message;
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
