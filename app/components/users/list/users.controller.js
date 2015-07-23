'use strict';

define(function(require) {

  return ['UsersService', function(UsersService) {
    var vm = this;

    UsersService.getUsers().then(function(users) {
     vm.users = users;
    });
  }];
});
