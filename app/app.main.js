'use strict';

require([
  'angular',
  'app.module',
  'app.config'
], function(angular, app, config) {

  app.constant('config', config);

  angular.element().ready(function() {
    var $html = angular.element(document.getElementsByTagName('html'));

    angular.bootstrap($html, ['app']);
  });
});

