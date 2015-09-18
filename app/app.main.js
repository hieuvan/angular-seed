'use strict';

define(function(require) {
  require('underscore');

  var angular = require('angular'),
      app = require('app.module'),
      config = require('shared/config/config');


  app.constant('config', config);

  angular.element().ready(function() {
    var $html = angular.element(document.getElementsByTagName('html'));

    angular.bootstrap($html, ['app']);
  });
});

