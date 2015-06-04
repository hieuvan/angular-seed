'use strict';

define(function(require) {

  require('angular');
  require('angular-ui-router');

  var AuthController = require('components/auth/auth.controller');

  return angular.module('app.auth', ['ui.router'])

  .controller('AuthController', AuthController);

});
