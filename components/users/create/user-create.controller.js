'use strict';

define(function(require) {
  return ['UsersService', '$state', function(UsersService, $state) {
    var vm = this;

    vm.createUser = function() {
      var formdata = {
        email: vm.email
      };

      UsersService.createUser(formdata).then(function(user) {
        vm.createUserError = false;
        $state.go('root.users.detail', {id: user.data.id});
        }, function(error) {
          vm.createUserError = true;
          vm.error = error.message;
      });
    };
  }];
});
