'use strict';

define(function(require) {

  require('angular');

  var LoginController = require('components/login/login.controller');

  return angular.module('app.login', [])

  .controller('LoginController', LoginController);
});
