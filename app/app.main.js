'use strict';

define(function(require) {
  var app = require('app.module'),
      config = require('app.config'),
      angular = require('angular');

  app.constant('config', config);

  angular.element().ready(function() {
    var $html = angular.element(document.getElementsByTagName('html'));

    angular.bootstrap($html, ['app']);
  });
});

