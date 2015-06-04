'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-debounce');

  // app components
  require('components/header/header.module');
  require('components/footer/footer.module');
  require('components/auth/auth.module');
  require('components/projects/projects.module');
  require('components/users/users.module');

  var AppRunner = require('app.runner'),
      constant = require('shared/constants/constant'),
      Routes = require('app.routes.js'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      HttpService = require('shared/services/http.service'),
      TitleDirective = require('shared/directives/title.directive');

  // app level module that depends on app view and components
  return angular.module('app', [
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

  .config(['$httpProvider', 'constant',
    function($httpProvider, constant) {

      $httpProvider.interceptors.push('HttpConfigProvider');
      $httpProvider.defaults.withCredentials = true;
  }])

  .config(Routes)

  .service('HttpService', HttpService)

  .provider('HttpConfigProvider', HttpConfigProvider)

  .directive('title', TitleDirective)

  .run(AppRunner);
});





