'use strict';

define(function(require) {

  require('angular');
  require('angular-ui-router');
  require('angular-cookies');

  var AuthController = require('components/auth/auth.controller'),
      AuthHttpService = require('components/auth/auth-http.service'),
      AuthService = require('components/auth/auth.service');

  return angular.module('app.auth', ['ui.router', 'ngCookies'])

  .service('AuthService', AuthService)
  .service('AuthHttpService', AuthHttpService)

  .controller('AuthController', AuthController);

});
