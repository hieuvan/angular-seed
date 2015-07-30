'use strict';

define(function(require) {

  return ['user',
  function(user) {
    var vm = this;

    vm.user = user;

    vm.projects = user.get('projects');

    vm.familyName = user.get('family_name');
    vm.givenName = user.get('given_name');
    vm.email = user.get('email');
  }];
});
