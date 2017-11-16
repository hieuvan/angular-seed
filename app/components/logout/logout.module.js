'use strict';

define(function(require) {

  require('angular');

  var LogOutController = require('components/logout/logout.controller');

  return angular.module('app.logout', [])

  .controller('LogOutController', LogOutController);
});
