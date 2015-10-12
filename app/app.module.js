'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-http');
  require('angular-page-title');
  require('angular-sanitize');
  require('ngtoast');
  require('angular-loading-bar');
  require('app-environment');

  // app components
  require('components/header/header.module');
  require('components/error/error.module');
  require('components/footer/footer.module');

  var AppRunner = require('app.runner'),
      templates = require('shared/templates'),
      Routes = require('app.routes'),
      HttpConfigProvider = require('shared/providers/http-config.provider');

  // app level module that depends on app view and components
  return angular.module('app', [
    'app.env',
    'app.header',
    'app.error',
    'app.footer',
    'angular-loading-bar',
    'ngAnimate',
    'ngToast',
    'sa.pageTitle',
    'sa.http',
    'ui.router',
    'ui.bootstrap'
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

  .run(templates)
  .run(AppRunner);
});





