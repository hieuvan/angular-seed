'use strict';

define(function(require) {
  require('app.module');

  var angular = require('angular');

  angular.element().ready(function() {
    var $html = angular.element(document.getElementsByTagName('html'));

    angular.bootstrap($html, ['app']);
  });
});

