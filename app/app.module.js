'use strict';

define(function(require) {

  // vendor libraries
  require('angular-ui-router');
  require('angular-ui-bootstrap-bower');
  require('angular-ui-bootstrap-tpls-bower');
  require('angular-http');
  require('angular-httpi');
  require('angular-cookies');
  require('angular-page-title');
  require('angular-sanitize');
  require('ngtoast');
  require('angular-loading-bar');
  require('app-environment');
  require('angular-local-storage');
  require('jquery');
  require('angular-datatables');
  require('angular-datatables.bootstrap');
  require('angular-datatables.tabletools');
  require('bootstrap');

  // app components
  require('components/header/header.module');
  require('components/error/error.module');
  require('components/footer/footer.module');
  require('components/documents/documents.module');
  require('components/site-detail/site-detail.module');
  require('components/login/login.module');
  require('components/home/home.module');
  require('components/image-gallery/image-gallery.module');

  var AppRunner = require('app.runner'),
      templates = require('shared/templates'),
      Routes = require('app.routes'),
      HttpConfigProvider = require('shared/providers/http-config.provider'),
      AuthProvider = require('shared/providers/auth.provider'),
      JwtProvider = require('shared/providers/jwt.provider'),
      CryptoProvider = require('shared/providers/crypto.provider'),
      SiteService = require('shared/services/site.service'),
      GetStorageService = require('shared/services/get.storage.service');

  // app level module that depends on app view and components
  return angular.module('app', [
    'app.env',
    'app.header',
    'app.error',
    'app.footer',
    'app.site-detail',
    'app.image-gallery',
    'app.documents',
    'app.login',
    'app.home',
    'angular-loading-bar',
    'ngAnimate',
    'ngToast',
    'sa.pageTitle',
    'sa.http',
    'ui.router',
    'ui.bootstrap',
    'ngCookies',
    'LocalStorageModule',
    'datatables',
    'datatables.bootstrap'
  ])

  .config(['$httpProvider', 'cfpLoadingBarProvider', '$resourceProvider', 'localStorageServiceProvider',
    function($httpProvider, cfpLoadingBarProvider, $resourceProvider, localStorageServiceProvider) {
      $httpProvider.interceptors.push('$httpInterceptor');

      // update this to whatever is your api url
      $resourceProvider.apiUrl = 'http://localhost/ahs/web/index.php/api/v1/';
      //$resourceProvider.apiUrl = 'http://ahs.hieuvan.net/web/api.php/api/v1/';

      cfpLoadingBarProvider.includeSpinner = true;
      localStorageServiceProvider
          .setPrefix('AHS_Inspection')
          .setStorageCookie(1)
          .setStorageCookieDomain('');
  }])

  .config(Routes)

  .provider('$httpInterceptor', HttpConfigProvider)

  .provider('$Auth', AuthProvider)

  .provider('$jwt', JwtProvider)

  .provider('$crypto', CryptoProvider)

  .run(templates)

  .run(AppRunner)

  .service('sharedProperties', function () {
    var data = {};

    return {
      getProperty: function(key) {
        return data[key];
      },
      setProperty: function(key, value) {
        data[key] = value;
      }
    };
  })

  .service('SiteService', SiteService)

  .service('GetStorageService', GetStorageService)

});





