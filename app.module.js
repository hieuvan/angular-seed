'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-debounce');
  require('angular-cookies');

  // app components
  require('components/header/header.module');
  require('components/footer/footer.module');
  require('components/auth/auth.module');
  require('components/projects/projects.module');
  require('components/users/users.module');

  var AppRunner = require('app.runner'),
      constant = require('shared/constants/constant'),
      Routes = require('app.routes.js'),
      AuthProvider = require('shared/providers/auth.provider'),
      Jwt = require('shared/providers/jwt.provider'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      HttpService = require('shared/services/http.service'),
      TitleDirective = require('shared/directives/title.directive');

  // app level module that depends on app view and components
  return angular.module('app', [
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    'app.header',
    'app.footer',
    'app.projects',
    'app.users',
    'app.auth',
    'rt.debounce'
  ])

  // TODO: add page load animation later

  .constant('constant', constant)

  .config(['$httpProvider', 'constant', '$authProvider',
    function($httpProvider, constant, $authProvider) {

      $authProvider.loginUrl = 'login';

      $httpProvider.interceptors.push('HttpConfigProvider');
      $httpProvider.defaults.withCredentials = true;
  }])

  .config(Routes)

  .service('HttpService', HttpService)

  .provider('HttpConfigProvider', HttpConfigProvider)
  .provider('$jwt', Jwt)
  .provider('$auth', AuthProvider)

  .directive('title', TitleDirective)

  .run(AppRunner);
});





