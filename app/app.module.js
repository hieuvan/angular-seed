'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-httpi');
  require('angular-sanitize');
  require('ngtoast');
  require('angular-loading-bar');

  // app components
  require('app-environment');
  require('components/header/header.module');
  require('components/error/error.module');
  require('components/footer/footer.module');

  var AppRunner = require('app.runner'),
      templates = require('shared/templates'),
      Routes = require('app.routes'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      ResourceProvider = require('shared/providers/resource.provider'),
      TitleDirective = require('shared/directives/title.directive');

  // app level module that depends on app view and components
  return angular.module('app', [
    'app.env',
    'ngAnimate',
    'angular-loading-bar',
    'ngToast',
    'ui.router',
    'ui.bootstrap',
    'app.header',
    'app.error',
    'app.footer',
    'httpi'
  ])

  .config(['$httpProvider', 'cfpLoadingBarProvider', '$resourceProvider',
    function($httpProvider, cfpLoadingBarProvider, $resourceProvider) {
      $httpProvider.interceptors.push('$httpInterceptor');

      // update this to whatever is your api url
      $resourceProvider.apiUrl = 'localhost:8000';

      cfpLoadingBarProvider.includeSpinner = false;
  }])

  .config(Routes)

  .provider('$httpInterceptor', HttpConfigProvider)
  .provider('$resource', ResourceProvider)

  .directive('title', TitleDirective)

  .run(templates)
  .run(AppRunner);
});





