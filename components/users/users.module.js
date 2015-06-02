'use strict';

define(function(require) {
  require('angular');

  var RouteConfig = require('components/users/route.config');

  return angular.module('app.users', [])

  .config(RouteConfig);
});
