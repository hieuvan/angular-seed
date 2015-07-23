'use strict';

define(function(require) {

  return ['$state', 'user', 'UsersService',
  function($state, user, UsersService) {
    var vm = this;

    vm.user = user;

    // update the bread crumb
    $state.current.data.displayName = user.name;

  }];
});
