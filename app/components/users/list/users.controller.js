'use strict';

define(function(require) {

  return ['users', function(users) {
    var vm = this;

    var userCollection = users;

    vm.users = userCollection.getAll();
  }];
});
