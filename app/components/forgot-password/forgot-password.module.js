'use strict';

define(function(require) {

  require('angular');

  var ForgotPasswordController = require('components/forgot-password/forgot-password.controller');

  return angular.module('app.forgot-password', [])

  .controller('ForgotPasswordController', ForgotPasswordController);
});
