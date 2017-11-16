'use strict';

define(function(require) {

  require('angular');

  var SiteListController = require('components/site-list/site-list.controller'),
      SiteService = require('shared/services/site.service');

  return angular.module('app.site-list', [])

  .service('SiteService', SiteService)

  .controller('SiteListController', SiteListController);
});
