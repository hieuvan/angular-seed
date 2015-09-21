'use strict';

define(function(require) {

  require('app.module');

  var Module = require('test/shared/module');

  describe('App Module:', function() {

    var module = new Module('app');

    module.isRegistered();

    module.hasDependencies([
      'ngAnimate',
      'angular-loading-bar',
      'ngToast',
      'ui.router',
      'ui.bootstrap',
      'app.header',
      'app.error',
      'httpi'
    ]);

  });

});
