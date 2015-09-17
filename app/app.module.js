'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-httpi');
  require('angular-sanitize');
  require('angular-toast');
  require('angular-loading-bar');

  // app components
  require('components/header/header.module');
  require('components/items/item.module');

  var AppRunner = require('app.runner'),
      templates = require('shared/templates'),
      constant = require('shared/constants/constant'),
      Routes = require('app.routes'),
      CapitalizeFilter = require('shared/filters/capitalize.filter'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      ResourceProvider = require('shared/providers/resource.provider'),
      TitleDirective = require('shared/directives/title.directive'),
      FormModel = require('shared/libs/form/form-model'),
      ItemModel = require('shared/libs/item/item-model'),
      ConfigFactory = require('shared/libs/config/config-factory'),
      ItemCollection = require('shared/libs/item/item-collection');


  // app level module that depends on app view and components
  return angular.module('app', [
    'ngAnimate',
    'angular-loading-bar',
    'ngToast',
    'ui.router',
    'ui.bootstrap',
    'app.header',
    'app.items',
    'httpi'
  ])

  .constant('constant', constant)

  .config(['$httpProvider', 'constant', '$resourceProvider', 'cfpLoadingBarProvider',
    function($httpProvider, constant, $resourceProvider, cfpLoadingBarProvider) {
      $httpProvider.interceptors.push('$httpInterceptor');

      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div></div>';

      $resourceProvider.type = constant.resourceType;
      $resourceProvider.apiUrl = constant.resource().url;
  }])

  .config(Routes)

  .factory('ItemCollection', function() { return ItemCollection; })
  .factory('FormModel', function() { return FormModel; })
  .factory('ItemModel', function() { return ItemModel; })
  .factory('ConfigFactory', function() { return ConfigFactory; })

  .provider('$httpInterceptor', HttpConfigProvider)
  .provider('$resource', ResourceProvider)

  .directive('title', TitleDirective)

  .filter('capitalize', CapitalizeFilter)

  .run(templates)
  .run(AppRunner);
});





