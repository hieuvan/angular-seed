'use strict';

define(function(require) {

  require('angular');
  require('angular-ui-router');
  require('angular-cookies');

  var AuthController = require('components/auth/auth.controller'),
      AuthService = require('components/auth/auth.service');

  return angular.module('app.auth', ['ui.router', 'ngCookies'])

  .service('AuthService', AuthService)

  .controller('AuthController', AuthController);

});
