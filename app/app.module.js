'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-debounce');
  require('angular-cookies');
  require('angular-httpi');

  // app components
  require('components/header/header.module');
  require('components/footer/footer.module');
  require('components/auth/auth.module');
  require('components/projects/projects.module');
  require('components/users/users.module');
  require('components/home/home.module');

  var AppRunner = require('app.runner'),
      templates = require('shared/templates'),
      constant = require('shared/constants/constant'),
      Routes = require('app.routes.js'),
      AuthProvider = require('shared/providers/auth.provider'),
      Jwt = require('shared/providers/jwt.provider'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      ResourceProvider = require('shared/providers/resource.provider'),
      HttpService = require('shared/services/http.service'),
      SearchFilter = require('shared/filters/search.filter'),
      TitleDirective = require('shared/directives/title.directive'),
      ProjectCollection = require('shared/libs/project/project-collection'),
      FormModel = require('shared/libs/form/form-model'),
      FormCollection = require('shared/libs/form/form-collection'),
      TestModel = require('shared/libs/test/test-model'),
      UserModel = require('shared/libs/user/user-model'),
      UserCollection = require('shared/libs/user/user-collection'),
      ItemModel = require('shared/libs/item/item-model'),
      ItemCollection = require('shared/libs/item/item-collection'),
      ProjectModel = require('shared/libs/project/project-model');


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
    'app.home',
    'httpi'
  ])

  // TODO: add page load animation later

  .constant('constant', constant)

  .config(['$httpProvider', 'constant', '$authProvider', '$resourceProvider',
    function($httpProvider, constant, $authProvider, $resourceProvider) {

      $authProvider.loginUrl = 'login';

      $httpProvider.interceptors.push('HttpConfigProvider');
      $httpProvider.defaults.withCredentials = true;

      $resourceProvider.apiUrl = constant.apiUrl;
  }])

  .config(Routes)

  .service('HttpService', HttpService)

  .factory('TestModel', function() { return TestModel; })
  .factory('FormModel', function() { return FormModel; })
  .factory('FormCollection', function() { return FormCollection; })
  .factory('ProjectModel', function() { return ProjectModel; })
  .factory('ProjectCollection', function() { return ProjectCollection; })
  .factory('UserModel', function() { return UserModel; })
  .factory('UserCollection', function() { return UserCollection; })
  .factory('ItemModel', function() { return ItemModel; })
  .factory('ItemCollection', function() { return ItemCollection; })

  .provider('HttpConfigProvider', HttpConfigProvider)
  .provider('$jwt', Jwt)
  .provider('$auth', AuthProvider)
  .provider('$resource', ResourceProvider)

  .directive('title', TitleDirective)
  .filter('search', SearchFilter)

  .run(templates)
  .run(AppRunner);
});





