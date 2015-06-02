'use strict';

define(function(require) {

  require('angular');
  require('angular-ui-router');
  require('angular-cookies');

  var AuthController = require('components/auth/auth.controller'),
      AuthHttpService = require('components/auth/auth-http.service'),
      AuthService = require('components/auth/auth.service');

  return angular.module('app.auth', ['ui.router', 'ngCookies'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'components/auth/login.html',
        controller: 'AuthController as vm',
        params: {loggedout: false},
        data: {
          requireLogin: false,
          displayName: 'Login'
        }
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'components/auth/logout.html',
        controller: 'AuthController as vm',
        data: {
          requiredLogin: true,
          displayName: 'Logout'
        }
      });
  }])

  .service('AuthService', AuthService)
  .service('AuthHttpService', AuthHttpService)

  .controller('AuthController', AuthController);

});
