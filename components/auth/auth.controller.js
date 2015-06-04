'use strict';

define(function(require) {
  return ['$auth', '$state', '$stateParams', '$scope',
  function($auth, $state, $stateParams, $scope) {
    var vm = this;

    vm.loggedOut = $stateParams.loggedout;

    vm.login = function() {
      var formdata = {
        username: vm.username,
        password: vm.password
      };

      $auth.login(formdata).then(function(user) {
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
      $auth.logout();
      $state.go('login', {loggedout: true});
    };
  }];
});
