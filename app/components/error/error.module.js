'use strict';

define(function(require) {
  require('angular');

  var ErrorController = require('components/error/error.controller'),
      ErrorService = require('components/error/error.service');

  return angular.module('app.error', [])

  .controller('ErrorController', ErrorController)

  .service('ErrorService', ErrorService);
});
