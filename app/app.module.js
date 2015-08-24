'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-debounce');
  require('angular-cookies');
  require('angular-httpi');
  require('angular-sanitize');
  require('angular-toast');

  // app components
  require('components/header/header.module');
  require('components/items/item.module');

  var AppRunner = require('app.runner'),
      templates = require('shared/templates'),
      constant = require('shared/constants/constant'),
      Routes = require('app.routes'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      ResourceProvider = require('shared/providers/resource.provider'),
      TitleDirective = require('shared/directives/title.directive'),
      FormModel = require('shared/libs/form/form-model'),
      ItemCollection = require('shared/libs/item/item-collection');


  // app level module that depends on app view and components
  return angular.module('app', [
    'ngCookies',
    'ngToast',
    'ui.router',
    'ui.bootstrap',
    'app.header',
    'app.items',
    'httpi'
  ])

  // TODO: add page load animation later

  .constant('constant', constant)

  .config(['$httpProvider', 'constant', '$resourceProvider',
    function($httpProvider, constant, $resourceProvider) {

      $httpProvider.interceptors.push('HttpConfigProvider');
      $httpProvider.defaults.withCredentials = true;

      $resourceProvider.apiUrl = constant.apiUrl;
  }])

  .config(Routes)

  .factory('ItemCollection', function() { return ItemCollection; })
  .factory('FormModel', function() { return FormModel; })

  .provider('HttpConfigProvider', HttpConfigProvider)
  .provider('$resource', ResourceProvider)

  .directive('title', TitleDirective)

  .run(templates)
  .run(AppRunner);
});





