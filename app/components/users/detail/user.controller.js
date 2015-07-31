'use strict';

define(function(require) {

  return ['user',
  function(user) {
    var vm = this;

    vm.user = user;

    var projectCollection = user.get('projects');
    //console.log(projectCollection);
    //vm.projects = projectCollection.getAll();

    vm.familyName = user.get('family_name');
    vm.givenName = user.get('given_name');
    vm.email = user.get('email');
  }];
});
