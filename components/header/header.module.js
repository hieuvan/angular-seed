'use strict';

define(function(require) {

  require('angular');

  require('angular-utils-ui-breadcrumbs');

  var HeaderController = require('components/header/header.controller');

  return angular.module('app.header', ['angularUtils.directives.uiBreadcrumbs'])

  .config(['$stateProvider', function($stateProvider) {

  }])

  .controller('HeaderController', HeaderController);

});
