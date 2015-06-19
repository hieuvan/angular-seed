'use strict';

define(function(require) {

  return ['UsersService', '$auth', function(UsersService, $auth) {
    var vm = this;

    UsersService.getUserProjects($auth.getUser().get('id')).then(function(projects) {
     vm.projects = projects;
     console.log(projects);
    });

  }];
});
