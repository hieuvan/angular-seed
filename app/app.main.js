'use strict';

define(function(require) {
  require('underscore');

  var angular = require('angular'),
      app = require('app.module'),
      config = require('shared/config/config');

  var $html = angular.element(document.getElementsByTagName('html'));

  config.defaultUrl = window.location.hash.substr(1);

  app.constant('config', config);

  angular.element().ready(function() {
    angular.bootstrap($html, ['app']);
  });
});

