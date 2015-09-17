'use strict';

define(function(require) {
  require('angular');

  var ErrorController = require('components/error/error.controller');

  return angular.module('app.error', [])

  .controller('ErrorController', ErrorController);
});
