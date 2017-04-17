'use strict';

define(function(require) {

  require('angular');

  var SiteDetailController = require('components/site-detail/site-detail.controller');

  return angular.module('app.site-detail', [])

  .controller('SiteDetailController', SiteDetailController);
});
