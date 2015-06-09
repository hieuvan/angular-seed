'use strict';

define(function(require) {
  return ['UsersService', '$state', function(UsersService, $state) {
    var vm = this;

    vm.createUser = function() {
      var formdata = {
        given_name: vm.givenName,
        family_name: vm.familyName,
        email: vm.email
      };

      UsersService.createUser(formdata).then(function(user) {
        if (_.isObject(user)) {
          var id = user.id;
          $state.go('root.users.detail', {id: user.id});
        } else {
          // TODO: show error message
        }
      });
    };
  }];
});
