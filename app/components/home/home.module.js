'use strict';

define(function(require) {
  require('angular');

  var HomeController = require('components/home/home.controller'),
      UsersService = require('components/users/users.service');

  return angular.module('app.home', [])

  .service('UsersService', UsersService)

  .controller('HomeController', HomeController);

});
