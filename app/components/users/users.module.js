'use strict';

define(function(require) {
  require('angular');

  var UsersController = require('components/users/list/users.controller'),
      UserController = require('components/users/detail/user.controller'),
      UserCreateController = require('components/users/create/user-create.controller'),
      UsersService = require('components/users/users.service');

  return angular.module('app.users', [])

  .service('UsersService', UsersService)

  .controller('UserController', UserController)
  .controller('UsersController', UsersController)
  .controller('UserCreateController', UserCreateController);

});


