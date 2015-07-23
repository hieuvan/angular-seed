'use strict';

define(function(require) {

  return ['UsersService', '$auth', function(UsersService, $auth) {
    var vm = this;

    UsersService.getProjects($auth.getUser().get('id')).then(function(projects) {
     vm.projects = projects;
    });

  }];
});
