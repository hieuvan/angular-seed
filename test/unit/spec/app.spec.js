'use strict';

define(function(require) {

  require('app.module');

  var Module = require('test/shared/module');

  describe('App Module:', function() {

    var module = new Module('app');

    module.isRegistered();

    module.hasDependencies([
      'ngCookies',
      'ngToast',
      'ui.router',
      'ui.bootstrap',
      'app.header',
      'app.footer',
      'app.projects',
      'app.users',
      'app.auth',
      'app.home',
      'httpi'
    ]);

  });

});
