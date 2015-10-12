'use strict';

define(function(require) {

  require('app.module');

  var Module = require('test/shared/module');

  describe('App Module:', function() {

    var module = new Module('app');

    module.isRegistered();

    module.hasDependencies([
      'app.env',
      'app.header',
      'app.error',
      'app.footer',
      'angular-loading-bar',
      'ngAnimate',
      'ngToast',
      'sa.pageTitle',
      'sa.http',
      'ui.router',
      'ui.bootstrap'
    ]);

  });

});
